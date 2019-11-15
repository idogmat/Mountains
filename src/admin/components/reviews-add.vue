<template lang="pug">
  .reviews__content.content
    .reviews__title-wrap
      h2.reviews__title.tittle Новый отзыв
    .reviews__form
      input(type='file' id="reviews-avatar" @change="loadPhoto" accept="image/*").reviews__user-file
      label(for="reviews-avatar").reviews__user
        .reviews__user-avatar(
          :style="{'background-image':`url(${this.photoURl})`}"
          :class="{imaged:hasImage,validErrorImg:validation.hasError('reviewData.photo')}"
        )
        .reviews__user-add()
          h3.reviews__user-text {{textTitle}}
      .reviews__info
        .reviews__label-wrap.reviews__label-wrap--name
          label(for="name").reviews__label.label Имя автора
          input(type="text" name="name" id="name" v-model="reviewData.author" :class="{validError:validation.hasError('reviewData.author')}").input.reviews__input.
          div.error-input(v-if="validation.firstError('reviewData.author')") {{validation.firstError('reviewData.author')}}
        .reviews__label-wrap.reviews__label-wrap--status
          label(for="status").reviews__label.label Титул автора
          input(type="text" name="status" id="status" v-model="reviewData.occ" :class="{validError:validation.hasError('reviewData.occ')}").input.reviews__input
          div.error-input(v-if="validation.firstError('reviewData.occ')") {{validation.firstError('reviewData.occ')}}
        .reviews__label-wrap.reviews__label-wrap--review
          label(for="review").reviews__label.label Отзыв
          textarea(name="review" id="review" v-model="reviewData.text" :class="{validErrorTextarea:validation.hasError('reviewData.text')}").input.reviews__input.reviews__input--desc
          div.error-input(v-if="validation.firstError('reviewData.text')") {{validation.firstError('reviewData.text')}}
        .reviews__buttons
            button(type="reset" name="cancel" value="Отменить" @click='toogleAddingForm').reviews__reset.btn-cancel Отменить
            button(type="submit" name="submit" value="Сохранить" v-if="mode=='add'" @click='addNewReview').btn.btn-save Сохранить
            button(type="submit" name="submit" value="Сохранить" v-if="mode=='edit'" @click='updateCurrentWork').btn.btn-save Сохранить
</template>

<script>
import { mapActions,mapState } from 'vuex';
import {getAbsoluteImgPath} from '@/helpers/pictures.js'
import {Validator} from 'simple-vue-validator'
export default {
  mixins:[require('simple-vue-validator').mixin],
  validators:{
    'reviewData.text'(value){
      return Validator.value(value).required('Поле отзыв обязательно для заполнения')
    },
    'reviewData.occ'(value){
      return Validator.value(value).required('Поле титул обязательно для заполнения')
    },
    'reviewData.author'(value){
      return Validator.value(value).required('Поле имя автора обязательно для заполнения')
    },
    "reviewData.photo": value => {
      return Validator.value(value).required("Вставьте файл");
    }
  },
  props:{
    mode:String
  },
  data(){
    return{
      reviewData:{
        photo: '',
        author: '',
        occ: '',
        text: '',
      },
      photoURl:'',
      hasImage:false,
      textTitle:'Добавить фото ',
      copyImgPath:'',
    }
  },
  methods:{
    ...mapActions('reviews',['addReview','updateReveiw']),
    ...mapActions('tooltips',['showTooltip']),
     loadPhoto(e){
      const file = e.target.files[0];
      this.hasImage = true;
      this.reviewData.photo = file;
      this.hasImage = true;
      this.textTitle = 'Изменить фото'
      console.log(file);
      console.log(this.reviewData.photo);
      const reader = new FileReader();
      try{
        reader.readAsDataURL(file);
        reader.onload = () =>{
          this.photoURl = reader.result;
        }
      } catch(error){
        alert(error.message);
      }
    },
    async addNewReview(){
      if((await this.$validate())===false){
         this.showTooltip({
          type:'error',
          text:'Не все поля заполнены'
        });
        return;
      }
      try{
        await this.addReview(this.reviewData);
        this.$emit('toogleAddingForm')
        this.showTooltip({
          type:'success',
          text:'Отзыв успешно добавлен'
        });
         
      } catch(error){
        this.showTooltip({
          type:'error',
          text:'Размер картинки больше 1,5 МБ'
        });
      }
    },
    async updateCurrentWork(){
       if((await this.$validate())===false){
         this.showTooltip({
          type:'error',
          text:'Не все поля заполнены'
        });
        return;
      }
      try{  
        await this.updateReveiw(this.reviewData)
        this.$emit('toogleAddingForm')
        this.showTooltip({
          type:'success',
          text:'Отзыв успешно обновлен'
        });
      } catch(error){
        console.log(error.message)
        this.showTooltip({
          type:'error',
          text:'Размер картинки больше 1,5 МБ'
        });
      }
    },
    toogleAddingForm(){
      this.$emit('toogleAddingForm');
    },
    addingMode(){
      this.reviewData = {
        photo: '',
        author: '',
        occ: '',
        text: '',
      };
      this.photoURl = '';
      this.hasImage = false;
      this.textTitle= 'Добавить фото'
    },
    editingMode(){
      this.photoURl='';
      this.reviewData = {...this.currentReview};
      this.hasImage = true;
      this.photoURl = getAbsoluteImgPath(this.reviewData.photo);
      this.textTitle= 'Изменить фото'
    }
  },
  computed:{
    ...mapState('reviews',{
      currentReview:state=>{
        return state.currentReview;
      }
    })
  },
  created(){
    if(this.mode == 'edit'){
      this.editingMode();
    } else if(this.mode == 'add'){
      this.addingMode();
    }
  },
  watch:{
    mode(){
      if(this.mode == 'add'){
        this.addingMode();
      } else if(this.mode == 'edit'){
        this.editingMode();
      }
    },
    currentReview(){
      this.reviewData = {...this.currentReview};
      this.photoURl='';
      this.photoURl = getAbsoluteImgPath(this.reviewData.photo);
    }
  }
}
</script>

<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");
.reviews__user-file{
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
.reviews__user-file + label {
  cursor: pointer;
}
.title-wrap{
  margin-bottom: 3.75rem;
  font-size: 1.3125rem;
  font-weight: 700;

}
.reviews__title{
  margin-bottom: 3.75rem;
  font-size: 1.3125rem;
  font-weight: 700;
}
.reviews__user-avatar{
  width: 200px;
  height: 200px;
  background-color: #dee4ed;
  border-radius: 50%;
  margin-bottom: 20px;
  position: relative;
  background-size:cover;
  &:before{
    content:'';
    background: svg-load("user.svg", fill="#fff") center center no-repeat / contain;
    width: 5.125rem;
    height: 5.125rem;
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);

  }
}
.imaged{
  &:before {
    display: none;
  }
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
  margin-top: 0;
  font-size: 1.125rem;
  line-height: 3rem;
  font-weight: 700;
  width: 180px;
  height: 60px;
  text-transform: uppercase;
  color: #fff;
  background: linear-gradient(270deg,#1794e7,#242049);
  border-radius: 50px;
  &:hover{
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
}
.reviews__label{
   margin-bottom: 20px;
   display: block;
   opacity: 0.5;
  color: #414c63;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
 }
 .reviews__input{
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
 }
 .reviews__content{
    background-color: white;
 }
 .reviews__form{
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   @include phones{
     flex-direction: column;
    align-items: center;
   }
 }
 .reviews__user{
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @include tablets{
        width: 24%;
    }
    @include phones{
          width: 100%;
    margin-bottom: 50px;

    }
 }
 .reviews__info{
    width: 75%;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-right: 15%;
    @include tablets{
      padding: 0;
      width: 71%;
    }

    @include phones{
      width: 100%;
    }
 }
 .reviews__label-wrap{
   position: relative;
   &--name{
     width: 47%;
     margin-right: 6%;
     @include tablets{
       width: 75%;
     }
   }
   &--status{
     width:47%;
      @include tablets{
       width: 75%;
     }
   }
   &--review{
     width:100%;
   }
   @include phones{
         width: 100%;
   }
 }
 .reviews__input--desc{
  border: 1px solid #414c63;
height: 180px;
  &:hover{
    border:1px solid $blue-hover;
  }
  &:active{
      border:1px solid $blue-hover;
  }
 }
 .reviews__buttons{
   display: flex;
  justify-content: flex-end;
      width: 100%;
 }
 .reviews__reset{
    background: transparent;
    border: none;
    color:$blue-hover;
    margin-right: 30px;
    cursor: pointer;
 }
 .reviews__user-text{
    text-align: center;  
      color:$blue-hover;
   font-weight: 600;
 }

.validErrorImg{
   border:2px solid #cd1515;
  &:hover{
     border:2px solid #cd1515;
  }
}
.validError{
  border-bottom:2px solid #cd1515;
  &:hover{
     border-bottom:2px solid #cd1515;
  }
}
.error-input{
  background: #cd1515;
  font-size: 0.75rem;
  position: absolute;
  bottom: -1.5rem;
  z-index:5;
  left: 0;
  color: white;
  padding: 15px 20px;
  &:after{
    content:'';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 7.5px 15px 7.5px;
    border-color: transparent transparent #cd1515 transparent;
    position:absolute;
    top: -0.225rem;
    left: 50%;
    transform:translate(0,-50%);
  }
}
.validErrorTextarea{
  border:2px solid #cd1515;
  &:hover{
     border:2px solid #cd1515;
  }
}

</style>
