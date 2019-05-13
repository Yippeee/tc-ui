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
    }
})