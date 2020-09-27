// import { parseISO, format } from 'date-fns'

// export default function DateFormater({ dateString }) {
//   const date = parseISO(dateString)
//   return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
// }

export default function DateFormater({ dateString }) {
  return dateString.slice(0, 10)
}