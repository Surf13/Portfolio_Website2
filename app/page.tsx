import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">

      {/* Education */}
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Education</h2>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800">Texas A&M University</h3>
          <p className="italic text-gray-600 mb-4">Expected May 2026</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Bachelor of Science in Computer Engineering</li>
            <li>Minor: Mathematics</li>
            <li>GPA: 3.43 (Cumulative)</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
