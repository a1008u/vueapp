import axios from 'axios';
import { API_URL } from '../constants';
import { importMembers } from '../group/member.js'

const state = {
	members: []
};

const mutations = {
	async UPDATE_MEMBERS(state, payload){
		state.members = await payload;
	}
};

const getters = {
	members(state){
		return state.members;
	}
};

const actions = {
	async fetchMembers(context){
    const {data} = await axios.get(`${API_URL}/group1`);
		context.commit('UPDATE_MEMBERS', data);
	}
};

const productModule = {
	state,
	getters,
	mutations,
	actions
};
export default productModule;

