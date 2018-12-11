import axios from 'axios';
import { API_URL } from '../constants';

const state = {
	members3: []
};

const mutations = {
	async UPDATE_MEMBERS3(state, payload){
		state.members3 = await payload;
	}
};

const getters = {
	members3(state){
		return state.members3;
	}
};

const actions = {
	async fetchMembers3(context){
    const {data} = await axios.get(`${API_URL}/group3`);
		context.commit('UPDATE_MEMBERS3', data);
	}
};

const productModule = {
	state,
	getters,
	mutations,
	actions
};
export default productModule;

