<template>
    <div class="outer-card" v-if="product" >
        <button class="card shadowHover"
             ref="card"
             :class="{selected}"
             @click="select">
            <div class="card-img">
                <img :src="product.thumbnail" alt="">
            </div>
            <div class="card-body">
                <div class="card-price">
                    {{formatPrice(product.price)}}
                    <span class="card-old-price">
                        {{formatPrice(product.original_price)}}
                    </span>
                </div>
                <div class="card-title">
                    {{product.title}}
                </div>
            </div> 
        </button>
    </div>
</template>

<script>
import formatMixin from '@/mixins/formatMixin'

export default {
    mixins: [formatMixin, ],
    props: {
        product: {default: () => {}},
        selected: false
    },
    methods: {
        select () {
            if (!this.selected)
                this.$parent.select(this.product.id)
            else
                this.$parent.unselect(this.product.id)
        },
    }
}

</script>

<style scoped>
    .outer-card {
        padding: 8px;
    }

    .card {
        height: 250px;
        background: var(--var-item-white);
        transition: background-color 0.1s ease,
                    color 0.1s ease;
        overflow: hidden;
    }
    .card:hover {
        cursor: pointer;
    }

    .card.shadowHover.selected {
        border: 1px solid var(--var-primary-color);
        box-shadow: 0px 0px 10px var(--var-primary-color);
        color: white !important;
        background-color: var(--var-primary-color);
    }

    .card-body {
        position: relative;
        padding: 5px 10px;
        max-height: 110px;
        overflow: hidden;
    }

    .card-body:after {
        content: "";
        overflow-x: hidden;
        position: absolute; top: 0; bottom: 0; left: -15px; right: -15px;
        box-shadow: inset 0 -15px 10px -5px var(--var-item-white);
        transition: box-shadow 0.1s ease;
    }
    .selected .card-body:after {
        box-shadow: inset 0 -15px 10px -5px var(--var-primary-color) !important;
    }

    .card-img {
        position: relative;
        background-color: white;
        height: 138px !important;
    }
    .card-img img{
        position: absolute;
        top: 50%; left:50%;
        transform: translate(-50%, -50%);
        width: auto;
        height: 90px;
    }
    .card-title {
        font-size: 12px;
        text-align: left;
    }

    .card-price {
        text-align: left;
        font-size: 13px;
        font-weight: bold;
    }
    .card-old-price {
        /* float: right; */
        font-size: 9px;
        text-decoration: line-through;
    }

    
</style>