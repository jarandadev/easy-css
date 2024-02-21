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
import { useRef } from "react"
import { Input } from "../ui/input"
import { useCodeStore } from "@/state/state"


interface Props {
  value: InputHTML | null,
  open?: boolean,
  onClose: (open: boolean) => void
}

export const DialogHTML = ({ value, open = true, onClose }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { addInputHTML, editInputHTML } = useCodeStore()

  if (!value) return null

  const handleAdd = () => {
    if (!inputRef.current?.value) return;
    onClose(false)
    addInputHTML({ ...value, content: inputRef.current.value })
  }

  const handleEdit = () => {
    if (!inputRef.current?.value) return;
    onClose(false)
    editInputHTML({ ...value, content: inputRef.current.value })
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
            <p><span>Description: </span>{value.element.description}</p>
            <p><span>Code example: </span>{value.element.example}</p>
          </DialogDescription>
        </DialogHeader>
        <div>
          <Input onKeyDown={handleKeyPress} ref={inputRef} defaultValue={value.content} />
        </div>
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
