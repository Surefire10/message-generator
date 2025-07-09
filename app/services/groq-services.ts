import Groq from "groq-sdk";
const groq = new Groq({ apiKey: process.env.groqApikey });

export async function getGroqChatCompletion(jobDesc: string) {
  const prompt = `You’re an AI assistant helping me apply to jobs as a developer.
I’m a fullstack developer (also applying to backend roles) with experience in React,Next.js,NestJS REST API, GraphQL,  Tailwind, TypeScript, Firebase ,Git & GitHub, MySQL, and AI tools like ChatGPT.

I’ll give you a job description. Based on it, generate two versions of a job application message:

### FULLSTACK APPLICATION MESSAGE

Tailor this version for a fullstack role

Emphasize frontend + backend skill balance

Keep it concise, conversational, and professional — like a message I’d send on LinkedIn or by email

### BACKEND APPLICATION MESSAGE

Tailor this version for a backend-focused role

Emphasize backend skills and architectural understanding

Same tone: brief, direct, friendly

Ensure each version stands on its own.
Don't repeat the job description — just respond with those two sections.
Here's the job description: ${jobDesc}
`;
  const agentResponse = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "llama-3.3-70b-versatile",
  });

  return agentResponse.choices[0].message;
}
