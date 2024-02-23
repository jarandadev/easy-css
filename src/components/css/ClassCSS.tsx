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
import { useCodeStore } from "@/state/state";

interface Props{
  value: InputHTML | null 
  onSelect: (inputHTML: InputHTML | null) => void
}

export const ClassCSS = ({onSelect, value} : Props) => {
    const { codeHTML } = useCodeStore()

    return (
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className="w-[250px] justify-between"
              >
              {value ? value.element.tag : "Select an HTML class, id or element..."}
                
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] p-0">
              <Command>
                <CommandInput placeholder="Search element..." />
                <CommandEmpty>No element found.</CommandEmpty>
                <CommandGroup heading="Elements">
                  {codeHTML.map((element, i) => (
                    <CommandItem
                      key={i}
                      value={element.element.tag}
                      onSelect={(selectValue) => {
                        onSelect(codeHTML.find((element) => element.element.tag.toLowerCase() === selectValue) || null)
                      }}
                    >
                      {/* TODO: ADD IMAGE */}
                      {element.element.tag}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
    )
}