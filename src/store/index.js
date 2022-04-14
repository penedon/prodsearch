import { createStore } from 'vuex'

export default createStore({
    state: {
        darkMode: false
    },
    getters: {
        darkMode (state) {
            return state.darkMode
        }
    },
    mutations: {
        toggleDarkMode (state, value) {
            if (value != null)
                state.darkMode = value
            else
                state.darkMode = !state.darkMode
        }
    },
    actions: {
       
    },
    modules: {
        
    }
})
