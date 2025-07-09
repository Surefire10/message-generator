export function ContentSplitter(agentMessage: string) {
  const fullstackMessage = agentMessage
    .split("### FULLSTACK APPLICATION MESSAGE")[1]
    .split("### BACKEND APPLICATION MESSAGE\n")[0];
  const backendMessage = agentMessage.split(
    "### BACKEND APPLICATION MESSAGE"
  )[1];

  return [
    { role: "Fullstack", message: fullstackMessage },
    { role: "Backend", message: backendMessage },
  ];
}
