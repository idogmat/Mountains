<template lang="pug">
  div
    .addWorks__preview
      img(:src="work.photo")
      ul.addWorks__tags-list.addWorks__tags-list--preview
        li(v-for="item in tagArray").addWorks__tags-item {{item}}
    .addWorks__desc
      .addWorks__desc-title-wrap
        h2.addWorks__desc-title {{work.title}}
      .addWorks__desc-text
        p {{work.description}}
      .addWorks__desc-link-wrap
        a(:href="work.link").addWorks__desc-link {{work.link}}
      .addWorks__desc-controls
        .addWorks__desc-correct(@click="updateCurrentWork") Править
        .addWorks__desc-remove(@click="removeCurrentWork") Удалить
</template>

<script>
import { mapActions } from 'vuex';
import { getAbsoluteImgPath } from "@/helpers/pictures";
export default {
  
  props:{
    work:Object
  },
  data(){
    return{
      photoURL:'',
      tagArray:[],
      currentWork: {...this.work}
    }
  },
  methods:{
    ...mapActions('works',['removeWork','addCurrentWork']),
    ...mapActions('tooltips',['showTooltip']),
    async removeCurrentWork(){
      try{
        await this.removeWork(this.work);
        this.showTooltip({
        type:'success',
        text:'Работа успешно удалена'
      });
      }catch(error){
         this.showTooltip({
        type:'error',
        text:error.message
      })
        
      }
    },
    updateCurrentWork(){
      this.$emit("updateCurrentWork")
      this.addCurrentWork(this.currentWork);
    }
  },
  created(){
    this.work.photo = getAbsoluteImgPath(this.work.photo);
    this.tagArray = this.work.techs.split(',');
  },
  watch:{
    work(){
      this.currentWork = {...this.work};
      this.work.photo = getAbsoluteImgPath(this.work.photo);
      this.tagArray = this.work.techs.split(',');
    }
  }
}
</script>
<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");
.addWorks__preview{
  position: relative;
  margin-bottom: 30px;
}
.addWorks__tags-list--preview{
    position: absolute;
    right: 5px;
    bottom: -20px;
    transform: translate(0, -100%);
}
.addWorks__desc-title{
  color: #414c63;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  &-wrap{
    margin-bottom: 20px;
  }
}
.addWorks__desc{
  padding:0 5%;
}
.addWorks__desc-text{
  opacity: 0.7;
color: #414c63;
width: 85%;
font-size: 16px;
font-weight: 400;
line-height: 30px;
margin-bottom: 20px;
}
.addWorks__desc-link-wrap{
  margin-bottom: 20px;
}
.addWorks__desc-link{
  color:$blue-hover;
  text-decoration:none;
}
.addWorks__desc-controls{
  display: flex;
  justify-content: space-between;
  /* opacity: 0.5; */
  color: #414c63;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
}
.addWorks__desc-correct{
  padding-right:50px;
  position: relative;
  cursor: pointer;
  &:before{
    content:'';
    background: svg-load("pencil.svg", fill="grey") center center no-repeat / contain;
    width:20px;
    height: 20px;
    opacity:initial;
    position: absolute;
   top: 15%;
    left: 63%;
  }
  &:hover{
    &:before{
    background: svg-load("pencil.svg", fill="#383bcf") center center no-repeat / contain;

    }
  }
}
.addWorks__desc-remove{
    padding-right:50px;
    cursor: pointer;
  position: relative;
  &:before{
    content:'';
    background: svg-load("remove.svg", fill="grey") center center no-repeat / contain;
    width:20px;
    height: 20px;
    opacity:initial;
    position: absolute;
   top: 15%;
    left: 63%;
  }
  &:hover{
    &:before{
      background: svg-load("remove.svg", fill="red") center center no-repeat / contain;
    }
  }

}
.addWorks__desc-correct-icon{
   width:20px;
    height: 20px;
    position: absolute;
    top:0;
    left:0;
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
</style>
