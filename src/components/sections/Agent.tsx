import type { CSSProperties } from 'react'
import owlAvatar from '../../assets/agent/owl-avatar.svg'
import userAvatar from '../../assets/agent/user-avatar.svg'

const GLOW_STYLE: CSSProperties = {
  backgroundImage:
    'radial-gradient(circle 457.5px at center, rgba(36,59,109,0.53) 19.72%, rgba(88,71,89,0.475) 25.239%, rgba(139,83,68,0.42) 30.759%, rgba(242,106,27,0.31) 41.798%, rgba(249,167,119,0.155) 58.804%, rgba(255,227,211,0) 75.81%)',
}

const BUBBLE_SHADOW = 'shadow-[0_22px_40px_-22px_rgba(22,34,77,0.45)]'

function AgentMessage({
  text,
  width,
  paddingTop,
}: {
  text: string
  width: number
  paddingTop: number
}) {
  return (
    <div className="flex gap-0.75 px-3">
      <div className="flex h-14.5 w-13 shrink-0 items-start justify-center pt-0.5">
        <img src={owlAvatar} alt="" width={28} height={28} />
      </div>
      <div className="pt-0.5">
        <p
          className={`h-11 rounded-[22px] rounded-tl-md bg-[#eceef5] pl-5 text-[13px] leading-[24.8px] whitespace-nowrap text-[#171b2e] ${BUBBLE_SHADOW}`}
          style={{ width, paddingTop }}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

function BrowserMockup() {
  return (
    <div className="w-155 overflow-hidden rounded-[22px] bg-white shadow-[0_60px_100px_-50px_rgba(22,34,77,0.6),0_0_0_1px_#e3e5f2]">
      <div className="flex h-12 items-center gap-2 bg-[#f1f2fa] px-4.5">
        <span className="size-2.75 rounded-full bg-[#d3d6ea]" />
        <span className="size-2.75 rounded-full bg-[#d3d6ea]" />
        <span className="size-2.75 rounded-full bg-[#d3d6ea]" />
        <div className="flex-1 pl-4">
          <div className="flex h-6.5 items-center rounded-[13px] bg-white px-3.5 text-xs text-[#5b6180]">
            탈퇴 제안
          </div>
        </div>
      </div>

      <div className="flex h-103">
        <div className="flex w-47.5 shrink-0 flex-col gap-3.5 border-r border-[#e3e5f2] bg-[#f7f8fd] px-5 py-6.5">
          <span className="h-3 w-[104.3px] rounded-md bg-[#e3e6f5]" />
          <span className="h-3 w-[81.94px] rounded-md bg-[#e3e6f5]" />
          <span className="h-3 w-[119.19px] rounded-md bg-[#e3e6f5]" />
          <div className="pt-2">
            <p className="rounded-xl bg-linear-to-r from-[#24378a] to-[#16224d] px-3.5 py-3 text-[15px] font-bold text-white shadow-[0_0_30px_0_rgba(185,166,240,0.8)]">
              회원탈퇴
            </p>
          </div>
        </div>

        <div className="flex w-109 shrink-0 flex-col gap-4 pt-8.25">
          <AgentMessage
            text="야놀자 탈퇴 메뉴를 찾았어요. 탈퇴 사유는 뭐라고 할까요?"
            width={336}
            paddingTop={7}
          />
          <div className="flex gap-2 pl-58.75">
            <div className="pt-0.5">
              <p
                className={`h-10.5 rounded-[22px] rounded-tr-md bg-[#16224d] px-5.5 pt-2.25 text-sm leading-[24.8px] whitespace-nowrap text-white ${BUBBLE_SHADOW}`}
              >
                이용 빈도 낮음
              </p>
            </div>
            <div className="w-9.5 pt-0.75 pl-0.5">
              <img src={userAvatar} alt="" width={28} height={28} />
            </div>
          </div>
          <AgentMessage
            text="이제 ‘회원탈퇴’만 누르면 끝나요. 누를까요?"
            width={259}
            paddingTop={10}
          />
        </div>
      </div>
    </div>
  )
}

function Agent() {
  return (
    <section id="agent" className="overflow-hidden bg-[#f9f9fd] leading-[1.2]">
      <div className="mx-auto flex max-w-280 flex-col gap-14 px-5 py-20 lg:h-225 lg:flex-row lg:items-start lg:justify-between lg:px-0 lg:py-0">
        <div className="flex flex-col gap-[19.4px] lg:mt-72 lg:-ml-3.5">
          <h2 className="text-[38px] leading-[1.4] font-extrabold tracking-[-1.8px] text-[#16224d] lg:text-[54px] lg:leading-[76.8px] lg:tracking-[-2.56px]">
            탈퇴와 해지는
            <br />
            에이전트에게 맡겨요
          </h2>
          <p className="max-w-110 pt-[4.61px] text-lg leading-[1.7] text-[#5b6180] lg:text-xl lg:leading-[34px]">
            에이전트가 내 크롬에서 메뉴를 찾아 진행해요. 로그인은 내가, 마지막
            확정도 내가 해요.
          </p>
        </div>

        <div className="relative mx-auto h-[calc(460px*var(--s))] w-[calc(620px*var(--s))] [--s:0.56] sm:[--s:0.9] lg:mx-0 lg:mt-42.5 lg:-mr-9 lg:[--s:1]">
          <div className="absolute top-0 left-0 origin-top-left scale-(--s)">
            <div
              aria-hidden
              className="absolute -top-9.75 -left-0 h-155 w-[673px] rounded-[365px] blur-[5px]"
              style={GLOW_STYLE}
            />
            <div className="relative">
              <BrowserMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Agent
