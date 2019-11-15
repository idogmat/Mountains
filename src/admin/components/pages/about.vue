<template lang="pug">
  section.about
    .container.container-about
      .about__content
        .about__title-wrap.title-wrap
          .about__title.title Блок "Обо мне"
          .about__title-add-new(
            @click="showAddingForm = true"
            v-if="showAddingForm === false"
          ) Добавить группу
        .about__block
          ul.skills__list
            li.skills__item(v-if="showAddingForm")
              skillsGroupAdd(
                 @toogleAddingForm = "toogleAddingForm"
              )
            li.skills__item(v-for="category in categories")
              skillsGroup(
                :category="category"
                :skills="filterSkillsByCategoryId(category.id)"
              )
</template>
<script>
import skillsGroup from "../skills-group.vue";
import skillsGroupAdd from "../skills-group-add.vue";
import { mapActions, mapState } from "vuex";
export default {
  data(){
    return{
      showAddingForm : false
    }
  },
  components:{
    skillsGroup,
    skillsGroupAdd
  },
  methods:{
  ...mapActions('skills',['fetchSkill']),
  ...mapActions('categories',['fetchCategory']),
  toogleAddingForm(){
    this.showAddingForm = !this.showAddingForm
  },
  filterSkillsByCategoryId(categoryId){
    return this.skills.filter(skill=>skill.category == categoryId)
  }

  },
  computed:{
    ...mapState('user',{
      user:state=>{
        return state.user
      }
    }),
    ...mapState('categories', {
      categories: state => {
        return state.categories}
    }),
    ...mapState('skills',{
      skills:state=>state.skills
    })
  },
  async created(){
    try{
       this.fetchSkill();
    } catch(error){
      alert(error.message)
    }
    try{
      this.fetchCategory();
    } catch(error){
      alert(error.message)
    }
  },

}

</script>

<style lang="postcss" scoped>
@import url("../../../styles/mixins.pcss");
.container-about{
  margin-bottom: 30px;
  @include phones{
    width: 100%;
  }
}
.about__title-wrap{
  display: flex;
  margin-bottom: 30px;
  @include phones{
    flex-direction: column;
    width:80%;
    margin:0 auto;
     margin-bottom: 30px;
  }
}
.about__title{
  color: #414c63;
font-size: 21px;
font-weight: 700;
line-height: 34px;
margin-right: 50px;
@include phones{
  margin-bottom: 30px;
}
}
.about__title-add-new{
color: $blue-hover;
font-size: 16px;
font-weight: 700;
line-height: 33.89px;
position: relative;
cursor: pointer;
padding-left: 40px;
&:before{
  content:'';
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: linear-gradient(#1756e1,#3f35cb);
  position: absolute;
  top:0px;
  left:0px;
}
&:after{
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  top: 7.5px;
  left: 7.5px;;
  background: svg-load("remove.svg", fill="white") center center no-repeat / contain;
  transform: rotate(45deg);
}
}
.skills__new-group-wrap{
  display: flex;
}
.skills__list{
  display: flex;
  flex-wrap:wrap;
}
.skills__item{
  background: #fff;
  width:48%;
  margin-right: 4%;
  margin-bottom: 4%;
   box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  &:nth-child(2n){
     margin-right: 0%;
  }
  @include phones{
    width:100%;
   margin-right: 0;
  }
}


</style>
