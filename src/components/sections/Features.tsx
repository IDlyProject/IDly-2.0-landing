import Section from '../Section.tsx'

const FEATURES = [
  { title: '기능 1', description: '설명' },
  { title: '기능 2', description: '설명' },
  { title: '기능 3', description: '설명' },
]

function Features() {
  return (
    <Section id="features">
      <h2 className="text-3xl font-bold">주요 기능</h2>
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {FEATURES.map((feature) => (
          <li key={feature.title} className="rounded-2xl bg-neutral-100 p-6">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sub">{feature.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Features
