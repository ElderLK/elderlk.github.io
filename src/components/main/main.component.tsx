type Props = {
  description: string
}

const Main = ({ description = 'My portfolio' }: Props) => (
  <main className="bg-red-800 dark:bg-test h-screen w-screen">
    <h1>{description}</h1>
  </main>
)

export default Main
