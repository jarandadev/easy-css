interface ElementHTML {
    name: string,
    tag: string,
    description: string,
    example: string
}

interface ElementCSS {
    name: string,
    tag: string,
    description: string,
    example: string
}

interface InputHTML {
    element: ElementHTML,
    content: string
    line?: number
}

interface InputCSS {
    element: ElementHTML,
    content: string
    line?: number
}