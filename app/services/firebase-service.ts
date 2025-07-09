import { db } from "@/firebase/server";
import { Message } from "../types/message";
export async function addAIAgentResponseDocument(
  agentResponse: Message[],
  userId: string
) {
  const roleMessages = agentResponse.reduce(
    (acc: Record<string, string>, curr) => {
      acc[`${curr.role}Message`] = curr.message;
      return acc;
    },
    {}
  );

  const ref = db.collection("generatedResponses");
  try {
    const createdDoc = await ref.add({
      ...roleMessages,
      createdAt: new Date().toISOString(),
      userId: userId,
    });
    return createdDoc.id;
  } catch (e) {
    console.error("Firestore write failed:", e);
    return e;
  }
}
