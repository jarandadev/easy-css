interface CodeElement {
    name: string,
    tag: string,
    description: string,
    example: string
}

interface ElementHTML {
    codeElement: CodeElement,
    content: string
}