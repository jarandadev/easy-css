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
    <div className="w-full bg-purple-500/20 p-6 rounded-2xl shadow-xl">
      <h1 className="text-2xl font-bold text-purple-500 mb-2">Code Preview</h1>
      <div className="w-full min-h-64">
        {codeHTML.length > 0 ? (
          <div ref={containerRef} />
        ) : (
          <p>Add some HTML and CSS</p>
        )}
      </div>
    </div>
  )
}
