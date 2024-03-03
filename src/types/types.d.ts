interface ElementHTML {
    name: string,
    tag: string,
    description: string,
    example: string
}

interface ElementCSS {
    name: string,
    content: string,
    property: string,
    description: string,
    example: string
}

interface InputHTML {
    element: ElementHTML,
    content: string
    line?: number
}

interface InputCSS {
    elements: ElementCSS[],
    class?: string,
    line?: number
}