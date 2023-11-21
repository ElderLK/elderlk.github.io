'use client'

import { useTranslations } from 'next-intl'
import Heading from '@/components/heading/heading.component'

import SectionBase from './section-base'
import RangeBar from '../range-bar/range-bar.component'
import React from 'react'

type Skill = {
  name: string
  experience: number
  knowledge: number
  children?: Record<string, Skill>
}

type Skills = Record<string, Skill>

const skills: Skills = {
  javascript: {
    name: 'Javascript',
    experience: 6,
    knowledge: 85,
    children: {
      ReactJs: {
        name: 'ReactJs',
        experience: 5,
        knowledge: 90,
        children: {
          redux: {
            name: 'Redux',
            experience: 3,
            knowledge: 80
          },
          nextJs: {
            name: 'NextJs',
            experience: 1,
            knowledge: 70
          },
          styledComponentsMui: {
            name: 'Styled Components / Material Ui',
            experience: 3,
            knowledge: 80
          },
          tailwind: {
            name: 'Tailwind',
            experience: 1,
            knowledge: 70
          }
        }
      },
      NodeJs: {
        name: 'NodeJS',
        experience: 5,
        knowledge: 85,
        children: {
          express: {
            name: 'Express',
            experience: 5,
            knowledge: 90
          },
          nestJs: {
            name: 'NestJs',
            experience: 1,
            knowledge: 65
          }
        }
      },
      Typescript: {
        name: 'Typescript',
        experience: 5,
        knowledge: 90
      }
    }
  },
  php: {
    name: 'PHP',
    experience: 2,
    knowledge: 75,
    children: {
      Laravel: {
        name: 'Laravel',
        experience: 1,
        knowledge: 60
      },
      Yii: {
        name: 'Yii',
        experience: 1,
        knowledge: 60
      },
      Wordpress: {
        name: 'Wordpress',
        experience: 1,
        knowledge: 60
      }
    }
  },
  others: {
    name: '+',
    experience: 2,
    knowledge: 75,
    children: {
      java: {
        name: 'Java',
        experience: 2,
        knowledge: 75
      },
      salesforce: {
        name: 'Salesforce',
        experience: 1,
        knowledge: 50
      },
      reactNative: {
        name: 'React Native',
        experience: 1,
        knowledge: 75
      }
    }
  }
}

const SectionSkills = () => {
  const t = useTranslations('skillsSection')

  return (
    <SectionBase id="tooling">
      <Heading lineLeft size="lg">
        {t('title')}
      </Heading>
      {Object.keys(skills).map((key) => {
        const skill = skills[key]
        return (
          <React.Fragment key={key}>
            <div className="z-10 my-2 w-full dark:text-gray-300">
              <h4 className="text-lg font-bold">{skill?.name}</h4>
              <h6 className="font-semibold">
                {skill.experience} Years experience
              </h6>
              <RangeBar complete={skill.knowledge} />
            </div>
            {skill.children && (
              <div className="z-10 flex w-full flex-col dark:text-gray-300 md:flex-row md:space-x-8">
                {Object.keys(skill.children).map((keyChild) => {
                  const skillChild = skill.children?.[keyChild]

                  return (
                    <div
                      key={keyChild}
                      className="space-y-4 border-x-2 border-gray-200 p-4 md:w-4/12"
                    >
                      <div className="pl-2">
                        <h4 className="text-lg font-bold">
                          {skillChild?.name}
                        </h4>
                        <h6 className="font-semibold">
                          {skillChild?.experience} Years experience
                        </h6>
                        <RangeBar complete={skillChild?.knowledge ?? 0} />
                      </div>
                      {skillChild?.children &&
                        Object.keys(skillChild?.children).map(
                          (keyGranChild) => {
                            const skillGrandChild =
                              skillChild?.children?.[keyGranChild]
                            return (
                              <div className="pl-8" key={keyGranChild}>
                                <h4 className="text-lg font-bold">
                                  {skillGrandChild?.name}
                                </h4>
                                <h6 className="font-semibold">
                                  {skillGrandChild?.experience} Years experience
                                </h6>
                                <RangeBar
                                  complete={skillGrandChild?.knowledge ?? 0}
                                />
                              </div>
                            )
                          }
                        )}
                    </div>
                  )
                })}
              </div>
            )}
          </React.Fragment>
        )
      })}
    </SectionBase>
  )
}

export default SectionSkills
