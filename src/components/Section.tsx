import type { ReactNode } from 'react'

type Props = {
  id?: string
  children: ReactNode
  className?: string
}

// 섹션 공통 레이아웃: 위아래 여백 + 가운데 정렬 컨테이너
function Section({ id, children, className = '' }: Props) {
  return (
    <section id={id} className={`py-20 md:py-30 ${className}`}>
      <div className="mx-auto max-w-280 px-5">{children}</div>
    </section>
  )
}

export default Section
