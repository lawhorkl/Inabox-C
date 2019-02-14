<template>
    <div>
        <v-form>
            <v-text-field
                v-model="userId"
                :counter="5"
                label = "User ID"
                required></v-text-field>
            <v-text-field
                v-model="name"
                :counter="10"
                label = "Server Name"
                required></v-text-field>
            <v-text-field
                v-model="hostname"
                :counter="10"
                label = "Server Hostname"
                required></v-text-field>
            <v-text-field
                v-model="port"
                label= "Port"
                required></v-text-field>
            <v-checkbox
                v-model="active"
                label = "Active"
                type = "checkbox"
                required></v-checkbox>

                <v-btn @click="submitClicked">Submit</v-btn>
        </v-form>
    </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
    data() {
        return {
            userId: "",
            name: "",
            hostname: "",
            port: 0,
            active: false
        }
    },
    methods: {
        ...mapActions("serverStore", {
            postServer: 'postServer'
        }),
        submitClicked() {
            this.postServer({
                userId: this.userId,
                name: this.name,
                hostname: this.hostname,
                port: this.port,
                active: this.active
            })
        }
    }
}
</script>
