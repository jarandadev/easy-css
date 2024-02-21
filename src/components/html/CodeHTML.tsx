"use client"

import { useCodeStore } from "@/state/state"
import { TagEditorHTML } from "./TagEditorHTML"

export const CodeHTML = () => {
  const { codeHTML } = useCodeStore()
  const chevronColor = 'text-gray-600'
  const tagColor = 'text-blue-500'
  return (
    <div className="w-full bg-blue-500/30 p-6 rounded-2xl shadow-xl">
      <h1 className="font-bold text-blue-500 mb-2">HTML</h1>
      {codeHTML.length > 0 ? (
        <>
          <div className="grid grid-cols-2 items-center">
            {codeHTML.map((inputHTML) => (
              <>
                <p>
                  <span className={chevronColor}>{'<'}</span>
                  <span className={tagColor}>{inputHTML.element.tag}</span>
                  <span className={chevronColor}>{'>'}</span>
                  {inputHTML.content}
                  <span className={chevronColor}>{'</'}</span>
                  <span className={tagColor}>{inputHTML.element.tag}</span>
                  <span className={chevronColor}>{'>'}</span>
                </p>
                <TagEditorHTML inputHTML={inputHTML} />
              </>
            ))}
          </div>
        </>
      ): (
        <p>Add some HTML elements</p>
      )}
    </div>
  )
}
