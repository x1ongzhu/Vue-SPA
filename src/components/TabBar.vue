<template>
    <div class="tab-bar">
        <div class="tab-bar-item" @click="click(index)" v-for="(item, index) in data">
            <img :src="active===index ? item.src[1] : item.src[0]">
            <span :class="active===index ? 'active' : ''">{{item.label}}</span>
        </div>
    </div>
</template>
<script>
import _ from 'lodash'
export default {
    name: 'tab-bar',
    props: {
        data: {}
    },
    created() {
        let i = _.findIndex(this.data, chr => chr.name === this.$route.name)
        if (i !== -1) {
            this.active = i
        }
    },
    data() {
        return {
            active: 0
        }
    },
    methods: {
        click(i) {
            this.$emit('tabClick', this.data[i])
            this.active = i
        }
    }
}
</script>

<style lang="less" scoped>
@import '../styles/variables.less';
.tab-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 49px;
    min-height: 49px;
    background: @tab-bar-bg;
    box-shadow: @tab-bar-shadow;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 99;
}

.tab-bar-item {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    img {
        width: 22px;
        height: 22px;
    }
    span {
        color: @light-gray;
        font-size: 10px;
        margin-top: 2px;
    }
    span.active {
        color: @primary;
    }
}
</style>
