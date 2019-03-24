import Daily from '../../src/util/Daily.js';
import { shallowMount } from "@vue/test-utils";

describe('Daily_mkNewTargetYearMonthViaFirastore', () => {
  test('正常（存在する年月）', async () => {
    // exe
    const targeDaily = await Daily.mkTargetYearMonthsViaFirastore()
    // ck
    expect(targeDaily).toContain('201903');

  })

  test('異常（存在する年月）', async () => {
    // exe
    const targeDaily = await Daily.mkTargetYearMonthsViaFirastore()
    // ck
    expect(targeDaily).not.toContain('201712');

  })
})
