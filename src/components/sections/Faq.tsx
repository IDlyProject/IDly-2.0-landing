const QUESTIONS = [
  '메일 비밀번호를 맡겨도 안전한가요?',
  '어떤 서비스까지 에이전트가 할 수 있나요?',
  '에이전트가 실수로 탈퇴하면 어떡하나요?',
  '이용권은 언제 차감되나요?',
]

function Faq() {
  return (
    <section
      id="faq"
      className="bg-[#f9f9fd] px-5 py-20 leading-[1.2] tracking-[-0.32px] text-[#161a3f] lg:pt-[119px] lg:pb-33"
    >
      <div className="mx-auto flex max-w-200 flex-col gap-3">
        <h2 className="pb-[28.8px] text-[30px] leading-[1.3] font-extrabold tracking-[-1.26px] lg:text-4xl lg:leading-[46.8px]">
          자주 묻는 질문
        </h2>
        <ul className="flex flex-col gap-3">
          {QUESTIONS.map((question) => (
            <li
              key={question}
              className="flex items-center justify-between gap-4 rounded-[20px] border border-[#e6e7f2] bg-white py-6.5 pr-[31.5px] pl-7.5 text-lg leading-[1.2] font-bold"
            >
              {question}
              <span
                aria-hidden
                className="flex size-[17px] shrink-0 items-center justify-center"
              >
                <span className="size-3 rotate-45 border-r-2 border-b-2 border-[#8a8eb2]" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Faq
