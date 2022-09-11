import { defineStore } from "pinia";

export const useAuthStore = defineStore({
    id: "auth",
    state: () => ({
        isLoggedIn: false,
        token: null,
        user: null
    }),
    getters: {
        isLoggedIn: (state) => state.isLoggedIn,
        token: (state) => state.token,
        user: (state) => state.user
    },
    actions: {
        login(state, payload) {
            this.isLoggedIn = true;
            
        }
    }
});