export default {
    install(Vue) {
        Vue.directive("forbidPaste", {
            bind(el, binding, vNode) {
                console.log("el, binding, vNode: ", el, binding, vNode)
                el.style.color = "blue"
                el.oncopy = () => {
                    const copyRight = "From yippee"
                    const selection = window.getSelection()
                    var newDiv = document.createElement("div")
                    newDiv.style.position = "absolute"
                    newDiv.style.left = "-99999px"
                    el.appendChild(newDiv)
                    newDiv.innerHTML = copyRight + selection
                    selection.selectAllChildren(newDiv)
                    window.setTimeout(function() {
                        el.removeChild(newDiv)
                    }, 0)
                }
            },
        })
    },
}
