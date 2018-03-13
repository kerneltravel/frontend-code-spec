<template>
    <div>
        <my-head></my-head>
        <main class="wrap">
            <aside>
                <ul>
                    <li v-for="(item, index) in sideNav" :key="index" @click="getJson(item.link, index)" :class="{active: index === nowIndex}">
                        {{ item.name }}
                    </li>
                </ul>
            </aside>
            <Article>
                <div v-for="(item, index) in myJson" :key="index">
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
            myJson: [],
            flag: false,
            nowIndex: ''
        };
    },
    created() {
        Axios.get('./static/json/config.json')
            .then(respones => {
                return this.sideNav = respones.data;
            });
    },
    methods: {
        getJson: function (parentsLink, index) {
            if (!this.flag) {
                Axios.get('./static/json/' + parentsLink + '/config.json')
                    .then(respones => {
                        if (respones.data[0].nav[0].child === undefined) {
                            for (var i = 0; i < respones.data[0].artilce.length; i++) {
                                Axios.get('./static/json/' + parentsLink + '/' + respones.data[0].artilce[i].link + '.json')
                                    .then(res => {
                                        return this.myJson.push(res.data[0]);
                                    }).catch(function (err) {
                                        console.log(err);
                                    })
                            }
                        } else {
                            for (var i = 0; i < respones.data[0].artilce.length; i++) {
                                Axios.get('./static/json/' + parentsLink + '/' + respones.data[0].artilce[i].link + '.json')
                                    .then(res => {
                                        return this.myJson.push(res.data[0]);
                                    }).catch(function (err) {
                                        console.log(err);
                                    })
                            }
                            for (var i = 0; i < respones.data[0].nav[0].child[0].artilce.length; i++) {
                                Axios.get('./static/json/' + parentsLink + '/' + respones.data[0].nav[0].child[0].link + '/' + respones.data[0].nav[0].child[0].artilce[i].link + '.json')
                                    .then(res => {
                                        return this.myJson.push(res.data[0]);
                                    }).catch(function (err) {
                                        console.log(err);
                                    })
                            }
                        }
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            }
            // this.flag = true;
            this.nowIndex = index;
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
