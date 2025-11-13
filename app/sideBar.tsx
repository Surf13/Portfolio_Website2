"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load saved dark mode preference
  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("darkMode", next);
      return next;
    });
  };

  return (
    <>
      <button className="menu-btn" onClick={() => setIsOpen(true)}>☰</button>

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Projects">Projects</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
            <li><Link href="/Courses">Courses</Link></li>

          </ul>
        </nav>

          <div className="dark-mode-toggle">
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      className="sr-only"
      checked={darkMode}
      onChange={toggleDarkMode}
    />
          {/* Track */}
          <div
            className={`w-11 h-6 rounded-full transition-colors duration-300
              ${darkMode ? "bg-gray-700 dark:bg-gray-700" : "bg-gray-200 dark:bg-gray-500"}`}
          ></div>
          {/* Knob */}
          <span
            className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300
              ${darkMode ? "translate-x-5" : ""}`}
          ></span>
          <span className="ml-3 text-sm text-current">Dark Mode</span>
        </label>
      </div>


      </aside>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}
