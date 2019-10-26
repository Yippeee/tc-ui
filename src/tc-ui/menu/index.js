import "./index.less"

let padding = 0

const step = 20

const paddingLeft = {
    "padding-left": padding.val + "px",
}

const paddingLeftSummary = {
    "padding-left": padding.val + "px",
}

export default {
    name: "customMenu",
    props: ["menus"],
    render() {
        return (
            <div>
                {this.menus.map(menu => {
                    padding += step
                    paddingLeft["padding-left"] = padding + "px"

                    console.log("paddingLeft: ", paddingLeft)
                    if (!menu.children) {
                        return (
                            <router-link class="content" style={paddingLeft} to={menu.path} tag="a">
                                {menu.name}
                            </router-link>
                        )
                    } else {
                        return (
                            <details>
                                <summary v-forbidPaste>{menu.name}</summary>
                                {/* <div class="content" style={paddingLeft}>
                                    {menu.content}
                                </div> */}
                                <customMenu menus={menu.children}></customMenu>
                            </details>
                        )
                    }
                })}
            </div>
        )
    },
    beforeDestroy() {
        padding = 0
    },
}
