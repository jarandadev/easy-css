'use client'

import { EditorHTML } from "@/components/EditorHTML";
import { Preview } from "@/components/Preview";
import { SelectorHTML } from "@/components/SelectorHTML";
import { useState } from "react";

export default function Home() {

  const [codeHTML, setCodeHTML] = useState<ElementHTML[]>([]);
  const [codeCSS, setCodeCSS] = useState<string[]>([]);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full gap-10">
      <Preview codeHTML={codeHTML} codeCSS={codeCSS} />
      <div className="flex justify-center gap-6">
        <SelectorHTML onAdd={(newElement) => setCodeHTML([...codeHTML, newElement])} />
        {/* <SelectorCSS /> */}
      </div>
      <div className="flex justify-center gap-6">
        <EditorHTML codeHTML={codeHTML} />
        {/* <EditorCss /> */}
      </div>
    </div>
  );
}
