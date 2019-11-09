<template lang="pug">
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
</template>
<script>
export default {
  
}
</script>
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
</style>