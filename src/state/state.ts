import { create } from 'zustand'

interface CodeStore {
  codeHTML: InputHTML[]
  addInputHTML: (element: InputHTML) => void
  editInputHTML: (element: InputHTML) => void
  deleteInputHTML: (element: InputHTML) => void
  codeCSS: InputCSS[]
  addInputCSS: (element: InputCSS) => void
  editInputCSS: (element: InputCSS) => void
  deleteInputCSS: (element: InputCSS) => void
}

export const useCodeStore = create<CodeStore>((set) => ({
  codeHTML: [],

  addInputHTML: (element) => (
    set((state) => {
      const maxLine = state.codeHTML.reduce((acc, el) => el.line ? el.line > acc ? el.line : acc : acc, 0)

      return { codeHTML: [...state.codeHTML, { ...element, line: maxLine + 1 }] }
    })
  ),

  editInputHTML: (element) => (
    set((state) => (
      { codeHTML: state.codeHTML.map((el) => el.line === element.line ? element : el) }
    ))
  ),

  deleteInputHTML: (element) => (
    set((state) => (
      { codeHTML: state.codeHTML.filter((el) => el.line !== element.line) }
    ))
  ),

  codeCSS: [],

  addInputCSS: (element) => (
    set((state) => {
      const maxLine = state.codeCSS.reduce((acc, el) => el.line ? el.line > acc ? el.line : acc : acc, 0)

      return { codeCSS: [...state.codeCSS, { ...element, line: maxLine + 1 }] }
    })
  ),

  editInputCSS: (element) => (
    set((state) => (
      { codeCSS: state.codeCSS.map((el) => el.line === element.line ? element : el) }
    ))
  ),

  deleteInputCSS: (element) => (
    set((state) => (
      { codeCSS: state.codeCSS.filter((el) => el.line !== element.line) }
    ))
  )
}))