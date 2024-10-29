import Together from "together-ai";

const together = new Together();

export async function POST(request: Request) {
  const { question } = await request.json();

  const runner = together.chat.completions.stream({
    model: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
    messages: [{ role: "user", content: question }],
  });

  return new Response(runner.toReadableStream());
}
