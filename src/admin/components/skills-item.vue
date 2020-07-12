<template lang="pug">
  .skills__group
    .skills__group-row-wrap 
      input(type="text" name="skill_title" v-model="currentSkill.title" :disabled="!editMode" :class="{validError:validation.hasError('currentSkill.title')}").skills__group-input
      div.error-input(v-if="validation.hasError('currentSkill.title')") {{validation.firstError('currentSkill.title')}}
      .skills__group-percent-wrap
        input(type="number" name="skill_percent"  v-model="currentSkill.percent" :disabled="!editMode" :class="{validError:validation.hasError('currentSkill.percent')}").skills__group-percent
      div.error-input.error-input-percent(v-if="validation.hasError('currentSkill.percent')") {{validation.firstError('currentSkill.percent')}}
      .skills__group-actions(v-if="!editMode")
        .skills__group-correct(
          @click="editMode = true"
        )
        .skills__group-trash(
          @click="removeCurrentSkill"
        )
      .skills__group-actions(v-else-if="editMode")
        .skills__group-save(
          @click="changeCurrentSkill"
        )
        .skills__group-cancel(
          @click="cancelEditing"
        )
</template>

<script>
import { mapActions } from 'vuex';
import {Validator} from 'simple-vue-validator';

export default {
  mixins:[require('simple-vue-validator').mixin],
  validators:{
     'currentSkill.title'(value){
      return Validator.value(value).required('Поле навык обязательно для заполнения')
    },
    "currentSkill.percent": value => {
      return Validator.value(value)
        .integer("Должно быть числом")
        .between(0, 100, "Некорректное значение для процентов")
        .required("Поле не может быть пустым");
    }
  },
  props:{
    skill:Object
  },
  data(){
    return{
      editMode:false,
      currentSkill:{...this.skill},
    }
  },
  methods: {
    ...mapActions('skills',['removeSkill','editSkill']),
    ...mapActions('tooltips',['showTooltip','hideTooltip']),
    async removeCurrentSkill(){
      try{
        await this.removeSkill(this.skill.id);
        this.showTooltip({
          type:'success',
          text:'Скилл успешно удален'
        })
      } catch(error){
        this.showTooltip({
            type:'error',
            text:error.message
        });
      }
    },
    async changeCurrentSkill(){
      if((await this.$validate())===false){
         this.showTooltip({
          type:'error',
          text:'Не все поля заполнены'
        });
        this.currentSkill = {...this.skill};
        return;
      }
      try{
        await this.editSkill(this.currentSkill);
         this.showTooltip({
          type:'success',
          text:'Скилл успешно обновлен'
        });
        this.editMode = false;
      } catch(error){
          this.showTooltip({
            type:'error',
            text:error.message
        });
      }
    },
    cancelEditing(){
      this.editMode=false;
      this.currentSkill = {...this.skill};
    }, 
    func() {
      this.hideTooltip(false)
    },
  },
  watch:{
    "currentSkill.percent"(){
      if(this.currentSkill.percent > 100){
        this.currentSkill.percent = 100;
      }
    }
  }
 
  
}
</script>


<style lang="postcss" scoped>
input[disabled]{
  &:hover{
    border-bottom:2px solid transparent;
  }
}
.skills__group-row-wrap{
  display: flex;
  margin-bottom: 20px;
  position: relative;
}
.skills__group-input{
  border:none;
  width:60%;
  margin-right: 5%;
  padding-bottom: 5px;
  font-weight: 700;
  background: transparent;
   border-bottom:2px solid #000;
    &:hover{
    border-bottom:2px solid #000;
  }
  &:active{
      border-bottom:2px solid #000;
  }
   &:focus{
      border-bottom:2px solid #000;
  }
  &:disabled{
    border-bottom:2px solid transparent;
  }
}
.skills__group-percent-wrap{
  width:20%;
  margin-right: 5%;
  font-size: 16px;
  position: relative;
  
  &:before{
    content:'%';
    color:black;
    width:20px;
    height: 20px;
    position: absolute;
    right:0;
    top:3px;
  }

}
.skills__group-percent{
  text-align: right;
   border:none;
   background: transparent;
    padding: 0.3125rem 1.375rem 0.3125rem 0.625rem;
    width:100%;
    border-bottom:2px solid #000;
    &:disabled{
     border-bottom: 2px solid transparent;
  }
}

.skills__group-actions{
  display: flex;
  justify-content: space-between;
  width:10%;
}
.skills__group-correct{
  background: svg-load("pencil.svg", fill="#414c63") center center no-repeat;
  width:15px;
  height:15px;
  cursor: pointer;
  &:hover{
     background: svg-load("pencil.svg", fill="#383bcf") center center no-repeat;
  }
}
.skills__group-trash{
  background: svg-load("trash.svg", fill="#414c63") center center no-repeat;
  width:15px;
  height:15px;
  cursor: pointer;
   &:hover{
     background: svg-load("trash.svg", fill="#bf2929") center center no-repeat;
  }
}
.skills__group-save{
  background: svg-load("tick.svg", fill="#00d70a") center center no-repeat;
  width:15px;
  height:15px;
  cursor: pointer;
}
.skills__group-cancel{
  background: svg-load("remove.svg", fill="#bf2929") center center no-repeat;
  width:15px;
  height:15px;
  cursor: pointer;
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
  bottom: -3.25rem;
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
.error-input-percent{
   left: 20rem;
  /* white-space: nowrap; */
}
</style>

