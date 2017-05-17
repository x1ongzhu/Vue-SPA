import Vue from 'vue'
import App from './pages/App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
Vue.config.productionTip = false

Vue.use(VueResource)

var FastClick = require('fastclick')
FastClick.attach(document.body)

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
router.beforeEach(function (to, from, next) {
    store.commit('updateLoading', true)
    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)
    if (toIndex) {
        if (toIndex > fromIndex || !fromIndex || (toIndex === '0' && fromIndex === '0')) {
            store.commit('updateDirection', 'forward')
        } else {
            store.commit('updateDirection', 'reverse')
        }
    } else {
        ++historyCount
        history.setItem('count', historyCount)
        to.path !== '/' && history.setItem(to.path, historyCount)
        store.commit('updateDirection', 'forward')
    }
    if (/\/http/.test(to.path)) {
        let url = to.path.split('http')[1]
        window.location.href = `http${url}`
    } else {
        next()
    }
})

router.afterEach(function (to) {
    store.commit('updateLoading', false)
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
