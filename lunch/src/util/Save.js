import axios from 'axios';
import { API_URL } from '../constants';

export async function saveGroup(year, month, tempMembers, config){
  let registerGroup = {};
  registerGroup.id = month.toString();
  registerGroup.group = tempMembers
  const {registerDatas} = await axios.post(`${API_URL}/${year}`, registerGroup, config);
}

export async function saveTotal(year, month, config){
  const {data} = await axios.get(`${API_URL}/total`);
    let registerMonths ={};
    let months = [];
    let needNewYearFlag = true;
    data.forEach(target => {
      if(target.totalmonth.length !== 12) {
        target.totalmonth.forEach(month => months.push(month))
        needNewYearFlag = false;
      }
    })

    if(needNewYearFlag) {
      months.push(month)
    }

    months.push(month.toString())
    registerMonths.id = year;
    registerMonths.targetyear = year
    registerMonths.totalmonth = months;
    const {registerData} = await axios.put(`${API_URL}/total/${year}`, registerMonths, config);
}

const Save = {
  saveTotal,
  saveGroup
};
export default Save;