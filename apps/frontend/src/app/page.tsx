import Image from "next/image";
import { HelloWorld, GreetComponent } from "@movie-recommendation/ui";

import { getEnv, greet } from "@movie-recommendation/utils";
// import { getEnv, logDebug, greet, capitalize } from "@movie-recommendation/utils";


export default function Home() {




  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      <h1>Welcome to: {getEnv("NEXT_PUBLIC_APP_NAME", "Unknown App")}</h1>
      <h1>baseImg: {getEnv("NEXT_PUBLIC_IMAGE_BASE_URL", "Unknown App")}</h1>
      <h1>api: {getEnv("NEXT_PUBLIC_API_URL", "Unknown App")}</h1>
      <h1>table: {getEnv("AWS_DYNAMODB_TABLE", "Unknown App")}</h1>
      <h1>Log Level: {getEnv("NEXT_PUBLIC_LOG_LEVEL", "Unknown App")}</h1>
      <h1>Debug: {getEnv("NEXT_PUBLIC_ENABLE_DEBUG", "Unknown App")}</h1>
      <h1>JWT secret: {getEnv("JWT_SECRET", "Unknown App")}</h1>
      <h1>S3 bucket: {getEnv("AWS_S3_BUCKET", "Unknown App")}</h1>


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
