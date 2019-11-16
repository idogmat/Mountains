<template lang="pug">
  .skills__form
    .skills__new-group-wrap
      div.error-input(v-if="validation.hasError('skillTitle')") {{validation.firstError('skillTitle')}}
      input.skills__new-group(
        type='text' name="groupName" placeholder="Название новой группы"
        v-model="skillTitle"
        :class="{validError:validation.hasError('skillTitle')}"
        )
      .skills__new-group-actions
        .skills__accept(@click="addNewCategory")
        .skills__decline(@click = "closeNewCategory")
    .skills__group-new-skill
      input(type="text" name="newSkillInput"  disabled="disable").skills__group-new-skill-input
      .skills__group-new-skill-percent-wrap
        input(type="number" min="0" max="100" name="newSkillPercent" disabled="disable").skills__group-new-skill-percent
      button(type="button" disabled="disable").skills__group-new-btn
</template>

<script>
import { mapActions } from 'vuex';
import {Validator} from 'simple-vue-validator';
export default {
  mixins:[require('simple-vue-validator').mixin],
  validators:{
    'skillTitle'(value){
      return Validator.value(value).required('Обязательное поле для заполнения')
    }
  },
  data(){
    return{
      skillTitle:'',
    }
  },
  methods:{
    ...mapActions('categories',['addCategory']),
    ...mapActions('tooltips',['showTooltip','hideTooltip']),
    async addNewCategory(){
      this.$emit('toogleAddingForm');
      if ((await this.$validate()) === false){
      this.showTooltip({
        type:'error',
        text:'Не все поля заполнены'
      });
      return;
      }
      try{
        await this.addCategory(this.skillTitle);
        this.showTooltip({
          type:'success',
          text:'Категория успешно добавлена'
        })
      } catch(error){
        this.showTooltip({
          type:'error',
          text:error.message
        });
      }
      },
      func() {
        this.hideTooltip(false)
      },
      closeNewCategory(){
        this.$emit('toogleAddingForm');
      }
  }
}
</script>

<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");

.error-input{
  background: #cd1515;
  font-size: 0.75rem;
  position: absolute;
  bottom:-20px;
  z-index:5;
  left: 5px;
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
.skills__form{
  padding:20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.skills__new-group-wrap{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  position: relative;
  &:after{
       content: "";
    width: 103%;
    height: 1px;
   background-color: #1f232d;
    position: absolute;
    bottom: 18px;
    left: -10px;
  }
}
.skills__group-hide{
  display: none;
}
.skills__new-group{
  border: none;
  border-bottom:2px solid transparent; 
  padding-bottom:10px;
  border-bottom: 2px solid $text-color;
  width: 70%;
  background-color: transparent;
  color: #414c63;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.875rem;
  border: none;
  border-bottom: 2px solid #414c63;
  padding: 0 0.3125rem 0.625rem;
  margin-bottom: 1.875rem;
  &:hover{
    border-bottom:2px solid $blue-hover;
  }
  &:active{
      border-bottom:2px solid $blue-hover;
  }
}
.skills__new-group-actions{
    display: flex;
    align-items: center;
    transform: translate(-0px,-20px);
    width: 10%;
    justify-content: space-around;

}
.skills__accept{
  background: svg-load("tick.svg", fill="#00d70a") center center no-repeat / contain;
  width:15px;
  height: 15px;
  cursor:pointer;
}
.skills__decline{
  background: svg-load("remove.svg", fill="#bf2929") center center no-repeat / contain;
  width:15px;
  height: 15px;
  cursor:pointer;
}
.skills__group-new-skill{
  opacity: .6;
}
.skills__group-new-skill-input{
    width: 50%;
    background-color: transparent;
    color: #414c63;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.875rem;
    border: none;
    border-bottom: 2px solid #414c63;
   padding: 0.3125rem 1.875rem 0.3125rem 0.625rem;
    margin-bottom: 1.875rem;
      &:hover{
    border-bottom:2px solid $blue-hover;
  }
  &:active{
      border-bottom:2px solid $blue-hover;
  }
}
.skills__group-new-skill-percent-wrap{
    width: 20%;
    margin-right: 5%;
    font-size: 1rem;
    position: relative;
  &:before{
    content:'%';
    color:black;
    width:20px;
    height: 20px;
    position: absolute;
    right:0;
    top:10px;
  }
  @include phones{
    width: 21%;
     &:before{
       top:8px;
     }
  }
}
.skills__group-new-skill-percent{
  text-align:center;
  width:100%;
  background-color: transparent;
    color: #414c63;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.875rem;
    border: none;
    border-bottom: 2px solid #414c63;
   padding: 0.3125rem 1.375rem 0.3125rem 0.625rem;
    margin-bottom: 1.875rem;
    &:hover{
      border-bottom: 2px solid $blue-hover;
    }
    &:focus{
      border-bottom: 2px solid $blue-hover;
    }
   
}
.skills__group-new-skill{
  display: flex;
  padding-left:20%;
  justify-content: space-between;
  @include tablets{
    padding-left: 0;
  }
}
.skills__group-new-btn{
  width: 40px;
height: 40px;
border-radius: 50%;
position: relative;
 background: linear-gradient(#1756e1,#3f35cb);
 &:after{
  content:'';
  width:10px;
  height: 10px;
  position: absolute;
  top:50%;
  left:50%;
  background: svg-load("remove.svg", fill="white") center center no-repeat / contain;
  transform:rotate(45deg) translate(-70%,0%);
}
}
.validError{
  border-bottom:2px solid #cd1515;
  &:hover{
     border-bottom:2px solid #cd1515;
  }
}
</style>

