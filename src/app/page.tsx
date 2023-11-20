import Header from '@/components/header/header.component'
import SectionWelcome from '@/components/sections/section-welcome'
import SectionTimeline from '@/components/sections/section-timeline'
import SectionResume from '@/components/sections/section-resume'
import SectionSkills from '@/components/sections/section-skills'

const HomePage = () => {
  return (
    <div className="transition-color min-h-screen bg-sky-500 bg-[url('/images/clouds.svg')] duration-700 dark:bg-sky-950 dark:bg-[url('/images/stars.svg')]">
      <Header />
      <div className="fixed mt-8 h-64 w-full animate-translateX bg-[url('/images/sun.svg')] bg-[length:200px_200px] bg-[top_2rem_left_2rem] bg-no-repeat opacity-75 transition-transform duration-700 dark:translate-x-12 dark:translate-y-16 dark:bg-[url('/images/moon.svg')]" />

      {/* Welcome section */}
      <SectionWelcome />

      {/* Resume section */}
      <SectionResume />

      {/* Skills section */}
      <SectionSkills />

      {/* Timeline section */}
      <SectionTimeline />
    </div>
  )
}

export default HomePage
