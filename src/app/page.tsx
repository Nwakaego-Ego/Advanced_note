"use client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Notes from "../app/components/note/notes";
export default function Home() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
