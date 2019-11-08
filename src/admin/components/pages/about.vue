<template lang="pug">
  .about-page-container
    .container
      .about-page__title
        h1.page-title Обо мне
        button.about-page__add-new(
        ) Добавить группу
      form(@submit.prevent="addNewCategory")
        input(type="text" v-model="title" placeholder="Имя категории") 
        input(type="submit" value="Добавить")
    .about-page__content
      .container.container--mobile-wide
        ul.skill-list
          li.skill-list__item(v-for="category in categories" :key="category.id")
            skills-group(
              :category="category"
              @getRemoveCaregory="getRemoveCaregory"
              @editExistetedCategoty="editExistetedCategoty"
            )

</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {
    skillsGroup: () => import("../skills-group")
  },
  data: () => ({
    title: ""
  }),
  created() {
    this.fetchCategories();
  },
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  methods: {
    ...mapActions("categories", ["addCategory", "fetchCategories", "removeCategory","editCategory"]),
    async addNewCategory() {
      try {
        await this.addCategory(this.title);
      } catch (error) {
        alert(error.message);
      }
    },
    async getRemoveCaregory(categoryId) {
      try {
        await this.removeCategory(categoryId);
        await this.fetchCategories();
      } catch (error) {}
    },
    async editExistetedCategoty(category) {
      try {
        console.log(category);
        // await this.editCategory(category.id)
        // await this.fetchCategories();
      } catch (error) {
        
      }

    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
.skill-list{
  height: 25%;
  &__item{
    height: 100%;
  }
}
.skill-container {
  padding: 10px;
}
.about-page__content{
  height: 100%;
}
.about-page__title {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  .page-title {
    margin-bottom: 0;
    margin-right: 60px;
    @include phones {
      margin-bottom: 28px;
    }
  }
  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}
.about-page__add-new {
  color: $links-color;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
  &:before {
    content: "+";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    line-height: 20px;
    color: #fff;
    margin-right: 13px;
    flex-shrink: 0;
    flex-basis: 20px;
  }
}
.skill-list {
  display: flex;
  flex-wrap: wrap;
  @include phones {
    margin-left: 0;
  }
}
.skill-list__item {
  width: 100%;
  margin-bottom: 30px;
  &.loading {
    opacity: 0.5;
    pointer-events: none;
    filter: grayscale(100%);
  }
  @include phones {
    width: 100%;
    margin-left: 0;
    margin-bottom: 12px;
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
</style>
