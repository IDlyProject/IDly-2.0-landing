const CURRENT_YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer className="py-10 text-sm text-sub">
      <div className="mx-auto max-w-280 px-5">© {CURRENT_YEAR} IDly</div>
    </footer>
  )
}

export default Footer
