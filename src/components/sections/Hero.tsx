import CtaButton from '../CtaButton.tsx'
import Section from '../Section.tsx'

function Hero() {
  return (
    <Section id="hero" className="text-center">
      <h1 className="text-4xl font-bold md:text-6xl">IDly 2.0</h1>
      <p className="mt-4 text-lg text-sub">
        한 줄 소개 문구를 여기에 넣으세요.
      </p>
      <CtaButton className="mt-8">시작하기</CtaButton>
    </Section>
  )
}

export default Hero
