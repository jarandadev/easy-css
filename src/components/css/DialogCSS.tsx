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
  open?: boolean,
  onClose: (open: boolean) => void
}

export const DialogCSS = ({ value, open = true, onClose }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { addInputCSS, editInputCSS } = useCodeStore()
  
  const [tagValue, setTagValue] = useState<InputHTML | null>(null)

  if (!value) return null

  const handleAdd = () => {
    if (!inputRef.current?.value) return;
    onClose(false)
    addInputCSS({ ...value, content: inputRef.current.value, class: tagValue?.element.tag })
  }

  const handleEdit = () => {
    if (!inputRef.current?.value) return;
    onClose(false)
    editInputCSS({ ...value, content: inputRef.current.value, class: tagValue?.element.tag })
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') !!!value.line ? handleAdd() : handleEdit()
    if (event.key === 'Escape') onClose(false)
  };

 

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{value.element.name}</DialogTitle>
          <DialogDescription className="[&>p>span]:font-bold">
            <span>Description: </span>{value.element.description}
            <span>Code example: </span>{value.element.example}
          </DialogDescription>
        </DialogHeader>
        <div>
          <Input onKeyDown={handleKeyPress} type="color" ref={inputRef} defaultValue={value.content} />
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
