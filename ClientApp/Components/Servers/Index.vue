<template>
    <div>v</div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
    data() {
        return {
            headers: [
                { text: "ID", value: "id" },
                { text: "Name", value: "name" },
                { text: "Hostname", value: "hostname" },
                { text: "Port", value: "port" },
                { text: "Active", value: "active" },
            ],
            columnDefs: null,
            rowData: null
        }
    },
    computed: {
        ...mapGetters("serverStore", {
            servers: "getServers"
        })
    },
    methods: {
        ...mapActions("serverStore", {
            getServersFromApi: "getServersFromApi"
        }),
        debug(obj) {
            // console.log(obj)
        }
    },
    components: {
        AgGridVue
    },
    beforeMount() {
        this.getServersFromApi();
        this.columnDefs = [
            { headerName: "Server ID", field: "id" },
            { headerName: "User ID", field: "userId" },
            { headerName: "Name", field: "name" },
            { headerName: "Hostname", field: "hostname" },
            { headerName: "Active?", field: "active" },
        ]
        this.rowData = [ this.serverRowData ]
        // console.log(this.servers)
    }
}
</script>
