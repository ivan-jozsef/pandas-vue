<template>
    <h1>Pandák</h1>
    <div class="row mt-1 gy-4">
        <!-- <div class="col-12 col-md-6 col-lg-4 col-xl-3" v-for="panda in pandas" :key="panda.id" >
            <Card
            :name="panda.name"
            :sex="panda.sex"
            :birth="new Date(panda.birth)"
            />
        </div> -->
    </div>
    </template>
    <script>
    // import Card from "@/components/Card.vue"
    import { usePandaStore } from "../store/PandaStore";
    export default{
        components:{
            Card
        },
        computed:{
            pandas(){
                return usePandaStore().pandas
            }
        }
    }
    </script>