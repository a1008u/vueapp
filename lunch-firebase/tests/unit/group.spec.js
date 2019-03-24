import Group from '../../src/util/Group.js';
import { shallowMount } from "@vue/test-utils";


describe('Group_mkCkGroups', () => {
  test('正常', async () => {
    const newGroup = Group.mkCkGroups([[{"name":"test1"},{"name":"test2"},{"name":"test3"},{"name":"test4"},{"name":"test1"},{"name":"test2"},{"name":"test3"},{"name":"test4"}]],4)
    expect(newGroup.length).toEqual(2);

    const results = ["test1", "test2", "test3", "test4"]
    newGroup.forEach(group => expect(group).toEqual(results))
  })

  test('異常', async () => {
    const newGroup = Group.mkCkGroups([[{"name":"test1"},{"name":"test2"},{"name":"test3"},{"name":"test4"},{"name":"test1"},{"name":"test2"},{"name":"test3"},{"name":"test4"}]],4)
    expect(newGroup.length).not.toEqual(3);

    const results = ["test3", "test1", "test4", "test3"]
    newGroup.forEach(group => expect(group).not.toEqual(results))
  })
})


