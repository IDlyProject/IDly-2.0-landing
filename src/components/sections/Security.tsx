import dot19 from '../../assets/security/dot-19.svg'
import dot22Light from '../../assets/security/dot-22-light.svg'
import dot22 from '../../assets/security/dot-22.svg'
import dot26 from '../../assets/security/dot-26.svg'
import owl from '../../assets/security/owl.svg'
import radarRings from '../../assets/security/radar-rings.svg'

const DOTS = [
  { src: dot26, size: 26, left: 201, top: 81 },
  { src: dot26, size: 26, left: 96, top: 480 },
  { src: dot22Light, size: 22, left: 515, top: 224 },
  { src: dot22, size: 22, left: 566, top: 294 },
  { src: dot19, size: 19, left: 172, top: 62 },
]

const ALERTS = [
  { service: '네이버', message: '9월 27일 새 기기 로그인', left: 36, top: 139 },
  { service: '유튜브', message: '8월 13일 새 기기 로그인', left: 99, top: 264 },
  {
    service: '토스',
    message: '의심스러운 로그인 시도 2번',
    left: 476,
    top: 432,
    warning: true,
  },
]

function Radar() {
  return (
    <div className="relative size-175">
      <div
        aria-hidden
        className="absolute -top-[86.5px] -left-31 h-[899px] w-248 bg-[radial-gradient(496px_449.5px_at_center,#9aacf9_0%,#cad2fb_35%,#f9f9fd_70%,transparent_70%)]"
      />
      <img
        src={radarRings}
        alt=""
        width={681}
        height={681}
        className="absolute top-2.5 left-2.5"
      />

      <div className="absolute inset-10">
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(rgba(185,166,240,0)_0%,rgba(185,202,249,0)_69.444%,rgba(172,191,248,0.5)_84.722%,rgb(158,181,246)_100%)]" />
        <div className="absolute top-51.25 left-53 size-53 rounded-full bg-[radial-gradient(circle_149.91px_at_center,rgba(255,243,223,0.36)_0%,rgba(255,217,168,0.36)_40%,rgba(255,217,168,0)_72%)]" />
        <img
          src={owl}
          alt=""
          width={153}
          height={148}
          className="absolute top-59.25 left-63.5"
        />
        {DOTS.map((dot) => (
          <img
            key={`${dot.left}-${dot.top}`}
            src={dot.src}
            alt=""
            width={dot.size}
            height={dot.size}
            className="absolute"
            style={{ left: dot.left, top: dot.top }}
          />
        ))}
      </div>

      {ALERTS.map((alert) => (
        <div
          key={alert.service}
          className={`absolute flex flex-col gap-[1.39px] rounded-[18px] border px-5 py-3.5 whitespace-nowrap shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] backdrop-blur-[7px] ${
            alert.warning
              ? 'w-46 border-[#e24040] bg-[rgba(246,116,118,0.3)] text-[#414141]'
              : 'border-white/35 bg-white/16 text-[#515151]'
          }`}
          style={{ left: alert.left, top: alert.top }}
        >
          <p className="leading-[22.4px] font-bold">{alert.service}</p>
          <p className="text-[13px] leading-[18.2px] opacity-80">
            {alert.message}
          </p>
        </div>
      ))}
    </div>
  )
}

function Security() {
  return (
    <section id="security" className="overflow-hidden bg-[#f9f9fd]">
      <div className="relative mx-auto max-w-280 px-5 py-20 lg:h-[789px] lg:px-0 lg:py-0">
        <div className="relative z-10 flex flex-col items-start gap-4.75 lg:pt-74">
          <h2 className="text-[38px] leading-[1.2] font-extrabold tracking-[-1.5px] whitespace-nowrap text-[#243b6d] lg:text-[54px] lg:leading-[64.8px] lg:tracking-[-2.16px]">
            낯선 로그인,
            <br />
            놓치지 않게
          </h2>
          <p className="max-w-[394px] py-1.25 text-lg leading-[1.7] text-[#6982b9] lg:text-xl lg:leading-[34px]">
            새 기기 로그인이나 의심스러운 시도 안내를 모아서 알려드려요.
            비밀번호 변경도 맡을 수 있어요.
          </p>
          <div className="rounded-full bg-[#f3b27a] px-7.5 py-4 leading-[1.2] font-bold text-[#0b1230]">
            비밀번호 변경 맡기기
          </div>
        </div>

        <div className="relative mx-auto mt-12 size-[350px] lg:absolute lg:top-[31px] lg:left-115 lg:mt-0 lg:size-175">
          <div className="absolute top-0 left-0 origin-top-left scale-50 lg:scale-100">
            <Radar />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Security
