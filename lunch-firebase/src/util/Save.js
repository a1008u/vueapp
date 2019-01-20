import db from "@/firebase/init";
import Firestore from './Firestore';

/**
 * 処理
 *  - totalの登録
 *  - groupの登録(totalが成功した場合のみ実施)
 *  * batchを利用して一括保存
 *
 * @param {*} year : 入力した年
 * @param {*} month : 入力した月
 * @param {*} tempMembers : 登録用のグループ
 */
export async function exe(year, month, tempMembers) {
  const batch = db.batch();

  // totalの登録 -------------------------------
  const resultTotal = await Save.saveTotalFirestore(batch, year, month)

  // -------------------------------
  const resultGroup = (resultTotal) ? await Firestore.setFirestoreToTotal(batch, year, month, tempMembers) : false;

  console.log('resultTotal : ', resultTotal)
  console.log('resultGroup : ', resultGroup)

  if (resultTotal && resultGroup) {
    return batch
      .commit()
      .then(() => true)
      .catch(err => err);
  } else {
    return false
  }
}

/**
 * TODO:FireStoreに何も無い時の処理がバグっている（考慮していない）
 * @param {*} batch 
 * @param {*} year 
 * @param {*} month 
 */
export async function saveTotalFirestore(batch, year, month){
  let [yearmonths, groupTotalTargets] = await getExitTotal();
  if (yearmonths.includes(`${year}${month}`)) {
    return false;
  } else {
    yearmonths.push(`${year}${month}`);
    return await registerTotal(batch, year, month, groupTotalTargets);
  }

  async function registerTotal(batch, year, month, groupTotalTargets) {
    // console.log('groupTotalTargets : ', groupTotalTargets)
    for (let totalTarget of groupTotalTargets) {
      console.log('groupTotalTargets : ', totalTarget)
      // update
      if (totalTarget.targetyear === year) {
        totalTarget.totalmonth.push(month)
        totalTarget.totalmonth.sort((a, b) => (a > b ? 1 : -1));
        return await Firestore.updateFireStoreToGroupTotal(batch, groupTotalTargets)
      } else {
        // 新規（insert）
        const numberYear= Number(totalTarget.targetyear) + 1
        if(totalTarget.targetyear !== year && numberYear.toString() === year) {
          const newTarget = {}
          newTarget.targetyear = year
          newTarget.totalmonth = [month]
          groupTotalTargets.push(newTarget)
          console.log('groupTotalTargetNew : ', groupTotalTargets)
          return await Firestore.updateFireStoreToGroupTotal(batch, groupTotalTargets)
        }
      }
    }
  }

  /**
   * @returns
   *  yearmonths : Firebaseにすでに登録されている年月の配列（['201701','201702']）
   *  groupTotalTargets : Firebaseの取得データ（更新や追加用）
   */
  async function getExitTotal() {
    const groupTotal = await Firestore.getFireStore("group", "total");
    const groupTotalTargets = groupTotal.data()['target'];
    let yearmonths = [];
    groupTotalTargets.forEach(target => {
      target.totalmonth.forEach(month => yearmonths.push(`${target.targetyear}${month}`));
    });
    return [yearmonths, groupTotalTargets];
  }
}

const Save = {
  exe,
  saveTotalFirestore,
};
export default Save;