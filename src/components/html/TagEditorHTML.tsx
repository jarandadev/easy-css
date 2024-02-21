"use client"

import { useCodeStore } from "@/state/state"
import { Icon } from "../Icon"
import { DialogHTML } from "./DialogHTML"
import { useState } from "react"

interface Props {
  inputHTML: InputHTML,
}

export const TagEditorHTML = ({ inputHTML }: Props) => {
  const { deleteInputHTML } = useCodeStore()
  const [open, setOpen] = useState(false)

  return (
    <div className=" bg-blue-500 rounded-md px-2 py-1 flex gap-6 justify-between">
      <p className="font-medium">{inputHTML.element.name}</p>
      <div className="flex gap-1">
        <button onClick={() => setOpen(true)}>
          <Icon.Edit className="hover:text-background" />
        </button>
        <button onClick={() => deleteInputHTML(inputHTML)}>
          <Icon.Delete className="hover:text-background" />
        </button>
      </div>
      <DialogHTML value={inputHTML} open={open} onClose={setOpen} />
    </div>
  )
}
