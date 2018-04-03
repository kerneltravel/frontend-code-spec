<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
html,
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
input,
button,
textarea,
p,
blockquote,
th,
td,
form,
pre,
code {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
a {
    text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 300;
}
ul,
ol {
    list-style-type: none;
}
a {
    color: #333;
}
a:hover {
    color: #09f;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.wrap {
    width: 1200px;
    margin: auto;
}
.hljs {
    font-family: "Courier New";
    margin: 10px 0 20px 0;
    border: 8px solid #fafafa;
    border-radius: 11px;
    box-shadow: 3px 3px 3px #dedede;
    padding: 8px 10px;
    line-height: 1.6;
    font-size: 13px;
}
.context blockquote {
    margin: 8px 0 18px 0;
    padding: 8px 8px 8px 12px;
    background-color: #fcfcfc;
    border-left: 3px solid #d9534f;
    font-size: 14px;
    color: #999;
}
.context h1 {
    font-size: 20px;
}
.context h2 {
    font-size: 18px;
}
.context h3 {
    font-size: 16px;
}
.context h1,
.context h2,
.context h3,
.context h4,
.context h5,
.context h6 {
    border-left: 3px solid #5cb85c;
    background-color: #fcfcfc;
    margin: 12px 0;
    padding: 5px 12px;
    color: #333;
    font-family: "微软雅黑";
    font-weight: 500;
}
.context ol,
.context ul {
    margin: 10px 0 10px 2em;
    font-size: 15px;
}
.context ol {
    list-style-type: decimal;
}
.context ul {
    list-style-type: disc;
}
.context del {
    color: #ccc;
}
.context hr {
    height: 0;
    font-size: 0;
    clear: both;
    border: 0;
    border-top: 1px solid #e1e1e1;
    overflow: hidden;
    margin: 5px 0;
}
.context a {
    position: relative;
    color: #09f;
    padding-right: 23px;
}
.context a::after {
    /* position: absolute; */
    /* top: -13px; */
    margin-top: -8px;
    padding-left: 5px;
    content: "↵";
    display: inline-block;
    font-size: 24px;
}
.context a:hover {
    color: #f60;
    text-decoration: underline;
}
.context em {
    color: #d9534f;
    padding-right: 2px;
}
.context strong {
    color: #f0ad4e;
}
.context table {
    border: 1px solid #e1e1e1;
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}
.context th {
    background-color: #eee;
    border-bottom: 1px solid #e1e1e1;
}
.context th,
.context td {
    border-left: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    font-size: 12px;
    padding: 5px;
}
.context th {
    color: #333;
    font-size: 14px;
}
.context td {
    color: #999;
}
</style>
