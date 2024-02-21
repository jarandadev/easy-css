"use client"

import { useCodeStore } from "@/state/state"
import { TagEditorHTML } from "./TagEditorHTML"

export const CodeHTML = () => {
  const { codeHTML } = useCodeStore()
  const chevronColor = 'text-gray-600'
  const tagColor = 'text-blue-500'
  return (
    <div className="w-full">
      {codeHTML.length > 0 && (
        <>

          <h1 className="font-bold text-blue-500 mb-2">CODE HTML</h1>
          <div className="border-2 p-1 grid grid-cols-2 items-center">
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
      )}
    </div>
  )
}
