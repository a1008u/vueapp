import Daily from '../../src/util/Daily.js';
import { shallowMount } from "@vue/test-utils";


describe('Counter.vue', () => {
  test('正常', async () => {
    const targeDaily = await Daily.mkTargetYearMonth(["201809","201810","201811"])
    expect(targeDaily.length).then(n => n.toBe('3'))
  })

  // test('異常', () => {
  //   const wrapper = shallowMount(Counter)
  //   wrapper.find('button').trigger('click')
  //   expect(wrapper.find('div').text()).not.toMatch('2')
  // })
})
