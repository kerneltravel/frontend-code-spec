<template>
    <section>
        <slot></slot>
    </section>
</template>

<script>
// import Axios from 'axios'
export default {
    // data() {
    //     return {
    //     }
    // },
    //     mounted() {
    //     window.addEventListener('scroll', this.handleScroll);
    // },
    // methods: {
    //             handleScroll() {
    //         console.log(document.documentElement.scrollTop || document.body.scrollTop);
    //     }
    // },
    // destroyed() {
    //     window.removeEventListener('scroll', this.handleScroll)
    // }
}
</script>

<style scoped>
article {
    max-width: 800px;
    /* margin-left: auto; */
    margin-left: 50px;
    margin-right: auto;
    padding: 0 40px;
}
article header::before {
    display: block;
    content: "";
    height: 30px;
}
article header {
    font-size: 20px;
    font-weight: 600;
    color: #555;
    border-bottom: 1px solid #e1e1e1;
    margin-bottom: 15px;
    padding-bottom: 15px;
}
.context {
    line-height: 2;
    color: #787878;
    font-size: 16px;
}
.loading {
    text-align: center;
}
</style>
