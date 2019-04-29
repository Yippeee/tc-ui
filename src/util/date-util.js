/**
 * @desc 获取当月第一天的星期
 * @param  {Date} date
 * @return {Number}
 */
export function getFirstDayWeek(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
}
/**
 * @desc 当月有多少天
 * @param  {Date} date
 * @return {Number}
 */
export function getMonthDays(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

/**
 * @desc 上一月有多少天
 * @param  {Date} date
 * @return {Number}
 */
export function getLastMonthDays(date) {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate()
}