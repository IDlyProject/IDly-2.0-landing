import CtaButton from '../CtaButton.tsx'
import Section from '../Section.tsx'

function FinalCta() {
  return (
    <Section id="start" className="text-center">
      <h2 className="text-4xl font-bold">내 계정, 오늘 정리해 보세요</h2>
      <CtaButton className="mt-6">무료로 시작하기</CtaButton>
    </Section>
  )
}

export default FinalCta
