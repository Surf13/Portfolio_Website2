import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex min-h-screen items-center justify-center font-sans p-8"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Education */}
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Education
        </h2>

        <div
          className="p-6 rounded-lg shadow-md"
          style={{ background: "var(--sidebar-bg)", color: "var(--foreground)" }}
        >
          <h3 className="text-2xl font-semibold mb-2">Texas A&M University</h3>
          <p className="italic mb-4">Expected May 2026</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Bachelor of Science in Computer Engineering</li>
            <li>Minor: Mathematics</li>
            <li>GPA: 3.43 (Cumulative)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
