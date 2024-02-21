interface Props {
  codeHTML: ElementHTML[]
}

export const EditorHTML = ({ codeHTML }: Props) => {
  const chevronColor = 'text-gray-600'
  const tagColor = 'text-blue-500'
  return (
    <div>
      <div>
        <h1 className="font-bold text-green-500">CODE HTML</h1>
        <div className="border-2 rounded-xl w-72 min-h-32 mt-2 p-6">
          {codeHTML.map((code, index) => (
            <p key={index}>
              <span className={chevronColor}>{'<'}</span>
              <span className={tagColor}>{code.codeElement.tag}</span>
              <span className={chevronColor}>{'>'}</span>

              {code.content}

              <span className={chevronColor}>{'</'}</span>
              <span className={tagColor}>{code.codeElement.tag}</span>
              <span className={chevronColor}>{'>'}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
