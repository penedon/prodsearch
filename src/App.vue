<template>
    <div class="app"
         :class="darkMode? 'darkMode' : 'lightMode'">
        <router-view/>
    </div>
    
</template>

<script>
export default {
    computed: {
        darkMode () {
            return this.$store.getters.darkMode
        },
        browserDefinedDarkMode () {
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        }
    },
    mounted () {
        this.$store.commit('toggleDarkMode', this.browserDefinedDarkMode)
    }
}
</script>
<style src="@/assets/styles/app.css"></style>
