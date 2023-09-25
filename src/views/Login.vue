<template>
  <div class="wrapper">
    <form class="auth">
      <h2 class="auth-title">Авторизуйтесь</h2>
      <label for="login" class="auth-label">Логин</label>
      <input
        type="text"
        id="login"
        class="auth-login"
        placeholder="Введите логин"
      />
      <label for="password" class="auth-label"></label>
      <input
        type="text"
        id="password"
        class="auth-password"
        placeholder="Введите пароль"
      />
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>

</style>
