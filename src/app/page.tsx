// "use client";
// import Note from "../app/components/note/page";
// import { useRouter } from "next/router";

// export default function Home() {
//   const router = useRouter();

//   const navigateToHome = () => {
//     router.push("/");
//   };

//   return (
//     <main className="">
//       <Note />
//       <button onClick={navigateToHome}>Go Home</button>
//     </main>
//   );
// }

"use client";
import React, { useEffect } from "react";
import Note from "../app/components/note/page";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <div>
      <Note />
    </div>
  );
}
