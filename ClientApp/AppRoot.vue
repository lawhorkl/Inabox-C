<template>
    <v-app>
        <v-container>
            <app-nav-bar></app-nav-bar>
            <v-content>
                <router-view></router-view>
            </v-content>
        </v-container>
    </v-app>
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
