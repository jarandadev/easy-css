"use client"

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

import { useState } from "react"
import { ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import cssTags from '@/data/cssTags.json'
import { DialogCSS } from "./DialogCSS"

export const SelectorCSS = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<ElementCSS | null>(null)
  const inputCSS = {element: value, content: ''} as InputCSS

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
            Select a CSS element...
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0">
          <Command>
            <CommandInput placeholder="Search element..." />
            <CommandEmpty>No element found.</CommandEmpty>
            <CommandGroup>
              {cssTags.map((element) => (
                <CommandItem
                  key={element.property}
                  value={element.name}
                  onSelect={(selectValue) => {
                    setValue(cssTags.find((element) => element.name.toLowerCase() === selectValue) || null)
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
      {value && <DialogCSS value={inputCSS} onClose={() => setValue(null)} />}
      
    </div>

  )
}