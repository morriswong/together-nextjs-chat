import Together from "together-ai";

const together = new Together();

export async function POST(request: Request) {
  const { messages } = await request.json();

  const runner = together.chat.completions.stream({
    model: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
    messages,
  });

  return new Response(runner.toReadableStream());
}
