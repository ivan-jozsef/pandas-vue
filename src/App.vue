<script>
import NavBar from "@/components/layout/NavBar.vue"
import {RouterView} from "vue-router"
import { useLessonStore } from "./store/PandaStore";
export default{
  components:{
    NavBar,
    RouterView
  },
  async mounted(){
    const LessonStore = usePandaStore()
    await LessonStore.getPandas()
  }
}

</script>

<template>
  <NavBar/>
  <main class="container container-fluid">
    <RouteView />
  </main>
</template>


