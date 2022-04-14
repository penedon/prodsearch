<template>
<div class="compareSelectBox">
    <div class="container-xl">
        <div class="row m-0">
            <div v-for="index in toCompare.length" :key="index"
                 class="col p-0">
                <div class="box">
                    <div class="box-body">
                        <div class="box-img">
                            <img :src="toCompare[index-1].thumbnail" alt=""  class="absoluteCentered">
                        </div>
                        <div class="box-text">
                            {{toCompare[index-1].title}}
                        </div>
                        <button class="box-close"
                                @click="unselect(toCompare[index-1].id)">
                            <font-awesome-icon icon="times" class="searchIcon" />
                        </button>
                    </div>
                </div>
            </div>
            <div v-if="!toCompare.length"
                class="col p-0">
                <div class="box">
                    <p>{{$t('selectTwoProductsToCompare')}}</p>
                </div>
            </div>
            <div v-if="toCompare.length==1"
                class="col p-0">
                <div class="box">
                    <p>{{$t('selectOneMoreProductToCompare')}}</p>
                </div>
            </div>
        </div>
        
    </div>
</div>
    
</template>

<script>
export default {
    emits: ['update:toCompare'],
    props: {
        toCompare: {default: () => {}}
    },
    methods: {
        unselect (id) {
            this.$parent.unselect(id)
        }
    }
}
</script>

<style scoped>
    .compareSelectBox {
        width: 100%;
        height: 52px;
        top: 52px;
        position: fixed;
        background-color: var(--var-item-aux);
        z-index: 100;
        box-shadow: 0 2px 2px var(--var-shadow);
    }
    .compareSelectBox > div{

    }
    /* .row {
        border-left: 1px solid var(--var-aux-color);
        border-right: 1px solid var(--var-aux-color);
    } */
    .box {
        /* display: inline-block; */
        position: relative;
        /* border-left: 1px solid var(--var-aux-color);
        border-right: 1px solid var(--var-aux-color); */
        /* border-radius: 5px; */
        height: 52px;
        opacity: 1;
        overflow: hidden;
    }
    .selected:first-of-type .box{margin-right: 8px;}
    .selected:last-of-type .box {margin-left: 8px;}

    .box p {
        width: 100%;
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
    }

    .box-body {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-color: var(--var-item-white);
    }
    
    .box-img {
        margin: 5px 0;
        display: inline-block;
        /* vertical-align: top; */
        height: 42px;
        width: 42px;
        position: relative;
        /* vertical-align: middle; */
        border-radius: 5px;
        background-color: white;
    }
    .box-img img {
        /* margin: auto; */
        
        max-width: 85%;
        max-height: 85%;
        
    }

    .box-text {
        display: inline-block;
        vertical-align: top;;
        width: calc(100% - 104px);
        font-size: 14px;
        text-align: left;
        padding: 5px 15px 0 15px ;
    }
    
    .box-close {
        position: relative;
        vertical-align: top;
        display: inline-block;
        width: 52px;
        height: 100%;
    }
    .box-close svg {
        position: absolute;
        top: 50%; left:50%;
        transform: translate(-50%, -50%);
    }

    @media only screen and (max-width: 768px) {
        p {
            font-size: 14px;
        }
    }
</style>