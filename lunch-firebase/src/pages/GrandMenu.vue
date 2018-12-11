<template>
  <div id="grandmenu">

    <div class="columns is-mobile is-centered">
      <div class="column is-half is-centered">
        <router-link class="button is-primary is-outlined is-large" to="/groupmk">
          <b-icon pack="fas" icon="coffee"></b-icon>
          <span>groupを作成(check機能)</span>
        </router-link>
      </div>
      <div class="column is-half is-centered">
        <router-link class="button is-info is-outlined is-large" to="/backnumbermenu">
          <b-icon pack="fas" icon="check"></b-icon>
          <span>バックナンバーをみる</span>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: 'grandmenu',
  created: async function(){

    async function getName(collectionName, docName) {
      return db.collection(collectionName).doc(docName)
        .get()
        .then(snapshot => snapshot)
    }

    let testName = await getName("test", "part1");
    console.log(testName)
    console.log(testName.data())
    // testName.forEach(data => {
    //   console.log(data)
    // });
    // db.collection("test")
    //   .get()
    //   .then(snapshot => {
    //     console.log(snapshot)
    //     snapshot.forEach(doc => {
    //       console.log(doc.data());
    //     });
    //   });
  }
};
</script>

<style scoped>
.columns{
  text-align: center;
}
</style>
