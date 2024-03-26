"use client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "../app/components/note/notes";
import { Navigate } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
