import axios from 'axios';
import { API_URL } from '../constants';

const state = {
	members1: []
};

const mutations = {
	async UPDATE_MEMBERS1(state, payload){
		state.members1 = await payload;
	}
};

const getters = {
	members1(state){
		return state.members1;
	}
};

const actions = {
	async fetchMembers1(context){
    const {data} = await axios.get(`${API_URL}/group1`);
		context.commit('UPDATE_MEMBERS1', data);
	}
};

const productModule = {
	state,
	getters,
	mutations,
	actions
};
export default productModule;

