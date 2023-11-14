'use client'

type Props = {
  id: string
  children: React.ReactNode
}

const SectionBase = ({ id, children }: Props) => (
  <section
    id={id}
    className="mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center p-4"
  >
    {children}
  </section>
)

export default SectionBase
