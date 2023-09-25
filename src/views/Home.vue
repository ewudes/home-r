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
              <li class="navigation-item current">
                <a href="/" class="navigation-link">Обо мне</a>
              </li>
              <li class="navigation-item">
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
            <h2 class="aboutbox-header">Основная информация</h2>
            <div class="aboutbox-body clearfix">
              <div class="image-wrap">
                <div class="avatar-box">
                  <img
                    src="../assets/img/face.png"
                    width="150"
                    height="150"
                    alt="User logo"
                    class="avatar"
                  />
                </div>
              </div>
              <div class="worksheet-wrap">
                <ul class="worksheet-list">
                  <li class="worksheet-item clearfix">
                    <div class="worksheet-what">Меня зовут:</div>
                    <div class="worksheet-info">Гомер Симпсон</div>
                  </li>
                  <li class="worksheet-item clearfix">
                    <div class="worksheet-what">Мой возраст:</div>
                    <div class="worksheet-info">45 лет</div>
                  </li>
                  <li class="worksheet-item clearfix">
                    <div class="worksheet-what">Мой город:</div>
                    <div class="worksheet-info">Москва</div>
                  </li>
                  <li class="worksheet-item clearfix">
                    <div class="worksheet-what">Моя Специализация:</div>
                    <div class="worksheet-info">Frontend разработчик</div>
                  </li>
                  <div class="worksheet-item clearfix">
                    <div class="worksheet-what">Ключевые навыки:</div>
                    <div class="worksheet-info skills">
                      <ul class="skills-list">
                        <li class="skill-item">html</li>
                        <li class="skill-item">css</li>
                        <li class="skill-item">javascript</li>
                        <li class="skill-item">gulp</li>
                        <li class="skill-item">git</li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </section>
          <section class="aboutbox">
            <h2 class="aboutbox-header">Опыт работы</h2>
            <div class="aboutbox-body clearfix">
              <article class="experiment">
                <h4 class="experiment-title">
                  "ИП Боровицкий" - Продавец дисков
                </h4>
                <div class="experiment-period">Сентябрь 2005 - Август 2008</div>
              </article>
              <article class="experiment">
                <h4 class="experiment-title">
                  "ООО Системы безопастности" - Системный администратор
                </h4>
                <div class="experiment-period">Июнь 2008 - Июль 2010</div>
              </article>
            </div>
          </section>
          <section class="aboutbox">
            <h2 class="aboutbox-header">Образование</h2>
            <div class="aboutbox-body clearfix">
              <article class="education">
                <h4 class="education-title">
                  Незаконченное высшее. СПБГУ ИТМО
                </h4>
                <div class="education-period">
                  Октябрь 2012 - по настоящее время
                </div>
              </article>
              <article class="education">
                <h4 class="education-title">Курсы Loftschool.ru</h4>
                <div class="education-period">
                  Ноябрь 2014 - по настоящее время
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
};
</script>

<style>
  .container {
    width: 960px;
    margin: 0 auto;
  }

  .wrapper {
    position: relative;
    min-height: 100%;
    min-width: 970px;
    height: auto !important;
  }

  .wrapper:after {
    content: '';
    height: 80px;
    display: block;
  }

  .text-center {
    text-align: center;
  }

  .pull-left {
    float: left;
  }

  .pull-right {
    float: right;
  }

  .container:before,
  .clearfix:before,
  .container:after,
  .clearfix:after {
    content: '';
    display: table;
  }

  .container:after,
  .clearfix:after {
    clear: both;
  }

  .container-big {
    max-width: 1200px;
    min-width: 960px;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }

  .page-header {
    height: 119px;
    background: #eff3f7 url('../assets/img/line.png') bottom center no-repeat;
    position: relative;
    margin-bottom: 39px;
  }

  .page-header .socials {
    position: absolute;
    left: 0;
    top: 36px;
  }

  .socials {
    margin: 0;
    padding: 0;
    min-width: 260px;
  }

  .socials .socials-item {
    list-style: none;
    display: inline-block;
    height: 47px;
    width: 47px;
    margin-left: 19px;
  }

  .socials .socials-item:first-child {
    margin-left: 0;
  }

  .socials .socials-link {
    display: block;
    height: 100%;
    width: 100%;
    text-indent: -9999px;
  }

  .socials .socials-link.vk {
    background-image: url('../assets/img/vk.svg');
  }

  .socials .socials-link.tw {
    background-image: url('../assets/img/tw.svg');
  }

  .socials .socials-link.fb {
    background-image: url('../assets/img/facebook.svg');
  }

  .socials .socials-link.gt {
    background-image: url('../assets/img/gihtub.svg');
  }

  .contacts-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .contacts-title {
    background-color: #3ba8c0;
    margin: 0;
    border-radius: 4px 4px 0 0;
    color: #ffffff;
    font-style: normal;
    padding-left: 20px;
    padding-top: 15px;
    padding-bottom: 10px;
  }

  .contacts-link {
    display: block;
    padding-left: 75px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #ffffff;
    text-decoration: none;
    font-style: normal;
    background-repeat: no-repeat;
    background-position: 40px center;
  }

  .contacts-link-mail {
    background-color: #41b9d4;
    background-image: url('../assets/img/mail.svg');
  }

  .contacts-link-phone {
    background-color: #48cbe8;
    background-image: url('../assets/img/phone.svg');
  }

  .contacts-link-skype {
    background-color: #51daf8;
    background-image: url('../assets/img/skype.svg');
    border-radius: 0 0 4px 4px;
  }

  .contacts-link:hover {
    text-decoration: underline;
  }

  .sidebar {
    width: 250px;
    float: left;
  }

  .navigation {
    overflow: hidden;
    background: #eff3f7;
    border-radius: 4px;
    margin-bottom: 26px;
  }

  .navigation .navigation-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .navigation .navigation-item {
    border-top: 2px solid #3ba8c0;
    margin: 0 11px;
  }

  .navigation .navigation-item:first-child {
    border-top: none;
  }

  .navigation .navigation-item.current {
    background: #3ba8c0;
    margin: 0;
    border: 0;
    border-bottom: noen;
    padding-left: 11px;
    margin-bottom: -2px;
  }

  .navigation .navigation-item.current .navigation-link {
    color: #f9fafb;
    font-size: 22px;
  }

  .navigation .navigation-link {
    font-family: 'fira_sansbook';
    display: block;
    font-size: 20px;
    text-decoration: none;
    color: #959aa8;
    margin-left: 16px;
    padding: 20px 0px;
  }

  .navigation .navigation-link:hover {
    color: #3ba8c0;
  }

  .variable-content {
    width: 650px;
    float: right;
  }

  .page-footer {
    background: #eff3f7 url('../assets/img/line.png') top center no-repeat;
    font-family: 'fira_sanslight';
    color: #4a545d;
    min-width: 970px;
    height: 80px;
    margin-top: -80px;
  }

  .page-footer .container {
    padding-top: 23px;
    position: relative;
  }

  .page-footer .copyright {
    margin: 0 180px;
    padding-top: 7px;
    text-align: center;
    font-size: 13px;
  }

  .page-footer .lock {
    position: absolute;
    top: 26px;
    left: 20px;
  }

  .lock .lock-inner {
    display: block;
    height: 40px;
    font-family: 'fira_sanslight';
    font-size: 16px;
    line-height: 2.2;
    color: #4a545d;
    text-decoration: none;
    background: url('../assets/img/lock-close.png') no-repeat;
    padding-left: 24px;
  }

  .lock .lock-inner:hover {
    text-decoration: underline;
    background: url('../assets/img/lock-open.png') no-repeat;
  }

  .aboutbox {
    background: #eff3f7;
    border-radius: 4px;
    margin-bottom: 26px;
  }

  .aboutbox .aboutbox-header {
    font-family: 'fira_sansbook';
    font-size: 27px;
    font-weight: normal;
    color: #3ba8c0;
    border-bottom: 2px #3ba8c0 solid;
    margin: 0 0 23px 0;
    padding: 13px 23px;
    display: inline-block;
  }

  .aboutbox-body {
    padding-bottom: 40px;
  }
</style>