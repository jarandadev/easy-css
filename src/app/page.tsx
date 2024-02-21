'use client'

import { CodeHTML } from "@/components/html/CodeHTML";
import { Preview } from "@/components/Preview";
import { SelectorHTML } from "@/components/html/SelectorHTML";

export default function Home() {

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-6xl w-full gap-10">
        <Preview />
        <div className="grid grid-cols-2 gap-4 [&>div]:space-y-4">
          <div>
            <SelectorHTML />
            <CodeHTML />
          </div>
          <div>
            {/* <SelectorCSS />
            <CodeCSS /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
