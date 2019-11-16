<template lang="pug">
  .addWorks__content
    .addWorks__content-caption-wrap
      h2(v-if="mode=='add'").addWorks__content-caption Добавление работы
      h2(v-else-if="mode=='edit'").addWorks__content-caption Редактирование работы
      .addWorks__form()
        .addWorks__file(
          :style="{'background-image':`url(${this.photoURl})`}"
          :class="{imaged:hasImage,validErrorTextarea:validation.hasError('workData.photo')}"
        )
          .addWorks__file-upload
            label(for="photoFile").addWorks__load-text
              p Перетащите или загрузите для загрузки изображения
              vue-dropzone(id="drop1" :options="dropOptions").dropzone
              input(type="file" id="photoFile" @change="loadPhoto" accept="image/*").addWorks__file-input
              button.btn-save.btn Загрузить
        .addWorks__info
          .addWorks__label-wrap
            label(for="input-title").addWorks__label Название
            input(type="text" name="title" id="input-title" v-model="workData.title"  :class="{validError:validation.hasError('workData.title')}").addWorks__input.addWorks__input--title
            div.error-input(v-if="validation.firstError('workData.title')") {{validation.firstError('workData.title')}}
          .addWorks__label-wrap
            label(for="input-link").addWorks__label Ссылка
            input(type="text" name="link" id="input-link" v-model="workData.link"  :class="{validError:validation.hasError('workData.link')}").addWorks__input.addWorks__input--link
            div.error-input(v-if="validation.firstError('workData.link')") {{validation.firstError('workData.link')}}
          .addWorks__label-wrap  
            label(for="input-desc").addWorks__label Описание
            textarea(name="desc" id="input-desc" v-model='workData.description'  :class="{validErrorTextarea:validation.hasError('workData.description')}").addWorks__input.addWorks__input--desc
            div.error-input(v-if="validation.firstError('workData.description')") {{validation.firstError('workData.description')}}
          .addWorks__label-wrap
            label(for="input-tag").addWorks__label Добавление тега
            input(type="text" name="tag" id="input-tag" v-model='workData.techs'  :class="{validError:validation.hasError('workData.techs')}").addWorks__input.addWorks__input--tags
            div.error-input(v-if="validation.firstError('workData.techs')") {{validation.firstError('workData.techs')}}
          .addWorks__tags-list-wrap
            ul.addWorks__tags-list
              li(v-for="(item,index) in tagsArray" v-if="tagsArray != 0 && item != ''" ).addWorks__tags-item {{item}}
                .deleteTag(@click="removeTag(index)") x
          .addWorks__buttons
            button(type="reset" name="cancel" value="Отменить" @click="toogleAddingForm").addWorks__reset Отменить
            button(type="submit" name="submit" value="Сохранить" @click='addNewWorks' v-if="mode=='add'").btn.btn-save Сохранить
            button(type="submit" name="submit" value="Сохранить" @click='updateCurrentWork' v-if="mode=='edit'").btn.btn-save Сохранить
</template>
<script>
import { mapActions, mapState } from 'vuex';
import { getAbsoluteImgPath } from "@/helpers/pictures";
import {Validator} from 'simple-vue-validator';
import vueDropzone from "vue2-dropzone";

export default {
  mixins:[require('simple-vue-validator').mixin],
  validators:{
     'workData.title'(value){
      return Validator.value(value).required('Поле название обязательно для заполнения')
    },
    'workData.link'(value){
      return Validator.value(value).required('Поле ссылка обязательно для заполнения')
    },
    'workData.description'(value){
      return Validator.value(value).required('Поле описание обязательно для заполнения')
    },
    'workData.techs'(value){
      return Validator.value(value).required('Поле теги обязательно для заполнения')
    },
    "workData.photo": value => {
      return Validator.value(value).required("Вставьте файл");
    }
  },
  components:{
    vueDropzone
  },
  props:{
    mode:String
  },
  data(){
    return{
      workData:{
        title:'',
        link:'',
        description:'',
        techs:'',
        photo:''
      },
      photoURl:'',
      hasImage : false,
      tagsArray:[],
      dropOptions: {
        url: "https://httpbin.org/post",
        maxFilesize: 1.5,
        maxFiles: 1,
        chunking:false,
        addRemoveLinks:false
      }
    }
  },
  methods:{
    ...mapActions('works',['addWork','updateWork']),
    ...mapActions('tooltips',['showTooltip','hideTooltip']),
    toogleAddingForm(){
      this.$emit('toogleAddingForm');
    },
    removeTag(currentTag){
      console.log(currentTag);
      this.tagsArray.splice(currentTag, 1);
      this.workData.techs = this.tagsArray.join(',')
    },
    loadPhoto(e){
      const file = e.target.files[0];
      this.workData.photo = file;
      this.hasImage = true;
      const reader = new FileReader();
      try{
        reader.readAsDataURL(file);
        reader.onload = () =>{
          this.photoURl = reader.result;
          console.log(this.photoURl);
        }
      } catch(error){
        alert(error.message);
        console.log(error.message);
      }
    },
    async addNewWorks(){
       if((await this.$validate())===false){
         this.showTooltip({
          type:'error',
          text:'Не все поля заполнены'
        });
        return;
      }
      try{
        await this.addWork(this.workData);
        this.showTooltip({
          type:'success',
          text:'Работа успешно добавлена'
        });
        this.$emit('toogleAddingForm');
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
        this.workData = {...this.currentWork}
        return;
      }
      try{
        await this.updateWork(this.workData);
        this.showTooltip({
          type:'success',
          text:'Работа успешно обновлена'
        });
        this.$emit('toogleAddingForm');
      } catch(error){
         this.showTooltip({
          type:'error',
          text:'Размер картинки больше 1,5 МБ'
        });
      }
    },
    addingMode(){
      this.workData = {
        title:'',
        link:'',
        description:'',
        techs:'',
        photo:''
      };
      this.photoURl = '';
    },
    editingMode(){
      this.workData = {...this.currentWork};
      this.photoURl = getAbsoluteImgPath(this.workData.photo);
    }
  },
  watch:{
    'workData.techs'(){
      this.tagsArray = this.workData.techs.split(',');
    },
    mode(){
      if(this.mode == 'add'){
        // alert('вотчер добавления')
        console.log('Режим добавления')
        this.addingMode();
      } else if(this.mode == 'edit'){
        //  alert('вотчер редактирования')
        console.log('Режим редактирования')
        this.editingMode();
    }
    },
    currentWork(){
      this.workData = {...this.currentWork};
      this.photoURl = getAbsoluteImgPath(this.workData.photo);
    }
  },
  computed:{
    ...mapState('works',{
      currentWork:state=>{return state.currentWork}
    }),
    
    
  },
  created(){
    if(this.mode == 'add'){
      this.addingMode();

    } else if(this.mode == 'edit'){
      this.editingMode();
    }
  }
  
}
</script>

<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");


.dropzone{
  width:100%;
  height: 100%;
}

.addWorks__label-wrap{
  position: relative;
}
.addWorks__file-upload{
  cursor: pointer;
}
.addWorks__file{
  background-size:cover;
}
.addWorks__file-input,
.dropzone{
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  cursor: pointer;
  /* z-index: -1; */
}
.addWorks__file-input + label {
  cursor: pointer;
}
.addWorks__file-btn{
  padding: 0.425rem 2.25rem;
}

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
.addWorks__form{
  display: flex;
  justify-content: space-between;
  background: #fff;
  @include tablets{
        flex-direction: column;
    align-items: center;
  }
}
.addWorks__file{
   width:48%;
   height: 275px;
   background-color: #dee4ed;
   border: 1px dashed #a1a1a1;
    position: relative;
    margin-right: 4%;
    &-upload{
      height: 100%;
    }
    @include tablets{
          width: 80%;
    margin: 0;
    margin-bottom: 100px;
    }
    @include phones{
      width: 100%;
    }
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
    justify-content: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
    p{
      margin-bottom: 20px;
       width: 45%;
    }
 }
 .addWorks__file.imaged{
   .addWorks__file-upload{
     p{
      display: none;
     }
     button{
       display: none;
     }
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
   padding-right: 30px;
   position: relative;
    display: flex;
   &:last-child{
     margin-right: 0px;
   }
   @include phones{
      padding: 5px 10px;
    font-size: 12px;
   }
 }
 .deleteTag{
    position: absolute;
    right: 10%;
    cursor: pointer;
    font-weight: 700;
    top:4px;
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
.validError{
  border-bottom:2px solid #cd1515;
  &:hover{
     border-bottom:2px solid #cd1515;
  }
}
.btn-cancel{
  margin-right: 40px;
  margin-top: 0;
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
  background: linear-gradient(-.9turn,#1558e2,#3f35cb);
  border-radius: 50px;
  &:hover{
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
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
