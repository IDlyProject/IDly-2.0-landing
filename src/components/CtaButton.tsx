import type { ReactNode } from 'react'
import { START_URL } from '../constants.ts'

type Props = {
  children: ReactNode
  className?: string
}

function CtaButton({ children, className }: Props) {
  return (
    <a
      href={START_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}

export default CtaButton
