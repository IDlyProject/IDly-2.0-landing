import logo from '../assets/logo.svg'

function Header() {
  return (
    <header className="bg-white">
      <div className="flex items-center gap-5.25 px-5 py-5.5 md:px-15">
        <img src={logo} alt="" width={49} height={50} />
        <span className="text-[32px] leading-[50px] font-bold tracking-[-1px] text-navy">
          IDly
        </span>
      </div>
    </header>
  )
}

export default Header
