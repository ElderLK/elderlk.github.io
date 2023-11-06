import Header from './ui/header'

const HomePage = () => {
  return (
    <div className="transition-color min-h-screen bg-sky-500 bg-[url('/images/clouds.svg')] duration-700 dark:bg-sky-950 dark:bg-[url('/images/stars.svg')]">
      <Header />
      <div className="fixed h-64 w-full bg-[url('/images/sun.svg')] bg-[length:200px_200px] bg-[top_2rem_left_2rem] bg-no-repeat transition-transform duration-700 dark:translate-x-12 dark:translate-y-16 dark:bg-[url('/images/moon.svg')]" />
    </div>
  )
}

export default HomePage
