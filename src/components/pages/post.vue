<template>
    <div>
        <my-head></my-head>
        <main class="wrap">
            <aside>
                <ul>
                    <li v-for="(item, index) in sideNav" :key="index" @click="getJsonData(item.link, index)" :class="{active: index === nowIndex}">
                        {{ item.name }}
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
            nowIndex: 0
        };
    },
    created() {
        Axios.get('./static/json/config.json')
            .then(respones => {
                return this.sideNav = respones.data;
            });
    },
    computed: {

    },
    methods: {
        getJsonData: function (parentsLink, index) {
            Axios.get('./static/json/' + parentsLink + '/config.json')
                .then(respones => {
                    for (var i = 0; i < respones.data[0].artilce.length; i++) {
                        Axios.get('./static/json/' + parentsLink + '/' + respones.data[0].artilce[i].link + '.json')
                            .then(res => {
                                return this.jsonData.push(res.data[0]);
                            }).catch(function (err) {
                                console.log(err);
                            })
                    }
                    if (respones.data[0].nav[0].child != undefined) {
                        for (var i = 0; i < respones.data[0].nav[0].child[0].artilce.length; i++) {
                            Axios.get('./static/json/' + parentsLink + '/' + respones.data[0].nav[0].child[0].link + '/' + respones.data[0].nav[0].child[0].artilce[i].link + '.json')
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
main {
    margin-top: 20px;
}
aside {
    float: left;
    width: 180px;
    margin-right: 20px;
    background-color: #f8f8f8;
    border: 1px solid #e1e1e1;
    border-radius: 3px;
}
aside li {
    margin: 0.8em 0;
    padding: 0 1em;
    line-height: 40px;
    text-align: right;
    cursor: pointer;
}
aside li:hover,
.active {
    color: #09f;
    background-color: #e1e1e1;
}
section {
    float: left;
}
</style>
