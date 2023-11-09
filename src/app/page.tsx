import Header from '@/components/header/header.component'
import Terminal from '@/components/terminal/terminal.component'
import ScrollAnimation from '@/components/scroll-animation/scroll-animation.component'

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
      <div className="fixed mt-8 h-64 w-full bg-[url('/images/sun.svg')] bg-[length:200px_200px] bg-[top_2rem_left_2rem] bg-no-repeat transition-transform duration-700 dark:translate-x-12 dark:translate-y-16 dark:bg-[url('/images/moon.svg')]" />

      {/* Welcome section */}
      <section
        id="welcome"
        className="mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center p-4"
      >
        <Terminal title="Welcome" texts={welcomePhrases} />
      </section>

      {/* Timeline section */}
      <section
        id="timeline"
        className="mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center p-4"
      >
        <ScrollAnimation>
          <ol className="relative border-gray-200 dark:border-gray-700">
            <li className="mb-8 flex w-full items-center justify-between transition-transform duration-500">
              <div className="order-1 hidden w-5/12 sm:block"></div>
              <div className="z-20 order-1 rounded-full bg-gray-800 shadow-xl">
                <h1 className="order-1  mx-auto flex h-8 w-8 items-center  justify-center text-lg font-semibold text-white ">
                  1
                </h1>
              </div>
              <div className="order-1 rounded-lg border border-gray-200 bg-white p-4 px-6 py-4 shadow-sm shadow-xl dark:border-gray-600 dark:bg-gray-700 sm:w-5/12">
                <div className="mb-3 flex-row-reverse items-center justify-between sm:flex">
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    2 hours ago
                  </time>
                  <div className="lex text-sm font-normal text-gray-500 dark:text-gray-300">
                    Thomas Lean commented on{' '}
                    <a
                      href="#"
                      className="font-semibold text-gray-900 hover:underline dark:text-white"
                    >
                      Flowbite Pro
                    </a>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300">
                  Hi yall! I wanted to share a webinar zeroheight is having
                  regarding how to best measure your design system! This is the
                  second session of our new webinar series on #DesignSystems
                  discussions where well be speaking about Measurement.
                </div>
              </div>
            </li>

            <li className="mb-8 flex w-full flex-row items-center justify-between transition-transform duration-500 sm:flex-row-reverse">
              <div className="order-1 hidden w-5/12 sm:block"></div>
              <div className="z-20 order-1 rounded-full bg-gray-800 shadow-xl">
                <h1 className="order-1  mx-auto flex h-8 w-8 items-center  justify-center text-lg font-semibold text-white ">
                  2
                </h1>
              </div>
              <div className="order-1 rounded-lg border border-gray-200 bg-white p-4 px-6 py-4 shadow-sm shadow-xl dark:border-gray-600 dark:bg-gray-700 sm:w-5/12">
                <div className="mb-3 items-center justify-between sm:flex">
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    2 hours ago
                  </time>
                  <div className="lex text-sm font-normal text-gray-500 dark:text-gray-300">
                    Thomas Lean commented on{' '}
                    <a
                      href="#"
                      className="font-semibold text-gray-900 hover:underline dark:text-white"
                    >
                      Flowbite Pro
                    </a>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300">
                  Hi yall! I wanted to share a webinar zeroheight is having
                  regarding how to best measure your design system! This is the
                  second session of our new webinar series on #DesignSystems
                  discussions where well be speaking about Measurement.
                </div>
              </div>
            </li>

            <li className="mb-8 flex w-full items-center justify-between transition-transform duration-500">
              <div className="order-1 hidden w-5/12 sm:block"></div>
              <div className="z-20 order-1 rounded-full bg-gray-800 shadow-xl">
                <h1 className="order-1  mx-auto flex h-8 w-8 items-center  justify-center text-lg font-semibold text-white ">
                  1
                </h1>
              </div>
              <div className="order-1 rounded-lg border border-gray-200 bg-white p-4 px-6 py-4 shadow-sm shadow-xl dark:border-gray-600 dark:bg-gray-700 sm:w-5/12">
                <div className="mb-3 flex-row-reverse items-center justify-between sm:flex">
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    2 hours ago
                  </time>
                  <div className="lex text-sm font-normal text-gray-500 dark:text-gray-300">
                    Thomas Lean commented on{' '}
                    <a
                      href="#"
                      className="font-semibold text-gray-900 hover:underline dark:text-white"
                    >
                      Flowbite Pro
                    </a>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300">
                  Hi yall! I wanted to share a webinar zeroheight is having
                  regarding how to best measure your design system! This is the
                  second session of our new webinar series on #DesignSystems
                  discussions where well be speaking about Measurement.
                </div>
              </div>
            </li>

            <li className="mb-8 flex w-full flex-row items-center justify-between transition-transform duration-500 sm:flex-row-reverse">
              <div className="order-1 hidden w-5/12 sm:block"></div>
              <div className="z-20 order-1 rounded-full bg-gray-800 shadow-xl">
                <h1 className="order-1  mx-auto flex h-8 w-8 items-center  justify-center text-lg font-semibold text-white ">
                  2
                </h1>
              </div>
              <div className="order-1 rounded-lg border border-gray-200 bg-white p-4 px-6 py-4 shadow-sm shadow-xl dark:border-gray-600 dark:bg-gray-700 sm:w-5/12">
                <div className="mb-3 items-center justify-between sm:flex">
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    2 hours ago
                  </time>
                  <div className="lex text-sm font-normal text-gray-500 dark:text-gray-300">
                    Thomas Lean commented on{' '}
                    <a
                      href="#"
                      className="font-semibold text-gray-900 hover:underline dark:text-white"
                    >
                      Flowbite Pro
                    </a>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300">
                  Hi yall! I wanted to share a webinar zeroheight is having
                  regarding how to best measure your design system! This is the
                  second session of our new webinar series on #DesignSystems
                  discussions where well be speaking about Measurement.
                </div>
              </div>
            </li>
          </ol>
        </ScrollAnimation>
      </section>
    </div>
  )
}

export default HomePage
