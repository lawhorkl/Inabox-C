import Home from "../Components/Home.vue";
import ServerIndex from "../Components/Servers/Index.vue";
import ServerShow from "../Components/Servers/Show.vue";
import ServerNew from "../Components/Servers/New.vue"

export const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
    display: "Home"
  },
  {
    name: "Server Index",
    path: "/servers",
    component: ServerIndex,
    display: "All Servers"
  },
  {
    name: "New Server",
    path: "/servers/new",
    component: ServerNew,
    display: "New Server Page"
  },
  {
    name: "Get Server",
    path: "/servers/:id",
    component: ServerShow,
    display: "Server Show Page"
  },

];
