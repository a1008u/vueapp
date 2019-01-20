import Daily from '../../src/util/Daily.js';
import { shallowMount } from "@vue/test-utils";


describe('Daily_mkTargetYearMonth', () => {
  test('正常', async () => {
    const targeDaily = await Daily.mkTargetYearMonth(["201809","201810","201811"])
    expect(targeDaily[0].id).toEqual('09');
    const targetIdList = targeDaily.map((e,i,a) => {
      return e.id
    })
    expect(targetIdList.length).toEqual(3);
    expect(targetIdList).toEqual([ '09', '10', '11' ]);
  })

  // test('異常', () => {
  //   const wrapper = shallowMount(Counter)
  //   wrapper.find('button').trigger('click')
  //   expect(wrapper.find('div').text()).not.toMatch('2')
  // })
})

describe('Daily_', () => {
  test('正常', async () => {
    const targeDaily = await Daily.mkTargetYearMonths();
    expect(targeDaily).not.toBeNull();
    expect(targeDaily).not.toBeUndefined();
  })

  // test('異常', () => {
  //   const wrapper = shallowMount(Counter)
  //   wrapper.find('button').trigger('click')
  //   expect(wrapper.find('div').text()).not.toMatch('2')
  // })
})

