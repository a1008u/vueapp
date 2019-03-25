// import { API_URL } from '../constants';
// import axios from 'axios';
import db from "@/firebase/init";
import Firestore from "./Firestore";

// export async function mkTargetYearMonths() {
//   let targetYearMonths = [];
//   const {data} = await axios.get(`${API_URL}/total`);
//   data.forEach(target => {
//     target.totalmonth.forEach(month => {
//       let yearmonth = `${target.targetyear}${month}`
//       targetYearMonths.push(Number(yearmonth))
//     })
//   })
//   targetYearMonths.sort((a,b) => (a < b ? 1 : -1));
//   return targetYearMonths;
// }

async function getName(collectionName, docName) {
  return db.collection(collectionName).doc(docName)
    .get()
    .then(snapshot => snapshot)
    .catch(err => err)
}

export async function mkTargetYearMonthsViaFirastore() {
  let targetYearMonths = [];
  let testName = await getName("group", "total");
  const data = testName.data().target;

  data.forEach(target => {
    target.totalmonth.forEach(month =>
      targetYearMonths.push(`${target.targetyear}${month}`)
    );
  });
  targetYearMonths.sort((a, b) => (a < b ? 1 : -1));
  return targetYearMonths;
}

// export async function mkTargetYearMonth(targetYearMonths){
//   let yearMonth = [];
//   for(let i=0; i < 3; i++) {
//     let year = targetYearMonths[i].toString().slice(0,4);
//     let month = targetYearMonths[i].toString().slice(4,6);
//     const {data} = await axios.get(`${API_URL}/${year}/${month}`);
//     yearMonth.push(data)
//   }
//   return yearMonth;
// }

export async function mkNewTargetYearMonthViaFirastore(targetYearMonths){
  let yearMonth = [];
  for(let i=0; i < targetYearMonths.length; i++) {
    let yearmonth = targetYearMonths[i]
    const registeredGroupMember = await getName("groupmember", yearmonth);
    if (registeredGroupMember) {
      const count = Number(registeredGroupMember.data()['group']['count'])
      const dataTemp = []
      for (let g of Firestore.range(count)) {
        let c = (g < 10) ? `0${g}`: g
        dataTemp.push(registeredGroupMember.data()['group'][c])
      }
      const data = {'group': dataTemp}
      yearMonth.push(data)
    }
  }
  return yearMonth;
}

// export async function mkTargetYearMonthBk(targetYearMonths){
//   let yearMonth = [];
//   for (let targetYearMonth of targetYearMonths) {
//     let year = targetYearMonth.toString().slice(0,4);
//     let month = targetYearMonth.toString().slice(4,6);
//     const {data} = await axios.get(`${API_URL}/${year}/${month}`);
//     yearMonth.push(data)
//   }
//   return yearMonth;
// }

export async function mkTargetYearMonthBkViaFirestore(targetYearMonths){
  let yearMonth = [];
  for (let targetYearMonth of targetYearMonths) {
    const registeredGroupMember = await getName("groupmember", String(targetYearMonth));
    const dataTemp = []
    const count = Number(registeredGroupMember.data()['group']['count'])
    for (let g of Firestore.range(count)) {
      let c = (g < 10) ? `0${g}`: g
      dataTemp.push(registeredGroupMember.data()['group'][c])
    }
    const data = {'group': dataTemp}
    yearMonth.push(data)
  }
  return yearMonth;
}

const Daily = {
  // mkTargetYearMonths,
  mkTargetYearMonthsViaFirastore,
  // mkTargetYearMonth,
  mkNewTargetYearMonthViaFirastore,
  // mkTargetYearMonthBk,
  mkTargetYearMonthBkViaFirestore
};
export default Daily;