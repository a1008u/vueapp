<template>
  <div id="ButtonSet">
    <nav v-if="buttonState" class="navbar is-light" role="navigation" >
      <div class="navbar-menu">
        <div class="navbar-item">
          <csv-button :csvteam='csvteam' :csvcolume='csvcolume' :csvfile='csvfile'>csv取得</csv-button>
        </div>
        <div class="navbar-item">
          <confirm-button option1='is-info' option2='is-primary' @confirm='confirm'>入力し直す</confirm-button>
        </div>
        <div class="navbar-item">
          <save-button option1='is-success' option2='is-outlined' @save='save'>保存</save-button>
        </div>
      </div>
    </nav>
    <nav v-else class="navbar is-light" role="navigation">
      <div class="navbar-menu">
        <div class="navbar-item">
          <csv-button :csvteam='csvteam' :csvcolume='csvcolume' :csvfile='csvfile'>csv取得</csv-button>
        </div>
        <div class="navbar-item">
          <fix-button option1='is-info' option2='is-outlined' @fix='fix'>編集</fix-button>
        </div>
        <div class="navbar-item">
          <check-button option1='is-info' option2='is-outlined' @check='check'>重複確認</check-button>
        </div>
        <div class="navbar-item">
          <confirm-button option1='is-success' option2='is-primary' @confirm='confirm'>確認</confirm-button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import CheckButton from "@/components/atoms/Button/CheckButton.vue";
import SaveButton from "@/components/atoms/Button/SaveButton.vue";
import FixButton from "@/components/atoms/Button/FixButton.vue";
import ConfirmButton from "@/components/atoms/Button/ConfirmButton.vue";
import CsvButton from "@/components/atoms/Button/CsvButton.vue";

export default {
  name: 'ButtonSet',
  components:{
    CsvButton:CsvButton,
    CheckButton: CheckButton,
    SaveButton: SaveButton,
    FixButton:FixButton,
    ConfirmButton:ConfirmButton
  },
  props: {
    buttonState: {
      type: Boolean,
      description: "ボタンセットの表示について"
    },
    csvteam:{
      type: Array
    },
    csvcolume:{
      type: Array
    },
    csvfile:{
      type: String
    }
  },
  methods: {
    confirm(e) {
      this.$emit('confirm',e)
    },
    save(e) {
      this.$emit('save',e)
    },
    check(e) {
      this.$emit('check',e)
    },
    fix(e) {
      this.$emit('fix',e)
    }
  },
  data(){
    return {
    }
  }
};
</script>

<style scoped>
a{
  text-decoration:none !important;
}
.columns{
  text-align: center;
}
</style>
