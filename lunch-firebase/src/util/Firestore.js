import db from "@/firebase/init";

export async function getFireStore(collectionName, docName) {
  return db
    .collection(collectionName)
    .doc(docName)
    .get()
    .then(snapshot => snapshot)
    .catch(err => err);
}

export function range(n) {
  return [...Array(n).keys()]
}

export async function updateFireStoreToGroupmember(year, month, tempMembers) {

  const groupV = {};
  groupV.id = month;
  groupV.count = tempMembers.length;
  for (let i = 0; i < tempMembers.length; i++) {
    let count = i < 10 ? `0${i}` : String(i);
    groupV[count] = tempMembers[i];
  }

  return db.collection('groupmember')
    .doc(`${year}${month}`)
    .update({
      group: groupV
    })
    .then(() => true)
    .catch(err => err);
}

export async function updateFireStoreToGroupTotal(batch, data) {
  const dbGroupTotal = db.collection("group").doc("total");
  batch.update(dbGroupTotal, {target: data});
  return 'groupTotal done'
}

export async function setFirestoreToTotal(batch, year, month, tempMembers){

  const groupV = {};
  groupV.id = month;
  groupV.count = tempMembers.length;
  for (let i = 0; i < tempMembers.length; i++) {
    let count = i < 10 ? `0${i}` : String(i);
    groupV[count] = tempMembers[i];
  }

  const dbGroup = db.collection('groupmember').doc(`${year}${month}`);
  batch.set(dbGroup, {
    group: groupV
  });

  return 'done'
}

const Firestore = {
  range,
  getFireStore,
  updateFireStoreToGroupmember,
  updateFireStoreToGroupTotal,
  setFirestoreToTotal
};
export default Firestore;
