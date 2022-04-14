<template>
    <div class="localizationMenu">
        <button @click="toggleDarkMode"
                :title="darkMode? $t('buttonLightMode') : $t('buttonDarkMode')">
            <font-awesome-icon :icon="darkMode? 'cloud-sun' : 'cloud-moon'" />
        </button>
        <button v-for="entry in languages" :key="entry.title"
                class="flag"
                :class="{currentLocale:currentLocale == entry.language}"
                @click="changeLocale(entry.language)"
                :disabled="currentLocale == entry.language"
                :title="entry.title">
            <flag :iso="entry.flag" v-bind:squared=false :title="entry.title"/>
        </button>
        <br>
    </div>
</template>

<script>
import { i18n } from '@/plugins/i18n';

export default {
    data () {
        return {
            languages: [
                { flag: 'us', language: 'en', title: 'English' },
                { flag: 'es', language: 'es', title: 'Español' },
                { flag: 'br', language: 'pt', title: 'Português' }
            ]
        }
    },
    computed: {
        currentLocale () {
            return i18n.global.locale
        },
        darkMode () {
            return this.$store.getters.darkMode
        }
    },
    methods: {
        changeLocale(locale) {
            i18n.global.locale = locale;
        },
        toggleDarkMode () {
            this.$store.commit('toggleDarkMode')
        }
    }
}
</script>

<style scoped>
    .localizationMenu {
        position: absolute;
        top: 0px;
        height: 52px;
        right: 10px;
        z-index: 100;
    }
    button {
        opacity: 0.7;
        padding: 12px 5px;
    }
    button.flag {
        opacity: 0.3;
    }
    button:not(.currentLocale):hover {
        opacity: 0.8
    }
    button.currentLocale {
        opacity: 1;
    }
</style>