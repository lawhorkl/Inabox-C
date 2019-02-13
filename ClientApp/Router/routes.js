import Home from "../Components/Home.vue";
import ServerList from "../Components/Servers/ServerList.vue";
import Server from "../Components/Servers/Server.vue";

export const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
    display: "Home"
  },
  {
    name: "ServerList",
    path: "/servers",
    component: ServerList,
    display: "All Servers"
  },
  {
    name: "Server",
    path: "/server/:id",
    component: Server,
    display: "Server Show Page"
  }
];
