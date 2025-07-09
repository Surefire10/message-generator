import { ContentSplitter } from "@/app/lib/content-splitter";
import { getGroqChatCompletion } from "@/app/services/groq-services";

export async function POST(request: Request) {
  //TODO: Add authentication and save responses to firebase

  try {
    const body = await request.json();
    const agentResponse = await getGroqChatCompletion(body.job_description);
    const messages = ContentSplitter(agentResponse.content || "");
    return new Response(JSON.stringify({ messages }), {
      status: 200,
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e }), {
      status: 500,
    });
  }
}
