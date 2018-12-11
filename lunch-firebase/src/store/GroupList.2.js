import axios from 'axios';
import { API_URL } from '../constants';

const state = {
	members2: []
};

const mutations = {
	async UPDATE_MEMBERS2(state, payload){
		state.members2 = await payload;
	}
};

const getters = {
	members2(state){
		return state.members2;
	}
};

const actions = {
	async fetchMembers2(context){
    const {data} = await axios.get(`${API_URL}/group2`);
		context.commit('UPDATE_MEMBERS2', data);
	}
};

const productModule = {
	state,
	getters,
	mutations,
	actions
};
export default productModule;

