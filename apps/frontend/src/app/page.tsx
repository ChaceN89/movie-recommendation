import Image from "next/image";
import { greet } from "@movie-recommendation/utils";
import { HelloWorld, GreetComponent } from "@movie-recommendation/ui";



export default function Home() {


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        {/* ✅ Debug Info - REMOVE BEFORE COMMIT */}
        <div className="text-white  bg-black dark:bg-slate-700 border-2 border-white dark:border-red-500 p-4 rounded-xl">
          <p>{greet("Frontend-Utils ✅ ")}</p>

        </div>

        {/* ✅ Components from UI Package */}
        <HelloWorld />
        <GreetComponent name="Frontend User" />

        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
    </div>
  );
}
