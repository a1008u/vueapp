import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/HelloWorld.vue";

describe('Counter.vue', () => {
  test('正常', () => {
    const wrapper = shallowMount(Counter)
    wrapper.find('button').trigger('click')
    expect(wrapper.find('div').text()).toMatch('1')
  })

  test('異常', () => {
    const wrapper = shallowMount(Counter)
    wrapper.find('button').trigger('click')
    expect(wrapper.find('div').text()).not.toMatch('2')
  })
})
