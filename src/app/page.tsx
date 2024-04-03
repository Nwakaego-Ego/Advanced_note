"use client";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/router";
import Note from "../app/components/note/page";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  // Assuming '/note' is the intended route, you can check if the current route is different
  // and redirect the user to the home page if it's not the correct route.
  if (router.pathname !== "/note") {
    router.push("/"); // Redirect to the home page
    return null; // Render nothing while redirecting
  }

  return (
    <main className="">
      <Note />
      <Link href="/note">Go Home</Link>
    </main>
  );
}
