import type { ReactNode } from 'react'
import { EXTERNAL_URL } from '../constants.ts'

type Props = {
  children: ReactNode
  className?: string
}

// 외부 링크(EXTERNAL_URL)로 나가는 버튼. 새 탭으로 열림
function CtaButton({ children, className = '' }: Props) {
  return (
    <a
      href={EXTERNAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </a>
  )
}

export default CtaButton
