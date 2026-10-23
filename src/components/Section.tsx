import type { ReactNode } from 'react'

type Props = {
  id?: string
  children: ReactNode
  className?: string
}

function Section({ id, children, className = '' }: Props) {
  return (
    <section id={id} className={`py-20 md:py-30 ${className}`}>
      <div className="mx-auto max-w-280 px-5">{children}</div>
    </section>
  )
}

export default Section
