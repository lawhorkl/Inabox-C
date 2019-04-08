<template>
    <div>
        <app-nav-bar></app-nav-bar>
        <router-view />
    </div>
</template>

<script>
    import NavBar from "./Components/NavBar.vue"
    export default {
        data() {
            return {}
        },
        components: {
            "appNavBar": NavBar
        }
    }
</script>
