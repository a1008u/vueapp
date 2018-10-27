import axios from 'axios';
import { API_URL } from '../constants';

const state = {
	members: []
};

const getters = {
	members(state){
		return state.members;
	}
};

const mutations = {
	UPDATE_MEMBERS(state, payload){
		state.members = payload;
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
