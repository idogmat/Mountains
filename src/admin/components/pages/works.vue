<template lang="pug">
  .works-section
    .container
      works-edit
      works-list
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
    components: {
    worksEdit: () => import("../works-edit"),
    worksList: () => import("../works-list")
  },

}
</script>
<style lang="postcss">
.works-sections,.container{
  height: 100%;
}
.admin-work-panel{
  height: 60vh;
}
</style>