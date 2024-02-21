interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const defaultSvgProps: React.SVGProps<SVGSVGElement> = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const defaultPathProps: React.SVGProps<SVGPathElement> = {
  stroke: 'none',
  d: "M0 0h24v24H0z",
  fill: 'none'
}

const Plus = ({ className, ...props }: Props) => {
  return <svg className={className} {...defaultSvgProps} {...props}><path {...defaultPathProps} />

    <path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
}
const Edit = ({ className, ...props }: Props) => {
  return <svg className={className} {...defaultSvgProps} {...props}><path {...defaultPathProps} />

    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
}
const Delete = ({ className, ...props }: Props) => {
  return <svg className={className} {...defaultSvgProps} {...props}><path {...defaultPathProps} />

    <path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
}

export const Icon = { Plus, Edit, Delete }

