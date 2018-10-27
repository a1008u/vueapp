import axios from 'axios';
import { API_URL } from '../constants';
import { importMembers } from '../group/member.js'

const state = {
	members: []
};



const mutations = {
	UPDATE_MEMBERS(state, payload){
		state.members = payload;
	}
};

const getters = {
	members(state){

		let newMembers = [];
		let newGroup = [];
		let dabuleCkGroup = [];
		while(newMembers.length !== 2){

			// 新規グループ作成
			let random = Math.floor(Math.random() * importMembers.length);
			let temp = importMembers[random].name
			if(newGroup.length === 0) {
				newGroup.push(temp)
				importMembers.splice(random, 1);
			} else {

				// 重複確認ロジック
				// 発見
				if(newGroup.length > 1) {
					console.log('ddddddd')
					
					state.members.forEach(group => {
						if(dabuleCkGroup.length === 0) {
							group.some((member, index) => {
								if (newGroup.includes(member.name)){
									state.members[index].forEach(tempMember =>{
										if(tempMember.name !== member.name) {
											dabuleCkGroup.push(tempMember.name);
										}
									});
									return true;
								}
							})
						}
					});
				}

				// 重複チェック
				let ck = false;
				if(dabuleCkGroup.length !== 0) {
					console.log(dabuleCkGroup)
					newGroup.concat(dabuleCkGroup).forEach(i =>{
						if(newGroup.includes(i) && dabuleCkGroup.includes(i)) {
							ck = true;
						} else {
							newGroup.push(temp)
							importMembers.splice(random, 1);
						}
					})
				} else {
					newGroup.push(temp)
					importMembers.splice(random, 1);
				}

				if(newGroup.length === 4) {
					if(ck) {
						dabuleCkGroup = [];
						newGroup = [];
					} else {
						let tmp = [];
						newGroup.forEach(newMember => {
							tmp.push({name: newMember})
						})
						newMembers.push(tmp);
						dabuleCkGroup = [];
						newGroup = [];
					}
				}
			}
		}
		console.table(newMembers)
		return newMembers;
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
