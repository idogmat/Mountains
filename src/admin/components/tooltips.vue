<template lang="pug">
  .serverMessage-wrap(:class="{active:toolData.active}")
    .serverMessage(:class="[toolData.type]")
      .serverMessage__title {{toolData.text}}
      .serverMessage__close(@click='closeTooltip')
</template>


<script>
import { mapState,mapActions } from "vuex";
export default {
  
  data(){
    return {

    }
  },
  methods:{
    ...mapActions('tooltips',['hideTooltip']),
    closeTooltip(){
      this.hideTooltip();
    }
  },
  computed:{
    ...mapState('tooltips',{
      toolData : function(state){
       return state.toolData;
      }
    })
  }
}
</script>


<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");

.serverMessage-wrap{
  position: fixed;
  bottom: 0;
  left: 50%;
  width:500px;
  margin: 0 auto;
  transform: translate(-50%,150%);
  transition: 2s;
  @include phones{
    width:100%;
  }
}
.active{
  transform: translate(-50%,0%);
  transition: 1s;
}
.serverMessage{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:#fff;
  font-weight: 700;
  padding:20px 25px;
  &__success{
   background-color: #4bb133;
  }
  &__overload{
   background-color: #b18333;
  }
  &__error{
  background-color: #b13333;
  }
}
.success{
   background-color: #4bb133;
  }
.overload{
   background-color: #b18333;
  }
.error{
  background-color: #b13333;
  }
.serverMessage__close{
   background: svg-load("remove.svg", fill="white") center center no-repeat;
   width:15px;
   height: 15px;
   cursor: pointer;
}

</style>
