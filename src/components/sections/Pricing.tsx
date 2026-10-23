const BENEFITS = [
  '매일 분석과 계정 현황은 무료',
  '작업이 끝난 뒤에만 차감',
  '첫 작업 1회 무료',
]

const PLANS = [
  {
    name: '이용권 5회',
    price: '2,900원',
    unitPrice: '회당 580원',
    className: 'bg-linear-135 from-[#f4f5fd] to-[#dde0f8] text-[#161a3f]',
  },
  {
    name: '이용권 10회',
    price: '4,900원',
    unitPrice: '회당 490원',
    className:
      'bg-linear-135 from-[#1b2373] to-[#0a0e33] text-white shadow-[0_30px_50px_-20px_rgba(20,27,92,0.5)]',
  },
]

function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#f9f9fd] px-5 py-20 leading-[1.2] tracking-[-0.32px] lg:h-190 lg:px-0 lg:pt-35 lg:pb-0"
    >
      <h2 className="text-center text-[30px] leading-[1.3] font-extrabold tracking-[-1.2px] text-[#161a3f] lg:text-5xl lg:leading-[62.4px] lg:tracking-[-1.68px]">
        이용권 1회 = 에이전트 작업 1건
      </h2>
      <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
        {BENEFITS.map((benefit) => (
          <li
            key={benefit}
            className="rounded-[20px] border border-[#e6e7f2] bg-white px-4.5 py-2.5 text-sm font-semibold whitespace-nowrap text-[#4a4e78] drop-shadow-[0_4px_6px_rgba(20,27,92,0.05)]"
          >
            {benefit}
          </li>
        ))}
      </ul>
      <ul className="mt-8 flex flex-col items-center gap-8 pt-10 md:flex-row md:justify-center">
        {PLANS.map((plan) => (
          <li
            key={plan.name}
            className={`flex h-57.5 w-full max-w-85 flex-col rounded-[28px] p-8.5 md:w-85 ${plan.className}`}
          >
            <p className="text-[17px] font-bold">{plan.name}</p>
            <p className="flex min-h-15.75 flex-1 items-end pt-12.75 pb-3 text-[52px] font-extrabold tracking-[-2.08px]">
              {plan.price}
            </p>
            <p className="text-sm opacity-65">{plan.unitPrice}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Pricing
