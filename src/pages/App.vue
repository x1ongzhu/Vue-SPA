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
@import '../styles/app.less';
</style>
