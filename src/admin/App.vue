<template lang="pug">
  div.root-wrapper-container
    div.root-container
      template
        header.header-container
          app-header
        section.tabs-container
          tabs
        main.content-container
          router-view
          tooltips
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import store from '@/store';
export default {
  components: {
    appHeader: () => import("components/header"),
    tabs: () => import("components/tabs"),
    tooltips:() => import('components/tooltips')
  },
 computed:{
    ...mapState("tooltips", {
      status: state => state.toolData.active
    }),

  },
  methods:{
    ...mapActions('tooltips',['hideTooltip'])
  },
  watch:{
    status:function(){
      if(this.status){
        let timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          this.hideTooltip();
        }, 2000);
      }
    }
  }
};
</script>


<style lang="pcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

button {
  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  border-style: solid;
  border-width: 1px;
  outline:3px solid transparent;
  background-color: buttonface;

}
section {
    height: 65px;
    min-height: fit-content;
}
.root-container{
  height: 100vh;
}
.header-container {
  background: linear-gradient(to right, #3e3e59, #454573);
  padding: 15px 0;

  @include phones {
    padding: 20px 0;
  }
}

.root-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.admin-wrapper {
  display: flex;

  .maincontent {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
}
body{
  background: url("~images/content/admin-bg.jpg") center center no-repeat / cover;
}
.content-container {
  
  flex: 1;
  padding-top: 60px;

  @include phones {
    padding-top: 30px;
  }
}

.page-title {
  margin-bottom: 60px;
  font-size: 21px;
  font-weight: bold;
}
</style>

