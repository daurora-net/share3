<template>
  <div class="sidenav">
    <img class="logo_img" src="../assets/img/logo.png" alt="">
    <img class="home_img" src="../assets/img/home.png" alt=""><NuxtLink to="/">ホーム</NuxtLink>
    <img class="home_img" src="../assets/img/logout.png" alt=""><NuxtLink to="/logout">ログアウト</NuxtLink>
    <div>
      <!-- <input class="share_box" type="text" v-model="text">
      <p>{{ text | upperCase }}</p> -->
      <!-- <input type="text" name="addName" v-model="content" placeholder="タスクを入力してください">
      <button class="button button--green" @click="insert">追加</button> -->

          <form>
            <input type="text" class="input-add" v-method="content" />
            <button class="button button-add" @click="insert">シェア</button>
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