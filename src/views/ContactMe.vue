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
              <li class="navigation-item">
                <a href="/my-work.html" class="navigation-link">Мои работы</a>
              </li>
              <li class="navigation-item current">
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
            <h2 class="aboutbox-header-contact">
              У вас интересный проект? Напишите мне
            </h2>
            <div class="aboutbox-body clearfix">
              <form class="form">
                <label class="form-label"
                  >Имя
                  <input
                    type="text"
                    class="form-name"
                    placeholder="Как к Вам обращаться"
                  />
                </label>

                <label class="form-label"
                  >Email
                  <input
                    type="text"
                    class="form-email"
                    placeholder="Куда мне писать"
                  />
                </label>

                <label class="form-label"
                  >Сообщение
                  <textarea
                    cols="30"
                    rows="10"
                    class="form-msg"
                    placeholder="Кратко в чем суть"
                  ></textarea>
                </label>

                <label class="form-label"
                  >Введите код, указанный на картинке
                  <input type="text" class="form-kapcha-img" />
                  <input
                    type="text"
                    class="form-kapcha"
                    placeholder="Введите код"
                /></label>

                <button class="form-submit" type="submit">Отправить</button>
                <button class="form-reset" type="reset">Очистить</button>
              </form>
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
  name: "ContactMe",
};
</script>

<style>
  .aboutbox-header-contact {
    font-family: 'fira_sansbook';
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    font-size: 27px;
    font-weight: normal;
    border-radius: 4px 4px 0 0;
    border-bottom: 18px #67dffa solid;
    margin: 0 0 50px 0;
    padding: 50px 0;
    display: inline-block;
    background-color: #48cbe8;
    color: #ffffff;
  }

  .form {
    padding: 0 125px 200px;
  }

  .form-label {
    display: inline-block;
  }

  .form-name,
  .form-email {
    display: block;
  }

  .form-msg {
    width: 100%;
  }

</style>
