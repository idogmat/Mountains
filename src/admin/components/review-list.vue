<template lang="pug">
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
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  
}
</script>
<style lang="postcss">
.admin-reviews__blocks__view-block{
  background: #fff;
  padding: 30px 20px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
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
</style>