<template>
  <div id="ButtonSet">
    
    <div v-if="buttonState" class="box">
      <div class="columns is-mobile is-centered">
        <div class="column is-half">
          <confirm-button option1='is-info' option2='is-outlined' @confirm='confirm'>入力し直す</confirm-button>
        </div>
        <div class="column is-half">
          <save-button option1='is-success' option2='is-outlined' @save='save'>保存</save-button>
        </div>
      </div>
    </div>
    <div v-else class="box">
      <div class="columns is-mobile is-centered">
        <div class="column is-one-third">
          <fix-button option1='is-info' option2='is-outlined' @fix='fix'>編集</fix-button>
        </div>
        <div class="column is-one-third">
          <check-button option1='is-info' option2='is-outlined' @check='check'>重複確認</check-button>
        </div>
        <div class="column is-one-third">
          <confirm-button option1='is-success' option2='is-outlined' @confirm='confirm'>確認</confirm-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/atoms/Button/CheckButton.vue";
import SaveButton from "@/components/atoms/Button/SaveButton.vue";
import FixButton from "@/components/atoms/Button/FixButton.vue";
import ConfirmButton from "@/components/atoms/Button/ConfirmButton.vue";

export default {
  name: 'BaseCard',
  components:{
    CheckButton: CheckButton,
    SaveButton: SaveButton,
    FixButton:FixButton,
    ConfirmButton:ConfirmButton
  },
  props: {
    buttonState: {
      type: Boolean,
      description: "ボタンセットの表示について"
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
