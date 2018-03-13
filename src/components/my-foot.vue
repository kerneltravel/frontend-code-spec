<template>
    <div class="footer" v-html="copyRight"></div>
</template>

<script>
export default {
    name: 'my-foot',
    data() {
        return {
            copyRight: '&copy; 2018&nbsp;&nbsp;&sdot;&nbsp;&nbsp;Design & Dev by Xxy&nbsp;&nbsp;&sdot;&nbsp;&nbsp;Powered  by <a href="https://cn.vuejs.org/" target="_blank">Vue.js</a>'
        }
    }
}
</script>

<style scoped>
.footer {
    background-color: #393d49;
    font-size: 14px;
    line-height: 6;
    color: #999;
    text-align: center;
}
</style>
<style>
.footer a {
    color: #999;
}
</style>
