import axios from 'axios';
import { API_URL } from '../constants';
import Firestore from './Firestore'

export async function updateGroup(year, month, tempMembers, config){
  let registerGroup = {};
  registerGroup.id = month.toString();
  registerGroup.group = tempMembers
  const {registerDatas} = await axios.put(`${API_URL}/${year}/${month}`, registerGroup, config);
  return registerDatas
}

export async function updateGroupViaFireStore(year, month, group){
  // 保存処理実施確認
  const tempMembers = [];
  for (let tmpGroup of group) {
    for (let tGroup of tmpGroup) {
      tempMembers.push(tGroup);
    }
  }

  let result = await Firestore.updateFireStoreToGroupmember(year, month, tempMembers);
  return result;
}



const Save = {
  updateGroup,
  updateGroupViaFireStore
};
export default Save;