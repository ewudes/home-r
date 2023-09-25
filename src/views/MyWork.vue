<template>
  <div class="wrapper">
    <div class="main-content">
      <header class="page-header">
        <div class="container-big">
          <ul class="socials">
            <li class="socials-item">
              <a href="https://vk.com" target="_blank" class="socials-link vk"
                >Вконтакте</a
              >
            </li>
            <li class="socials-item">
              <a
                href="https://twitter.com"
                target="_blank"
                class="socials-link tw"
                >Twitter</a
              >
            </li>
            <li class="socials-item">
              <a
                href="https://ru-ru.facebook.com"
                target="_blank"
                class="socials-link fb"
                >Facebook</a
              >
            </li>
            <li class="socials-item">
              <a
                href="https://github.com"
                target="_blank"
                class="socials-link gt"
                >Github</a
              >
            </li>
          </ul>
        </div>
      </header>
      <div class="container">
        <aside class="sidebar">
          <nav class="navigation">
            <ul class="navigation-list">
              <li class="navigation-item">
                <a href="/" class="navigation-link">Обо мне</a>
              </li>
              <li class="navigation-item current">
                <a href="/my-work.html" class="navigation-link">Мои работы</a>
              </li>
              <li class="navigation-item">
                <a href="/contact-me.html" class="navigation-link"
                  >Связаться со мной</a
                >
              </li>
            </ul>
          </nav>
          <address class="contacts">
            <h2 class="contacts-title">Контакты</h2>
            <ul class="contacts-list">
              <li class="contacts-item">
                <a
                  href="mailto:pochta@mail.ru"
                  class="contacts-link contacts-link-mail"
                  >pochta@mail.ru</a
                >
              </li>
              <li class="contacts-item">
                <a
                  href="tel:+79812342323"
                  class="contacts-link contacts-link-phone"
                  >+79812342323</a
                >
              </li>
              <li class="contacts-item">
                <a
                  href="skype:username?call"
                  class="contacts-link contacts-link-skype"
                  >username</a
                >
              </li>
            </ul>
          </address>
        </aside>
        <div class="variable-content">
          <section class="aboutbox">
            <h2 class="aboutbox-header">Мои работы</h2>
            <div class="aboutbox-body clearfix">
              <ul class="my-work-list">
                <li class="my-work-item">
                  <a href="" class="my-work-link">
                    <img src="img/work1.png" alt="" class="my-work-img" />
                  </a>
                  <h4 class="my-work-title">www.site.me</h4>
                  <p class="my-work-text">
                    Информация о проекте. Еще небольшое количество текста, чтобы
                    было больше текста
                  </p>
                </li>
                <li class="my-work-item">
                  <a href="" class="my-work-link">
                    <img src="img/work1.png" alt="" class="my-work-img" />
                  </a>
                  <h4 class="my-work-title">www.site.me</h4>
                  <p class="my-work-text">
                    Информация о проекте. Еще небольшое количество текста, чтобы
                    было больше текста
                  </p>
                </li>
                <li class="my-work-item">
                  <a href="" class="my-work-link">
                    <img src="img/work1.png" alt="" class="my-work-img" />
                  </a>
                  <h4 class="my-work-title">www.site.me</h4>
                  <p class="my-work-text">
                    Информация о проекте. Еще небольшое количество текста, чтобы
                    было больше текста
                  </p>
                </li>
                <li class="my-work-item">
                  <a href="" class="my-work-link">
                    <img src="img/work1.png" alt="" class="my-work-img" />
                  </a>
                  <h4 class="my-work-title">www.site.me</h4>
                  <p class="my-work-text">
                    Информация о проекте. Еще небольшое количество текста, чтобы
                    было больше текста
                  </p>
                </li>
                <a href="" class="my-work-item my-work-add">Добавить проект</a>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <footer class="page-footer">
      <div class="container">
        <div class="lock">
          <a href="/login.html" class="lock-inner">Войти</a>
        </div>
      </div>
      <div class="copyright">Это блок для копирайта</div>
    </footer>
</template>

<script>
export default {
  name: "MyWork",
};
</script>

<style>
  .my-work-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .my-work-item {
    display: inline-block;
    margin: 10px;
    width: 29%;
  }

  .my-work-img {
    width: 100%;
    border: 1px solid #3ba8c0;
    border-radius: 4px;
  }

  .my-work-title {
    margin: 0;
    color: #3ba8c0;
    font-size: 12px;
    text-align: center;
  }

  .my-work-text {
    margin-top: 0;
    font-size: 14px;
  }

  .my-work-add {
    border: 1px dashed #3ba8c0;
    border-radius: 4px;
    background-color: #edf8fc;
    background-image: url('../assets/img/add.png');
    background-repeat: no-repeat;
    background-position: center 35px;
    transform: translateY(-145px);
    padding-top: 80px;
    padding-bottom: 30px;
    text-align: center;
    color: #3ba8c0;
    text-decoration: none;
  }

  .my-work-add:hover {
    background-color: #ddf5fd;
  }
</style>
