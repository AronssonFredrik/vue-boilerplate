<template>
    <div>
        <Navigation/>
        <h1 class="title">{{title}}</h1>
        <h2 class="subtitle">{{subtitle}}</h2>
    </div>
</template>
<script>
import Vue from 'vue'
import Navigation from "../component/Navigation.vue"

export default Vue.extend({
    name: "Index",
    components: {
        Navigation
    },
    data: () => {
        return {
            title: "Hello friend.",
            subtitle: "Hello friend? That's lame. Maybe I should give you a name. But that's a slippery slope, you're only in my head, we have to remember that."
        }
    }
})
</script>