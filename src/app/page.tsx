// "use client";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import Note from "../app/components/note/page";

// export default function home() {
//   const [wrongPath, setWrongPath] = useState(false);
//   const pathname = usePathname();

//   if (pathname === "/specific-path") {
//     setWrongPath(true);
//   }

//   return (
//     <main className="">
//       <Note />
//       {/* <Route path"*" element={<h1>Page not found</h1>} */}
//       {wrongPath && <h1>Page not found</h1>}
//     </main>
//   );
// }

import Note from "../app/components/note/page";

export default function home() {
  return (
    <main className="">
      <Note />
    </main>
  );
}
