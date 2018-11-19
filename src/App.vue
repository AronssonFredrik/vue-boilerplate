<template>
    <div class="main">
        <h1> {{text}} </h1>
    <router-view :props="text"/>
    </div>
</template>

<script>
export default {
    name: "main",
    data: () => {
        return {
            text: "App component"
        }
    }
}
</script>