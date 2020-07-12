import Vue from "vue";
import {getAPI} from "./api-get";
import * as axios from "axios";


const btns = {
    template: "#slider-btns"
};
const thumbs = {
    template: "#slider-thumbs",
    props: ["works", "currentWork"],
    computed: {
        reverseWorks() {
            return [...this.works].reverse();
        }
    }
};
const tags = {
    template: "#slider-tags",
    props: ["tags"]
};
const display = {
    template: "#slider-display",
    components: {thumbs, btns},
    props: ["works", "currentWork", "currentIndex", "currentIndexBg"]
};
const info = {
    template: "#slider-info",
    components: {tags},
    props: ["currentWork"]
};
new Vue({
    template: "#slider-container",
    el: "#slider-component",
    components: {
        display,
        info
    },
    data: () => ({
        works: [],
        currentIndex: 0,
        currentIndexBg: 0

    }),
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        }
    },
    watch: {
        currentIndexBg(value) {
            this.makeInfiniteLoopForCurIndex(value);
        }
    },
    methods: {
        makeInfiniteLoopForCurIndex(value) {
            const worksAmount = this.works.length - 1;
            if (value > worksAmount) this.currentIndexBg = 0;
            if (value < 0) this.currentIndexBg = worksAmount;

        },
        makeArrWithRequiredImages(data) {
            return data.map(item => {
                    item.photo = `https://webdev-api.loftschool.com/${item.photo}`;
                    let objectTegs = [];
                    let arrayTegs = item.techs.split(',');
                    arrayTegs.forEach((value, index) => {
                        if (value && value !== ' ') {
                            objectTegs.push({
                                id: index,
                                name: value
                            })
                        }
                    });
                    item.techs = objectTegs;
                    return item;
            })


        },
        handleSlide(direction) {
            switch (direction) {
                case "next":
                    this.currentIndexBg++;
                    this.works.push(this.works[0]);
                    this.works.shift();
                    // console.log(this.currentIndex);
                    break;
                case "prev":
                    this.currentIndexBg--;
                    const lastItem = this.works[this.works.length - 1];
                    this.works.unshift(lastItem);
                    this.works.pop();
                    // console.log(this.currentIndex);
                    break;
            }
        }
    },
    async created() {
        const data = await getAPI.getWorks();
        console.log(data);
        // const data = require("../data/works.json");
        this.works = this.makeArrWithRequiredImages(data);

        this.currentWorks = this.works[this.currentIndex];
    }
});