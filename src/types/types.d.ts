interface ElementHTML {
    name: string,
    tag: string,
    description: string,
    example: string
}

interface ElementCSS {

}

interface InputHTML {
    element: ElementHTML,
    content: string
    line?: number
}

interface InputCSS {

}