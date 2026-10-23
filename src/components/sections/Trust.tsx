import hand from '../../assets/trust/hand.svg'
import lock from '../../assets/trust/lock.svg'
import refund from '../../assets/trust/refund.svg'

const PROMISES = [
  {
    icon: lock,
    title: '비밀번호는 받지 않아요',
    description: '로그인은 내 크롬에서 직접 해요',
  },
  {
    icon: hand,
    title: '마지막 버튼은 내가 눌러요',
    description: '탈퇴·해지 직전에 꼭 물어봐요',
  },
  {
    icon: refund,
    title: '못 하면 차감하지 않아요',
    description: '끝난 작업만 이용권을 써요',
  },
]

function Trust() {
  return (
    <section
      id="trust"
      className="bg-[#f9f9fd] px-5 py-20 leading-[1.2] tracking-[-0.32px] lg:h-140 lg:px-0 lg:pt-30 lg:pb-0"
    >
      <h2 className="text-center text-[34px] leading-[1.3] font-extrabold tracking-[-1.2px] text-[#161a3f] lg:text-[44px] lg:leading-[57.2px] lg:tracking-[-1.54px]">
        안심하고 맡기세요
      </h2>
      <ul className="mt-16 flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:justify-center">
        {PROMISES.map((promise) => (
          <li
            key={promise.title}
            className="flex w-full max-w-88 flex-col items-center gap-2.5 rounded-3xl border border-[#e6e7f2] bg-[#f9f9fd] px-7 py-9 text-center lg:w-88"
          >
            <span className="flex size-16 items-center justify-center rounded-[20px] bg-linear-135 from-[#1b2373] to-[#0a0e33]">
              <img src={promise.icon} alt="" width={28} height={28} />
            </span>
            <p className="pt-3 text-xl leading-[1.2] font-bold whitespace-nowrap text-[#161a3f]">
              {promise.title}
            </p>
            <p className="text-[15px] leading-6 whitespace-nowrap text-[#6b6f8e]">
              {promise.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Trust
