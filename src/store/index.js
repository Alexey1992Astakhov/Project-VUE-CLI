import Vue from "vue";
import Vuex from 'vuex';
import articlesModule from "./modules/articlesModule";
import projectModule from "./modules/projectModule";


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        articlesModule,
        projectModule
    }
})