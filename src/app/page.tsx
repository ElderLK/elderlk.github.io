import Header from './ui/header'

const welcomePhrases = [
  'Hi! 👋🏻',
  'Welcome to my website.',
  "I'm Elder, a software engineer rooted in Curitiba, Brazil.",
  'Please feel free to explore this website and get to know more about me.'
]

const HomePage = () => {
  return (
    <div className="transition-color min-h-screen bg-sky-500 bg-[url('/images/clouds.svg')] duration-700 dark:bg-sky-950 dark:bg-[url('/images/stars.svg')]">
      <Header />
      <div className="fixed h-64 w-full bg-[url('/images/sun.svg')] bg-[length:200px_200px] bg-[top_2rem_left_2rem] bg-no-repeat transition-transform duration-700 dark:translate-x-12 dark:translate-y-16 dark:bg-[url('/images/moon.svg')]" />

      <section className="mx-auto flex min-h-screen max-w-4xl items-center justify-center p-4">
        <div className="h-full w-full  overflow-hidden rounded border bg-slate-200 dark:border-slate-700 dark:bg-zinc-900">
          <div className="flex items-center bg-slate-300 dark:bg-zinc-800">
            <div className="flex gap-x-1 pl-2">
              <div className="h-4 w-4 rounded-full bg-red-600" />
              <div className="h-4 w-4 rounded-full bg-amber-500" />
              <div className="h-4 w-4 rounded-full bg-lime-600" />
            </div>
            <div className="mx-auto -translate-x-[35px] text-lg font-bold text-zinc-900 dark:text-slate-200">
              Welcome
            </div>
          </div>
          <div className="p-1 text-lg md:text-3xl ">
            {welcomePhrases.map((phrase, idx) => (
              <p
                className="font-semibold leading-relaxed text-stone-900 dark:text-stone-50"
                key={idx}
              >
                <span className="mr-1 text-lime-600 dark:text-lime-400 ">
                  {new Date().toLocaleTimeString('en', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                  <b className="ml-1">elder@PC</b>
                </span>
                :<span className="mx-1 text-violet-600">~/portfolio$</span>
                {phrase}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
