<template>
<div>new server page</div>
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
