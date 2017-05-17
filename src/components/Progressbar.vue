<template>
    <div class="progressbar" :style="progressbar">
        <div class="line" :style="line" v-for="n in 12"></div>
    </div>
</template>
<script>
export default {
    name: 'progressbar',
    props: {
        size: {
            default: 36
        },
        color: {
            default: '#999'
        }
    },
    computed: {
        progressbar() {
            return {
                width: this.size + 'px',
                minWidth: this.size + 'px',
                height: this.size + 'px',
                minHeight: this.size + 'px',
                position: 'relative'
            }
        },
        line() {
            return {
                position: 'absolute',
                width: (this.size / 12) + 'px',
                height: (this.size / 4) + 'px',
                left: 0,
                right: 0,
                top: 0,
                margin: '0 auto',
                borderRadius: (this.size / 24) + 'px',
                background: this.color,
                transformOrigin: '50% 200%'
            }
        }
    }
}
</script>
<style lang="less" scoped>
.line {
    &:nth-child(1) {
        transform: rotate3d(0, 0, 1, 0deg);
        animation: fade 1.2s linear 0s infinite;
    }
    &:nth-child(2) {
        transform: rotate3d(0, 0, 1, 30deg);
        animation: fade 1.2s linear 0.1s infinite;
    }
    &:nth-child(3) {
        transform: rotate3d(0, 0, 1, 60deg);
        animation: fade 1.2s linear 0.2s infinite;
    }
    &:nth-child(4) {
        transform: rotate3d(0, 0, 1, 90deg);
        animation: fade 1.2s linear 0.3s infinite;
    }
    &:nth-child(5) {
        transform: rotate3d(0, 0, 1, 120deg);
        animation: fade 1.2s linear 0.4s infinite;
    }
    &:nth-child(6) {
        transform: rotate3d(0, 0, 1, 150deg);
        animation: fade 1.2s linear 0.5s infinite;
    }
    &:nth-child(7) {
        transform: rotate3d(0, 0, 1, 180deg);
        animation: fade 1.2s linear 0.6s infinite;
    }
    &:nth-child(8) {
        transform: rotate3d(0, 0, 1, 210deg);
        animation: fade 1.2s linear 0.7s infinite;
    }
    &:nth-child(9) {
        transform: rotate3d(0, 0, 1, 240deg);
        animation: fade 1.2s linear 0.8s infinite;
    }
    &:nth-child(10) {
        transform: rotate3d(0, 0, 1, 270deg);
        animation: fade 1.2s linear 0.9s infinite;
    }
    &:nth-child(11) {
        transform: rotate3d(0, 0, 1, 300deg);
        animation: fade 1.2s linear 1s infinite;
    }
    &:nth-child(12) {
        transform: rotate3d(0, 0, 1, 330deg);
        animation: fade 1.2s linear 1.1s infinite;
    }
}


@keyframes fade {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
