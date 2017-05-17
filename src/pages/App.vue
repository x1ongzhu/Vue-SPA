<template>
    <div class="app">
        <transition :name="'vux-pop-' + (direction === 'forward' ? 'out' : 'in')">
            <router-view class="router-view"></router-view>
        </transition>
        <progress-dialog v-if="isLoading"></progress-dialog>
    </div>
</template>

<script>
import ProgressDialog from '../components/ProgressDialog'
import { mapState } from 'vuex'
export default {
    name: 'app',
    components: {
        ProgressDialog
    },
    computed: {
        ...mapState(['isLoading', 'direction'])
    }
}

</script>
<style lang="less" scoped>
.app {
    position: relative;
    height: 100%;
}

.router-view {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    animation-duration: .3s;
    animation-fill-mode: both;
    backface-visibility: hidden;
    overflow: auto;
    transform: translate3d(0, 0, 0);
}
</style>

<style lang="less">
@import '../styles/reset.less';
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
    will-change: transform;
    height: 100%;
    position: absolute;
    left: 0;
}

.vux-pop-out-enter-active {
    animation-name: popInLeft;
}

.vux-pop-out-leave-active {
    animation-name: popOutRight;
}

.vux-pop-in-enter-active {
    perspective: 1000;
    animation-name: popInRight;
}

.vux-pop-in-leave-active {
    animation-name: popOutLeft;
}

@keyframes popInLeft {
    from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes popOutLeft {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
}

@keyframes popInRight {
    from {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes popOutRight {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
}
</style>
