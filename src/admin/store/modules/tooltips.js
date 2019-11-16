export default {
    namespaced:true,
    state:{
      toolData:{}
    },
    actions:{
      showTooltip(store,toolObj){
        toolObj.active = true;
        store.commit("SHOW_TOOLTIP",toolObj);
      },
      hideTooltip(store,status){
        store.commit('HIDE_TOOLTIP',status);
      }
    },
    mutations:{
      SHOW_TOOLTIP(state,toolObj){
        state.toolData = toolObj
      },
      HIDE_TOOLTIP(state,status){
        state.toolData.active = status;
      }
    }
  }