import Save from '../../src/util/Save.js';
import { shallowMount } from "@vue/test-utils";
import axios from 'axios';

describe('Save_saveGroup', () => {
  test('正常', async () => {

    // prepare
    jest.mock('axios');
    const postSpy = jest.spyOn(axios, 'post');

    // exe
    let config = {headers: {'Content-Type': 'application/json'}}
    Save.saveGroup(2016, 12, [], config);

    // ck
    expect(postSpy).toBeCalled();
  })
})

describe('Save_saveGroup', () => {
  test('正常', async () => {

    // prepare
    jest.mock('axios');
    const getSpy = jest.spyOn(axios, 'get');

    // exe
    let config = {headers: {'Content-Type': 'application/json'}}
    Save.saveTotal(2016, 12, config);

    // ck
    expect(getSpy).toHaveBeenCalled();
  })

  test('正常', async () => {

    // prepare
    jest.mock('axios');
    const putSpy = jest.spyOn(axios, 'put');

    // exe
    let config = {headers: {'Content-Type': 'application/json'}}
    Save.saveTotal(2016, 12, config);

    // ck
    expect(putSpy).not.toBeCalled();
  })
})