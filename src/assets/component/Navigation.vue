<template>
    <nav>
        <ul>
            <router-link to='/'>{{text}}</router-link>
            <router-link to='/test'>404</router-link>
        </ul>
    </nav>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
    name: "navigation",
    data: () => {
        return {
            text: "This is the nav"
        }
    }
})
</script>