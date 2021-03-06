import news from './news.vue';
import slideDown from './slidedown.vue'
import loading from './loading.vue'
import verification from './verification.vue'
import scrollbar from './scrollbar.vue'

const components = {
    news,
    slideDown,
    loading,
    verification,
    scrollbar
};

const install = function (Vue) {
    Object.keys(components).forEach((key) => {
        Vue.component(components[key].name, components[key])
    })
};

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);

export {install};

export default {install};