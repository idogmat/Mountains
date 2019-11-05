<template lang="pug">
<!DOCTYPE html>
html(lang="en")
  head
    meta(charset="UTF-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    meta(http-equiv="X-UA-Compatible", content="ie=edge")
    title Portfolio | admin
  body
    .valid-messege
      .valid-messege__great Сообщение отправлено
      .valid-messege__server-load Сервер перегружен
      .valid-messege__bad Сообщение не отправлено
    .admin-login
      .admin-login__overlay
      .admin-login__block
        .admin-login__h3 Авторизация
        form.admin-login__form
          span.admin-login__form__span Логин
          .admin-login__form__login
            div.input-name.input-name__login 
              input.input-form.input-form__login(type="text" required)
          span.admin-login__form__span Пароль
          .admin-login__form__password
            div.input-name.input-name__password 
              input.input-form.input-form__password(type="text" required)
          button(type="submit").admin-login__form__btn Отправить
    header.header-admin
      .container.header-admin__container
        .header-admin__block
          .header-admin__block__admin
            .header-admin__block__admin__img
            p.header-admin__block__admin__p Евгений Родини
            p.header-admin__block__admin__admin-block Панель администрирования
          a.header-admin__block__exit Выйти
    .menu-admin-nav
      ul.container.menu-admin-nav__container
        li.menu-admin-nav__li
          a.menu-admin-nav__link.menu-admin-nav__about Обо мне
        li.menu-admin-nav__li
          a.menu-admin-nav__link.menu-admin-nav__works Работы
        li.menu-admin-nav__li
          a.menu-admin-nav__link.menu-admin-nav__reviews Отзывы
    main.wrapper.admin-wrapper
      .container.main__container
        section.admin-about
          .admin-about__nav
            h3.admin-about__nav__h3 Блок «Обо мне»
            button.admin-about__nav__add-group
              .admin-about__nav__add-group__icon
                .btn-add-skill
              h3.admin-about__nav__add-group__add Добавить группу
          .admin-about__skills
            .admin-about__skills__block
              .admin-about__skills__block__skill
                form.admin-about__skills__block__skill__name
                  input.input-form.input-name(type="text" placeholder="Название новой группы" required)
                  .admin-about__skills__block__skill__btns
                    button.btn-edit
                    button(type="submit").btn-accept
                    button(type="reset").btn-decline
                .admin-about__skills__block__skill__list
                  .admin-about__skills__block__skill__list__block
                    .admin-about__skills__block__skill__list__item
                      input.input-form.input-skill(type="text" disabled)
                      input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                    .admin-about__skills__block__skill__list__btns
                      button.btn-edit
                      button.btn-trash
                form.admin-about__skills__block__skill__level
                  input.input-form.add-new-skill(type="text" placeholder="Новый навык" required)
                  input.input-form.add-new-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                  .admin-about__skills__block__skill__level__btn
                    button(type="submit").btn-add-skill
            .admin-about__skills__block
              .admin-about__skills__block__skill
                  form.admin-about__skills__block__skill__name
                    input.input-form.input-name(type="text" placeholder="Название новой группы" required)
                    .admin-about__skills__block__skill__btns
                      button(type="submit").btn-accept
                      button(type="reset").btn-decline
                  .admin-about__skills__block__skill__list
                    .admin-about__skills__block__skill__list__block
                      .admin-about__skills__block__skill__list__item
                        input.input-form.input-skill(type="text" placeholder="Git" disabled)
                        input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                      .admin-about__skills__block__skill__list__btns
                        button.btn-edit
                        button.btn-trash
                      .skills__edit-block
                        button(type="submit").btn-accept
                        button(type="reset").btn-decline
                    .admin-about__skills__block__skill__list__block
                      .admin-about__skills__block__skill__list__item
                        input.input-form.input-skill(type="text" placeholder="Terminal" disabled)
                        input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                      .admin-about__skills__block__skill__list__btns
                        button.btn-edit
                        button.btn-trash
                      .skills__edit-block
                        button(type="submit").btn-accept
                        button(type="reset").btn-decline
                    .admin-about__skills__block__skill__list__block
                      .admin-about__skills__block__skill__list__item
                        input.input-form.input-skill(type="text" placeholder="Gulp" disabled)
                        input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                      .admin-about__skills__block__skill__list__btns
                        button.btn-edit
                        button.btn-trash
                      .skills__edit-block
                        button(type="submit").btn-accept
                        button(type="reset").btn-decline
                    .admin-about__skills__block__skill__list__block
                      .admin-about__skills__block__skill__list__item
                        input.input-form.input-skill(type="text" placeholder="Webpack" disabled)
                        input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                      .admin-about__skills__block__skill__list__btns
                        button.btn-edit
                        button.btn-trash
                      .skills__edit-block
                        button(type="submit").btn-accept
                        button(type="reset").btn-decline
                  form.admin-about__skills__block__skill__level
                    input.input-form.add-new-skill(type="text" placeholder="Новый навык" required)
                    input.input-form.add-new-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                    .admin-about__skills__block__skill__level__btn
                      button(type="submit").btn-add-skill
            .admin-about__skills__block
              .admin-about__skills__block__skill
                  form.admin-about__skills__block__skill__name
                    input.input-form.input-name(type="text" placeholder="Название новой группы" required)
                    .admin-about__skills__block__skill__btns
                      button(type="submit").btn-accept
                      button(type="reset").btn-decline
                  .admin-about__skills__block__skill__list
                    .admin-about__skills__block__skill__list__block
                      .admin-about__skills__block__skill__list__item
                        input.input-form.input-skill(type="text" placeholder="Git" disabled)
                        input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                      .admin-about__skills__block__skill__list__btns
                        button.btn-edit
                        button.btn-trash
                      .skills__edit-block
                        button(type="submit").btn-accept
                        button(type="reset").btn-decline
                    .admin-about__skills__block__skill__list__block
                      .admin-about__skills__block__skill__list__item
                        input.input-form.input-skill(type="text" placeholder="Terminal" disabled)
                        input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                      .admin-about__skills__block__skill__list__btns
                        button.btn-edit
                        button.btn-trash
                      .skills__edit-block
                        button(type="submit").btn-accept
                        button(type="reset").btn-decline
                    .admin-about__skills__block__skill__list__block
                      .admin-about__skills__block__skill__list__item
                        input.input-form.input-skill(type="text" placeholder="Gulp" disabled)
                        input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                      .admin-about__skills__block__skill__list__btns
                        button.btn-edit
                        button.btn-trash
                      .skills__edit-block
                        button(type="submit").btn-accept
                        button(type="reset").btn-decline
                    .admin-about__skills__block__skill__list__block
                      .admin-about__skills__block__skill__list__item
                        input.input-form.input-skill(type="text" placeholder="Webpack" disabled)
                        input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                      .admin-about__skills__block__skill__list__btns
                        button.btn-edit
                        button.btn-trash
                      .skills__edit-block
                        button(type="submit").btn-accept
                        button(type="reset").btn-decline
                  form.admin-about__skills__block__skill__level
                    input.input-form.add-new-skill(type="text" placeholder="Новый навык" required)
                    input.input-form.add-new-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                    .admin-about__skills__block__skill__level__btn
                      button(type="submit").btn-add-skill         
        section.admin-about.admin-works
          .admin-about__nav.admin-works__nav
            h3.admin-about__nav__h3.admin-works__nav__h3 Блок «Работы»
          .admin-works__block-works
            .admin-works__edit-block
              h3.admin-works__edit-block__h3 Редактирование работы
              form.admin-works__edit-block__section
                .admin-works__edit-block__section__img
                  label.admin-works__edit-block__img
                    .admin-works__edit-block__img__block Перетащите, либо загрузите изображение
                    input(type="file" name="image").admin-works__edit-block__img__input
                    button(type="button").admin-works__edit-block__img__btn Загрузить
                .admin-works__edit-block__info
                  .admin-works__edit-block__info__name
                    span.input-name Название
                    input.input-form(type="text" required)
                  .admin-works__edit-block__info__link
                    span.input-name Ссылка
                    input.input-form(type="text" required)
                  .admin-works__edit-block__info__description
                    span.input-name Описание
                    textarea.admin-works__edit-block__info__description__text(type="text" required)
                  .admin-works__edit-block__info__add-tags
                    span.input-name Добавление тэга
                    input.input-form(type="text" required)
                  .admin-works__edit-block__info__tags-view
                    .admin-works__edit-block__info__tags
                      .admin-works__edit-block__info__tag html
                      .admin-works__edit-block__info__tag css
                      .admin-works__edit-block__info__tag javaScript
                      .admin-works__edit-block__info__tag vue
                  .admin-works__edit-block__info__btns
                    button.btn-cancel Отмена
                    button(type="submit").btn-save Сохранить
            .admin-works__view
              button.add-block.admin-works__add-block
               p.add-block-text Добавить работу 
              .admin-works__block
                .admin-works__block__img-tags
                  .admin-works__block__tags
                    .admin-works__block__tag html
                    .admin-works__block__tag css
                    .admin-works__block__tag javaScript
                .admin-works__block__info
                  h3.admin-works__block__title Сайт школы образования
                  p.admin-works__block__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.admin-works__block__link http://loftschool.ru
                .admin-works__btn__edit-del
                  button.admin-works__btn__edit
                    p.btn-edit__text Править
                    .btn-edit
                  button.admin-works__btn__del
                    p.btn-decline__text Удалить
                    .btn-decline
        section.admin-about.admin-reviews
          .admin-about__nav.admin-reviews__nav
            h3.admin-about__nav__h3.admin-works__nav__h3 Блок «Отзывы»
          .admin-works__block-works.admin-reviews__blocks
            .admin-works__edit-block.admin-reviews__edit-block
              h3.admin-works__edit-block__h3.admin-reviews__edit-block__h3 Новый «Отзыв»
              form.admin-reviews__edit-block__section
                .admin-reviews__edit-block__section__add-photo
                  .admin-reviews__edit-block__section__photo
                  label.admin-reviews__edit-block__section__photo-btn Добавить фото
                    input(type="file" name="image").admin-reviews__edit-block__section__input
                .admin-reviews__edit-block__section__info
                  .admin-reviews__edit-block__section__info__head
                    .admin-reviews__edit-block__section__info__head__input
                      span.input-name Имя автора
                      input.input-form(type="text" required)
                    .admin-reviews__edit-block__section__info__head__input
                      span.input-name Титул автора
                      input.input-form(type="text" required)
                  .admin-reviews__edit-block__section__info__bot
                    span.input-name Отзыв
                    textarea.input-textarea(type="text" required)
                  .admin-reviews__edit-block__section__info__btns
                    button(type="reset").btn-cancel Отменить
                    button(type="submit").btn-save Сохранить
            .admin-works__view.admin-reviews__blocks__view-block
              button.add-block.admin-reviews__new-block
                p.add-block-text Добавить отзыв
              .admin-works__block.admin-reviews__block__review
                .admin-reviews__block__review__person
                  .admin-reviews__block__review__person__photo
                  .admin-reviews__block__review__person__name-prof
                    p.admin-reviews__block__review__person__name Владимир Сабанцев
                    p.admin-reviews__block__review__person__prof Преподаватель
                p.admin-reviews__block__review__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .admin-reviews__block__review__btns
                  button.admin-works__btn__edit
                    p.btn-edit__text Править
                    .btn-edit
                  button.admin-works__btn__del
                    p.btn-decline__text Удалить
                    .btn-decline
            .admin-reviews__blocks__new-block 


</template>

<style lang="postcss">
body,
html {
  height: 100%;
  margin: 0;
}

body {
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.42;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}

.wrapper {
  overflow: hidden;
  min-height: 100%;
  position: relative;
}

.container {
  margin: 0 auto;
  max-width: 1530px;
  width: 95%;
  // width: 1490px;
}

section {
  /* height: 200vh;//100 */
  min-height: 650px;
}

button {
  border: 0;
  cursor: pointer;
}

* {
  box-sizing: border-box;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0;
}
p {
  margin: 0;
  padding: 0;
}

button[type="button"] {
  cursor: pointer;
  background-color: transparent;
}

a {
  color: inherit;
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}
span{
  font-size: 18px;
  font-weight: 500;
}

p{
  font-size: 16px;
  color: #414c63;
  font-weight: 500;
}
h3{
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
}
//btns
.btn-accept{
width: 15px;
height: 12px;
background: svg-load("tick.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
  background: svg-load("tick.svg", fill="#00d70a") center center no-repeat / contain;
}
}
.btn-decline{
width: 15px;
height: 12px;
background: svg-load("remove.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
  background: svg-load("remove.svg", fill="#bf2929") center center no-repeat / contain;
}
}
.btn-edit{
width: 16px;
height: 15px;
background: svg-load("pencil.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
  background: svg-load("pencil.svg", fill="#00d70a") center center no-repeat / contain;
}
}
.btn-trash{
width: 16px;
height: 15px;
background: svg-load("trash.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
background: svg-load("trash.svg", fill="#bf2929") center center no-repeat / contain;
} 
}
.btn-add-skill{
  height: 35px;
  width: 35px;
  /* background:linear-gradient(#e66465, #9198e5); */
  background: svg-load("remove.svg", fill="#fff") center center no-repeat / center;
  transform: rotate(45deg)
}
.btn-cancel{
  margin-right: 40px;
  margin-top: 3.75rem;
  font-size: 1.125rem;
  line-height: 3rem;
  font-weight: 700;
  width: 130px;
  height: 60px;
  color: #383bcf;
  background: transparent;
  border-bottom: 3px solid transparent;
    &:hover{
    border-bottom: 3px solid #383bcf;
  }
}
.btn-save{
  margin-top: 3.75rem;
  font-size: 1.125rem;
  line-height: 3rem;
  font-weight: 700;
  width: 180px;
  height: 60px;
  text-transform: uppercase;
  color: #fff;
  background: linear-gradient(-.9turn,#1558e2,#3f35cb);
  border-radius: 50px;
  &:hover{
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
}
.add-block{
  width: 340px;
  height: 560px;
  background: svg-load("plus.svg", fill="#fff") no-repeat center, linear-gradient(0turn,#1559e2,#3f35cb );
  background-size: 50%;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  @media screen and (max-width: 768px){
  width:45%;
  height: 500px;
  margin: 2%;
  }
  &:hover{
    background-color:linear-gradient(0turn,#3f35cb,#1559e2);
  }
}
.add-block-text{
    display: flex;
    margin: 75% auto 0 auto;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
}
//admin-login
  .admin-login{
    position: relative;
    width: 100%;
    height: 100vh;
    background: url('~images/content/mountain-bg.png') no-repeat;
    background-size: 100%;
    &__h3{
      justify-content:center;
      font-weight: 700;
      font-size:32px;
      margin: 0 auto;

    }
    &__overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: #fff;
    left: 0;
    right: 0;
    opacity: .5;
    }
    &__block{
      display: flex;
      flex-flow:column nowrap;
      justify-content:center;
      padding: 2%;
      position: absolute;
      background: #fff;
      width: 350px;
      height: 350px;
      left: 0;
      right: 0;
      margin: auto;
      top: 0;
      bottom: 0;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    &__form{
      display: flex;
      flex-flow:column nowrap;
      justify-content:center;
      margin: auto;
    &__login{
      display: flex;
      flex-flow:row wrap;
    }
    &__password{
      display: flex;
      flex-flow:row wrap;
    }
    &__btn{
      margin-top: 1.75rem;
      font-size: 1.125rem;
      line-height: 3rem;
      font-weight: 700;
      width: 14.875rem;
      height: 4.3125rem;
      text-transform: uppercase;
      color: #fff;
      background: linear-gradient(-.9turn,#983dec,#5400ec);
      border-radius: 6px;
      border-top-left-radius: 45px;
      border-bottom-right-radius: 45px;
    }
    }
  }
.input-name{
  &__login{
    padding-left: 10px;
    display: flex;
    flex-flow:column nowrap;
  }
  &__password{
    padding-left: 10px;
    display: flex;
    flex-flow:column nowrap;
  }
}
.admin-login__form{
  &__span{
    padding-left: 30px;
    font-size: 16px;
    font-weight:500;
    color:#cacdd3;
  }
  &__login{
    border-bottom:solid 1px;
    &:before{
      content:"";
      width: 26px;
      height: 30px;
      background: svg-load("user.svg", fill="#cacdd3") center center no-repeat / center;
      align-self: center;
      background-size:80%;
    }
}
  &__password{
    border-bottom:solid 1px;
    &:before{
      content:"";
      width: 27px;
      height: 28px;
      background: svg-load("key.svg", fill="#cacdd3") center center no-repeat / center;
      align-self: center;
      background-size:80%;
    } 
}
}
//header-skill
.input-form{
  height: 30px;
  border:none;
  border-bottom:solid 1px;
  font-size: 16px;
  font-weight: 500;
  outline: transparent;
  &__login{
    border: none;
  }
  &__password{
    border: none;
  }
}
.skills__edit-block{
  align-self: center;
  width: 10%;
  display: flex;
  justify-content: space-around;
}
.header-admin{
  background: #43436d;
  width: 100%;
  height: 80px;
  &__container{
    height: 100%;
  }
  &__block{
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    &__admin{
      color: #fff;
      width: 80%;
      display: flex;
      justify-content: flex-start;
      margin: auto;
      &__img{
        border-radius: 50%;
        background-color: #e2e2e2;
        overflow: hidden;
        width: 46px;
        height: 46px;
        margin-right: 20px;
        z-index: 5;
        background: url('~images/content/user.jpg') no-repeat 100% / contain;
      }
      &__p{
        font-size: 18px;
        align-self: center;
        color:#fff;
      }
      &__admin-block{
        margin: 0 10%;
        display: flex;
        font-size: 18px;
        opacity: .7;
        align-self: center;
        color:#fff;
      }

    }
    &__exit{
      color: #fff;
      width: 20%;
      font-size: 16px;
      display: flex;
      margin: auto;
      opacity: .7;
      text-align: center;
      justify-content: center;
      text-decoration: underline;
      justify-content: flex-end;
      &:hover{
        opacity: 1;
      }
    }
  }
}
.menu-admin-nav{
  height: 80px;
  display: flex;
  justify-content: flex-start;
  &__container{
  display: flex;
  justify-content: flex-start;
  margin: auto;
  height: 100%;
  }
  &__li{
    margin: auto 2%;
    height: 100%;
    width: 121px;
    align-self: center;
    text-align: center;
    justify-content: center;
    display: flex;
    border-bottom:3px solid transparent;
    cursor: pointer;
    &:hover{
      color: #383bcf;
      border-bottom:3px solid #383bcf;
    }
  }
  &__link{
    align-self: center;
    text-align: center;
    justify-content: center;
    display: flex;
  }
}
.admin-wrapper{
  background: #f8fafe;
  width: 100%;
  padding-bottom: 2%;
}
.admin-about{ 
  /* height: 100vh; */
    &__nav{
      margin: auto;
    height: 140px;
    display: flex;
    justify-content: flex-start;
    margin: auto;
    &__h3{
    text-align: center;
    font-weight: 700;
    font-size: 25px;
    margin: auto 3.125rem auto 0;
    }
    &__add-group{
      text-align: center;
      margin: auto 0;
      background: transparent;
      display: flex;
      flex-flow:row nowrap;
      &__add{
        margin:auto 1rem;
        font-size:16px;
        font-weight:700;
        color:#383bcf;
      }
      &__icon{
      height: 35px;
      width: 35px;
      background:linear-gradient(#1756e1, #3f35cb);
      border-radius:50%;
    }
    }
  }
  &__skills{
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    width: 100%;
    @media screen and (max-width: 768px){
      flex-flow: column wrap;
    }
    &__block{
      display: flex;
      justify-content:space-between;
      flex-flow:column nowrap;
      width: 45%;
      background: #fff;
      height: 390px;
      margin: 2%;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
    @media screen and (max-width: 768px){
      width: 95%;
      margin: 2%;
    }
    &__skill{
      margin: 20px;
      height: 100%;
      display: flex;
      justify-content:space-between;
      flex-flow:column nowrap;
        .input-name{
        border:none;
        font-size: 20px;
        border-bottom:solid 1px;
        color: #000;
      }
      &__btns{
      width: 10%;
      display: flex;
      justify-content: space-around;
      align-self: center;
      }
      &__name{
        height: 15%;
        display: flex;
        justify-content:space-between;
        flex-flow:row nowrap;
        border-bottom: 1px solid #dedee0;
      }
      &__level{
        height: 15%;
        display: flex;
        justify-content:flex-end;
        flex-flow:row nowrap;
        .add-new-skill{
          width: 35%;
        }
        .add-new-skill-percent{
          width: 10%;
          margin: 0 5%;
          &:after{
            content:"%";
            margin: 0 5%;
            border-bottom:solid 1px;
          }
        }
        &__btn{
          margin: auto 0;
          height: 35px;
          width: 35px;
          background:linear-gradient(#1756e1, #3f35cb);
          border-radius:50%;
        .btn-add-skill{
          height: 35px;
          width: 35px;
          /* background:linear-gradient(#e66465, #9198e5); */
          background: svg-load("remove.svg", fill="#fff") center center no-repeat / center;
          transform: rotate(45deg)
        }
        }
      }
      &__list{
        margin: 5% 0;
        height: 60%;
        display: flex;
        justify-content:flex-start;
        flex-flow:column nowrap;
      &__block{
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      &__item{
        width: 80%;
        display: flex;
        
        justify-content: space-between;
        .input-skill{
          font-size: 16px;
          font-weight: 500;
          width: 70%;
          border:none;

          background:transparent;
          /* border-bottom: solid 1px; */
        }
        .input-skill-percent{
          width: 11%;
          border:none;
          background:transparent;

        }
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
          /* -webkit-appearance: none; */
           /* margin: 0; */
           }
        &:after{
          content: "%";
          margin-left: -15%;
          align-items: center;
          align-self: center;
        }
      }
      &__btns{
        width: 10%;
        display: flex;
        justify-content: space-around;
        align-self: center;
      }
      }
    }
    }
  }
}

//works
.admin-works{
  /* height: 170vh; */
  @media screen and (max-width: 768px){
  /* height: 210vh; */
  }
  &__block-works{
    flex-flow: column nowrap;
  }
  &__edit-block{
    padding: 2%;
    background: #fff;
    display: flex;
    flex-flow: column nowrap;
    height: 775px;
    justify-content: space-between;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    @media screen and (max-width: 768px){
      height: 1000px;
    }
    &__section{
      display: flex;
      flex-flow: row nowrap;
      height: 80%;
    @media screen and (max-width: 768px){
      flex-flow: column nowrap;
    }
      &__img{
        width: 30%;
        @media screen and (max-width: 768px){
          width: 100%;
          height: 30%;
        }
      }
    }
    &__h3{
      margin: auto 0;
      height: 10%;
      border-bottom: solid 1px;
    }
    &__img{
    width: 90%;
    height: 40%;
    border: 1px dashed #a1a1a1;
    background: #dee3ed;
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    margin: 0 auto;
    @media screen and (max-width: 768px){
       height: 100%;
    }
      &__block{
        margin: 0 auto;
        align-items: center;
        text-align:center;
        width: 50%;
      }
      &__input{
        display: none;
      }
      &__btn{
        margin: 0 auto;
        margin-top: 1.75rem;
        font-size: 1.125rem;
        line-height: 3rem;
        font-weight: 700;
        width: 11.25rem;
        height: 3.75rem;
        border-radius: 50px;
        text-transform: uppercase;
        color: #fff;
        background: linear-gradient(-.9turn,#1558e2,#3f35cb);
      }
    }
    &__info{
      width: 50%;
      display:flex;
      flex-flow:column nowrap;
      justify-content:space-between;
      @media screen and (max-width: 768px){
        width: 100%;
        height: 65%;
      }
      &__name{
        height: 10%;
        width: 100%;
        display:flex;
        flex-flow:column nowrap;
        justify-content: space-between;
      }
      &__link{
        height: 10%;
        width: 100%;
        display:flex;
        flex-flow:column nowrap;
        justify-content: space-between;
      }
      &__description{
        height: 25%;
        width: 100%;
        display:flex;
        flex-flow:column nowrap;
        justify-content: space-between;
      @media screen and (max-width: 768px){
        height: 25%;
      }
      &__text{
        height: 100%;
      }
      }
      &__add-tags{
        height: 10%;
        width: 100%;
        display:flex;
        flex-flow:column nowrap;
        justify-content: space-between;
      }
      &__tags-view{
        display:flex;
        flex-flow: row wrap;
      }
      &__tags{
        display: flex;
        width: 10%;
        justify-content: flex-start;
      }
      &__tag{
        position: relative;
        margin: 0 5%;
        display: flex;
        border-radius: 20px;
        padding: 0 0.9375rem;
        background: #f3f5f9;
        font-size: 0.9375rem;
        font-weight: 600;
        line-height: 3rem;
        &:after{
          /* position: absolute; */
          content: '';
          background: svg-load("cancel.svg", fill="#000") no-repeat center, transparent;
          content: "";
          width: 11px;
          height: 11px;
          margin-top: 1px;
          margin-left: 8px;
          align-items: center;
          /* transform: rotate(-45deg); */
          font-weight: 900;
          align-self: center;
          cursor: pointer;
        }
      }
      &__btns{
        display:flex;
        justify-content: flex-end;

      }
    }
  }
  &__view{
    padding-top: 2%;
    display: flex;
    flex-flow: row wrap;
  }
  &__block{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    margin:0 2%;
    width: 340px;
    height: 560px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    @media screen and (max-width:768px) {
    margin: 2%;
    width: 45%;
    height: 500px;
    }
    &__img-tags{
      height: 40%;
      background: url('~images/content/my-work1.jpg') no-repeat;
      background-size: cover;
    }
      &__tags{
        display: flex;
        padding: 2%;
        width: 100%;
        height: 100%;
        justify-content: flex-end;
        flex-flow: row wrap;
      }
      &__tag{
        margin: 0 2%;
        display: flex;
        justify-content: flex-end;
        align-self: flex-end;
        flex-flow: row wrap;
        border-radius: 20px;
        height: 30px;
        padding: 0 8px;
        background: #f3f5f9;
        font-size: 13px;
        font-weight: 600;
        line-height: 2rem;
      }
    &__edit-del{
      height: 15%;
      padding: 5%;
    }
    &__info{
      padding: 5%;
      display: flex;
      height: 40%;
      flex-flow: column nowrap;
      justify-content: space-between;
        @media screen and (max-width:768px) {
        padding: 0;
        width: 100%;
      }
    }
    &__title{
      padding: 5% 0;
    }
    &__link{
      padding: 5% 0;
    }

  }

}
.admin-works__btn__edit-del{
  height: 15%;
  padding: 5%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  @media screen and (max-width:768px) {
    height: 10%;
  }
}
.admin-works__btn__edit{
  display: flex;
  justify-content: flex-start;
  background: #fff;
  width: 40%;
  &:hover{
    .btn-edit{
    background: svg-load("pencil.svg", fill="#414c63") center center no-repeat / contain;
    }
  }
  .btn-edit{
    display: flex;
    width: 30%;
    align-self: center;
    background: svg-load("pencil.svg", fill="#a0a5b1") center center no-repeat / contain;
    &__text{
    font-weight: 600;
    font-size:16px;
    color:#414c63;
    }
  }
}
.admin-works__btn__del{
  display: flex;
  justify-content: flex-start;
  background: #fff;
  width: 40%;
  &:hover{
    .btn-decline{
background: svg-load("remove.svg", fill="#bf2929") center center no-repeat / contain;
    }
  }
  .btn-decline{
    display: flex;
    width: 30%;
    align-self: center;
  background: svg-load("remove.svg",fill="#a0a5b1") center center no-repeat / contain;

    &__text{
    font-weight: 600;
    font-size:16px;
    color:#414c63;
    }
  }
}
///reviews
.admin-reviews{
  /* height: 170vh; */
  @media screen and (max-width:768px) {
    /* height: 210vh; */
  }
  &__edit-block{
    &__section{
      display: flex;
      flex-flow:row nowrap;
      height: 70%;
      @media screen and (max-width:768px) {
        flex-flow: column nowrap;
      }
      &__add-photo{
        width: 30%;
      @media screen and (max-width:1200px) {
        width: 50%;
      }
      @media screen and (max-width:768px) {
        width: 50%;
        height: 30%;
        margin: auto;
      }
      }
      &__add-photo{
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
      }
      &__photo{
        display: flex;
        justify-content: center;
        margin: 0 auto;
        height: 350px;
        width: 350px;
        border-radius: 50%;
        background: svg-load("user.svg", fill="#fff") no-repeat center, #dee4ed;
        background-size: 50%;
        @media screen and (max-width:768px) {
        margin: auto;
        height: 190px;
        width: 190px;
      }
      }
      &__photo-btn{
        margin: 0 auto;
        color: #1558e2;
        font-weight: 700;
        cursor: pointer;
      }
      &__input{
        display: none;
      }
      &__info{
        padding-left: 5%;
        width: 50%;
        @media screen and (max-width:768px) {
        padding: 5% 0;
        width: 100%;
      }
        &__head{
          height: 30%;
          display:flex;
          justify-content: space-between;
          flex-flow:row nowrap;
        @media screen and (max-width:768px) {
          height: 15%;
      }
          &__input{
            width: 45%;
            display:flex;
            flex-flow:column nowrap;
          }
        }
        &__bot{
          height: 30%;
          display:flex;
          flex-flow:column nowrap;
          .input-textarea{
            height: 70%;
          }
        }
        &__btns{
          display: flex;
          justify-content: flex-end;
          height: 30%;
        }
      }
    }

  }
}
.admin-reviews{
  &__new-block{
    height: 380px;
  }
  &__block{
    &__review{
      height: 380px;
      padding: 2%;
      &__person{
        height: 30%;
        display:flex;
        flex-flow: row nowrap;
        border-bottom: solid 1px;
        &__photo{
          height: 100%;
          width: 30%;
          background: url('~images/content/mentor1.png') no-repeat center;
        }
        &__name-prof{
          display: flex;
          flex-flow: column nowrap;
          margin: auto;
          width: 60%;
        }
        &__name{
          font-size: 18px;
          font-weight: 600;
        }
        &__prof{
          font-size: 16px;

        }
      }
      &__text{
        height: 40%;
        display: flex;
        justify-content: flex-start;
      }
      &__btns{
        height: 15%;
        padding: 5%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
      }
    }
  }
}
//valid-messege
.valid-messege{
  position: fixed;
  bottom: 0;
  left: 0;
  right:0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
  /* display: none; */
  &__great{
    font-size: 20px;
    background: green;
    font-weight: 600;
    color: #fff;
    padding: 20px;
    opacity: .7;
    z-index: 10;

  }
  &__server-load{
    font-size: 20px;
    background: orangered;
    font-weight: 600;
    color: #fff;
    padding: 20px;
    opacity: .7;
    z-index: 10;
  }
  &__bad{
    font-size: 20px;
    background: red;
    font-weight: 600;
    color: #fff;
    padding: 20px;
    opacity: .7;
    z-index: 10;
  }
}
</style><template lang="pug">
<!DOCTYPE html>
html(lang="en")
  head
    meta(charset="UTF-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    meta(http-equiv="X-UA-Compatible", content="ie=edge")
    title Portfolio | admin
  body
    .valid-messege
      .valid-messege__great Сообщение отправлено
      .valid-messege__server-load Сервер перегружен
      .valid-messege__bad Сообщение не отправлено
    .admin-login
      .admin-login__overlay
      .admin-login__block
        .admin-login__h3 Авторизация
        form.admin-login__form
          span.admin-login__form__span Логин
          .admin-login__form__login
            div.input-name.input-name__login 
              input.input-form.input-form__login(type="text" required)
          span.admin-login__form__span Пароль
          .admin-login__form__password
            div.input-name.input-name__password 
              input.input-form.input-form__password(type="text" required)
          button(type="submit").admin-login__form__btn Отправить
    header.header-admin
      .container.header-admin__container
        .header-admin__block
          .header-admin__block__admin
            .header-admin__block__admin__img
            p.header-admin__block__admin__p Евгений Родини
            p.header-admin__block__admin__admin-block Панель администрирования
          a.header-admin__block__exit Выйти
    .menu-admin-nav
      ul.container.menu-admin-nav__container
        li.menu-admin-nav__li
          a.menu-admin-nav__link.menu-admin-nav__about Обо мне
        li.menu-admin-nav__li
          a.menu-admin-nav__link.menu-admin-nav__works Работы
        li.menu-admin-nav__li
          a.menu-admin-nav__link.menu-admin-nav__reviews Отзывы
    main.wrapper.admin-wrapper
      .container.main__container
        section.admin-about
          .admin-about__nav
            h3.admin-about__nav__h3 Блок «Обо мне»
            button.admin-about__nav__add-group
              .admin-about__nav__add-group__icon
                .btn-add-skill
              h3.admin-about__nav__add-group__add Добавить группу
          .admin-about__skills
            .admin-about__skills__block
              .admin-about__skills__block__skill
                form.admin-about__skills__block__skill__name
                  input.input-form.input-name(type="text" placeholder="Название новой группы" required)
                  .admin-about__skills__block__skill__btns
                    button.btn-edit
                    button(type="submit").btn-accept
                    button(type="reset").btn-decline
                .admin-about__skills__block__skill__list
                  .admin-about__skills__block__skill__list__block
                    .admin-about__skills__block__skill__list__item
                      input.input-form.input-skill(type="text" disabled)
                      input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                    .admin-about__skills__block__skill__list__btns
                      button.btn-edit
                      button.btn-trash
                form.admin-about__skills__block__skill__level
                  input.input-form.add-new-skill(type="text" placeholder="Новый навык" required)
                  input.input-form.add-new-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                  .admin-about__skills__block__skill__level__btn
                    button(type="submit").btn-add-skill
            .admin-about__skills__block
              .admin-about__skills__block__skill
                  form.admin-about__skills__block__skill__name
                    input.input-form.input-name(type="text" placeholder="Название новой группы" required)
                    .admin-about__skills__block__skill__btns
                      button(type="submit").btn-accept
                      button(type="reset").btn-decline
                  .admin-about__skills__block__skill__list
                    .admin-about__skills__block__skill__list__block
                      .admin-about__skills__block__skill__list__item
                        input.input-form.input-skill(type="text" placeholder="Git" disabled)
                        input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                      .admin-about__skills__block__skill__list__btns
                        button.btn-edit
                        button.btn-trash
                      .skills__edit-block
                        button(type="submit").btn-accept
                        button(type="reset").btn-decline
                    .admin-about__skills__block__skill__list__block
                      .admin-about__skills__block__skill__list__item
                        input.input-form.input-skill(type="text" placeholder="Terminal" disabled)
                        input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                      .admin-about__skills__block__skill__list__btns
                        button.btn-edit
                        button.btn-trash
                      .skills__edit-block
                        button(type="submit").btn-accept
                        button(type="reset").btn-decline
                    .admin-about__skills__block__skill__list__block
                      .admin-about__skills__block__skill__list__item
                        input.input-form.input-skill(type="text" placeholder="Gulp" disabled)
                        input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                      .admin-about__skills__block__skill__list__btns
                        button.btn-edit
                        button.btn-trash
                      .skills__edit-block
                        button(type="submit").btn-accept
                        button(type="reset").btn-decline
                    .admin-about__skills__block__skill__list__block
                      .admin-about__skills__block__skill__list__item
                        input.input-form.input-skill(type="text" placeholder="Webpack" disabled)
                        input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                      .admin-about__skills__block__skill__list__btns
                        button.btn-edit
                        button.btn-trash
                      .skills__edit-block
                        button(type="submit").btn-accept
                        button(type="reset").btn-decline
                  form.admin-about__skills__block__skill__level
                    input.input-form.add-new-skill(type="text" placeholder="Новый навык" required)
                    input.input-form.add-new-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                    .admin-about__skills__block__skill__level__btn
                      button(type="submit").btn-add-skill
            .admin-about__skills__block
              .admin-about__skills__block__skill
                  form.admin-about__skills__block__skill__name
                    input.input-form.input-name(type="text" placeholder="Название новой группы" required)
                    .admin-about__skills__block__skill__btns
                      button(type="submit").btn-accept
                      button(type="reset").btn-decline
                  .admin-about__skills__block__skill__list
                    .admin-about__skills__block__skill__list__block
                      .admin-about__skills__block__skill__list__item
                        input.input-form.input-skill(type="text" placeholder="Git" disabled)
                        input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                      .admin-about__skills__block__skill__list__btns
                        button.btn-edit
                        button.btn-trash
                      .skills__edit-block
                        button(type="submit").btn-accept
                        button(type="reset").btn-decline
                    .admin-about__skills__block__skill__list__block
                      .admin-about__skills__block__skill__list__item
                        input.input-form.input-skill(type="text" placeholder="Terminal" disabled)
                        input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                      .admin-about__skills__block__skill__list__btns
                        button.btn-edit
                        button.btn-trash
                      .skills__edit-block
                        button(type="submit").btn-accept
                        button(type="reset").btn-decline
                    .admin-about__skills__block__skill__list__block
                      .admin-about__skills__block__skill__list__item
                        input.input-form.input-skill(type="text" placeholder="Gulp" disabled)
                        input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                      .admin-about__skills__block__skill__list__btns
                        button.btn-edit
                        button.btn-trash
                      .skills__edit-block
                        button(type="submit").btn-accept
                        button(type="reset").btn-decline
                    .admin-about__skills__block__skill__list__block
                      .admin-about__skills__block__skill__list__item
                        input.input-form.input-skill(type="text" placeholder="Webpack" disabled)
                        input.input-form.input-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                      .admin-about__skills__block__skill__list__btns
                        button.btn-edit
                        button.btn-trash
                      .skills__edit-block
                        button(type="submit").btn-accept
                        button(type="reset").btn-decline
                  form.admin-about__skills__block__skill__level
                    input.input-form.add-new-skill(type="text" placeholder="Новый навык" required)
                    input.input-form.add-new-skill-percent(type="number" min="0" max="100" placeholder="100" required)
                    .admin-about__skills__block__skill__level__btn
                      button(type="submit").btn-add-skill         
        section.admin-about.admin-works
          .admin-about__nav.admin-works__nav
            h3.admin-about__nav__h3.admin-works__nav__h3 Блок «Работы»
          .admin-works__block-works
            .admin-works__edit-block
              h3.admin-works__edit-block__h3 Редактирование работы
              form.admin-works__edit-block__section
                .admin-works__edit-block__section__img
                  label.admin-works__edit-block__img
                    .admin-works__edit-block__img__block Перетащите, либо загрузите изображение
                    input(type="file" name="image").admin-works__edit-block__img__input
                    button(type="button").admin-works__edit-block__img__btn Загрузить
                .admin-works__edit-block__info
                  .admin-works__edit-block__info__name
                    span.input-name Название
                    input.input-form(type="text" required)
                  .admin-works__edit-block__info__link
                    span.input-name Ссылка
                    input.input-form(type="text" required)
                  .admin-works__edit-block__info__description
                    span.input-name Описание
                    textarea.admin-works__edit-block__info__description__text(type="text" required)
                  .admin-works__edit-block__info__add-tags
                    span.input-name Добавление тэга
                    input.input-form(type="text" required)
                  .admin-works__edit-block__info__tags-view
                    .admin-works__edit-block__info__tags
                      .admin-works__edit-block__info__tag html
                      .admin-works__edit-block__info__tag css
                      .admin-works__edit-block__info__tag javaScript
                      .admin-works__edit-block__info__tag vue
                  .admin-works__edit-block__info__btns
                    button.btn-cancel Отмена
                    button(type="submit").btn-save Сохранить
            .admin-works__view
              button.add-block.admin-works__add-block
               p.add-block-text Добавить работу 
              .admin-works__block
                .admin-works__block__img-tags
                  .admin-works__block__tags
                    .admin-works__block__tag html
                    .admin-works__block__tag css
                    .admin-works__block__tag javaScript
                .admin-works__block__info
                  h3.admin-works__block__title Сайт школы образования
                  p.admin-works__block__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.admin-works__block__link http://loftschool.ru
                .admin-works__btn__edit-del
                  button.admin-works__btn__edit
                    p.btn-edit__text Править
                    .btn-edit
                  button.admin-works__btn__del
                    p.btn-decline__text Удалить
                    .btn-decline
        section.admin-about.admin-reviews
          .admin-about__nav.admin-reviews__nav
            h3.admin-about__nav__h3.admin-works__nav__h3 Блок «Отзывы»
          .admin-works__block-works.admin-reviews__blocks
            .admin-works__edit-block.admin-reviews__edit-block
              h3.admin-works__edit-block__h3.admin-reviews__edit-block__h3 Новый «Отзыв»
              form.admin-reviews__edit-block__section
                .admin-reviews__edit-block__section__add-photo
                  .admin-reviews__edit-block__section__photo
                  label.admin-reviews__edit-block__section__photo-btn Добавить фото
                    input(type="file" name="image").admin-reviews__edit-block__section__input
                .admin-reviews__edit-block__section__info
                  .admin-reviews__edit-block__section__info__head
                    .admin-reviews__edit-block__section__info__head__input
                      span.input-name Имя автора
                      input.input-form(type="text" required)
                    .admin-reviews__edit-block__section__info__head__input
                      span.input-name Титул автора
                      input.input-form(type="text" required)
                  .admin-reviews__edit-block__section__info__bot
                    span.input-name Отзыв
                    textarea.input-textarea(type="text" required)
                  .admin-reviews__edit-block__section__info__btns
                    button(type="reset").btn-cancel Отменить
                    button(type="submit").btn-save Сохранить
            .admin-works__view.admin-reviews__blocks__view-block
              button.add-block.admin-reviews__new-block
                p.add-block-text Добавить отзыв
              .admin-works__block.admin-reviews__block__review
                .admin-reviews__block__review__person
                  .admin-reviews__block__review__person__photo
                  .admin-reviews__block__review__person__name-prof
                    p.admin-reviews__block__review__person__name Владимир Сабанцев
                    p.admin-reviews__block__review__person__prof Преподаватель
                p.admin-reviews__block__review__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .admin-reviews__block__review__btns
                  button.admin-works__btn__edit
                    p.btn-edit__text Править
                    .btn-edit
                  button.admin-works__btn__del
                    p.btn-decline__text Удалить
                    .btn-decline
            .admin-reviews__blocks__new-block 


</template>

<style lang="postcss">
body,
html {
  height: 100%;
  margin: 0;
}

body {
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.42;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}

.wrapper {
  overflow: hidden;
  min-height: 100%;
  position: relative;
}

.container {
  margin: 0 auto;
  max-width: 1530px;
  width: 95%;
  // width: 1490px;
}

section {
  /* height: 200vh;//100 */
  min-height: 650px;
}

button {
  border: 0;
  cursor: pointer;
}

* {
  box-sizing: border-box;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0;
}
p {
  margin: 0;
  padding: 0;
}

button[type="button"] {
  cursor: pointer;
  background-color: transparent;
}

a {
  color: inherit;
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}
span{
  font-size: 18px;
  font-weight: 500;
}

p{
  font-size: 16px;
  color: #414c63;
  font-weight: 500;
}
h3{
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
}
//btns
.btn-accept{
width: 15px;
height: 12px;
background: svg-load("tick.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
  background: svg-load("tick.svg", fill="#00d70a") center center no-repeat / contain;
}
}
.btn-decline{
width: 15px;
height: 12px;
background: svg-load("remove.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
  background: svg-load("remove.svg", fill="#bf2929") center center no-repeat / contain;
}
}
.btn-edit{
width: 16px;
height: 15px;
background: svg-load("pencil.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
  background: svg-load("pencil.svg", fill="#00d70a") center center no-repeat / contain;
}
}
.btn-trash{
width: 16px;
height: 15px;
background: svg-load("trash.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
background: svg-load("trash.svg", fill="#bf2929") center center no-repeat / contain;
} 
}
.btn-add-skill{
  height: 35px;
  width: 35px;
  /* background:linear-gradient(#e66465, #9198e5); */
  background: svg-load("remove.svg", fill="#fff") center center no-repeat / center;
  transform: rotate(45deg)
}
.btn-cancel{
  margin-right: 40px;
  margin-top: 3.75rem;
  font-size: 1.125rem;
  line-height: 3rem;
  font-weight: 700;
  width: 130px;
  height: 60px;
  color: #383bcf;
  background: transparent;
  border-bottom: 3px solid transparent;
    &:hover{
    border-bottom: 3px solid #383bcf;
  }
}
.btn-save{
  margin-top: 3.75rem;
  font-size: 1.125rem;
  line-height: 3rem;
  font-weight: 700;
  width: 180px;
  height: 60px;
  text-transform: uppercase;
  color: #fff;
  background: linear-gradient(-.9turn,#1558e2,#3f35cb);
  border-radius: 50px;
  &:hover{
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
}
.add-block{
  width: 340px;
  height: 560px;
  background: svg-load("plus.svg", fill="#fff") no-repeat center, linear-gradient(0turn,#1559e2,#3f35cb );
  background-size: 50%;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  @media screen and (max-width: 768px){
  width:45%;
  height: 500px;
  margin: 2%;
  }
  &:hover{
    background-color:linear-gradient(0turn,#3f35cb,#1559e2);
  }
}
.add-block-text{
    display: flex;
    margin: 75% auto 0 auto;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
}
//admin-login
  .admin-login{
    position: relative;
    width: 100%;
    height: 100vh;
    background: url('~images/content/mountain-bg.png') no-repeat;
    background-size: 100%;
    &__h3{
      justify-content:center;
      font-weight: 700;
      font-size:32px;
      margin: 0 auto;

    }
    &__overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: #fff;
    left: 0;
    right: 0;
    opacity: .5;
    }
    &__block{
      display: flex;
      flex-flow:column nowrap;
      justify-content:center;
      padding: 2%;
      position: absolute;
      background: #fff;
      width: 350px;
      height: 350px;
      left: 0;
      right: 0;
      margin: auto;
      top: 0;
      bottom: 0;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    &__form{
      display: flex;
      flex-flow:column nowrap;
      justify-content:center;
      margin: auto;
    &__login{
      display: flex;
      flex-flow:row wrap;
    }
    &__password{
      display: flex;
      flex-flow:row wrap;
    }
    &__btn{
      margin-top: 1.75rem;
      font-size: 1.125rem;
      line-height: 3rem;
      font-weight: 700;
      width: 14.875rem;
      height: 4.3125rem;
      text-transform: uppercase;
      color: #fff;
      background: linear-gradient(-.9turn,#983dec,#5400ec);
      border-radius: 6px;
      border-top-left-radius: 45px;
      border-bottom-right-radius: 45px;
    }
    }
  }
.input-name{
  &__login{
    padding-left: 10px;
    display: flex;
    flex-flow:column nowrap;
  }
  &__password{
    padding-left: 10px;
    display: flex;
    flex-flow:column nowrap;
  }
}
.admin-login__form{
  &__span{
    padding-left: 30px;
    font-size: 16px;
    font-weight:500;
    color:#cacdd3;
  }
  &__login{
    border-bottom:solid 1px;
    &:before{
      content:"";
      width: 26px;
      height: 30px;
      background: svg-load("user.svg", fill="#cacdd3") center center no-repeat / center;
      align-self: center;
      background-size:80%;
    }
}
  &__password{
    border-bottom:solid 1px;
    &:before{
      content:"";
      width: 27px;
      height: 28px;
      background: svg-load("key.svg", fill="#cacdd3") center center no-repeat / center;
      align-self: center;
      background-size:80%;
    } 
}
}
//header-skill
.input-form{
  height: 30px;
  border:none;
  border-bottom:solid 1px;
  font-size: 16px;
  font-weight: 500;
  outline: transparent;
  &__login{
    border: none;
  }
  &__password{
    border: none;
  }
}
.skills__edit-block{
  align-self: center;
  width: 10%;
  display: flex;
  justify-content: space-around;
}
.header-admin{
  background: #43436d;
  width: 100%;
  height: 80px;
  &__container{
    height: 100%;
  }
  &__block{
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    &__admin{
      color: #fff;
      width: 80%;
      display: flex;
      justify-content: flex-start;
      margin: auto;
      &__img{
        border-radius: 50%;
        background-color: #e2e2e2;
        overflow: hidden;
        width: 46px;
        height: 46px;
        margin-right: 20px;
        z-index: 5;
        background: url('~images/content/user.jpg') no-repeat 100% / contain;
      }
      &__p{
        font-size: 18px;
        align-self: center;
        color:#fff;
      }
      &__admin-block{
        margin: 0 10%;
        display: flex;
        font-size: 18px;
        opacity: .7;
        align-self: center;
        color:#fff;
      }

    }
    &__exit{
      color: #fff;
      width: 20%;
      font-size: 16px;
      display: flex;
      margin: auto;
      opacity: .7;
      text-align: center;
      justify-content: center;
      text-decoration: underline;
      justify-content: flex-end;
      &:hover{
        opacity: 1;
      }
    }
  }
}
.menu-admin-nav{
  height: 80px;
  display: flex;
  justify-content: flex-start;
  &__container{
  display: flex;
  justify-content: flex-start;
  margin: auto;
  height: 100%;
  }
  &__li{
    margin: auto 2%;
    height: 100%;
    width: 121px;
    align-self: center;
    text-align: center;
    justify-content: center;
    display: flex;
    border-bottom:3px solid transparent;
    cursor: pointer;
    &:hover{
      color: #383bcf;
      border-bottom:3px solid #383bcf;
    }
  }
  &__link{
    align-self: center;
    text-align: center;
    justify-content: center;
    display: flex;
  }
}
.admin-wrapper{
  background: #f8fafe;
  width: 100%;
  padding-bottom: 2%;
}
.admin-about{ 
  /* height: 100vh; */
    &__nav{
      margin: auto;
    height: 140px;
    display: flex;
    justify-content: flex-start;
    margin: auto;
    &__h3{
    text-align: center;
    font-weight: 700;
    font-size: 25px;
    margin: auto 3.125rem auto 0;
    }
    &__add-group{
      text-align: center;
      margin: auto 0;
      background: transparent;
      display: flex;
      flex-flow:row nowrap;
      &__add{
        margin:auto 1rem;
        font-size:16px;
        font-weight:700;
        color:#383bcf;
      }
      &__icon{
      height: 35px;
      width: 35px;
      background:linear-gradient(#1756e1, #3f35cb);
      border-radius:50%;
    }
    }
  }
  &__skills{
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    width: 100%;
    @media screen and (max-width: 768px){
      flex-flow: column wrap;
    }
    &__block{
      display: flex;
      justify-content:space-between;
      flex-flow:column nowrap;
      width: 45%;
      background: #fff;
      height: 390px;
      margin: 2%;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
    @media screen and (max-width: 768px){
      width: 95%;
      margin: 2%;
    }
    &__skill{
      margin: 20px;
      height: 100%;
      display: flex;
      justify-content:space-between;
      flex-flow:column nowrap;
        .input-name{
        border:none;
        font-size: 20px;
        border-bottom:solid 1px;
        color: #000;
      }
      &__btns{
      width: 10%;
      display: flex;
      justify-content: space-around;
      align-self: center;
      }
      &__name{
        height: 15%;
        display: flex;
        justify-content:space-between;
        flex-flow:row nowrap;
        border-bottom: 1px solid #dedee0;
      }
      &__level{
        height: 15%;
        display: flex;
        justify-content:flex-end;
        flex-flow:row nowrap;
        .add-new-skill{
          width: 35%;
        }
        .add-new-skill-percent{
          width: 10%;
          margin: 0 5%;
          &:after{
            content:"%";
            margin: 0 5%;
            border-bottom:solid 1px;
          }
        }
        &__btn{
          margin: auto 0;
          height: 35px;
          width: 35px;
          background:linear-gradient(#1756e1, #3f35cb);
          border-radius:50%;
        .btn-add-skill{
          height: 35px;
          width: 35px;
          /* background:linear-gradient(#e66465, #9198e5); */
          background: svg-load("remove.svg", fill="#fff") center center no-repeat / center;
          transform: rotate(45deg)
        }
        }
      }
      &__list{
        margin: 5% 0;
        height: 60%;
        display: flex;
        justify-content:flex-start;
        flex-flow:column nowrap;
      &__block{
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      &__item{
        width: 80%;
        display: flex;
        
        justify-content: space-between;
        .input-skill{
          font-size: 16px;
          font-weight: 500;
          width: 70%;
          border:none;

          background:transparent;
          /* border-bottom: solid 1px; */
        }
        .input-skill-percent{
          width: 11%;
          border:none;
          background:transparent;

        }
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
          /* -webkit-appearance: none; */
           /* margin: 0; */
           }
        &:after{
          content: "%";
          margin-left: -15%;
          align-items: center;
          align-self: center;
        }
      }
      &__btns{
        width: 10%;
        display: flex;
        justify-content: space-around;
        align-self: center;
      }
      }
    }
    }
  }
}

//works
.admin-works{
  /* height: 170vh; */
  @media screen and (max-width: 768px){
  /* height: 210vh; */
  }
  &__block-works{
    flex-flow: column nowrap;
  }
  &__edit-block{
    padding: 2%;
    background: #fff;
    display: flex;
    flex-flow: column nowrap;
    height: 775px;
    justify-content: space-between;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    @media screen and (max-width: 768px){
      height: 1000px;
    }
    &__section{
      display: flex;
      flex-flow: row nowrap;
      height: 80%;
    @media screen and (max-width: 768px){
      flex-flow: column nowrap;
    }
      &__img{
        width: 30%;
        @media screen and (max-width: 768px){
          width: 100%;
          height: 30%;
        }
      }
    }
    &__h3{
      margin: auto 0;
      height: 10%;
      border-bottom: solid 1px;
    }
    &__img{
    width: 90%;
    height: 40%;
    border: 1px dashed #a1a1a1;
    background: #dee3ed;
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    margin: 0 auto;
    @media screen and (max-width: 768px){
       height: 100%;
    }
      &__block{
        margin: 0 auto;
        align-items: center;
        text-align:center;
        width: 50%;
      }
      &__input{
        display: none;
      }
      &__btn{
        margin: 0 auto;
        margin-top: 1.75rem;
        font-size: 1.125rem;
        line-height: 3rem;
        font-weight: 700;
        width: 11.25rem;
        height: 3.75rem;
        border-radius: 50px;
        text-transform: uppercase;
        color: #fff;
        background: linear-gradient(-.9turn,#1558e2,#3f35cb);
      }
    }
    &__info{
      width: 50%;
      display:flex;
      flex-flow:column nowrap;
      justify-content:space-between;
      @media screen and (max-width: 768px){
        width: 100%;
        height: 65%;
      }
      &__name{
        height: 10%;
        width: 100%;
        display:flex;
        flex-flow:column nowrap;
        justify-content: space-between;
      }
      &__link{
        height: 10%;
        width: 100%;
        display:flex;
        flex-flow:column nowrap;
        justify-content: space-between;
      }
      &__description{
        height: 25%;
        width: 100%;
        display:flex;
        flex-flow:column nowrap;
        justify-content: space-between;
      @media screen and (max-width: 768px){
        height: 25%;
      }
      &__text{
        height: 100%;
      }
      }
      &__add-tags{
        height: 10%;
        width: 100%;
        display:flex;
        flex-flow:column nowrap;
        justify-content: space-between;
      }
      &__tags-view{
        display:flex;
        flex-flow: row wrap;
      }
      &__tags{
        display: flex;
        width: 10%;
        justify-content: flex-start;
      }
      &__tag{
        position: relative;
        margin: 0 5%;
        display: flex;
        border-radius: 20px;
        padding: 0 0.9375rem;
        background: #f3f5f9;
        font-size: 0.9375rem;
        font-weight: 600;
        line-height: 3rem;
        &:after{
          /* position: absolute; */
          content: '';
          background: svg-load("cancel.svg", fill="#000") no-repeat center, transparent;
          content: "";
          width: 11px;
          height: 11px;
          margin-top: 1px;
          margin-left: 8px;
          align-items: center;
          /* transform: rotate(-45deg); */
          font-weight: 900;
          align-self: center;
          cursor: pointer;
        }
      }
      &__btns{
        display:flex;
        justify-content: flex-end;

      }
    }
  }
  &__view{
    padding-top: 2%;
    display: flex;
    flex-flow: row wrap;
  }
  &__block{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    margin:0 2%;
    width: 340px;
    height: 560px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    @media screen and (max-width:768px) {
    margin: 2%;
    width: 45%;
    height: 500px;
    }
    &__img-tags{
      height: 40%;
      background: url('~images/content/my-work1.jpg') no-repeat;
      background-size: cover;
    }
      &__tags{
        display: flex;
        padding: 2%;
        width: 100%;
        height: 100%;
        justify-content: flex-end;
        flex-flow: row wrap;
      }
      &__tag{
        margin: 0 2%;
        display: flex;
        justify-content: flex-end;
        align-self: flex-end;
        flex-flow: row wrap;
        border-radius: 20px;
        height: 30px;
        padding: 0 8px;
        background: #f3f5f9;
        font-size: 13px;
        font-weight: 600;
        line-height: 2rem;
      }
    &__edit-del{
      height: 15%;
      padding: 5%;
    }
    &__info{
      padding: 5%;
      display: flex;
      height: 40%;
      flex-flow: column nowrap;
      justify-content: space-between;
        @media screen and (max-width:768px) {
        padding: 0;
        width: 100%;
      }
    }
    &__title{
      padding: 5% 0;
    }
    &__link{
      padding: 5% 0;
    }

  }

}
.admin-works__btn__edit-del{
  height: 15%;
  padding: 5%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  @media screen and (max-width:768px) {
    height: 10%;
  }
}
.admin-works__btn__edit{
  display: flex;
  justify-content: flex-start;
  background: #fff;
  width: 40%;
  &:hover{
    .btn-edit{
    background: svg-load("pencil.svg", fill="#414c63") center center no-repeat / contain;
    }
  }
  .btn-edit{
    display: flex;
    width: 30%;
    align-self: center;
    background: svg-load("pencil.svg", fill="#a0a5b1") center center no-repeat / contain;
    &__text{
    font-weight: 600;
    font-size:16px;
    color:#414c63;
    }
  }
}
.admin-works__btn__del{
  display: flex;
  justify-content: flex-start;
  background: #fff;
  width: 40%;
  &:hover{
    .btn-decline{
background: svg-load("remove.svg", fill="#bf2929") center center no-repeat / contain;
    }
  }
  .btn-decline{
    display: flex;
    width: 30%;
    align-self: center;
  background: svg-load("remove.svg",fill="#a0a5b1") center center no-repeat / contain;

    &__text{
    font-weight: 600;
    font-size:16px;
    color:#414c63;
    }
  }
}
///reviews
.admin-reviews{
  /* height: 170vh; */
  @media screen and (max-width:768px) {
    /* height: 210vh; */
  }
  &__edit-block{
    &__section{
      display: flex;
      flex-flow:row nowrap;
      height: 70%;
      @media screen and (max-width:768px) {
        flex-flow: column nowrap;
      }
      &__add-photo{
        width: 30%;
      @media screen and (max-width:1200px) {
        width: 50%;
      }
      @media screen and (max-width:768px) {
        width: 50%;
        height: 30%;
        margin: auto;
      }
      }
      &__add-photo{
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
      }
      &__photo{
        display: flex;
        justify-content: center;
        margin: 0 auto;
        height: 350px;
        width: 350px;
        border-radius: 50%;
        background: svg-load("user.svg", fill="#fff") no-repeat center, #dee4ed;
        background-size: 50%;
        @media screen and (max-width:768px) {
        margin: auto;
        height: 190px;
        width: 190px;
      }
      }
      &__photo-btn{
        margin: 0 auto;
        color: #1558e2;
        font-weight: 700;
        cursor: pointer;
      }
      &__input{
        display: none;
      }
      &__info{
        padding-left: 5%;
        width: 50%;
        @media screen and (max-width:768px) {
        padding: 5% 0;
        width: 100%;
      }
        &__head{
          height: 30%;
          display:flex;
          justify-content: space-between;
          flex-flow:row nowrap;
        @media screen and (max-width:768px) {
          height: 15%;
      }
          &__input{
            width: 45%;
            display:flex;
            flex-flow:column nowrap;
          }
        }
        &__bot{
          height: 30%;
          display:flex;
          flex-flow:column nowrap;
          .input-textarea{
            height: 70%;
          }
        }
        &__btns{
          display: flex;
          justify-content: flex-end;
          height: 30%;
        }
      }
    }

  }
}
.admin-reviews{
  &__new-block{
    height: 380px;
  }
  &__block{
    &__review{
      height: 380px;
      padding: 2%;
      &__person{
        height: 30%;
        display:flex;
        flex-flow: row nowrap;
        border-bottom: solid 1px;
        &__photo{
          height: 100%;
          width: 30%;
          background: url('~images/content/mentor1.png') no-repeat center;
        }
        &__name-prof{
          display: flex;
          flex-flow: column nowrap;
          margin: auto;
          width: 60%;
        }
        &__name{
          font-size: 18px;
          font-weight: 600;
        }
        &__prof{
          font-size: 16px;

        }
      }
      &__text{
        height: 40%;
        display: flex;
        justify-content: flex-start;
      }
      &__btns{
        height: 15%;
        padding: 5%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
      }
    }
  }
}
//valid-messege
.valid-messege{
  position: fixed;
  bottom: 0;
  left: 0;
  right:0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
  /* display: none; */
  &__great{
    font-size: 20px;
    background: green;
    font-weight: 600;
    color: #fff;
    padding: 20px;
    opacity: .7;
    z-index: 10;

  }
  &__server-load{
    font-size: 20px;
    background: orangered;
    font-weight: 600;
    color: #fff;
    padding: 20px;
    opacity: .7;
    z-index: 10;
  }
  &__bad{
    font-size: 20px;
    background: red;
    font-weight: 600;
    color: #fff;
    padding: 20px;
    opacity: .7;
    z-index: 10;
  }
}
</style>