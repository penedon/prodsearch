import { shallowMount } from '@vue/test-utils'
import { i18n } from '@/plugins/i18n'
import HeaderMenu from '@/components/menus/HeaderMenu'


describe('test translation', () => {
    function initWrapper(component) {
        return shallowMount(component, {
          global: {
            plugins: [i18n]
          }
        })
    }
    let wrapper = initWrapper(HeaderMenu);

    test('Load Component in English', () => {
        wrapper = initWrapper(HeaderMenu);
        expect(wrapper.element).toMatchSnapshot();
    });

    test('translates component to Spanish', () => {
        wrapper = initWrapper(HeaderMenu);
        wrapper.componentVM.$i18n.locale = 'es'
        expect(wrapper.element).toMatchSnapshot();
    });

    test('translates component to Portuguese', () => {
      wrapper = initWrapper(HeaderMenu);
      wrapper.componentVM.$i18n.locale = 'pt'
      expect(wrapper.element).toMatchSnapshot();
  });

})
