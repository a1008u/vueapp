import axios from "axios";
import { API_URL } from "../constants";

export async function updateGroup(year, month, tempMembers, config){
  let registerGroup = {};
  registerGroup.id = month.toString();
  registerGroup.group = tempMembers
  const { registerDatas } = await axios.put(
    `${API_URL}/${year}/${month}`,
    registerGroup,
    config
  );
}

const Save = {
  updateGroup
};
export default Save;
