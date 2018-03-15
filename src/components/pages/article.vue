<template>
    <section>
        <article>
            <slot></slot>
        </article>
    </section>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
        }
    }
}
</script>

<style scoped>
article {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    padding: 0 20px;
}
</style>
