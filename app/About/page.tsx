export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto p-8 text-[var(--foreground)] bg-[var(--background)]">
      <div className="flex justify-center mb-8">
        <img
          src="/images/Meep.jpg"
          alt="Placeholder profile"
          className="rounded-full w-40 h-40 object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6 text-[var(--foreground)] text-center">
        About Me
      </h1>

      <p className="text-lg mb-4 text-[var(--foreground)]">
        I’m Kyle Simmons, a Senior Computer Engineering student at Texas A&M University, 
        graduating in <span className="italic">May 2026</span>. My studies bridge both 
        hardware and software, with a focus on software development, cloud computing, 
        and electrical engineering applications.
      </p>

 
      <hr className="border-[var(--sidebar-border)] my-12" />
</section>

  );
}
