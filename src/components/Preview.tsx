import { useCodeStore } from "@/state/state";
import { useEffect, useRef } from "react";

export const Preview = () => {
  const { codeHTML } = useCodeStore()
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.innerHTML = codeHTML.map((code) => (
        `<${code.element.tag}>${code.content}</${code.element.tag}>`
      )).join('');
    }
  }, [codeHTML]);

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-pink-500 mb-2">Code Preview</h1>
      <div className="w-full min-h-32 border-2">
        <div ref={containerRef} />
      </div>
    </div>
  )
}
