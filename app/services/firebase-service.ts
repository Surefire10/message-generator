import { db } from "@/firebase/server";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export async function addAIAgentResponseDocument(agentResponse: {
  fullstackMessage: string;
  backendMessage: string;
}) {
  try {
    console.log("agentResponse is:", agentResponse);
    console.log(
      "Type of fullstackMessage:",
      typeof agentResponse.fullstackMessage
    );
    console.log("Type of backendMessage:", typeof agentResponse.backendMessage);

    await addDoc(collection(db, "generatedResponses"), {
      fullstackMessage: "test fullstack",
      backendMessage: "test backend",
      createdAt: serverTimestamp(),
    });
    const createdDoc = await addDoc(collection(db, "generatedResponses"), {
      fullstackMessage: agentResponse.fullstackMessage,
      backendMessage: agentResponse.backendMessage,
      createdAt: new Date().toISOString(),
    });
    return createdDoc.id;
  } catch (e) {
    console.error("Firestore write failed:", e);
    return e;
  }
}
