<template lang="pug">
  .login
    .login__content
      form(
        @submit.prevent="login"
      ).login__form
        .login__form-title Авторизация
        .login__row
          .error-input(v-if="validation.firstError('user.name')") {{validation.firstError('user.name')}}
          app-input(
            title="Логин"
            icon="user"
            v-model="user.name"
            :class="{validError:validation.hasError('user.name')}"
          )
        .login__row
          .error-input(v-if="validation.firstError('user.password')") {{validation.firstError('user.password')}}
          app-input(
            title="Пароль"
            icon="key"
            type="password"
            v-model="user.password"
            :class="{validError:validation.hasError('user.password')}"
          )
        .login__btn
          button(
          type="submit" :disabled="disable" name="sumbit" value="Войти"  
          :class="{ activeForm : active }").login__send-data Отправить
</template>

<script>
import $axios from "@/requests";
import {mapActions} from 'vuex';
import {Validator} from 'simple-vue-validator';
export default {
  mixins:[require('simple-vue-validator').mixin],
  validators:{
    'user.name': value =>{
      return Validator.value(value).required('Логин не может быть пустым ')
    },
    'user.password': value =>{
      return Validator.value(value).required('Пароль не может быть пустым')
    }
  },
  components: {
    appInput: () => import("components/input.vue")
  },
  data: () => ({
    user: {
      name: "",
      password: ""
    },
    active:false,
    disable:true
  }),
  methods:{
    ...mapActions('tooltips',['showTooltip']),
    async login(){
      if((await this.$validate())===false){
        this.showTooltip({
          type:'error',
          text:'Заполните все поля'
        });
        return;
      }
      try{
        const { data: {token} } = await $axios.post('/login',this.user);
        localStorage.setItem('token',token)
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`
        this.$router.replace('/');
        this.showTooltip({
          type:'success',
          text:'Добро пожаловать'
        })
      } catch(error){
        console.log(error.response);
        this.showTooltip({
          type:'error',
          text:error.response.data.error
        })
        }
      }
    },
    watch:{
    'user.name'(){
      if((this.user.password!='') && (this.user.name!='')){
        console.log('test');
       this.active = true;
        this.disable = false;
      } else{
        this.active = false;
        this.disable = true;
      }
    },
    'user.password'(){
      if((this.user.password!='') && (this.user.name!='')){
        console.log('test');
        this.active = true;
        this.disable = false;
      } else{
        this.active = false;
        this.disable = true;
      }
    }
  },
  created(){ 
       if((this.user.password!='') && (this.user.name!='')){
        console.log('test');
        this.active = true;
        this.disable = false;
      } else{
         this.active = false;
        this.disable = true;
      }
      this.validation.reset();
  }
  };

</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("~images/content/mountain-bg.png") center center / cover no-repeat;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    background: $text-color;
  }
}
.login__form-title {
  font-size: 36px;
  text-align: center;
  font-weight: 600;
}
.login__content {
  position: relative;
  @include phones {
    height: 100%;
    width: 100%;
  }
}
.login__row {
  position: relative;
  margin-bottom: 35px;
}
.login__btn {
  display: flex;
  width: 100%;
  padding: 0 8%;
  justify-content: center;
}
.login__send-data {
  width: 100%;
  padding: 30px;
  background-image: linear-gradient(to right, #ad00ed, #5500f2);
  border-radius: 40px 0 40px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  &[disabled] {
    opacity: 0.5;
    filter: grayscale(100%);
  }
}
.error-input{
  background: #cd1515;
  font-size: 0.75rem;
  position: absolute;
  bottom: -43px;
  left: 0;
  right: 0;
  z-index:5;
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
.login__form {
  width: 563px;
  padding: 50px 77px 60px;
  background: #fff;
  @include phones {
    width: 100%;
    padding-right: 7%;
    padding-left: 7%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>