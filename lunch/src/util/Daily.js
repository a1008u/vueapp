import { API_URL } from '../constants';
import axios from 'axios';

export async function mkTargetYearMonths() {
  let targetYearMonths = [];
  const {data} = await axios.get(`${API_URL}/total`);
  data.forEach(target => {
    target.totalmonth.forEach(month => {
      let yearmonth = `${target.targetyear}${month}`
      targetYearMonths.push(Number(yearmonth))
    })
  })
  targetYearMonths.sort((a,b) => (a < b ? 1 : -1));
  return targetYearMonths;
}

export async function mkTargetYearMonth(targetYearMonths){
  let yearMonth = [];
  for(let i=0; i < 3; i++) {
    let year = targetYearMonths[i].toString().slice(0,4);
    let month = targetYearMonths[i].toString().slice(4,6);
    const {data} = await axios.get(`${API_URL}/${year}/${month}`);
    yearMonth.push(data)
  }
  return yearMonth;
}

export async function mkTargetYearMonthBk(targetYearMonths){
  let yearMonth = [];
  for (let targetYearMonth of targetYearMonths) {
    let year = targetYearMonth.toString().slice(0,4);
    let month = targetYearMonth.toString().slice(4,6);
    const {data} = await axios.get(`${API_URL}/${year}/${month}`);
    yearMonth.push(data)
  }
  return yearMonth;
}

const Daily = {
  mkTargetYearMonths,
  mkTargetYearMonth,
  mkTargetYearMonthBk
};
export default Daily;