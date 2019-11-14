<template lang="pug">
  div
    section.reviews
      .container.container-reviews
        .reviews-title-wrap.title-wrap
          .reviews-title.title Блок "Отзывы"
        addReview(
          v-if="showAddingForm"
          @toogleAddingForm="toogleAddingForm"
          :mode="currentMode"
          )
        section.reviews__change
          ul.reviews__change-list
            li.reviews__current.reviews__change-item(@click="showAddingForm = true;currentMode = 'add'")
              .reviews__new
                .reviews__new-icon
                .reviews__new-text Добавить отзыв
            li.reviews__change-item(v-for="review in reviews")
              reviewsItem(
                :review="review"
                @updateCurrentReview='updateCurrentReview'
              )
</template>

<script>
import {mapActions,mapState} from 'vuex';
export default {
  
  components:{
    addReview:()=>import('../reviews-add'),
    reviewsItem:()=>import('../reviews-item')
  },
  data(){
    return{
      showAddingForm:false,
      currentMode:'add',
    }
  },
  methods:{
    ...mapActions('reviews',['fetchReview']),
    toogleAddingForm(){
      this.showAddingForm = !this.showAddingForm;
    },
    updateCurrentReview(){
      this.showAddingForm = true;
      this.currentMode = 'edit'
    }
    
  },
  async created(){
    try{
      await this.fetchReview();
      console.log('fetchReview')
    } catch(error){
      console.log(error.message)
    }
    
  },
  computed:{
     ...mapState('reviews',{
      reviews:state=>{return state.reviews}
    }),
  }
  
}
</script>

<style lang="postcss" scoped>

@import url("../../../styles/mixins.pcss");


 .reviews__change-list{
   display: flex;
  flex-wrap: wrap;
 }
 .reviews__change-item{
   min-height:380px;
   padding:20px;
  width:32%;
  margin-right: 2%;
  margin-bottom: 5%;
  background:white;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
      position: relative;
    padding-bottom: 50px;
  &:nth-child(3n){
    margin-right: 0px;
  }
  @include tablets{
        width:48%;
      margin-right: 4%;
      &:nth-child(2n){
        margin-right: 0px;
      }
      &:nth-child(3n){
        margin-right: 4%;
      }
      }
  @include phones{
    width:100%;
    margin-right: 0%;
    &:nth-child(2n){
        margin-right: 0px;
      }
      &:nth-child(3n){
        margin-right: 0%;
      }
    }
}
.reviews__current{
  background:linear-gradient(270deg,#1794e7 0,#242049);
  @include phones{
      padding-top: 1.25rem;
  }
  &:hover{
     background:linear-gradient(to right, #1794e7 0%, #242049 100%);
  }
}
.reviews__new{
  height: 100%;
      display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @include phones{
          flex-direction: row;
    height: 100%;
    }
}
.reviews__new-icon{
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
.reviews__new-text{
font-size: 18px;
font-weight: 700;
line-height: 30px;
color:white;
width: 5.875rem;
text-align: center;
@include phones{
  font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.875rem;
    color: #fff;
    width: 9.875rem;
    text-align: center;
}
}
.reviews-title{
  margin-bottom: 3.75rem;
    font-size: 1.3125rem;
    font-weight: 700;
}

</style>
