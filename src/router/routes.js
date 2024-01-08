export const routes = [
    {
        path: "/",
        name: "index",
        component: () => import("@views/IndexView.vue")
    },
    // {
    //     path: "/table",
    //     name: "table",
    //     component: () => import("@views/TableView.vue")
    // },
    // {
    //     path: "/panda/:panda",
    //     name: "panda",
    //     component: () => import("@views/PandaView.vue")
    // },
    {
        path: "/create",
        name: "create",
        component: () => import("@views/CreateView.vue")
    }
]