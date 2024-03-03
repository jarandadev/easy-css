"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { useRef, useState } from "react"
import { Input } from "../ui/input"
import { useCodeStore } from "@/state/state"
import { ClassCSS } from "@/components/css/ClassCSS"


interface Props {
  value: InputCSS | null,
  select : ElementCSS,
  open?: boolean,
  onClose: (open: boolean) => void
}

export const DialogCSS = ({ value, open = true, onClose, select }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { addInputCSS, editInputCSS } = useCodeStore()
  
  const [tagValue, setTagValue] = useState<InputHTML | null>(null)

  if (!value) return null

  const handleAdd = () => {
    if (!inputRef.current?.value) return;
    console.log(select?.content)
    onClose(false)
    addInputCSS({ ...value, class: tagValue?.element.tag}, {name: select?.name, content: inputRef.current?.value, property: select?.property, description: select?.description, example: select?.example})
  }

  const handleEdit = () => {
    if (!inputRef.current?.value) return;
    onClose(false)
    editInputCSS({ ...value, class: tagValue?.element.tag})
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') !!!value.line ? handleAdd() : handleEdit()
    if (event.key === 'Escape') onClose(false)
  };

  let type : string

  if (select?.property.includes("color")){
    type = "color"
  }else if (select?.example.includes("px")){
    type = "number"
  } else { type = "text"}

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{select?.name}</DialogTitle>
          <DialogDescription className="[&>p>span]:font-bold">
            <span>Description: </span>{select?.description}
            <span>Code example: </span>{select?.example}
          </DialogDescription>
        </DialogHeader>
        <div>
        <Input onKeyDown={handleKeyPress} type={type} ref={inputRef} defaultValue={select?.content} />
        </div>

        <ClassCSS onSelect={setTagValue} value={tagValue}/>

        <DialogFooter className="sm:justify-start">
          {!!!value.line ? (
            <Button onClick={handleAdd} type="button">
              Add
            </Button>
          ) : (
            <Button onClick={handleEdit} type="button">
              Edit
            </Button>
          )}
          <Button onClick={() => onClose(false)} type="button" variant="secondary">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
