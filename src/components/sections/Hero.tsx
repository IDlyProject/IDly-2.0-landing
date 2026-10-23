import CtaButton from '../CtaButton.tsx'
import Section from '../Section.tsx'

function Hero() {
  return (
    <Section id="hero">
      <p className="text-xs font-semibold tracking-widest text-sub uppercase">
        Less clutter, more control
      </p>
      <h1 className="mt-4 text-5xl font-bold">
        잊고 있던 구독과 계정,
        <br />
        IDly가 찾아서 정리해요
      </h1>
      <p className="mt-6 text-sub">
        메일만 연결하면 매달 나가는 돈과 안 쓰는 계정을 찾아드려요. 탈퇴 · 해지
        · 보안 조치는 AI 에이전트가 대신 해요.
      </p>
      <CtaButton className="mt-8">무료로 시작하기 ↗</CtaButton>
      {/* TODO: 이번 달 구독료 카드 */}
    </Section>
  )
}

export default Hero
