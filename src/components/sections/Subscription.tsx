// 구독 요약 카드에 보여줄 예시 데이터
const SUBSCRIPTIONS = [
  {
    icon: 'Y',
    name: '유튜브 프리미엄',
    schedule: '3일 뒤 결제 예정',
    price: '14,900원',
  },
  { icon: 'F', name: 'Figma', schedule: '10월 18일 결제', price: '24,400원' },
]

function Subscription() {
  return (
    <section
      id="subscription"
      className="overflow-hidden bg-[#f9f9fd] leading-[1.2] tracking-[-0.32px]"
    >
      <div className="mx-auto flex max-w-280 flex-col gap-14 px-5 py-20 lg:h-170 lg:flex-row lg:items-start lg:justify-between lg:px-0 lg:py-0">
        <div className="flex max-w-120 flex-col gap-5 lg:mt-52.5">
          <p className="text-[15px] font-semibold text-[#7b7fa6]">구독</p>
          <h2 className="text-[34px] leading-[1.3] font-extrabold tracking-[-1.2px] text-[#161a3f] lg:text-5xl lg:leading-[62.4px] lg:tracking-[-1.68px]">
            매달 나가는 돈,
            <br />한 줄로 보여드려요
          </h2>
          <p className="pt-0.75 text-lg leading-[1.7] text-[#6b6f8e]">
            결제 메일을 읽어서 월 구독료와 다음 결제일을 찾아요.
            <br />안 쓰는 구독은 맨 위에 올려 드려요.
          </p>
        </div>

        {/* 구독 요약 카드 (예시 화면) */}
        <div className="relative w-full max-w-130 lg:mt-37.5 lg:mr-5">
          <div
            aria-hidden
            className="absolute -top-15 -left-15 h-115 w-160 bg-[radial-gradient(452.55px_325.27px_at_center,rgba(180,186,255,0.4)_0%,rgba(180,186,255,0)_65%)]"
          />
          <div className="relative rounded-[28px] bg-white p-9 shadow-[0_40px_70px_-24px_rgba(20,27,92,0.28),0_0_0_1px_#e6e7f2]">
            <p className="text-[14px] font-semibold text-[#6b6f8e]">
              구독 요약
            </p>
            <p className="pt-2 pb-7 text-[40px] font-extrabold tracking-[-1.6px] whitespace-nowrap text-[#161a3f]">
              매달 47,280원
            </p>
            <ul>
              {SUBSCRIPTIONS.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-4 border-t border-[#e6e7f2] py-4.5"
                >
                  <span
                    aria-hidden
                    className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-[#e7e9fa] text-[16px] font-extrabold text-[#141b5c]"
                  >
                    {item.icon}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-1.5 pb-px">
                    <span className="text-[17px] font-bold text-[#161a3f]">
                      {item.name}
                    </span>
                    <span className="text-[13px] text-[#6b6f8e]">
                      {item.schedule}
                    </span>
                  </span>
                  <span className="text-[17px] font-bold whitespace-nowrap text-[#161a3f]">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
            {/* 장식용 버튼 (클릭 동작 없음) */}
            <div className="mt-3.5 flex h-14 items-center justify-center rounded-2xl bg-[#0a0e33] px-7 text-[16px] font-bold tracking-normal text-white">
              유튜브 프리미엄 해지 맡기기
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscription
