"use client";

import { Send } from "lucide-react";
import { DisplayArea } from "./display-area";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { useState } from "react";
import { Message } from "@/app/types/message";

export function EmailGenerator() {
  const [jobDesc, setJobDesc] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentContent, setCurrentContent] = useState<Message[]>([]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (jobDesc.trim()) {
        handleGenerate();
      }
    }
  }

  async function handleGenerate() {
    try {
      setIsLoading(true);
      const response = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({
          job_description: jobDesc,
        }),
      });
      setJobDesc("");

      const result = await response.json();
      setCurrentContent(result.messages);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col md:justify-center h-screen max-h-screen md:pb-4 md:px-5  gap-2  ">
      <DisplayArea messages={currentContent} isLoading={isLoading} />
      <div className="flex items-center w-full h-2/10  md:h-1/4">
        <Textarea
          className="h-full rounded-l-none rounded-bl-none border-r-0 py-4"
          placeholder="Paste job description here..."
          value={jobDesc}
          onChange={(e) => {
            setJobDesc(e.target.value);
          }}
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
        />
        <Button
          className="h-full rounded-l-none rounded-bl-none border-l-0"
          variant={"outline"}
          onClick={() => {
            handleGenerate();
          }}
        >
          <Send size={15} className="rotate-45" />
        </Button>
      </div>
      {/* <Options /> */}
    </div>
  );
}

//  <div className="flex flex-row h-full">
//         <div className="flex flex-col  overflow-y-auto overflow-x-hidden h-[500px] border-r">
//           <div className="flex border-b h-fit w-full mr-5 justify-between items-center py-2">
//             <button
//               className="mx-2"
//               // disabled={isPending}
//               onClick={() => {
//                 handleGenerate();
//               }}
//             >
//               {/* {isPending ? (
//                 <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//               ) : (
//                 <RiAiGenerate className="mr-2" />
//               )}{" "} */}
//             </button>
//           </div>
//           <div className=" overflow-y-auto overflow-x-hidden">
//             {/* <ul className="flex flex-col gap-3 items-center justify-center mt-3">
//               {generatedPosts.data?.data.length > 0 ? (
//                 generatedPosts.data?.data.map((item: any) => {
//                   return (
//                     <li
//                       className={cn(
//                         "w-full py-1 rounded-sm max-w-[90%] line-clamp-1 hover:bg-white/20 hover:cursor-pointer",
//                         currentPost &&
//                         currentPost.id === item.id &&
//                         "bg-white/20 ",
//                       )}
//                       key={item.id}
//                       onClick={() => {
//                         SetCurrentPost(item);
//                       }}
//                     >
//                       {item.content}
//                     </li>
//                   );
//                 })
//               ) : (
//                 <li className="mt-2">No generated posts yet.</li>
//               )}
//             </ul> */}
//             {/* {generatedPosts.isLoading && (
//               <div className="flex flex-col gap-2">
//                 <Skeleton className="w-full h-20" />
//                 <Skeleton className="w-full h-20" />
//                 <Skeleton className="w-full h-20" />
//               </div>
//             )} */}
//           </div>
//         </div>
//         {/* <div className="flex flex-col basis-[70%] px-2">
//           {!currentPost && generatedPosts.data && (
//             <TweetOverview
//               currentKOL={projectAsKOL}
//               currentTweet={generatedPosts.data.data[0]}
//               canView={false}
//             ></TweetOverview>
//           )}
//           {currentPost && (
//             <TweetOverview
//               currentKOL={projectAsKOL}
//               currentTweet={currentPost}
//               canView={false}
//             ></TweetOverview>
//           )}
//           {currentPost && currentPost.content !== "" ? (
//             <ShareOnX content={currentPost.content} />
//           ) : (
//             <div className="relative flex justify-center -top-1/2 left-0 w-full">
//               <h2>
//                 Pick a post from your list or generate a new one to get started!
//               </h2>
//             </div>
//           )}

//           {generatedPosts.isLoading && <Skeleton className="w-full h-40" />}
//         </div> */}
//       </div>
