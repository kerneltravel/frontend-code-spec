<template>
    <div>
        <div class="head">
            <div class="head-logo">
                <img class="head-logo-img" :src="logoUrl" :alt="logoAlt">
            </div>
            <h1 class="head-title">{{ title }}</h1>
            <h2 class="head-sub-title">{{ subTitle }}</h2>
            <p class="head-link">
                <router-link to="/post">开始使用test</router-link>
            </p>
            <p class="head-info">
                <span>当前版本：{{ version }}</span>
            </p>
        </div>
        <div class="container wrap">
            <h3>规范概述</h3>
            <p>规范的制定是为了帮助我们更快、更好、更高效的完成繁重、复杂、多样化的任务，我们制作规范的主要目的在于：</p>
            <ul>
                <li>1、降低每个组员介入项目的门槛成本；</li>
                <li>2、提高工作效率及协同开发的便捷性；</li>
                <li>3、高度统一的代码风格，始终确保每一行代码都像是同一个人编写的；</li>
                <li>4、提供一整套HTML、CSS、JavaScript解决方案，来帮助前端开发人员快速做出高质量的符合要求的页面；</li>
                <!-- <li>5、永远遵循同一套编码规范，不管有多少人共同参与同一项目，始终确保每一行代码都像是同一个人编写的。</li> -->
            </ul>
            <blockquote>
                本规范参考和借鉴了百度、京东、腾讯、Goggle、Bootstrap等前端编码规范，感谢百度、京东、腾讯、Goggle、Bootstrap提供了优质开源的文档。
            </blockquote>
        </div>
        <div class="container bg-gray">
            <div class="wrap">
                <h3>基本信息</h3>
                <ul>
                    <li>当前版本：1.0.0</li>
                    <li>规范发起：Xxy</li>
                    <li>参与人群：Yzt</li>
                    <li>最后更新：2018-03-07</li>
                </ul>
            </div>
        </div>
        <div class="container wrap">
            <h3>规范分类</h3>
            <ul>
                <li>1、通用约定</li>
                <li>2、HTML 规范</li>
                <li>3、CSS 规范</li>
                <li>4、JavaScript 规范</li>
                <li>5、图片规范</li>
            </ul>
        </div>
        <my-foot></my-foot>
    </div>
</template>

<script>
import MyFoot from '@/components/my-foot'

export default {
    name: 'index',
    components: {
        MyFoot
    },
    data() {
        return {
            logoUrl: require('../../assets/images/logo.png'),
            logoAlt: '中国模具网',
            title: 'Front-End Codeing Specification',
            subTitle: '中模网前端编码规范',
            version: '1.0.0'
        };
    }
};
</script>

<style scoped>
.head {
    padding: 70px 0 40px 0;
    background-color: #393d49;
    border-bottom: 1px solid #343741;
    box-shadow: 3px 3px 3px #dedede;
    text-align: center;
    color: #fff;
}
.head-logo {
    display: inline-block;
    width: 120px;
    height: 120px;
    line-height: 120px;
    padding: 25px;
    border: 1px solid #fff;
    box-shadow: 3px 3px 3px #2f4056;
    border-radius: 100%;
    opacity: 0.75;
}
.head-logo-img {
    width: 100px;
    margin-top: 10px;
}
.head-title {
    line-height: 120px;
    font-size: 46px;
}
.head-sub-title {
    font-size: 22px;
    padding-bottom: 30px;
    letter-spacing: 2px;
}
.head-info {
    font-size: 14px;
    line-height: 30px;
    color: #b1b1b1;
    opacity: 0.75;
}
.head-link {
    margin: 24px 0 40px 0;
    font-size: 18px;
    font-weight: 300;
}
.head-link a {
    border: 1px solid #c2c2c2;
    border-radius: 8px;
    padding: 14px 50px;
    color: #fff;
    opacity: 0.75;
}
.head-link a:hover {
    opacity: 10;
}
.bg-gray {
    background-color: #f6f6f8;
}
.container {
    padding: 60px 0 70px 0;
}
.container h3 {
    font-size: 30px;
    font-weight: 700;
    line-height: 2;
    margin-bottom: 20px;
}
.container li {
    margin-left: 2em;
}
.container p,
.container li {
    font-size: 18px;
    line-height: 2.5;
    color: #888;
}
.container p {
    color: #555;
}
.container blockquote {
    margin-top: 20px;
    padding: 15px;
    background-color: #f2f2f2;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    color: #787878;
    font-size: 14px;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    line-height: 2;
}
</style>
