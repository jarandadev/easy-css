import { useEffect, useRef } from "react";

interface Props {
  codeHTML: ElementHTML[]
  codeCSS: string[]
}

export const Preview = ({ codeHTML }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.innerHTML = codeHTML.map((code) => (
        `<${code.codeElement.tag}>${code.content}</${code.codeElement.tag}>`
      )).join('');
    }
  }, [codeHTML]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-pink-500">Code Preview</h1>
      <div className="w-72 min-h-32 border-2 mt-4 rounded-xl">
        <div ref={containerRef} />
      </div>
    </div>
  )
}
