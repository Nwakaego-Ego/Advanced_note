"use client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "../app/components/note/notes";

export default function Home() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
