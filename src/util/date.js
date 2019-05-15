
function formatDate(format) { // yyyy-mm-dd 
    let result = format
    const info = {
        'y+': this.getFullYear(),        // 年份
        'M+': this.getMonth(),           // 月份
        'd+': this.getDate(),            // 日期
        'h+': this.getHours(),           // 时
        'm+': this.getMinutes(),         // 分
        's+': this.getSeconds(),         // 秒
        'S' : this.getMilliseconds(),    // 毫秒
    }
    for (const key in info) {
        const reg = new RegExp('(' + key + ')', 'g')
        if (reg.test(format)) {
            result = result.replace(reg, info[key].toString().padStart(RegExp.$1.length, 0))
        }
    }
    console.log('result: ', result);
    return result
}
Date.prototype.format = formatDate
new Date().format('现在是yyyy年MM月dd日，hh点， mm分, ss秒, yyyy')
// export default formatDate;