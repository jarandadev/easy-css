"use client"

import { useCodeStore } from "@/state/state"
import { TagEditorCSS } from "./TagEditorCSS"

export const CodeCSS = () => {
  const { codeCSS } = useCodeStore()
  const chevronColor = 'text-gray-600'
  const tagColor = 'text-green-500'


  return (
    <div className="w-full bg-green-500/30 p-6 rounded-2xl shadow-xl">
      <h1 className="font-bold text-green-500 mb-2">CSS</h1>
      {codeCSS.length > 0 ? (
        <>
          <div className="grid grid-cols-2 items-center">
            {codeCSS.map((inputCSS) => (
              <>
                <p>
                  <span className={tagColor}>{inputCSS.class}</span>
                  <span className={chevronColor}>{' {'}</span>
                </p>
                <p></p>
                {inputCSS.elements.map((element) => (
                  <>
                    <p>
                      <span className={tagColor}>{element.property}</span>
                      <span className={chevronColor}> {': '}</span>
                      <span>{element.content}</span>
                      <span className={chevronColor}>,</span>
                    </p>
                    <p></p>
                    {/* <p>
                      <TagEditorCSS elementCSS={element} />
                    </p> */}
                  </>
                ))}
                <p>
                  <span className={chevronColor}>{'} '}</span>
                </p>
                <p></p>
                
              </>
            ))}
          </div>
        </>
      ): (
        <p>Add some CSS elements</p>
      )}
    </div>
  )
}
