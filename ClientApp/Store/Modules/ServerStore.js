import axios from 'axios';
const state = {
    servers: [
        {
            id: 1,
            userId: 1,
            name: "My local test server",
            hostname: "localhost",
            port: 3001,
            active: true,
            server: []
        }
    ]
}

const getters = {
    getServers: state => {
        return state.servers;
    }
}

const mutations = {
    loadServers: (state, servers) => {
        state.servers = servers || []
    },
    addServer: (state, server) => {

    },
    deleteServer: (state, server_id) => {
  
    }
}

const actions = {
    async getServersFromApi( { commit }) {
        await axios.get("/api/server").then(res => {
            var servers = [];
            const data = res.data;
            for (var serverData = 0; serverData < data.length; serverData++) {
                servers.push({
                    id: data[serverData].id,
                    userId: data[serverData].userId,
                    name: data[serverData].name,
                    hostname: data[serverData].hostname,
                    port: data[serverData].port,
                    active: data[serverData].active,
                    history: []
                });
            }
            commit('loadServers', servers);
        })
    },
    async postServer( { dispatch }, payload) {
        console.log('postserver called')
        axios.post("/api/server", payload, {
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => {
            if (res.status >= 400) {
                alert("Bad Request.");
            }
        }).catch(res => {
            alert("Error adding server, please retry.");
        });
        await dispatch("getServersFromApi");
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}