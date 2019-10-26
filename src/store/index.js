import Vue from 'vue'
import Vuex from 'vuex'

if (!window.Vuex) Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        goods: ['sth'],
        goods2: [22],
        goods3: [2222],
    },
    mutations: {
        buy(state, sth) {
            state.goods.push(sth)
        },
        decrease(state) {
            state.goods.pop()
        },
        showGoods(state) {
            console.log(state.goods)
        }
    },
    actions: {
        async changeGood(context, goods) { // action 提交的是mutation 而不是直接改状态
            const p = new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('aaaa')
                }, 3000)
            })
            await p()
            context.commit('buy', goods)
            context.commit('showGoods')
        }
    }
})