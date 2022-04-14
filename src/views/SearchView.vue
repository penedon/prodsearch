<template>
    <div>
        <HeaderMenu v-model:query="query"
                    :docked="headerDocked"/>
        <CompareSelectBlock v-model:toCompare="selected"
                            v-if="headerDocked"/>
        <div class="viewContent" ref="viewContent">
            <div class="container-xl">
                <div v-if="headerDocked">
                    <div v-if="loadingSearch || loadingCompare" class="absoluteCentered">
                        <font-awesome-icon icon="cog" class="fa-3x fa-spin" />
                    </div>
                    <div v-else>
                        <div class="row m-0 cardContent">
                            <CardBlock class="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2"
                                       v-for="product in searchData" :key="product.id"
                                       :product="product"
                                       :selected="product.selected == true"
                                    />
                            <div class="col-12 p-4" v-if="searchData.length == 0">
                                <h4>{{$t('noResults')}}</h4>
                            </div>
                            <div class="col-12 p-2" v-if="hasNextPage">
                                <button
                                    class="loadMore shadowHover"
                                    @click="loadMoreSearchML"
                                    :disabled="loadingMoreSearch">
                                    <p v-if="loadingMoreSearch"
                                    class="absoluteCentered">
                                        <font-awesome-icon icon="cog" class="fa-spin" />
                                    </p>
                                    <p v-else class="absoluteCentered">{{$t('loadMore')}}</p>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <AboutBlock v-else/>
            </div>
        </div>
        <BottomButton v-if="selectedTwoProducts && (!comparedData && !loadingCompare)"
                      @click="compareML (selected)"/>
        <ComparedDataModal v-if="comparedData" v-model:comparedData="comparedData"/>
    </div>
</template>

<script>

import AboutBlock from '@/components/blocks/AboutBlock.vue'
import HeaderMenu from '@/components/menus/HeaderMenu.vue'
import CardBlock from '@/components/blocks/CardBlock.vue'
import CompareSelectBlock from '@/components/blocks/CompareSelectBlock.vue'
import ComparedDataModal from '@/components/modals/ComparedDataModal.vue'
import BottomButton from '@/components/inputs/BottomButton.vue'
import debounceMixin from '@/mixins/debounceMixin'

import axios from '@/axios/mercadolibre'

export default {
    mixins: [debounceMixin],
    components: {
        AboutBlock,
        HeaderMenu,
        CardBlock,
        CompareSelectBlock,
        ComparedDataModal,
        BottomButton
    },
    data () {
        return {
            query: null,
            loadedQuery: null,
            headerDocked: false,
            loadingSearch: false,
            loadingMoreSearch: false,
            loadingCompare: false,
            timeoutSearch: null,
            timeoutSearchMore: null,
            timeoutCompare: null,
            selected: [],
            comparedData: null,
            searchData: [],
            hasNextPage: false
        }
    },
    computed: {
        selectedTwoProducts () {
            return this.selected.length >= 2
        }
    },
    watch: {
        query (newValue) {
            if (newValue && newValue.length > 2) {
                this.loadedQuery = this.query
                this.timeoutSearch = this.debounceSearchML(this.timeoutSearch, newValue)
            }
            else {
                this.loadingSearch = false
                if (this.selected.length == 0)
                    this.headerDocked = false
            }
        },
    },
    methods: {
        select (id) {
            if (!this.selectedTwoProducts) {
                let element = this.searchData.find(e => e.id == id)
                element.selected = true
                this.selected.push(element)
            }
        },
        unselect (id) {
            let element = this.searchData.find(e => e.id == id)
            if (element)
                element.selected = false
            this.selected = this.selected.filter(e => e.id != id)
        },
        loadMoreSearchML () {
            this.searchML (this.loadedQuery, this.searchData.length, true)
        },
        searchML (query, offset, _loadMore) {
            if (!_loadMore) {
                this.searchData = []
                this.loadingSearch = true
            }
            else
                this.loadingMoreSearch = true
            let url_path = `sites/MLB/search?q=${query}&limit=48&offset=${offset}`
            this.headerDocked = true
            
            axios.get(url_path)
            .then((res) => {
                this.loadingSearch = false
                this.loadingMoreSearch = false
                this.hasNextPage = (
                    res.data.paging.total > res.data.paging.limit + res.data.paging.offset
                )
                res.data.results.forEach(element => { this.searchData.push(element) })
            })
            .catch (err => console.log(err));
        },
        compareML () {
            const products = this.selected
            let url_path = `items?ids=${products[0].id},${products[1].id}`
            this.loadingCompare = true
            axios.get(url_path)
            .then((res) => {
                this.loadingCompare = false
                let compared = []
                for (const data of this.selected) {
                    let el = res.data.find(e => e.body.id == data.id)
                    
                    compared.push(el)
                }
                this.comparedData = compared
                
                this.timeOutCompare = null;
            })
            .catch (err => console.log(err));
        },
        debounceSearchML (timeout, query) {            
            return this.debounce (
                timeout,
                () => {
                    this.searchML (query, 0)
                }
            )
        },
        debounceComparehML (timeout) {            
            return this.debounce (
                timeout,
                () => {
                    if (this.selectedTwoProducts)
                        this.compareML (this.selected)
                }
            )
        },
    }
}
</script>

<style scoped>
    .cardContent{
        padding: 8px 0;
    }
    .viewContent {
        top: 46px;
        height: calc(100vh - 110px);
        overflow: auto;
        position: relative;
    }
    .loadMore {
        position: relative;
        width: 100%;
        height: 52px;
        /* margin: 8px; */
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: var(--var-aux-color);
    }
    
</style>