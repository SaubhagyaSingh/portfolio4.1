import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative bg-cover bg-center" style={{ backgroundImage: "url(/main-bg.webp)" }}>
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full relative z-10 px-4 md:px-16">
        {/* Profile Section */}
        <div className="flex flex-col items-center md:items-start md:mr-12 mb-8 md:mb-0">
          <Image
            src="/pfp.webp"
            alt="Profile Picture"
            height={250}
            width={250}
            className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full border-4 border-white"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-[800px]">
          <h1 className="text-[24px] md:text-[50px] text-white font-semibold leading-tight">
            Welcome to the Portfolio of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Saubhagya Singh
            </span>
          </h1>
          <p className="mt-4 text-gray-200 text-[14px] md:text-[18px] leading-relaxed z-1000">
            Hey there! I am a Fourth-year B.Tech student at MIT-WPU Pune
            deeply passionate about software development
            and bringing ideas to life. I combine creativity with technical skills. Apart from coding, I am a
            National-level chess player.
          </p>
          <p className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 text-[16px] md:text-xl font-medium">
            Jack of all trades and the master of one. 🚀💻🔧
          </p>

          {/* Links Section */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            {[{ href: "/my-skills", label: "Skills" },
              { href: "/my-projects", label: "Projects" },
              { href: "/experience", label: "Experience" },
              { href: "/app-dev", label: "App Dev" }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm md:text-base px-6 py-2 border border-white rounded-full text-white hover:bg-purple-800 transition"
              >
                {link.label}
              </Link>
            ))}

            {/* Download Resume Button */}
            <a
              href="/resume.pdf"  // Link to the resume file
              download
              className="text-sm md:text-base px-6 py-2 border border-white rounded-full text-white hover:bg-purple-800 transition mt-4 md:mt-0"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-0">
        <Image src="/trees.webp" alt="Trees Background" width={2000} height={2000} className="w-full h-auto" />
      </div>

      <div className="absolute bottom-0 right-0 z-10 hidden md:block">
        <Image src="/cliff.webp" alt="Cliff" width={280} height={480} />
      </div>

      {/* Stars */}
      <div className="absolute top-10 left-0 z-[5] hidden md:block">
        <Image src="/stars.png" alt="Stars" height={300} width={300} />
      </div>
    </main>
  );
}
