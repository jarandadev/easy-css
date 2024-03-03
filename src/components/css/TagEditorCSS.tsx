"use client"

import { useCodeStore } from "@/state/state"
import { Icon } from "../Icon"
import { DialogCSS } from "./DialogCSS"
import { useState } from "react"

interface Props {
  elementCSS: ElementCSS,
}

export const TagEditorCSS = ({ elementCSS }: Props) => {
  const { deleteInputCSS } = useCodeStore()
  const [open, setOpen] = useState(false)

  return (
    <div className=" bg-green-500 rounded-md px-2 py-1 flex gap-6 justify-between">
      <p className="font-medium">{elementCSS.name}</p>
      <div className="flex gap-1">
        <button onClick={() => setOpen(true)}>
          <Icon.Edit className="hover:text-background" />
        </button>
        <button onClick={() => deleteInputCSS(elementCSS)}>
          <Icon.Delete className="hover:text-background" />
        </button>
      </div>
      <DialogCSS value={elementCSS} open={open} onClose={setOpen} />
    </div>
  )
}
