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
export default {
  name: 'grandmenu'
};
</script>

<style scoped>
.columns{
  text-align: center;
}
</style>
