/* eslint-disable react/no-unescaped-entities */
'use client'

import {
  Activity,
  ArrowLeftRight,
  Baby,
  BookOpenCheck,
  Briefcase,
  Code2,
  Computer,
  GraduationCap
} from 'lucide-react'

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
        className="mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center p-4"
      >
        <h1 className="mb-10 text-3xl font-bold uppercase text-slate-800 dark:text-slate-200">
          My Timeline
        </h1>
        <ScrollAnimation>
          <ol className="relative mb-60 overflow-x-hidden border-slate-200 dark:border-slate-700">
            <li className="mb-8 flex w-full items-center justify-between transition-transform duration-500">
              <div className="order-1 hidden w-5/12 sm:block"></div>

              <div className="order-1 mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-lg font-semibold text-slate-800 dark:bg-slate-600 dark:text-slate-100 ">
                <Baby />
              </div>

              <div className="order-1 rounded-lg border border-slate-200 bg-white p-4 px-6 py-4 shadow-sm shadow-xl dark:border-slate-600 dark:bg-gray-700 sm:w-5/12">
                <div className="mb-3 flex-row-reverse items-center justify-between sm:flex">
                  <time className="mb-1 text-xs font-semibold text-gray-400 sm:order-last sm:mb-0">
                    1992
                  </time>
                  <h4 className="text-sm font-normal text-gray-500 dark:text-gray-300">
                    Born
                  </h4>
                </div>

                <p className="rounded-lg border border-slate-200 bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-slate-500 dark:bg-gray-600 dark:text-gray-300">
                  I was born on February 29, 1992, which was in a leap year.
                </p>
              </div>
            </li>

            <li className="mb-8 flex w-full flex-row items-center justify-between transition-transform duration-500 sm:flex-row-reverse">
              <div className="order-1 hidden w-5/12 sm:block"></div>
              <div className="order-1 mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-lg font-semibold text-slate-800 dark:bg-slate-600 dark:text-slate-100 ">
                <Computer />
              </div>
              <div className="order-1 rounded-lg border border-slate-200 bg-white p-4 px-6 py-4 shadow-sm shadow-xl dark:border-slate-600 dark:bg-gray-700 sm:w-5/12">
                <div className="mb-3 items-center justify-between sm:flex">
                  <time className="mb-1 text-xs font-semibold text-gray-400 sm:order-last sm:mb-0">
                    2002
                  </time>
                  <h4 className="text-sm font-normal text-gray-500 dark:text-gray-300">
                    First computer
                  </h4>
                </div>
                <p className="rounded-lg border border-slate-200 bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-slate-500 dark:bg-gray-600 dark:text-gray-300">
                  This is the year when I started loving computers, the year
                  when my father brought a computer to our home.
                </p>
              </div>
            </li>

            <li className="mb-8 flex w-full items-center justify-between transition-transform duration-500">
              <div className="order-1 hidden w-5/12 sm:block"></div>
              <div className="order-1 mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-lg font-semibold text-slate-800 dark:bg-slate-600 dark:text-slate-100 ">
                <BookOpenCheck />
              </div>
              <div className="order-1 rounded-lg border border-slate-200 bg-white p-4 px-6 py-4 shadow-sm shadow-xl dark:border-slate-600 dark:bg-gray-700 sm:w-5/12">
                <div className="mb-3 flex-row-reverse items-center justify-between sm:flex">
                  <time className="mb-1 text-xs font-semibold text-gray-400 sm:order-last sm:mb-0">
                    2010
                  </time>
                  <h4 className="text-sm font-normal text-gray-500 dark:text-gray-300">
                    Teenage hood
                  </h4>
                </div>

                <p className="rounded-lg border border-slate-200 bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-slate-500 dark:bg-gray-600 dark:text-gray-300">
                  I completed high school and a technical course in industrial
                  mechanics.
                </p>
              </div>
            </li>

            <li className="mb-8 flex w-full flex-row items-center justify-between transition-transform duration-500 sm:flex-row-reverse">
              <div className="order-1 hidden w-5/12 sm:block"></div>
              <div className="order-1 mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-lg font-semibold text-slate-800 dark:bg-slate-600 dark:text-slate-100 ">
                <Briefcase />
              </div>
              <div className="order-1 rounded-lg border border-slate-200 bg-white p-4 px-6 py-4 shadow-sm shadow-xl dark:border-slate-600 dark:bg-gray-700 sm:w-5/12">
                <div className="mb-3 items-center justify-between sm:flex">
                  <time className="mb-1 text-xs font-semibold text-gray-400 sm:order-last sm:mb-0">
                    2012
                  </time>
                  <h4 className="text-sm font-normal text-gray-500 dark:text-gray-300">
                    Exploring a New Career Path
                  </h4>
                </div>

                <p className="rounded-lg border border-slate-200 bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-slate-500 dark:bg-gray-600 dark:text-gray-300">
                  After working part-time in several small industries as a
                  mechanic, I decided to change my career path and began my
                  studies in Computer Science at UTFPR.
                </p>
              </div>
            </li>

            <li className="mb-8 flex w-full items-center justify-between transition-transform duration-500">
              <div className="order-1 hidden w-5/12 sm:block"></div>
              <div className="order-1 mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-lg font-semibold text-slate-800 dark:bg-slate-600 dark:text-slate-100 ">
                <Code2 />
              </div>
              <div className="order-1 rounded-lg border border-slate-200 bg-white p-4 px-6 py-4 shadow-sm shadow-xl dark:border-slate-600 dark:bg-gray-700 sm:w-5/12">
                <div className="mb-3 flex-row-reverse items-center justify-between sm:flex">
                  <time className="mb-1 text-xs font-semibold text-gray-400 sm:order-last sm:mb-0">
                    2016
                  </time>
                  <h4 className="text-sm font-normal text-gray-500 dark:text-gray-300">
                    A Fresh Start in a New Career
                  </h4>
                </div>

                <p className="rounded-lg border border-slate-200 bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-slate-500 dark:bg-gray-600 dark:text-gray-300">
                  This was the year when I began my internship as a PHP
                  developer at a logistics company, working on warehouse
                  management software.
                </p>
              </div>
            </li>

            <li className="mb-8 flex w-full flex-row items-center justify-between transition-transform duration-500 sm:flex-row-reverse">
              <div className="order-1 hidden w-5/12 sm:block"></div>
              <div className="order-1 mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-lg font-semibold text-slate-800 dark:bg-slate-600 dark:text-slate-100 ">
                <GraduationCap />
              </div>
              <div className="order-1 rounded-lg border border-slate-200 bg-white p-4 px-6 py-4 shadow-sm shadow-xl dark:border-slate-600 dark:bg-gray-700 sm:w-5/12">
                <div className="mb-3 items-center justify-between sm:flex">
                  <time className="mb-1 text-xs font-semibold text-gray-400 sm:order-last sm:mb-0">
                    2017
                  </time>
                  <h4 className="text-sm font-normal text-gray-500 dark:text-gray-300">
                    Change Jobs
                  </h4>
                </div>

                <p className="rounded-lg border border-slate-200 bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-slate-500 dark:bg-gray-600 dark:text-gray-300">
                  First, I graduated 🎉, and afterward, I was hired to work as a
                  Salesforce developer in an Edtech company.
                </p>
              </div>
            </li>

            <li className="mb-8 flex w-full items-center justify-between transition-transform duration-500">
              <div className="order-1 hidden w-5/12 sm:block"></div>
              <div className="order-1 mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-lg font-semibold text-slate-800 dark:bg-slate-600 dark:text-slate-100 ">
                <ArrowLeftRight />
              </div>
              <div className="order-1 rounded-lg border border-slate-200 bg-white p-4 px-6 py-4 shadow-sm shadow-xl dark:border-slate-600 dark:bg-gray-700 sm:w-5/12">
                <div className="mb-3 flex-row-reverse items-center justify-between sm:flex">
                  <time className="mb-1 text-xs font-semibold text-gray-400 sm:order-last sm:mb-0">
                    2018
                  </time>
                  <h4 className="text-sm font-normal text-gray-500 dark:text-gray-300">
                    Transitioned to a New Job Role
                  </h4>
                </div>

                <p className="rounded-lg border border-slate-200 bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-slate-500 dark:bg-gray-600 dark:text-gray-300">
                  I decided to apply for an open position within the company I
                  was going to join the web team. I was accepted, and that's
                  when I primarily began working with Node.js and TypeScript.
                </p>
              </div>
            </li>

            <li className="mb-8 flex w-full flex-row items-center justify-between transition-transform duration-500 sm:flex-row-reverse">
              <div className="order-1 hidden w-5/12 sm:block"></div>
              <div className="order-1 mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-lg font-semibold text-slate-800 dark:bg-slate-600 dark:text-slate-100 ">
                <Activity />
              </div>
              <div className="order-1 rounded-lg border border-slate-200 bg-white p-4 px-6 py-4 shadow-sm shadow-xl dark:border-slate-600 dark:bg-gray-700 sm:w-5/12">
                <div className="mb-3 items-center justify-between sm:flex">
                  <time className="mb-1 text-xs font-semibold text-gray-400 sm:order-last sm:mb-0">
                    2020
                  </time>
                  <h4 className="text-sm font-normal text-gray-500 dark:text-gray-300">
                    Change Jobs
                  </h4>
                </div>

                <p className="rounded-lg border border-slate-200 bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-slate-500 dark:bg-gray-600 dark:text-gray-300">
                  I moved to a new job where the challenge for me was to create
                  a personal financial app from scratch using React and Node.
                </p>
              </div>
            </li>
          </ol>
        </ScrollAnimation>
      </section>
    </div>
  )
}

export default HomePage
