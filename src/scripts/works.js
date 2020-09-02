import Vue from "vue";
import {getAPI} from "./api-get";
import * as axios from "axios";


const btns = {
    template: "#slider-btns"
};
const thumbs = {
    template: "#slider-thumbs",
    props: ["works", "currentWork","currentIndex"],
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
    props: ["works", "currentWork", "currentIndex", "currentIndexBg","doCreate"]
};
const info = {
    template: "#slider-info",
    components: {tags},
    props: ["currentWork","doCreate"]
};
new Vue({
    template: "#slider-container",
    el: "#slider-component",
    components: {
        display,
        info
    },
    data: () => ({
        isCreated:false,
        works: [],
        currentIndex: 0,
        currentIndexBg: 0,
        currentWorks:Object
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
        },
        slideOnClick(id) {
            let newId =id - this.currentWork.id;
            newId = -1 * newId;
            if (newId <= 0) {
                // console.log(newId);
                // console.log(this.currentWork.id);
                this.currentIndexBg++;
                this.works.push(this.works[0]);
                this.works.shift();
            }else if(newId >= 0){
                newId =+1;
                // console.log(newId);
                this.currentIndexBg++;
                this.works.push(this.works[0]);
                this.works.shift();
            }
        }
    },
    async created() {
        const data = await getAPI.getWorks();
        // console.log(data);
        this.works = this.makeArrWithRequiredImages(data);
        this.isCreated = true;
    }
});