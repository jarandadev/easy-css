import { useCodeStore } from "@/state/state";
import { useEffect, useRef } from "react";

export const Preview = () => {
  const { codeHTML, codeCSS } = useCodeStore()
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;

      // Clear previous content and styles
      container.innerHTML = '';
      
      // Create new elements with filtered HTML and apply CSS styles
      codeHTML.forEach(html => {
        const element = document.createElement(html.element.tag);
        element.innerHTML = html.content;
        container.appendChild(element);

        const matchingCSS = codeCSS.filter(css => css.class === html.element.tag);
        matchingCSS.forEach(css => {
          if (element instanceof HTMLElement) {
            (element.style as any)[css.element.property] = css.content;
          }
        });
      });
    }
  }, [codeHTML, codeCSS]);

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
