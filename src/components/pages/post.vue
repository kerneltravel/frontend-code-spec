<template>
    <div>
        <!-- <my-head></my-head> -->
        <main>
            <aside>
                <h1>
                    <a href="/">中模网前端编码规范</a>
                </h1>
                <ul>
                    <li v-for="(item, index) in sideNav" :key="index" @click="getJsonData(item.link, index)" :class="{active: index === nowIndex}">
                        {{ index + 1 }}. {{ item.name }}
                    </li>
                </ul>
            </aside>
            <Article>
                <div v-for="(item, index) in jsonData" :key="index">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.content }}</p>
                    <hr>
                </div>
            </Article>
        </main>
    </div>
</template>

<script>
import Axios from 'axios'
import MyHead from '@/components/my-head'
import Article from '@/components/pages/article'

export default {
    name: '',
    components: {
        MyHead,
        Article
    },
    data() {
        return {
            sideNav: [],
            jsonData: [],
            nowIndex: ''
        };
    },
    created() {
        Axios.get('./static/json/config.json')
            .then(respones => {
                return this.sideNav = respones.data;
            });
        this.getJsonData('Common', 0);
    },
    methods: {
        getJsonData: function (folder, index) {
            if (this.nowIndex === index) return;
            Axios.get('./static/json/' + folder + '/config.json')
                .then(respones => {
                    for (var i = 0; i < respones.data[0].artilce.length; i++) {
                        Axios.get('./static/json/' + folder + '/' + respones.data[0].artilce[i].link + '.json')
                            .then(res => {
                                return this.jsonData.push(res.data[0]);
                            }).catch(function (err) {
                                console.log(err);
                            })
                    }
                    if (respones.data[0].nav[0].child != undefined) {
                        for (var i = 0; i < respones.data[0].nav[0].child[0].artilce.length; i++) {
                            Axios.get('./static/json/' + folder + '/' + respones.data[0].nav[0].child[0].link + '/' + respones.data[0].nav[0].child[0].artilce[i].link + '.json')
                                .then(res => {
                                    return this.jsonData.push(res.data[0]);
                                }).catch(function (err) {
                                    console.log(err);
                                })
                        }
                    }
                })
                .catch(function (err) {
                    console.log(err);
                })
            this.nowIndex = index; // 把当前点击时获取的 index 赋值给 nowIndex；如果两者相等，则显示高亮
            this.jsonData = []; // 清空数组 jsonData 的值
        }
    }
};
</script>

<style scoped>
aside {
    position: absolute;
    left: 0;
    top: 0;
    width: 220px;
    height: 100%;
    background-color: #fafafa;
    border-right: 1px solid #e8e8e8;
}
aside h1 {
    margin-bottom: 15px;
    height: 60px;
    line-height: 60px;
    background-color: #fcfcfc;
    border-bottom: 1px solid #e8e8e8;
    font-size: 16px;
    text-align: center;
    letter-spacing: 1px;
}
aside h1 a:hover {
    text-decoration: underline;
}
aside li {
    font-size: 14px;
    padding: 0 1em;
    line-height: 36px;
    cursor: pointer;
}
aside li:hover,
.active {
    color: #08f;
}
section {
    margin-left: 220px;
}
</style>
