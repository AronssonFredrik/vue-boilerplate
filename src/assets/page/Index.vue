<template>
    <div>
        <Navigation/>
        {{text}}
    </div>
</template>
<script>
import Vue from 'vue'
import Navigation from "../component/Navigation.vue"

export default Vue.extend({
    name: "FirstPage",
    components: {
        Navigation
    },
    data: () => {
        return {
            text: "This is the first page"
        }
    }
})
</script>