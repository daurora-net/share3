<template>
  <div class="side-nav">
    <img class="side-nav_logo" src="../assets/img/logo.png" alt="">
    <NuxtLink to="/"><img class="side-nav_icon" src="../assets/img/home.png" alt="">ホーム</NuxtLink>
    <NuxtLink to="/logout"><img class="side-nav_icon" src="../assets/img/logout.png" alt="">ログアウト</NuxtLink>
    <div>
      <!-- <input class="share_box" type="text" v-model="text">
      <p>{{ text | upperCase }}</p> -->
      <!-- <input type="text" name="addName" v-model="content" placeholder="タスクを入力してください">
      <button class="button button--green" @click="insert">追加</button> -->

          <form>
            <input type="text" class="share_box" v-method="content" />
            <button class="button side-form_btn" @click="insert">シェア</button>
          </form>
    </div>
  </div>
</template>
<script>
export default {
  // data() {
  //   return {
  //     text: '',
  //   }
  // },
  // filters: {
  //   upperCase(text) {
  //     return text.toUpperCase();
  //   }
  // }
  methods: {
    insert: function () {
      if (this.content != '') {
        this.$store.commit('insert', { content: this.content });
        this.content = '';
      }
    }
  }
}
</script>