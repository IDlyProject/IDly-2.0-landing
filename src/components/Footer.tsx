import { FOOTER_LINKS } from '../constants.ts'

function Footer() {
  return (
    <footer className="bg-gray-50 font-noto leading-[1.4] text-muted">
      <div className="flex flex-col gap-2 px-5 py-8 md:flex-row md:items-start md:justify-between md:px-10">
        <span className="text-[15px] font-bold">IDly</span>
        <ul className="flex flex-wrap text-[13px]">
          {FOOTER_LINKS.map(({ label, href }, i) => (
            <li key={label} className="whitespace-nowrap">
              {i > 0 && (
                <span aria-hidden className="px-1">
                  ·
                </span>
              )}
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-navy"
                >
                  {label}
                </a>
              ) : (
                <span>{label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
