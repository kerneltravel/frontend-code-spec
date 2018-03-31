<template>
    <main>
        <h1>
            <a href="/">中模网前端编码规范</a>
        </h1>
        <aside>
            <ul v-if="isNavLoading" class="loading">分类读取中...</ul>
            <ul>
                <li v-for="(item, index) in sideNav" :key="index">
                    <span @click="getJsonData(item.id, index)" :class="{active: index === nowIndex}">
                        {{ index + 1 }}. {{ item.name }}
                    </span>
                    <ul v-if="index === nowIndex">
                        <li v-if="isListLoading" class="loading">列表读取中...</li>
                        <li v-for="(subItem, subIndex) in jsonData" :key="subIndex">
                            <a href="javascript:void(0)" @click="goAnchor('#anchor-' + subIndex, subIndex)" :class="{active: subIndex === nowSubIndex}">{{ subItem.title.rendered }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
        <div>
            <Article>
                <article v-if="isListLoading" class="loading">数据读取中...</article>
                <article v-if="hasData" class="loading">暂无数据...</article>
                <article v-for="(item, index) in jsonData" :key="index">
                    <header :id="'anchor-' + index">{{ item.title.rendered }}</header>
                    <div class="context" v-html="item.content.rendered" v-highlight>{{ item.content.rendered }}</div>
                </article>
            </Article>
        </div>
    </main>
</template>

<script>
import Axios from 'axios'
import Article from '@/components/pages/article'

export default {
    name: '',
    components: {
        Article
    },
    data() {
        return {
            sideNav: [],
            jsonData: [],
            nowIndex: '',
            nowSubIndex: '',
            isListLoading: true,
            isNavLoading: true,
            hasData: false
        };
    },
    created() {
        Axios.get('http://192.168.5.9:8081/wp-json/wp/v2/categories?orderby=id')
            .then(respones => {
                this.sideNav = respones.data;
                this.isNavLoading = false; // 关闭加载动画
                this.isListLoading = true;
                this.getJsonData(this.sideNav[0].id, 0)
            });
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        getJsonData: function (categoryId, index) {
            if (this.nowIndex === index) return;

            Axios.get('http://192.168.5.9:8081/wp-json/wp/v2/posts?order=desc&per_page=100&order=asc&categories=' + categoryId)
                .then(res => {
                    this.jsonData = res.data;
                    this.isListLoading = false; // 关闭加载动画
                    if (this.jsonData.length === 0) this.hasData = true;
                }).catch(err => {
                    console.log(err);
                })

            this.nowIndex = index; // 把当前点击时获取的 index 赋值给 nowIndex；如果两者相等，则显示高亮
            this.jsonData = []; // 清空数组 jsonData 的值
            this.isListLoading = true;
            this.hasData = false;
        },
        goAnchor(selector, index) {
            this.nowSubIndex = index; // 把当前点击时获取的 index 赋值给 nowSubIndex；如果两者相等，则显示高亮

            let anchor = this.$el.querySelector(selector),
                _offsetTop = anchor.offsetTop,
                _scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                step = _offsetTop / 50 >> 0;  // 平滑滚动，取整

            if (_offsetTop > _scrollTop) {
                anchorDown();
            } else {
                let newOffsetTop = _scrollTop - _offsetTop;
                step = newOffsetTop / 50 >> 0;
                anchorUp();
            }

            function anchorDown() {
                if (_scrollTop < _offsetTop) {
                    _scrollTop += step;
                    document.body.scrollTop = document.documentElement.scrollTop = _scrollTop;
                    setTimeout(anchorDown, 10);
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = _offsetTop;
                }
            }
            function anchorUp() {
                if (_scrollTop > _offsetTop) {
                    _scrollTop -= step;
                    document.body.scrollTop = document.documentElement.scrollTop = _scrollTop;
                    setTimeout(anchorUp, 10);
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = _offsetTop;
                }
            }
        },
        handleScroll() {
            let _scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                // _innerHeight = window.innerHeight / 5,
                _article = document.querySelectorAll('article');

            _article.forEach((item, index) => {
                if (_scrollTop >= item.offsetTop) {
                    this.nowSubIndex = index;
                }
            })
        }
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    }
};
</script>

<style scoped>
main h1 {
    position: fixed;
    left: 0;
    top: 0;
    width: 360px;
    height: 70px;
    line-height: 70px;
    background-color: #fcfcfc;
    border-bottom: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
    font-size: 20px;
    text-align: center;
    letter-spacing: 1px;
    z-index: 9;
}
main h1 a:hover {
    text-decoration: underline;
}
aside {
    position: fixed;
    left: 0;
    top: 71px;
    bottom: 0;
    width: 360px;
    background-color: #fafafa;
    border-right: 1px solid #e8e8e8;
    overflow-x: hidden;
    overflow-y: auto;
}
aside > ul {
    padding-top: 15px;
    padding-bottom: 50px;
}
aside li {
    font-size: 14px;
    line-height: 36px;
}
aside li ul li a,
.loading {
    display: block;
    padding: 8px 0;
    line-height: 20px;
    padding-left: 4em;
    padding-right: 1em;
    /* word-break: break-all;
    word-wrap: break-word;
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow: hidden; */
}
aside li ul li a {
    display: block;
}
aside span {
    display: block;
    cursor: pointer;
    padding: 0 1.6em;
    font-size: 16px;
}
aside span:hover,
.active {
    color: #08f;
}
aside li ul li a:hover,
aside span:hover {
    background: #fff;
}
aside li ul li a.active {
    background-color: #eee;
}
section {
    margin-left: 360px;
    margin-bottom: 120px;
}
</style>