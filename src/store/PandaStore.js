import { defineStore } from "pinia";
import { http } from "@/utils/http.js"

export const useLessonStore = defineStore('panda-store', {
    state() {
        return {
            pandas: []
        }
    },
    actions: {
        async getPandas() {
            const response = await http.get("panda")
            this.pandas = response.data
        },
        // getLessonsOfSubject(subject) {
        //     return this.lessons.filter(l => l.subject === subject)
        // },
        async createPanda(data) {
            const response = await http.post("panda", data)
            this.pandas.push(response.data)
        },
        async deletePanda(id) {
            await http.delete(`panda/${id}`)
            const idx = this.pandas.findIndex(l => l.id === id)
            this.pandas.splice(idx, 1)
        }
    },
    getters: {
        subjects() {
            return [...new Set(this.pandas.map(l => l.subject))]
        }
    }
})