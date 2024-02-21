"use client"

import { useRef, useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import htmlTags from '@/data/htmlTags.json'
import { EditorHTMLDialog } from "./EditorHTMLDialog"

interface Props {
  onAdd: (elementHTML: ElementHTML) => void
}

export const SelectorHTML = ({ onAdd }: Props) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<CodeElement | null>(null)

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[250px] justify-between"
          >
            Select an HTML element...
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0">
          <Command>
            <CommandInput placeholder="Search element..." />
            <CommandEmpty>No element found.</CommandEmpty>
            <CommandGroup>
              {htmlTags.map((element) => (
                <CommandItem
                  key={element.tag}
                  value={element.tag}
                  onSelect={(selectValue) => {
                    setValue(htmlTags.find((element) => element.tag === selectValue) || null)
                    setOpen(false)
                  }}
                >
                  {/* TODO: ADD IMAGE */}
                  {element.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      {value && <EditorHTMLDialog value={value} open={!!value} onClose={() => setValue(null)} onAdd={onAdd} />}
    </div>

  )
}
