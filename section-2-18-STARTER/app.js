let vm = Vue.createApp({
    data() {
        return { isPurple: false, selectedColor: "white", size: 150 };
    },
    computed: {
        circle_classes() {
            return {
                purple: this.isPurple,
                // ["text-orange"]: this.selectedColor === "text-orange",
                // ["text-black"]: this.selectedColor === "text-black"
            };
        },
        circle_styles() {
            return {
                width: `${this.size}px`,
                height: `${this.size}px`,
                lineHeight: `${this.size}px`,
                transform: "rotate(30deg)"
            };
        }
    }
}).mount('#app');