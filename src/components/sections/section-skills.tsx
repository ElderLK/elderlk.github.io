'use client'

import { useTranslations } from 'next-intl'
import Heading from '@/components/heading/heading.component'

import SectionBase from './section-base'
import RangeBar from '../range-bar/range-bar.component'

// const skills = {
//   javascript: {
//     experience: 6,
//     knowledge: 85,
//     children: {
//       Typescript: {
//         experience: 5,
//         knowledge: 90
//       },
//       NodeJs: {
//         experience: 5,
//         knowledge: 85,
//         children: {
//           express: {
//             experience: 5,
//             knowledge: 90
//           },
//           nestJs: {
//             experience: 1,
//             knowledge: 65
//           }
//         }
//       },
//       ReactJs: {
//         experience: 5,
//         knowledge: 90,
//         children: {
//           redux: {
//             experience: 3,
//             knowledge: 80
//           },
//           nextJs: {
//             experience: 1,
//             knowledge: 70
//           },
//           'styledComponents / Material Ui': {
//             experience: 3,
//             knowledge: 80
//           },
//           tailwind: {
//             experience: 1,
//             knowledge: 70
//           }
//         }
//       }
//     }
//   },
//   php: {
//     experience: 2,
//     knowledge: 75,
//     children: {
//       Laravel: {
//         experience: 1,
//         knowledge: 60
//       },
//       Yii: {
//         experience: 1,
//         knowledge: 60
//       }
//     }
//   },
//   java: {
//     experience: 2,
//     knowledge: 75
//   },
//   salesforce: {
//     experience: 1,
//     knowledge: 50
//   }
// }

const SectionSkills = () => {
  const t = useTranslations('skillsSection')

  return (
    <SectionBase id="tooling">
      <Heading lineLeft size="lg">
        {t('title')}
      </Heading>
      <div className="my-2 w-full">
        <h4 className="text-lg font-bold">Javascript</h4>
        <h6 className="font-semibold">6 Years experience</h6>
        <RangeBar complete={60} />
      </div>
      <div className="flex w-full space-x-8">
        <div className="w-4/12 space-y-4 border-x-2 border-gray-200 p-4">
          <div>
            <h4 className="text-lg font-bold">ReactJs</h4>
            <h6 className="font-semibold">5 Years experience</h6>
            <RangeBar complete={60} />
          </div>
          <div className="pl-8">
            <h4 className="text-lg font-bold">NextJS</h4>
            <h6 className="font-semibold">3 Years experience</h6>
            <RangeBar complete={60} />
          </div>
          <div className="pl-8">
            <h4 className="text-lg font-bold">Redux</h4>
            <h6 className="font-semibold">3 Years experience</h6>
            <RangeBar complete={60} />
          </div>
          <div className="pl-8">
            <h4 className="text-lg font-bold">
              Styled Components / Material UI
            </h4>
            <h6 className="font-semibold">3 Years experience</h6>
            <RangeBar complete={60} />
          </div>
          <div className="pl-8">
            <h4 className="text-lg font-bold">Tailwind</h4>
            <h6 className="font-semibold">3 Years experience</h6>
            <RangeBar complete={60} />
          </div>
        </div>
        <div className="w-4/12 space-y-4 border-x-2 border-gray-200 p-4">
          <div>
            <h4 className="text-lg font-bold">NodeJs</h4>
            <h6 className="font-semibold">5 Years experience</h6>
            <RangeBar complete={60} />
          </div>
          <div className="pl-8">
            <h4 className="text-lg font-bold">Express</h4>
            <h6 className="font-semibold">3 Years experience</h6>
            <RangeBar complete={60} />
          </div>
          <div className="pl-8">
            <h4 className="text-lg font-bold">NestJs</h4>
            <h6 className="font-semibold">3 Years experience</h6>
            <RangeBar complete={60} />
          </div>
          <div className="pl-8">
            <h4 className="text-lg font-bold">Prisma ORM</h4>
            <h6 className="font-semibold">3 Years experience</h6>
            <RangeBar complete={60} />
          </div>
        </div>
        <div className="w-4/12 space-y-4 border-x-2 border-gray-200 p-4">
          <div>
            <h4 className="text-lg font-bold">Typescript</h4>
            <h6 className="font-semibold">5 Years experience</h6>
            <RangeBar complete={60} />
          </div>
        </div>
      </div>
      <div className="my-2 w-full">
        <h4 className="text-lg font-bold">PHP</h4>
        <h6 className="font-semibold">6 Years experience</h6>
        <RangeBar complete={60} />
      </div>
      <div className="flex w-full space-x-8">
        <div className="w-4/12 space-y-4 border-x-2 border-gray-200 p-4">
          <div>
            <h4 className="text-lg font-bold">Laravel</h4>
            <h6 className="font-semibold">5 Years experience</h6>
            <RangeBar complete={60} />
          </div>
        </div>
        <div className="w-4/12 space-y-4 border-x-2 border-gray-200 p-4">
          <div>
            <h4 className="text-lg font-bold">Yii</h4>
            <h6 className="font-semibold">5 Years experience</h6>
            <RangeBar complete={60} />
          </div>
        </div>
        <div className="w-4/12 space-y-4 border-x-2 border-gray-200 p-4">
          <div>
            <h4 className="text-lg font-bold">Wordpress</h4>
            <h6 className="font-semibold">5 Years experience</h6>
            <RangeBar complete={60} />
          </div>
        </div>
      </div>
      <div className="my-2 w-full">
        <h4 className="text-lg font-bold">Outros</h4>
        <h6 className="font-semibold">6 Years experience</h6>
        <RangeBar complete={60} />
      </div>
      <div className="flex w-full space-x-8">
        <div className="w-4/12 space-y-4 border-x-2 border-gray-200 p-4">
          <div>
            <h4 className="text-lg font-bold">Java</h4>
            <h6 className="font-semibold">5 Years experience</h6>
            <RangeBar complete={60} />
          </div>
        </div>
        <div className="w-4/12 space-y-4 border-x-2 border-gray-200 p-4">
          <div>
            <h4 className="text-lg font-bold">Salesforce</h4>
            <h6 className="font-semibold">5 Years experience</h6>
            <RangeBar complete={60} />
          </div>
        </div>
        <div className="w-4/12 space-y-4 border-x-2 border-gray-200 p-4">
          <div>
            <h4 className="text-lg font-bold">React Native</h4>
            <h6 className="font-semibold">5 Years experience</h6>
            <RangeBar complete={60} />
          </div>
        </div>
      </div>
    </SectionBase>
  )
}

export default SectionSkills
