type CompletionMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

type AiProvider = "fireworks" | "deepseek" | "openai";

type AiConfig = {
  provider: AiProvider;
  apiKey: string;
  baseUrl: string;
  model: string;
};

const FIREWORKS_BASE_URL = "https://api.fireworks.ai/inference/v1";
const FIREWORKS_DEFAULT_MODEL = "accounts/fireworks/models/deepseek-v4-pro";

function configFor(provider: AiProvider): AiConfig | null {
  if (provider === "fireworks") {
    const apiKey = process.env.FIREWORKS_API_KEY;
    if (!apiKey) return null;
    return {
      provider,
      apiKey,
      baseUrl: process.env.AI_BASE_URL ?? FIREWORKS_BASE_URL,
      model: process.env.AI_MODEL ?? FIREWORKS_DEFAULT_MODEL,
    };
  }

  if (provider === "deepseek") {
    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) return null;
    return {
      provider,
      apiKey,
      baseUrl: process.env.AI_BASE_URL ?? "https://api.deepseek.com",
      model: process.env.AI_MODEL ?? "deepseek-chat",
    };
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  return {
    provider: "openai",
    apiKey,
    baseUrl: process.env.AI_BASE_URL ?? "https://api.openai.com/v1",
    model: process.env.AI_MODEL ?? "gpt-4o-mini",
  };
}

function resolvePrimaryProvider(): AiProvider {
  const requested = process.env.AI_PROVIDER?.trim().toLowerCase();

  if (
    requested === "fireworks" ||
    requested === "deepseek" ||
    requested === "openai"
  ) {
    return requested;
  }

  if (process.env.FIREWORKS_API_KEY) return "fireworks";
  if (process.env.DEEPSEEK_API_KEY) return "deepseek";
  return "openai";
}

function getAiConfig(): AiConfig {
  const primary = configFor(resolvePrimaryProvider());
  if (primary) return primary;

  const fallbackOrder: AiProvider[] = ["fireworks", "deepseek", "openai"];
  for (const provider of fallbackOrder) {
    const config = configFor(provider);
    if (config) return config;
  }

  throw new Error(
    "Missing AI API key. Set FIREWORKS_API_KEY, DEEPSEEK_API_KEY, or OPENAI_API_KEY",
  );
}

function getFallbackConfig(primary: AiProvider): AiConfig | null {
  const order: AiProvider[] = ["fireworks", "deepseek", "openai"].filter(
    (provider) => provider !== primary,
  ) as AiProvider[];

  for (const provider of order) {
    // Fallbacks should use that provider's own defaults, not AI_BASE_URL/AI_MODEL
    // which may be tuned for the primary provider.
    if (provider === "fireworks" && process.env.FIREWORKS_API_KEY) {
      return {
        provider,
        apiKey: process.env.FIREWORKS_API_KEY,
        baseUrl: FIREWORKS_BASE_URL,
        model: FIREWORKS_DEFAULT_MODEL,
      };
    }
    if (provider === "deepseek" && process.env.DEEPSEEK_API_KEY) {
      return {
        provider,
        apiKey: process.env.DEEPSEEK_API_KEY,
        baseUrl: "https://api.deepseek.com",
        model: "deepseek-chat",
      };
    }
    if (provider === "openai" && process.env.OPENAI_API_KEY) {
      return {
        provider,
        apiKey: process.env.OPENAI_API_KEY,
        baseUrl: "https://api.openai.com/v1",
        model: "gpt-4o-mini",
      };
    }
  }

  return null;
}

async function completeWithConfig(
  config: AiConfig,
  messages: CompletionMessage[],
): Promise<string> {
  const response = await fetch(`${config.baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `AI request failed (${config.provider}, ${response.status}): ${errorBody}`,
    );
  }

  const data = (await response.json()) as {
    choices?: { message?: { content?: string | null } }[];
  };

  const content = data.choices?.[0]?.message?.content?.trim();

  if (!content) {
    throw new Error(`AI returned an empty response (${config.provider})`);
  }

  return content;
}

export async function createChatCompletion(
  messages: CompletionMessage[],
): Promise<string> {
  const primary = getAiConfig();

  try {
    return await completeWithConfig(primary, messages);
  } catch (error) {
    const fallback = getFallbackConfig(primary.provider);
    if (!fallback) throw error;

    console.error(
      `[chat] ${primary.provider} failed, falling back to ${fallback.provider}`,
      error,
    );
    return await completeWithConfig(fallback, messages);
  }
}
