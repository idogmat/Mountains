<template lang="pug">
  .works-section
    .container
      h1.page-title Блок «Мои работы»
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
</template>
<style lang="postcss">
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
      height: 500px;
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
</style>