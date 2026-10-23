import { FOOTER_LINKS } from '../constants.ts'

function Footer() {
  return (
    <footer className="text-sm text-sub">
      <div className="flex items-center justify-between px-10 py-8">
        <span className="font-semibold">IDly</span>
        <ul className="flex gap-2">
          {FOOTER_LINKS.map(({ label, href }, i) => (
            <li key={label} className="flex gap-2">
              {i > 0 && <span aria-hidden>·</span>}
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer">
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
