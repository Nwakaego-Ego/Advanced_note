// // "use client";
// // import Note from "../app/components/note/page";
// // import { useRouter } from "next/router";

// // export default function Home() {
// //   const router = useRouter();

// //   const navigateToHome = () => {
// //     router.push("/");
// //   };

// //   return (
// //     <main className="">
// //       <Note />
// //       <button onClick={navigateToHome}>Go Home</button>
// //     </main>
// //   );
// // }

// "use client";
// import React, { useEffect } from "react";
// import Note from "../app/components/note/page";
// import { useRouter } from "next/navigation";

// export default function page() {
//   const router = useRouter();

//   // useEffect(() => {
//   //   router.push("/");
//   // }, []);

//   useEffect(() => {
//     // Redirect to the homepage if the route doesn't exist
//     if (!router.isReady) return; // Wait until the router is ready
//     if (!router.query.slug) {
//       router.push("/");
//     }
//   }, [router.isReady, router.query.slug]);

//   return (
//     <div>
//       <Note />
//     </div>
//   );
// }

"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function CatchAllPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage if the route doesn't exist
    if (!router.isReady) return; // Wait until the router is ready
    if (!router.query.slug) {
      router.push("/");
    }
  }, [router.isReady, router.query.slug]);

  return (
    <div>
      {/* Add your content here */}
      This is the CatchAllPage.
    </div>
  );
}
