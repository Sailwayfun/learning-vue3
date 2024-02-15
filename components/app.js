const vm = Vue.createApp({});

vm.component("hello", {
    template: `<h1>{{message}}</h1>`,
    data() {
        return {
            message: "hello world"
        };
    },
});


vm.mount("#app");

