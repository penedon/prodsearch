import { shallowMount } from "@vue/test-utils"
import HeaderMenu from '@/components/menus/HeaderMenu.vue'
import SearchView from '@/views/SearchView.vue'


describe('Test header functionalities', () => {
    const query = 'test'
    let wrapper = shallowMount(
        HeaderMenu, 
        {  
            parentComponent: SearchView,
            propsData: {
                query: query,
                docked: false
            } 
        }
    )

    it ('Should match props Data', () => {
        expect(wrapper.props().query).toBe(query)
    })

    it ('Should turn docked after inserting a query', () => {
        expect(wrapper.props().docked).toBeFalsy()
    })
})