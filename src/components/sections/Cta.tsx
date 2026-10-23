import CtaButton from '../CtaButton.tsx'
import Section from '../Section.tsx'

function Cta() {
  return (
    <Section id="cta" className="text-center">
      <h2 className="text-3xl font-bold">지금 바로 시작해보세요</h2>
      <CtaButton className="mt-8">시작하기</CtaButton>
    </Section>
  )
}

export default Cta
