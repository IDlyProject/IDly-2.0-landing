import type { ReactNode } from 'react'
import { START_URL } from '../constants.ts'

type Props = {
  children: ReactNode
  className?: string
}

// 서비스 시작 링크(START_URL)로 나가는 버튼. 새 탭으로 열림
// 섹션마다 디자인이 달라서 스타일은 className으로 받음
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
