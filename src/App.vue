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
ol,
li {
    list-style-type: none;
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
</style>
