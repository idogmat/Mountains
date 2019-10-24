import Vue from "vue";
import Flickity from "vue-flickity";
const sliderBlock ={
    template: "#responses-block",
    props: ["charecter"]
};
const sliders = {
    template: "#responses-slider",
    props: ["charecters"],
    components: {
        sliderBlock,
        Flickity
    },
    data() {
        return {
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: false,
                groupCells: true,
                resize: true,
                freeScroll: false,
                contain: true
            }
        }
    },
    methods: {
        checkArrows(){
            if  (this.$refs.flickity.selectedIndex() == 0 ) {
                this.$el.parentNode.querySelector('.toggle-arrow__left').disabled = true;
            } else if (this.$refs.flickity.selectedIndex() ==  this.$refs.flickity.slides().length -1) {
                this.$el.parentNode.querySelector('.toggle-arrow__right').disabled = true;
            } else {
                this.$el.parentNode.querySelector('.toggle-arrow__left').disabled = false;
                this.$el.parentNode.querySelector('.toggle-arrow__right').disabled = false;
            }
        }
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