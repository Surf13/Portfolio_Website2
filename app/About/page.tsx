export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto p-8">

      {/* Placeholder Image */}
      <div className="flex justify-center mb-8">
        <img
          src="/images/Meep.jpg"
          alt="Placeholder profile"
          className="rounded-full w-40 h-40 object-cover"
        />
      </div>

      {/* About Me */}
      <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">About Me</h1>

      <p className="text-lg mb-4 text-gray-700">
        I’m Kyle Simmons, a Senior Computer Engineering student at Texas A&M University, 
        graduating in <span className="italic">May 2026</span>. My studies bridge both 
        hardware and software, with a focus on software development, cloud computing, 
        and electrical engineering applications.
      </p>

      <p className="text-lg mb-4 text-gray-700">
        I frequently work with C++ and JavaScript, applying these skills to hands-on projects. 
        Some recent work includes:
      </p>

      <p className="text-lg mb-4 text-gray-700">
        I’m also preparing for the FE Exam while exploring areas such as machine learning 
        and cloud security.
      </p>

      <p className="text-lg mb-10 text-gray-700">
        I am seeking full-time opportunities starting in 2026 in electrical engineering, 
        software development, or cloud security, where I can contribute my technical skills 
        and passion for solving complex problems.
      </p>

      {/* Divider */}
      <hr className="border-gray-300 my-12" />

     
    </section>
  );
}
