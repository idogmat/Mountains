import Vue from "vue";

const sliderBlock ={
    template: "#responses-block",
    props: ["charecter"]

    
}
const sliders = {
    template: "#responses-slider",
    props: ["charecters"],
    components: {
        sliderBlock
      }
};
new Vue({
    el: "#responses-component",
    template: "#responses-display",
    
    components: {
        sliders
    },
    data: () =>({
        charecters: []
    }),
    methods: {
        RequiredImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/${item.photo}`);
                item.photo = requiredPic;
                return item
            })
        }

    },
    created() {
        this.charecters = require("../data/responses.json");
        const data = this.charecters;
        this.charecters = this.RequiredImages(data);
    }
});