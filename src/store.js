import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        isLoading: false,
        direction: 'forward',
        userInfo: null
    },
    mutations: {
        updateLoading(state, status) {
            state.isLoading = status
        },
        updateDirection(state, direction) {
            state.direction = direction
        },
        updateUserInfo(state, userInfo) {
            state.userInfo = userInfo
        }
    }
})
