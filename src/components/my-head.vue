<template>
    <div class="my-head">
        <div class="wrap">
            <h1>
                <router-link to="/">
                    <img class="head-logo" :src="logoUrl" :alt="siteName">
                    <!-- {{ siteName }} -->
                </router-link>
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-head',
    data() {
        return {
            logoUrl: require('../assets/images/logo.png'),
            siteName: '中模网前端编码规范'
        };
    }
};
</script>

<style scoped>
.my-head {
    background-color: #343741;
    height: 60px;
    line-height: 60px;
    color: #fff;
}
.head-logo {
    float: left;
    margin-top: 13px;
    width: 34px;
    height: 34px;
    margin-right: 10px;
}
h1 {
    font-size: 18px;
}
h1 a {
    display: block;
    float: left;
    color: #fff;
}
h1 a:hover {
    opacity: 0.75;
}
</style>
