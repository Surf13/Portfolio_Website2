"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu button (visible when sidebar is closed) */}
      <button className="menu-btn" onClick={() => setIsOpen(true)}>
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ✕
        </button>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Projects">Projects</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Overlay (click outside to close) */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}
