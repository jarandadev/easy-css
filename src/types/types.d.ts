interface ElementHTML {
    name: string,
    tag: string,
    description: string,
    example: string
}

interface ElementCSS {
    name: string,
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
    element: ElementCSS,
    content: string,
    class?: string,
    line?: number
}