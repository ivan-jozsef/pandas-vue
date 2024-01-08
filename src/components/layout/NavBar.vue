<template>
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Pandák</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Pandák név szerinti rendezés
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Növekvő</a></li>
                            <li><a class="dropdown-item" href="#">Csökkenő </a></li>
                        </ul>

                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Pandák kor szerinti rendezés
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Növekvő</a></li>
                            <li><a class="dropdown-item" href="#">Csökkenő </a></li>
                        </ul>
                    </li>

                    <!-- <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'index' }">Kártyás nézet</RouterLink>
                    </li> -->
                    <!-- <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'table' }">Táblás nézet</RouterLink>
                    </li> -->
                    <!-- <li class="nav-item dropdown"> -->
                    <!-- <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Pandák
                        </a> -->
                    <!-- <ul class="dropdown-menu">
                            <li v-for="(subject,index) in subjects" :key="index"><RouterLink class="dropdown-item" :to="{name: 'panda', params: {panda}}">{{ subject }}</RouterLink></li>
                        </ul> -->
                    <!-- </li> -->
                    <!-- <li class="nav-item">
                        <RouterLink class="nav-link" :to="{name:'create'}">Új panda felvétele</RouterLink>
                    </li> -->
                </ul>
                <!-- <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> -->
            </div>
        </div>
    </nav>
</template>

<script>
// import { RouterLink } from "vue-router"
// import { usePandaStore } from "@/store/PandaStore"
// export default {
//     components: {
//         RouterLink
//     },
//     computed:{
//         pandas(){
//             return usePandaStore().pandas
//         }
//     }
// }
</script>