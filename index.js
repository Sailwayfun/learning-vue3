const vm = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            url: "https://google.com",
            raw_html: `<a href="https://google.com" target="_blank">It's a link</a>`,
            age: 20,
            count: 0
        };
    },
    methods: {
        increment() {
            this.age++;
            return;
        },
        updateLastName(event, message) {
            console.log(message);
            this.lastName = event.target.value;
        },
    },
    computed: {
        fullName() {
            console.log("fullname is calculated");
            return `${this.firstName} ${this.lastName}`;
        },
    }
}).mount("#app");

// setTimeout(() => {
//     vm.firstName = "Bob";
// }, 2000);

// Vue.createApp({
//     data() {
//         return {
//             firstName: "Garnt",
//             lastName: "Foo"
//         };
//     }
// }).mount("#app2");