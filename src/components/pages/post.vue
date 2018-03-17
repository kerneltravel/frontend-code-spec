<template>
    <div>
        <!-- <my-head></my-head> -->
        <main>
            <aside>
                <h1>
                    <a href="/">中模网前端编码规范</a>
                </h1>
                <ul>
                    <li v-for="(item, index) in sideNav" :key="index">
                        <span @click="getJsonData(item.link, index)" :class="{active: index === nowIndex}">{{ index + 1 }}. {{ item.name }}</span>
                        <ul v-if="item.children" :class="{on: index === nowIndex}">
                            <li v-for="(childItem, childIndex) in item.children" :key="childIndex">
                                <a href="javascript:void(0)" @click="goAnchor('#anchor-' + childIndex)">{{ childItem.link }}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
            <Article>
                <div v-for="(item, index) in jsonData" :key="index">
                    <h3 :id="'anchor-' + index">{{ item.title }}</h3>
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
            children: [],
            jsonData: [],
            nowIndex: ''
        };
    },
    created() {
        Axios.get('./static/json/nav.json')
            .then(respones => {
                this.sideNav = respones.data;
                this.getJsonData(this.sideNav[0].link, 0)
            });
    },
    methods: {
        getJsonData: function (folder, index) {
            if (this.nowIndex === index) return;

            Axios.get('./static/json/' + folder + '.json')
                .then(res => {
                    this.jsonData = res.data;
                }).catch(err => {
                    console.log(err);
                })

            this.nowIndex = index; // 把当前点击时获取的 index 赋值给 nowIndex；如果两者相等，则显示高亮
            this.jsonData = []; // 清空数组 jsonData 的值
        },
        goAnchor(selector) {
            var anchor = this.$el.querySelector(selector)
            document.documentElement.scrollTop = anchor.offsetTop
        }
    }
};
</script>

<style scoped>
aside {
    position: fixed;
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
aside li ul {
    display: none;
}
.on {
    display: block;
}
aside span {
    display: block;
}
aside span:hover,
.active {
    color: #08f;
}
section {
    margin-left: 220px;
}
p {
    height: 800px;
}
</style>
