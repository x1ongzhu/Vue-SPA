<template>
    <div>
        <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
            <router-view class="tab-page"></router-view>
        </transition>
        <tab-bar :data="tabItems" @tabClick="tabClick"></tab-bar>
    </div>
</template>

<script>
import TabBar from '../components/TabBar'
import Router from 'vue-router'
import { mapState } from 'vuex'

export default {
    name: 'index',
    components: {
        TabBar
    },
    data() {
        return {
            tabItems: [
                {
                    name: 'discover',
                    label: '发现',
                    src: [
                        require('../assets/icon_discover.png'),
                        require('../assets/icon_discover_pre.png')
                    ]
                },
                {
                    name: 'order',
                    label: '订单',
                    src: [
                        require('../assets/icon_order.png'),
                        require('../assets/icon_order_pre.png')
                    ]
                },
                {
                    name: 'training',
                    label: '培训',
                    src: [
                        require('../assets/icon_training.png'),
                        require('../assets/icon_training_pre.png')
                    ]
                },
                {
                    name: 'user',
                    label: '我的',
                    src: [
                        require('../assets/icon_user.png'),
                        require('../assets/icon_user_pre.png')
                    ]
                }
            ]
        }
    },
    computed: {
        ...mapState(['direction'])
    },
    methods: {
        tabClick(tab) {
            this.$router.replace({ name: tab.name })
        }
    }
}

</script>

<style lang="less" scoped>
.tab-page {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    animation-duration: .3s;
    animation-fill-mode: both;
    backface-visibility: hidden;
    overflow: auto;
    transform: translate3d(0, 0, 0);    padding-bottom: 49px;
}
</style>
