import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import htmlTags from '@/data/htmlTags.json'
import { useRef } from "react"
import { Input } from "./ui/input"


interface Props {
  value: CodeElement,
  open: boolean,
  onClose: (open: boolean) => void
  onAdd: (elementHTML: ElementHTML) => void
}


export const EditorHTMLDialog = ({ value, open, onAdd, onClose }: Props) => {
  const tagContent = useRef<HTMLInputElement>(null)
  
  const handleAdd = () => {
    // TODO: maybe add error message when try to add an empty element
    if (tagContent.current?.value) {
      onClose(false)
      onAdd({codeElement: value, content: tagContent.current.value})
    }
  }

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{value.name}</DialogTitle>
          <DialogDescription>
            {value.description}
            {value.example}
          </DialogDescription>
        </DialogHeader>
        <div>
          <Input ref={tagContent} />
        </div>
        <DialogFooter className="sm:justify-start">
          <Button onClick={handleAdd} type="button" variant="secondary">
            Add
          </Button>
          <Button onClick={() => onClose(false)} type="button" variant="secondary">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
