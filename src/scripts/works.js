import Vue from "vue";


const btns = {
    template: "#slider-btns"
};
const thambs = {
    template: "#slider-thambs",
    props:["works", "currentWork"],
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
    components: { thambs, btns },
		props:["works", "currentWork","currentIndex"],
		
};
const info = {
    template: "#slider-info",
    components: { tags },
		props:["currentWork"],
		computed: {
			tagsArray() {
				return this.currentWork.skills.split(', ');
			}
		}
};
new Vue({
    template: "#slider-container",
    el: "#slider-component",
    components: {
      display,
      info
    },
    data:() => ({
        works:[],
        currentIndex: 0

		}),
		computed: {
			currentWork() {
				return this.works[this.currentIndex];
			}
		},
		watch: {
			currentIndex(value) {
				this.makeInfiniteLoopForCurIndex(value);
			}
		},
    methods: {
			makeInfiniteLoopForCurIndex(value) {
				const worksAmount = this.works.length - 1;
				if (value > worksAmount) this.currentIndex = 0;
				if (value < 0) this.currentIndex = worksAmount;
			},
        makeArrWithRequiredImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/${item.photo}`);
                item.photo = requiredPic;
                return item
            })
				},
        handleSlide(direction) {
					switch (direction) {
						case "next":
							this.currentIndex++;
							break;
						case "prev":
							this.currentIndex--;
							break;
					}
        }
    },
    created(){
        const data = require("../data/works.json");
        this.works = this.makeArrWithRequiredImages(data);

        this.currentWork = this.works[this.currentIndex];
    }
});