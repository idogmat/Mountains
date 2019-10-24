<template lang="pug">
<!DOCTYPE html>
html(lang="en")
  head
    meta(charset="UTF-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    meta(http-equiv="X-UA-Compatible", content="ie=edge")
    title Portfolio | admin
  body
    header.header-admin
      .container.header-admin__container
        .header-admin__block
          .header-admin__block__admin
            .header-admin__block__admin__img
            p.header-admin__block__admin__p Евгений Родини
            p.header-admin__block__admin__admin-block Панель администрирования
          a.header-admin__block__exit Выйти
    .menu-admin-nav
      .container.menu-admin-nav__container
        a.menu-admin-nav__link.menu-admin-nav__about Обо мне
        a.menu-admin-nav__link.menu-admin-nav__worksh Работы
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
                .admin-about__skills__block__skill__name
                  input.input-form.input-name(type="text" placeholder="Название новой группы")
                  .admin-about__skills__block__skill__btns
                    button.btn-accept
                    button.btn-decline
                .admin-about__skills__block__skill__list
                  .admin-about__skills__block__skill__list__block
                    .admin-about__skills__block__skill__list__item
                      input.input-form.input-skill(type="text" disabled)
                      input.input-form.input-skill-percent(type="text" disabled)
                    .admin-about__skills__block__skill__list__btns
                      button.btn-edit
                      button.btn-trash
                .admin-about__skills__block__skill__level
                  input.input-form.add-new-skill(type="text" placeholder="Новый навык")
                  input.input-form.add-new-skill-percent(type="text")
                  .admin-about__skills__block__skill__level__btn
                    button.btn-add-skill
            .admin-about__skills__block
              .admin-about__skills__block__skill
                  .admin-about__skills__block__skill__name
                    input.input-form.input-name(type="text" placeholder="Название новой группы")
                    .admin-about__skills__block__skill__btns
                      button.btn-accept
                      button.btn-decline
                  .admin-about__skills__block__skill__list
                    .admin-about__skills__block__skill__list__block
                      .admin-about__skills__block__skill__list__item
                        input.input-form.input-skill(type="text" disabled)
                        input.input-form.input-skill-percent(type="text" disabled)
                      .admin-about__skills__block__skill__list__btns
                        button.btn-edit
                        button.btn-trash
                  .admin-about__skills__block__skill__level
                    input.input-form.add-new-skill(type="text" placeholder="Новый навык")
                    input.input-form.add-new-skill-percent(type="text")
                    .admin-about__skills__block__skill__level__btn
                      button.btn-add-skill       
        section.admin-about.admin-morks
          .admin-about__nav.admin-morks__nav
            h3.admin-about__nav__h3.admin-morks__nav__h3 Блок «Работы»
          .admin-morks__block-works
            .admin-morks__edit-block____________________________________________________________
              .admin-morks__edit-block__img
                .admin-morks__edit-block__img__block
              .admin-morks__edit-block__info
                .admin-morks__edit-block__info__name
                  span Название
                  input.input-form(type="text")
                .admin-morks__edit-block__info__link
                  span Ссылка
                  input.input-form(type="text")
                .admin-morks__edit-block__info__description
                  span Описание
                  textarea(type="text")
                .admin-morks__edit-block__info__add-tags
                  span Добавление тэга
                  input.input-form(type="text")
                .admin-morks__edit-block__info__add-tags
                .admin-morks__edit-block__info__btns
                  button.admin-morks__edit-block__info__btns__cancel
                  button.admin-morks__edit-block__info__btns__save
            .admin-morks__view
              .admin-morks__add-block
              .admin-morks__block
                .admin-morks__block__img-tags
                  .admin-morks__block__img
                  .admin-morks__block__tag
                .admin-morks__block__info
                  h6.admin-morks__block__title Сайт школы образования
                  p.admin-morks__block__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.admin-morks__block__link http://loftschool.ru
                  .admin-morks__btn__edit-del
                    a.admin-morks__btn__edit Править
                    a.admin-morks__btn__del Удалить
        section.admin-reviews
          .admin-reviews__nav
            h3.admin-morks__nav__h3 Блок «Отзывы»
          .admin-reviews__blocks
            .admin-reviews__blocks__new-block 
              h4.admin-reviews__blocks__new-block__h4 Новый «Отзыв»
              .admin-reviews__blocks__new-block__edit
            .admin-reviews__blocks__view-block
              .admin-reviews__blocks__view-block__add-review
              .admin-reviews__blocks__view-block__review
                .admin-reviews__blocks__view-block__review__person
                .admin-reviews__blocks__view-block__review__text
                .admin-reviews__blocks__view-block__review__btns


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
  height: 100vh;
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
//header
.input-form{
  border:none;
  border-bottom:solid 1px;
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
      &__p{
        font-size: 18px;
      }
      &__admin-block{
        font-size: 18px;
        opacity: .7;
      }

    }
    &__exit{
      color: #fff;
      width: 20%;
      font-size: 16px;
      display: flex;
      margin: auto;
      text-align: center;
      justify-content: center;
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
  }
  &__link{
    margin: 0 2%;
  }
}
.admin-wrapper{
  background: #f8fafe;
  width: 100%;
}
.admin-about{ 
    &__nav{
      margin: auto;
    height: 140px;
    display: flex;
    justify-content: flex-start;
    margin: auto;
    &__h3{
      text-align: center;
      margin: auto 0;
    }
    &__add-group{
      text-align: center;
      margin: auto 0;
      background: transparent;
      display: flex;
      flex-flow:row nowrap;
      &__add{
        margin:auto 1rem;
      }
      &__icon{
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
  }
  &__skills{
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    width: 100%;
    &__block{
      display: flex;
      justify-content:space-between;
      flex-flow:column nowrap;
      width: 45%;
      background: #fff;
      height: 390px;
    &__skill{
      margin: 20px;
      height: 100%;
      display: flex;
      justify-content:space-between;
      flex-flow:column nowrap;
      &__name{
        .input-name{
        border:none;
        border-bottom:solid 1px;
      }
      }
      &__btns{
      width: 10%;
      display: flex;
      justify-content: space-around;
      }
      &__name{
        height: 15%;
        display: flex;
        justify-content:space-between;
        flex-flow:row nowrap;
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
          margin: 0 0 0 5%;
          &:after{
            content:"%";
            /* margin: 0 5%; */
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
          width: 70%;
          border:none;
          background:transparent;
          border-bottom: solid 1px;
        }
        .input-skill-percent{
          width: 20%;
          border:none;
          background:transparent;
          border-bottom: solid 1px;
        }
        &:after{
          content:"%";
          border-bottom: solid 1px;
          margin-left: -10%;
        }
      }
      &__btns{
        width: 10%;
        display: flex;
        justify-content: space-around;
      }
      }
    }
    }
  }
}
.btn-accept{
width: 20px;
height: 20px;
background: svg-load("tick.svg", fill="#00d70a") center center no-repeat / contain;
}
.btn-decline{
width: 20px;
height: 20px;
background: svg-load("remove.svg", fill="#bf2929") center center no-repeat / contain;

}
.btn-edit{
width: 20px;
height: 20px;
background: svg-load("pencil.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
  background: svg-load("pencil.svg", fill="#00d70a") center center no-repeat / contain;
}
}
.btn-trash{
width: 20px;
height: 20px;
background: svg-load("trash.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
background: svg-load("trash.svg", fill="#bf2929") center center no-repeat / contain;
} 
}


</style>