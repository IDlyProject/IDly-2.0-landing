import CtaButton from '../CtaButton.tsx'

const SUMMARY_ITEMS = [
  { icon: '₩', title: '구독 4개', description: '다음 결제 10월 3일' },
  {
    icon: '!',
    title: '확인할 보안 알림 2건',
    description: '네이버 새 기기 로그인',
  },
  {
    icon: 'Z',
    title: '1년 넘게 안 쓴 계정 17개',
    description: '정리하면 개인정보도 줄어요',
  },
]

function Hero() {
  return (
    <section id="hero" className="bg-[#f9f9fd] font-inter">
      <div className="mx-auto flex max-w-280 flex-col gap-14 px-5 pt-20 pb-20 lg:h-203 lg:flex-row lg:items-start lg:justify-between lg:gap-20 lg:px-0 lg:pt-35 lg:pb-31">
        <div className="flex max-w-150 flex-col items-start gap-4.5 lg:mt-38.5 lg:pl-2">
          <p className="text-xs font-extrabold tracking-[1.44px] text-haze uppercase">
            Less clutter, more control
          </p>
          <h1 className="text-[36px] leading-[1.24] font-black tracking-[-1.6px] text-ink lg:text-[52px] lg:tracking-[-2.4px]">
            잊고 있던 구독과 계정,
            <br />
            <span className="font-bold">IDly</span>가 찾아서{' '}
            <span className="text-accent">정리해요</span>
          </h1>
          <p className="pt-0.75 pb-3.25 leading-[1.8] tracking-[-0.4px] text-slate">
            메일만 연결하면 매달 나가는 돈과 안 쓰는 계정을 찾아드려요.
            <br />
            탈퇴 · 해지 · 보안 조치는 AI 에이전트가 대신 해요.
          </p>
          <CtaButton className="flex items-start gap-4.5 rounded-full bg-button px-5.5 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-85">
            무료로 시작하기
            <span aria-hidden className="pb-0.5">
              ↗
            </span>
          </CtaButton>
        </div>

        <aside className="flex w-full max-w-110 flex-col gap-2.25 rounded-3xl border border-[#edf0f5] bg-white px-6.25 pt-6.25 pb-5.5 drop-shadow-[0_24px_35px_rgba(29,40,72,0.08)] lg:mt-29.5">
          <p className="pt-px pb-0.5 text-xs leading-[15px] text-haze">
            지혜 님의 이번 달 구독료
          </p>
          <div className="pt-0.75 pb-1.25">
            <p className="text-[29px] leading-[35px] font-[850] tracking-[-0.8px] text-ink">
              47,280원
            </p>
            <ul className="w-60 pt-3 font-noto leading-[1.4]">
              {SUMMARY_ITEMS.map((item) => (
                <li key={item.title} className="flex items-center gap-3 py-2.5">
                  <span
                    aria-hidden
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#f2f4f6] text-[13.68px] font-bold text-muted"
                  >
                    {item.icon}
                  </span>
                  <span className="flex min-w-0 flex-col gap-px whitespace-nowrap">
                    <span className="text-[15px] font-medium text-[#191f28]">
                      {item.title}
                    </span>
                    <span className="text-xs text-muted">
                      {item.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <hr className="border-[#f0f2f7]" />
        </aside>
      </div>
    </section>
  )
}

export default Hero
