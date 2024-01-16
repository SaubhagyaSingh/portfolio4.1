import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (

    <main className="w-screen h-screen relative">
      
      <div className="z-[1] flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)"}}
      >
        <div className="md:pl-16 pb-56 flex flex-col gap-8 z-[10] max-w-[800px]">
        <Image
            src="/pfp.png"
            alt="horse"
            height={265}
            width={265}
            className=" right-6 top-12 rounded-full border-4 border-white relative mr-4"
             />
        </div>
        <div className=" relative  pb-56 md:pb-20 flex flex-col gap-8 z-[10] max-w-[800px]">
          <h1 className="text-[50px] text-white font-semibold">
            Welcome to the Portfolio of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}Saubhagya Singh
            </span>
          </h1>
          <p className="text-gray-200 md:block flex-wrap">
          Hey there! I am a third-year B.Tech student at MIT-WPU Pune,deeply passionate about <br></br>software development and bringing ideas to life. I combine creativity with technical skills.<br></br> Apart from coding, I am a National-level chess player.<br></br><br></br>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 text-xl">
            The Jack of all and master of one. 🚀💻🔧
            </span>
         
          </p>
          <div className="flex-col md:flex-row hidden md:flex">
            <Link
              href="/my-skills"
              className="px-8 py-3 mr-4 group  rounded-[20px] border border-white bg-transparent hover:bg-blue-500  text-lg text-white max-w-[200px]"
            >
             My Skills
            </Link>

            <Link
              href="/my-projects"
              className=" mr-4 group relative rounded-[20px] border border-white bg-transparent hover:bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              My Projects
            </Link>

            <Link
              href="/contact-me"
              className=" group relative rounded-[20px] border border-white bg-transparent hover:bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[10] bg-white inset-0 opacity-0 group relative-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>


          <div className="absolute bottom-0 right-0 z-[10]">
            <Image
            src="/horse.png"
            alt="horse"
            height={300}
            width={300}
            className="absolute right-55 top-40"
             />
             <Image
             src="/cliff.webp"
             alt="cliff"
             width={480}
             height={480}
             />
           
          </div>

          <div className="absolute bottom-0 z-[5] w-full h-full">
          <Image src="/trees.webp" alt="trees" width={2000} height={2000}
          className="w-full h-full"/>
            
            <Image
            src="/stars.png"
            alt="horse"
            height={300}
            width={300}
            className="absolute left-0 top-10 z-[10]"
             />
          </div>

    </main>


  );
}
