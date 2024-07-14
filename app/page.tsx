import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex flex-col  md:flex-row z-[1] md:flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)"}}
      >
        <div className="mt-16 mb-4 md:pl-28 md:mt-24 md:mb-64  md:flex md:flex-col md:gap-8 md:z-[10] md:max-w-[800px]">
          <Image
            src="/pfp.png"
            alt="pfp"
            height={265}
            width={265}
            className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] md:visible  md:right-16 md:top-0 rounded-full border-4 border-white md:relative md:mr-4"
          />
        </div>
        <div className="justify-center items-center align-center relative pb-56 md:pb-20 flex flex-col gap-8 md:z-[10] max-w-[800px]">
          <h1 className="ml-2 items-center text-[20px] md:text-[50px] text-white font-semibold">
            Welcome to the Portfolio of<br></br>
            <span className="ml-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}Saubhagya Singh
            </span>
          </h1>
          <p className="z-[1] text-[14px] pl-2 pr-2 md:text-center text-center text-gray-200 md:block flex-wrap">
            Hey there! I am a Fourth-year B.Tech student at MIT-WPU Pune, deeply passionate about
            <br></br>software development and bringing ideas to life. I combine creativity with technical skills.
            <br></br> Apart from coding, I am a National-level chess player.
            <br></br><br></br>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 md:text-xl">
              Jack of all and master of one. 🚀💻🔧
            </span>
          </p>
          <div className="z-[2] flex-col md:flex-row md:flex mb-4">
            <Link
              href="/my-skills"
              className=" text-[10px] md:text-[16px] p-2 md:p-0 md:px-8 md:py-3 md:mr-4 group rounded-[20px] border border-white bg-transparent hover:bg-blue-500 text-lg text-white md:max-w-[200px]"
            >
              My Skills
            </Link>

            <Link
              href="/my-projects"
              className=" text-[13px] md:text-[16px] p-2 m-2 md:p-0 md:m-0 md:mr-4 group relative rounded-[20px] border border-white bg-transparent hover:bg-blue-500 md:px-5 md:py-3 text-lg text-white max-w-[200px]"
            >
              My Projects
            </Link>

            <Link
              href="/contact-me"
              className="text-[13px] md:text-[16px] md:p-0  p-2 group relative rounded-[20px] border border-white bg-transparent hover:bg-blue-500 md:px-5 md:py-3 text-lg text-white md:max-w-[200px]"
            >
              <div className="absolute md:rounded-[20px] md:z-[10] bg-white inset-0 opacity-0 group relative-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute  md:bottom-0 md:right-0 md:z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute md:right-55 md:top-40"
        />
        <Image
          src="/cliff.webp"
          alt="cliff"
          width={480}
          height={480}
          className="invisible md:visible"
        />
      </div>

      <div className="absolute bottom-0 md:z-[5] w-full h-full">
        <Image src="/trees.webp" alt="trees" width={2000} height={2000} className="w-full h-full" />
        <Image
          src="/stars.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute left-0 md:top-10 md:z-[10]"
        />
      </div>
    </main>
  );
}
