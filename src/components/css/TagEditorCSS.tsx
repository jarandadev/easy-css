"use client"

import { useCodeStore } from "@/state/state"
import { Icon } from "../Icon"
import { DialogCSS } from "./DialogCSS"
import { useState } from "react"

interface Props {
  inputCSS: InputCSS,
}

export const TagEditorCSS = ({ inputCSS }: Props) => {
  const { deleteInputCSS } = useCodeStore()
  const [open, setOpen] = useState(false)

  return (
    <div className=" bg-green-500 rounded-md px-2 py-1 flex gap-6 justify-between">
      <p className="font-medium">{inputCSS.element.name}</p>
      <div className="flex gap-1">
        <button onClick={() => setOpen(true)}>
          <Icon.Edit className="hover:text-background" />
        </button>
        <button onClick={() => deleteInputCSS(inputCSS)}>
          <Icon.Delete className="hover:text-background" />
        </button>
      </div>
      <DialogCSS value={inputCSS} open={open} onClose={setOpen} />
    </div>
  )
}
