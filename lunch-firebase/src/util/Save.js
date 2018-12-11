import axios from 'axios';
import { API_URL } from '../constants';

export async function saveGroup(year, month, tempMembers, config){
  let registerGroup = {};
  registerGroup.id = month.toString();
  registerGroup.group = tempMembers
  const {registerDatas} = await axios.post(`${API_URL}/${year}`, registerGroup, config);
}

export async function saveTotal(year, month, config){
  let months = await getExitTotal();

  months.push(month.toString());

  const { registerData } = await registerTotal();

  async function registerTotal() {
    let registerMonths = {};
    registerMonths.id = year;
    registerMonths.targetyear = year;
    registerMonths.totalmonth = months;
    return await axios.put(`${API_URL}/total/${year}`, registerMonths, config);
  }

  async function getExitTotal() {
    const { data } = await axios.get(`${API_URL}/total`);
    let months = [];
    data.forEach(target => {
      if (target.totalmonth.length !== 12) {
        target.totalmonth.forEach(month => months.push(month));
      }
    });
    return months;
  }
}

const Save = {
  saveTotal,
  saveGroup
};
export default Save;