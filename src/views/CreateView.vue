<template>
    <form class="mt-3 p-4 rounded bg-primary bg-opacity-25">
        <div class="form-group"><label for="subject">Tantárgy</label><input type="text" id="subject" class="form-control" v-model="body.subject"></div>
        <div class="form-group"><label for="start">Kezdés</label><input type="datetime-local" id="start" class="form-control" v-model="body.start"></div>
        <div class="form-group"><label for="end">Befejezés</label><input type="datetime-local" id="end" class="form-control" v-model="body.end"></div>
        <div class="form-group"><label for="location">Helyszín</label><input type="text" id="location" class="form-control" v-model="body.location"></div>
        <div class="form-group"><label for="description">Leírás</label><input type="text" id="description" class="form-control" v-model="body.description">
        </div>
        <button type="button" class="btn btn-primary" @click="createPanda()">Felvétel</button>
    </form>
</template>
<script>
import { usePandaStore } from '../store/PandaStore';

export default{
    data(){
        return{
            body:{
                name:"",
                sex:"",
                birth:""
            }
        }
    },
    methods:{
        async createPanda(){
            await usePandaStore().createPanda(this.body);
            this.$router.push({name: 'index'})
        }
    }
}
</script>