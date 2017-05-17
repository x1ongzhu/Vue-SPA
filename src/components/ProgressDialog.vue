<template>
    <div class="progress-container" @touchstart.stop.prevent="">
        <div class="progress">
            <progressbar color="#FFFFFF"></progressbar>
            <div class="msg">{{message}}</div>
        </div>
    </div>
</template>
<script>
import Progressbar from './Progressbar'
export default {
    name: 'progress-dialog',
    props: {
        message: {
            type: String,
            default() {
                return '正在加载'
            }
        }
    },
    components: {
        Progressbar
    }
}

</script>
<style scoped>
.progress-container {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}

.progress {
    width: 120px;
    height: 120px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 80px;
    margin: auto;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.img-p {
    width: 30px;
    height: 30px;
    animation: spin 1s infinite linear;
    -webkit-animation: spin 1s infinite linear;
}

.msg {
    color: #fff;
    font-size: 14px;
    margin-top: 12px;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@-webkit-keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
