import CtaButton from '../CtaButton.tsx'

function FinalCta() {
  return (
    <section
      id="start"
      className="flex flex-col items-center gap-6 bg-gray-50 px-5 pt-14 pb-21 font-noto leading-[1.4] font-bold text-[#191f28]"
    >
      <h2 className="text-center text-[30px] lg:text-[44px]">
        내 계정, 오늘 정리해 보세요
      </h2>
      <CtaButton className="rounded-2xl bg-[#191f28] px-8 py-4.5 text-[17px] text-white transition-opacity hover:opacity-85">
        무료로 시작하기
      </CtaButton>
    </section>
  )
}

export default FinalCta
