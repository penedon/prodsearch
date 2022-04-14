<template>
    <div class="outer-modal">
        <div class="modalMenu container-xl p-0">
            <div class="modalMenu-header">
                <div class="modalMenu-title">
                    {{$t('compare')}}
                </div>
                <button class="close"
                        @click="closeModal">
                    <font-awesome-icon icon="times"/>
                </button>
            </div>
            <div class="modalMenu-body" v-if="comparedData">
                <div class="row">
                    <div v-for="p in filteredData" :key="p.id"
                         class="col-6">
                        <div class="productHead">
                            <a :href="p.permalink" target="_blank">
                                <font-awesome-icon icon="arrow-up-right-from-square"/>
                            </a>
                            <div class="compareImg">
                                <img :src="p.pictures.length > 0 ? p.pictures[0].url : null" alt="">
                            </div>
                            <h4>
                                <b>{{formatPrice(p.price)}}</b>
                                <span class="card-old-price" v-if="p.original_price">
                                    {{formatPrice(p.original_price)}}
                                </span>
                            </h4>
                            <h5>{{p.title}}</h5>
                            
                        </div>
                    </div>
                </div>
                <div class="productBody">
                    <table class="table table-striped"
                           :class="{'table-dark': darkMode}"
                           v-if="matchedAttrributes.length > 0">
                        <thead>
                            <tr>
                                <th scope="col">Valor</th>
                                <th scope="col">Característica</th>
                                <th scope="col">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="att in matchedAttrributes" :key="att.id">
                                
                                <td >{{att.value1}}</td>
                                <th scope="row">{{att.name}}</th>
                                <td>{{att.value2}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4 v-else>
                        {{$t('noMatchedAttributes')}}
                    </h4>
                </div>
            </div>
        </div>
        <div class="background" @click="closeModal"></div>
    </div>
</template>

<script>
import formatMixin from '@/mixins/formatMixin'

export default {
    emits: ['update:comparedData'],
    mixins: [formatMixin, ],
    props: {
        comparedData: {default: () => {}}
    },
    computed: {
        darkMode () {
            return this.$store.getters.darkMode
        },
        filteredData () {
            if (this.comparedData)
                return [this.comparedData[0].body, this.comparedData[1].body]
        },
        matchedAttrributes () {
            if (this.comparedData) {
                var matched = []
                for (const att of this.comparedData[0].body.attributes) {
                    let el = this.comparedData[1].body.attributes.find(e => e.id == att.id)
                    if (el)
                        matched.push({
                            id: att.id,
                            name: att.name,
                            value1: att.value_name,
                            value2: el.value_name
                        })
                }
                return matched
            }
            return []
        }
    },
    methods: {
        closeModal () {
            this.$emit('update:comparedData', null)
        }
    }
}
</script>

<style scoped src="@/assets/styles/modals/comparedDataModal.css"></style>