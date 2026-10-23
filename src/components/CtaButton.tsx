import type { ReactNode } from 'react'
import { START_URL } from '../constants.ts'

type Props = {
  children: ReactNode
  className?: string
}

// 서비스 시작 링크(START_URL)로 나가는 버튼. 새 탭으로 열림
function CtaButton({ children, className = '' }: Props) {
  return (
    <a
      href={START_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </a>
  )
}

export default CtaButton
