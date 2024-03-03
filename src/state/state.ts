import { create } from 'zustand'

interface CodeStore {
  codeHTML: InputHTML[]
  addInputHTML: (element: InputHTML) => void
  editInputHTML: (element: InputHTML) => void
  deleteInputHTML: (element: InputHTML) => void
  codeCSS: InputCSS[]
  addInputCSS: (inputCSS: InputCSS, elementCSS: ElementCSS) => void
  editInputCSS: (inputCSS: InputCSS) => void
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

  addInputCSS: (inputCSS: InputCSS, elementCSS: ElementCSS) => (
    set((state) => {
      let found = false;
      const maxLine = state.codeCSS.reduce((acc, el) => el.line ? el.line > acc ? el.line : acc : acc, 0);
      
      state.codeCSS.map((el, index) => {
        if (el.class === inputCSS.class){
          el.elements.map((css) => {
            if (css.property === elementCSS.property){
              css.content = elementCSS.content
              found = true;
            }
          })
          if (!found){
            el.elements.push(elementCSS)
            console.log(state.codeCSS)
            found = true;
          }
        }
      })
      
      if (!found){
        const updatedInputCSS: InputCSS = {
          elements: [elementCSS],
          class: inputCSS.class,
          line: maxLine + 1
        };
        console.log([...state.codeCSS, updatedInputCSS])
        return { codeCSS: [...state.codeCSS, updatedInputCSS] };
      }
      return { codeCSS: [...state.codeCSS]}; 
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