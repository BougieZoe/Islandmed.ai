type CompletionMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

function getAiConfig() {
  const deepseekKey = process.env.DEEPSEEK_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;
  const apiKey = deepseekKey ?? openaiKey;

  if (!apiKey) {
    throw new Error("Missing DEEPSEEK_API_KEY or OPENAI_API_KEY");
  }

  const baseUrl =
    process.env.AI_BASE_URL ??
    (deepseekKey
      ? "https://api.deepseek.com"
      : "https://api.openai.com/v1");

  const model =
    process.env.AI_MODEL ?? (deepseekKey ? "deepseek-chat" : "gpt-4o-mini");

  return { apiKey, baseUrl, model };
}

export async function createChatCompletion(
  messages: CompletionMessage[],
): Promise<string> {
  const { apiKey, baseUrl, model } = getAiConfig();

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`AI request failed (${response.status}): ${errorBody}`);
  }

  const data = (await response.json()) as {
    choices?: { message?: { content?: string | null } }[];
  };

  const content = data.choices?.[0]?.message?.content?.trim();

  if (!content) {
    throw new Error("AI returned an empty response");
  }

  return content;
}
