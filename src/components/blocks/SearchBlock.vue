<template>
    <div class="searchBox">
        <input type="text"
               class="shadowHover"
               :class="{styleTransparent: styleTransparent}"
                :value="query"
                @input="$emit('update:query', $event.target.value)"
                :placeholder="$t('searchPlaceholder')"/>
        <font-awesome-icon icon="magnifying-glass" class="searchIcon" />
    </div>
</template>

<script>
export default {
    emits: ['update:query'],
    props: {
        query: String,
        styleTransparent: false
    },

}
</script>

<style scoped>
    .searchBox {
        position: relative;
        width: 100%;
        
    }
    .searchBox .searchIcon {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0%, -50%);
        font-size: 20px;
        padding-left: 15px;
        color: var(--fixed-secondary-color);
    }
    .searchIcon svg {
        
    }
    .searchBox input {
        width: 100%;
        height: 50px;
        background-color: white;
        font-size: 1.2em;
        padding: 10px 15px 10px 50px;
        border: 1px solid #ccc;
        outline: none;
        border-radius: 5px;
        box-shadow: 0px 0px 2px #ccc;
        
    }
    .searchBox input:hover {
        box-shadow: 0px 0px 5px #ccc;
    }
    .searchBox input:focus {
        /* border: none; */
        outline: none;
        
    }

    .searchBox input.styleTransparent { 
        background-color: transparent;
        color: white;
        border: none;
        outline: none;
        box-shadow: none;
    }
    .searchBox input.styleTransparent::placeholder {color: #f4f4f4}
    .searchBox input.styleTransparent + .searchIcon {
        color: white;
    }
</style>