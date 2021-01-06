import { FiClock as icon } from 'react-icons/fi'
import TimeInput from '../../components/timeInput'

export default {
  name: 'dailyRoutine',
  type: 'object',
  title: 'Daily Routine',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    // {
    //   name: 'time',
    //   type: 'string',
    //   title: 'Time',
    //   description: 'HH:MM (24 hour clock)',
    //   validation: Rule => Rule.required().custom(time => {
    //     const result = moment(time, 'HH:mm', true).isValid()
    //     if (!result) {
    //       return 'Time is invalid, it must be HH:MM. e.g 06:59'
    //     }
    //     return true
    //   })
    // },
    {
      name: 'time',
      title: 'Time',
      type: 'string',
      inputComponent: TimeInput,
      validation: Rule => Rule.required().error('What is a routine with a set time')
    }
  ],
  preview: {
    select: {
      title: 'title',
      time: 'time'
    },
    prepare: ({ title, time }) => {
      const routine = `${title} — ${time}`
      return {
        title: routine,
        media: icon
      }
    }
  }
}
