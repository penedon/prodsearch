<template>
    <div class="outer-headerMenu">
        <div class="headerMenu"
             :class="{docked: docked}">
            <Transition name="fade" mode="out-in">
                <h1 v-if="!docked">PROD SEARCH</h1>
            </Transition>
            <Transition name="fade" mode="out-in">
                <h3 v-if="docked">PS</h3>
            </Transition>
            <div class="transitionSearchBox">
                <SearchBlock v-model:query="query"
                             :styleTransparent="docked"/>
            </div>
            
            <LocalizationMenu />
        </div>
        <Transition name="fade" mode="out-in">
            <div    v-if="docked"
                    class="headerMenuBar"></div>
        </Transition>
    </div>
</template>

<script>
import LocalizationMenu from '@/components/menus/LocalizationMenu.vue'
import SearchBlock from '@/components/blocks/SearchBlock.vue'

export default {
    emits: ['update:query'],
    components: {
        LocalizationMenu,
        SearchBlock,
    },
    props: {
        query: String,
        docked: Boolean
    },
    watch: {
        query(newValue) {
            this.$emit('update:query', newValue)
        }
    }
        
}
</script>

<style scoped>
    .outer-headerMenu {
        position: relative;
        width: 100%;
        display: inline-block;
        min-height: 52px;
    }
    .headerMenu {
        position: relative;
        width: 100%;
        z-index: 10;
    }
    .headerMenu.docked {
        height: 52px;
        position: fixed;
        background-color: var(--var-primary-color);
    }
    .headerMenuBar {
        width: 100%;
        height: 52px;
        top: 0;
        
        position: absolute;
        background-color: var(--var-primary-color);
        z-index: 1;
        /* box-shadow: 0 0px 10px black; */
    }

    h1 {
        position: absolute;
        top:200px;
        left: 50%;
        transform: translateX(-50%);
        /* text-shadow: 0 1px 1px #ccc; */
        color: var(--var-primary-color);
        font-size: 3em;
    }

    h3 {
        color: white;
        float: left;
        padding: 10px 15px 9px 15px;
        border-right: 2px solid var(--var-primary-color-light)
    }

    .transitionSearchBox {
        position: fixed;
        transform: translate(-50%, -50%);
        top:50%;
        left: 50%;
        width: 768px;
        height: 52px;
    }

    .headerMenu.docked .transitionSearchBox {
        /* position: fixed */
        top: 0 !important;
        left: 70px;
        transform: translate(0, 0);
        width: calc(100% - 200px);
    }


    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s ease;
    }
    .fade-enter, .fade-enter-to, .fade-leave-from {
        opacity: 1;
    }
    .fade-leave, .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }

    @media only screen and (max-width: 768px) {
        .headerMenu:not(.docked) .transitionSearchBox {
            width: 90%;
            /* position: relative;
            transform: translate(0,0);
            top:0; left: 0;
            margin: 0 auto; */
        }
        .headerMenu:not(.docked) h1 {
            /* position: relative; */
            /* top: 100px; */
            /* left: 0; */
            /* transform: translateX(0); */
        }
    }
</style>