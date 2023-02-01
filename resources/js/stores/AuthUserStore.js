import { defineStore } from "pinia";

export const useAuthUserStore = defineStore('authUserStore', {
    state: ()=>({
        name: 'test user',
        email: 'test@email.com',
        token: 'test_token'
    }),
    getters: {},
    actions: {},
})