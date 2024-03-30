"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function CatchAllPage() {
  const router = useRouter();

  // Redirect to the home page
  useEffect(() => {
    router.push("/");
  }, []);

  return null; // You can return null or any other content you want to render on this page
}
