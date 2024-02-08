let vm = Vue.createApp({
    data() {
        return { isPurple: false, selectedColor: "white" };
    },
    computed: {
        circle_classes() {
            return {
                purple: this.isPurple,
                // ["text-orange"]: this.selectedColor === "text-orange",
                // ["text-black"]: this.selectedColor === "text-black"
            };
        },
    }
}).mount('#app');