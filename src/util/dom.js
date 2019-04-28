
/**
 * @decs 获取元素外层的滚动元素
 * @param  {HTMLElement} dom
 */
export function getOutScrollContainer(dom) {
    let parentElement = dom.parentElement
    while (parentElement) {
        if (isScroll(parentElement)) {
            return parentElement
        } else {
            parentElement = parentElement.parentElement
        }
    }
    return parentElement
}
/**
 * @decs 判断元素是否是可以滚动的
 * @param  {HTMLElement} dom
 * @return {Boolean} 
 */
export function isScroll(dom) {
    if (getStyle(dom, 'overflow-y') == 'scroll' || getStyle(dom, 'overflow-x') == 'scroll' || getStyle(dom, 'overflow-y') == 'scroll') {
        return true
    } else {
        return false
    }
}

/**
 * @decs  获取元素的样式
 * @param  {HTMLElement} dom： 目标元素
 * @param  {String} styleName: 样式名称
 * @return {String}
 */
export function getStyle(dom, styleName) {
    return window.getComputedStyle(dom)[styleName]
}

/**
 * @decs 元素是否位于滚动元素实现范围之内， 利用 getBoundingClientRect() 方法
 * @param  {HTMLElement} el
 * @param  {HTMLElement} container
 */
export function inScrollView(el, container) {
    const elInfo = el.getBoundingClientRect()
    const containerInfo = container.getBoundingClientRect()

    if (elInfo.left <= containerInfo.right &&
        elInfo.right >= containerInfo.left &&
        elInfo.top <= containerInfo.bottom &&
        elInfo.bottom >= containerInfo.top) {
            return true
    }
    return false
}