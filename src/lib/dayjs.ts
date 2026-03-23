import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import isBetween from 'dayjs/plugin/isBetween'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import timezone from 'dayjs/plugin/timezone'
import 'dayjs/locale/tr'

dayjs.locale('tr')
dayjs.extend(utc)
dayjs.extend(isBetween)
dayjs.extend(advancedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(timezone)
dayjs.tz.setDefault('Europe/Istanbul')

export { dayjs }
