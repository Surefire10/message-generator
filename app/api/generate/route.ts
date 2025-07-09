import { ContentSplitter } from "@/app/lib/content-splitter";
import { addAIAgentResponseDocument } from "@/app/services/firebase-service";
import { getGroqChatCompletion } from "@/app/services/groq-services";
import { Message } from "@/app/types/message";
import { auth } from "@/firebase/server";

export async function POST(request: Request) {
  //TODO: Add authentication and save responses to firebase

  const body = await request.json();
  const authHeader = request.headers.get("authorization") || "";
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new Response("Unauthorized", { status: 401 });
  }
  const token = authHeader.split("Bearer").pop() || "";
  const decoded = await auth.verifyIdToken(token);
  const uid = decoded.uid;

  try {
    const agentResponse = await getGroqChatCompletion(body.job_description);
    const messages = ContentSplitter(agentResponse.content || "") as Message[];
    const persistedDocId = await addAIAgentResponseDocument(messages, uid);
    return new Response(JSON.stringify({ messages, persistedDocId }), {
      status: 200,
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e }), {
      status: 500,
    });
  }
}
