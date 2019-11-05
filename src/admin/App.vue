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
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
    appHeader: () => import("components/header"),
    tabs: () => import("components/tabs")
  }
};
</script>


<style lang="pcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
section{
  height: 85px;
  min-height: 0;
}
button {
  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  border-style: solid;
  background: transparent;
}
.root-wrapper-container {
  height: 100%;
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

.content-container {
  background: url("~images/content/admin-bg.jpg") center center no-repeat / cover;
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
//btns
.btn-accept{
width: 15px;
height: 12px;
background: svg-load("tick.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
  background: svg-load("tick.svg", fill="#00d70a") center center no-repeat / contain;
}
}
.btn-decline{
width: 15px;
height: 12px;
background: svg-load("remove.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
  background: svg-load("remove.svg", fill="#bf2929") center center no-repeat / contain;
}
}
.btn-edit{
width: 16px;
height: 15px;
background: svg-load("pencil.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
  background: svg-load("pencil.svg", fill="#00d70a") center center no-repeat / contain;
}
}
.btn-trash{
width: 16px;
height: 15px;
background: svg-load("trash.svg", fill="#a0a5b1") center center no-repeat / contain;
&:hover{
background: svg-load("trash.svg", fill="#bf2929") center center no-repeat / contain;
} 
}
.btn-add-skill{
  height: 35px;
  width: 35px;
  background: svg-load("remove.svg", fill="#fff") center center no-repeat / center;
  transform: rotate(45deg)
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
  margin-top: 3.75rem;
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
.add-block{
  width: 340px;
  height: 560px;
  background: svg-load("plus.svg", fill="#fff") no-repeat center, linear-gradient(0turn,#1559e2,#3f35cb );
  background-size: 50%;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  @media screen and (max-width: 768px){
  width:45%;
  height: 500px;
  margin: 2%;
  }
  &:hover{
    background-color:linear-gradient(0turn,#3f35cb,#1559e2);
  }
}
</style>

