<template lang="pug">
  .works-block
    .addWorks    
      .container.containerAddWorks
        .about__title-wrap.title-wrap
          .about__title.title Блок "Работы"
        addNewWork(
          v-if="showAddingForm"
          @toogleAddingForm = "toogleAddingForm"
          :mode="currentMode"
        )
    .addWorks__change
      .addWorks__change-container.container
        ul.addWorks__change-list
          li.addWorks__current.addWorks__change-item
            .addWorks__new(@click="showAddingForm = true; currentMode = 'add'")
              .addWorks__new-icon
              .addWorks__new-text Добавить работу
          li.addWorks__change-item(v-for="work in works" :key="works.id")
            workItem(
              @updateCurrentWork="updateCurrentWork"
              :work="work"
            )        
</template>
<script>
import {mapActions, mapState} from "vuex";
export default {
  components:{
    addNewWork: () => import('../works-add-new'),
    workItem: () => import('../works-item'),
  },
  data(){
    return{
      showAddingForm:false,
      currentMode:'add'
    }
  },
  methods:{
    ...mapActions('works',['fecthWorks']),
    async toogleAddingForm(){
      this.showAddingForm = !this.showAddingForm;
    },
    async updateCurrentWork(){
      this.currentMode = 'edit';
      this.showAddingForm = true;
    }
  },
  computed:{
    ...mapState('works',{
      works:state=>{return state.works}
    }),

  },
  async created(){
    try{
      this.fecthWorks();
    } catch(error){} 
  }
}
</script>
<style lang="postcss" scoped>
@import url("../../../styles/mixins.pcss");
 .addWorks__content,
 .content{
   padding:30px 30px;
   box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
   margin-bottom: 50px;
 }
 .addWorks__content{
   background: #fff;
 }
 .addWorks__content-caption{
    padding-bottom: 20px;
    border-bottom: 1px solid #414c63;
    margin-bottom: 74px;
    font-size: 18px;
    font-weight: 700;
 }
 .about__title{
    margin-bottom: 3.75rem;
    font-size: 1.3125rem;
    font-weight: 700;
 }
 .addWorks__load-text{
    color: #414c63;
    font-size: 16px;
    font-weight: 400;
    line-height: 33.89px;
    text-align: center;
      height: 100%;
    display: flex;
    align-items: center;
    width: 45%;
    justify-content: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    p{
      margin-bottom: 20px;
    }
 }
 .addWorks__info{
   width:48%;
   @include tablets{
         width: 80%;
   }
   @include phones{
     width: 100%;
   }
 }
 .addWorks__label,
 .label{
   margin-bottom: 20px;
   display: block;
   opacity: 0.5;
  color: #414c63;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
 }
 .addWorks__input,
 .input{
   width:100%;
   background-color:transparent;
  color: #414c63;
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  border: none;
  border-bottom: 2px solid #414c63;
  padding:0px 5px 10px 5px;
  padding-bottom:10px;
  margin-bottom: 30px;

    &:hover{
    border-bottom:2px solid $blue-hover;
  }
  &:active{
      border-bottom:2px solid $blue-hover;
  }

  &--desc{
    border:1px solid black;
    height: 145px;
      &:hover{
    border:1px solid $blue-hover;
  }
  &:active{
      border:1px solid $blue-hover;
  }
  }
 }
 .addWorks__tags-list{
   display: flex;
 }
 .addWorks__tags-item{
   padding: 5px 15px;
   background-color: #f4f4f4;
   border-radius: 15px;
   margin-right: 10px;
   &:last-child{
     margin-right: 0px;
   }
   @include phones{
         padding: 5px 10px;
    font-size: 12px;
   }
 }
 .addWorks__tags-list-wrap{
   margin-bottom: 30px;
 }
 .addWorks__buttons{
   display: flex;
  justify-content: flex-end;
  @include tablets{
    justify-content: center;
  }
 }
 .addWorks__reset{
    background: transparent;
    border: none;
    color:$blue-hover;
    margin-right: 30px;
    cursor: pointer;
 }
 /* .containerAddWorks{
   background: #fff;
 } */
 
.addWorks__change-list{
  display: flex;
  flex-wrap: wrap;
}
.addWorks__change-item{
  background: white;
  width:32%;
  margin-right: 2%;
  margin-bottom: 5%;
  padding-bottom: 20px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  &:nth-child(3n){
    margin-right: 0px;
  }
  @include tablets{
        width:48%;
        margin-right: 4%;

        &:nth-child(3n){
        margin-right: 4%;
      }
      &:nth-child(2n){
        margin-right: 0px;
      }
  }

  @include phones{
     width:100%;
    margin-right: 0%;
     &:nth-child(3n){
        margin-right: 0%;
      }

  }
}

.addWorks__current{
  background:linear-gradient(to left, #1794e7 0%, #242049 100%);
  @include phones{
    padding-top:20px;
  }
  &:hover{
     background:linear-gradient(to right, #1794e7 0%, #242049 100%);
  }
}
.addWorks__new{
  cursor: pointer;
  height: 100%;
      display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include phones{
      flex-direction: row;
    height: 100%;

    }
}
.addWorks__new-icon{
  display: flex;
  width: 150px;
  height: 150px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
   &:before{
    content:'';
    background: svg-load("remove.svg", fill="#fff") center center no-repeat / contain;
    width: 2.125rem;
    height: 2.125rem;
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%) rotate(45deg);
  }
  @include phones{
    width: 4.375rem;
    height: 4.375rem;
    margin-bottom: 0;
  }
}
.addWorks__new-text{
font-size: 18px;
font-weight: 700;
line-height: 30px;
color:white;
width: 5.875rem;
text-align: center;
@include phones{
   font-size: 14px;
    font-weight: 700;
    line-height: 1.875rem;
    color: #fff;
    width: 9.875rem;
    text-align: center;
}
}
</style>
