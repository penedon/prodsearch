import { shallowMount } from "@vue/test-utils"
import CardBlock from '@/components/blocks/CardBlock.vue'
import SearchView from '@/views/SearchView.vue'


describe('Test card block functionalities', () => {
    const product = {
        id: '123',
        price: 1,
        original_price: 2,
        title: 'Test'
    }
    let wrapper = shallowMount(
        CardBlock, 
        {  
            parentComponent: SearchView,
            propsData: {
                product: product
            } 
        }
    )

    it ('Should match props Data', () => {
        expect(wrapper.props().product.id).toBe(product.id)
        expect(wrapper.props().product.price).toBe(product.price)
        expect(wrapper.props().product.original_price).toBe(product.original_price)
        expect(wrapper.props().product.title).toBe(product.title)
    })
})