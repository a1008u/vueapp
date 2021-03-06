<template>
<div class="editer">
  <div class="editerWrapper">

    <div class="memoListWrapper">
      <div class="memoBtns">
        <button class="addMemoBtn" @click="addMemo">
          <i class="fa fa-plus"></i>
        </button>
        <button class="saveMemosBtn" @click="saveMemos">
          <i v-if="!isSaving" class="fa fa-floppy-o"></i>
          <i v-if="isSaving" class="fa fa-spinner fa-spin fa-lg"></i>
        </button>
        <button class="deleteMemoBtn" v-if="memos.length > 1" @click="deleteMemo">
          <i class="fa fa-trash"></i>
        </button>
      </div>
      <div class="memoList" v-for="(memo, index) in memos" :key="index" @click="selectMemo(index)" :data-selected="index == selectedIndex">
        <p class="memoTitle">{{ displayTitle(memo.markdown) }}</p>
      </div>
    </div>

    <!-- markdownを記載するエリア -->
    <textarea class="markdown" v-model="memos[selectedIndex].markdown" ref="markdown"></textarea>

    <!-- markdownが出力するエリア -->
    <div class="previewWrapper" ref="preview">
      <p class="previewTitle">Preview Area</p>
      <div class="preview markdown-body" v-html="preview()"></div>
    </div>
    <!-- <div class="preview markdown-body" v-html="preview()" ref="preview"></div> -->
  </div>
</div>
</template>

<script>
import marked from '../lib/markdown';
import sampleMarkdown from '../assets/sample';
import firebase from 'firebase'
import "../scss/github-markdown.css";

export default {
  name: "editor",
  props: ["user"],
  data() {
    return {
      memos: [
        {
          markdown: ""
        }
      ],
      selectedIndex: 0,
      isSaving: false,
    };
  },
  created: function() {
    firebase
      .database()
      .ref("memos/" + this.user.uid)
      .once("value")
      .then(result => {
        if (result.val()) {
          this.memos = result.val();
          this.focusMemo();
        }
      });
  },
  mounted: function() {

    this.focusMemo();

    // key操作でfirebaseと接続
    document.onkeydown = e => {
      if (e.key == 's' && (e.metaKey || e.ctrlKey)) {
        this.saveMemos();
        return false;
      }
      if (e.key == 'ArrowUp' && e.altKey) {
        if (this.selectedIndex > 0 && this.memos.length > 0) {
          this.selectMemo(this.selectedIndex - 1);
          return false;
        }
      }
      if (e.key == 'ArrowDown' && e.altKey) {
        if (this.selectedIndex < this.memos.length - 1) {
          this.selectMemo(this.selectedIndex + 1);
        } else {
          this.addMemo();
        }
        return false;
      }
      if (e.key == 'Backspace' && (e.metaKey || e.ctrlKey)) {
        this.deleteMemo();
        return false;
      }
    }

    const markdownDom = this.$refs.markdown;
    const previewDom = this.$refs.preview;

    console.log(markdownDom.onscroll);
    markdownDom.onscroll = e => {
      const ratio = markdownDom.scrollTop / (markdownDom.scrollHeight - markdownDom.getClientRects()[0].height);
      previewDom.scrollTop = ratio * (previewDom.scrollHeight - previewDom.getClientRects()[0].height);
      markdownDom.height = '800';
    }
  },
  beforeDestroy: function() {
    document.onkeydown = null;
  },
  methods: {
    logout: function() {
      firebase.auth().signOut();
    },
    addMemo: function() {
      this.memos.push({
        markdown: "無題のメモ"
      });
      this.selectedIndex = this.memos.length - 1;
      this.focusMemo();
    },
    deleteMemo: function() {
      const title = this.displayTitle(this.memos[this.selectedIndex].markdown);
      if (confirm(title + 'を削除します。')) {
        this.memos.splice(this.selectedIndex, 1);
        if (this.selectedIndex > 0) {
          this.selectedIndex--;
        }
      }
    },
    saveMemos: function() {
      if (this.isSaving) {
        return;
      }
      this.isSaving = true;
      firebase
        .database()
        .ref('memos/' + this.user.uid)
        .set(this.memos)
        .then(res => {
          this.isSaving = false;
        });
    },
    selectMemo: function(index) {
      this.selectedIndex = index;
      this.focusMemo();
    },
    focusMemo: function() {
      this.$nextTick(() => {
        const markdownDom = this.$refs.markdown;
        markdownDom.focus();
        markdownDom.scrollTop = markdownDom.getClientRects()[0].height;
      });
    },
    preview: function() {
      return marked(this.memos[this.selectedIndex].markdown);
    },
    displayTitle: function(text) {
      return text.split(/\n/)[0].replace(/#+\s/, '') || 'no text';
    }
  }
};
</script>

<style lang="scss" scoped>
.editer,
.editerWrapper {
    height: 100%;
}
.memoListWrapper {
    width: 20%;
    padding-bottom: 20px;
}
.memoList {
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    border-bottom: #ccc 1px solid;
    &:nth-child(even) {
        background-color: rgba(#0078ff,0.1);
    }
    &[data-selected="true"] {
        background-color: rgba(#00ff30,0.2);
    }
}
.memoTitle {
    height: 1.5em;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
}
.memoBtns {
    padding: 10px;
    border-bottom: #ccc 1px solid;
    :nth-child(n+2) {
        margin-left: 10px;
    }
}
.deleteMemoBtn {
    background-color: rgba(255,0,50,0.8);
}
.markdown {
    border: none;
    border-right: #ccc 1px solid;
    border-left: #ccc 1px solid;
    background-color: #eee;
    box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    width: 40%;
    resize: none;
}
.previewWrapper {
    text-align: left;
    width: 40%;
}
.previewTitle {
    color: #888;
    padding: 10px;
    font-size: 14px;
    border-bottom: #ddd 1px dotted;
}
.preview {
    padding: 10px;
}
.markdown,
.memoListWrapper,
.previewWrapper {
    overflow: scroll;
    float: left;
    height: 100%;
    box-sizing: border-box;
}
</style>