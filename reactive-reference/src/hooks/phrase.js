import { ref, watchEffect } from "vue";

export const usePhrase = () => {
    let phrase = ref("");
    let reversedPhrase = ref("");
    watchEffect(() => {
        reversedPhrase.value = [...phrase.value].reverse().join("");
    });

    return { phrase, reversedPhrase };
};