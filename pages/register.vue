<template>
  <div class="register">
    <AuthHeader />
    <div class="auth-form">
      <p class="auth-form_ttl">新規登録</p>
      <input class="auth-form_input" v-model="name" type="email" placeholder="ユーザーネーム" required />
      <input class="auth-form_input" v-model="email" type="email" placeholder="メールアドレス" required />
      <input class="auth-form_input" v-model="password" type="password" placeholder="パスワード" required />
      <button class="btn auth-form_btn" @click="register">新規登録</button>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    register() {
      if (!this.email || !this.password) {
        alert('メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          data.user.sendEmailVerification().then(() => {
            this.$router.replace('/')
          })
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/email-already-in-use':
              alert('このメールアドレスはすでに使われています。')
              break
            case 'auth/weak-password':
              alert('パスワードは6文字以上で入力してください。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        })
    },
  },
}
</script>