import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import shop from './modules/shop';

Vue.use(Vuex)
const state = {
    lists:[
        {
            id:'0',
            name:'aaa',
            hint:'这是aaa',
            price:12,
            num:0,
            img:require('../assets/logo.png')
        },
        {
            id:'1',
            name:'bbb',
            hint:'这是bbb',
            price:15,
            num:0,
            img:require('../assets/IMG_2333.jpg')
        },
        {
            id:'2',
            name:'ccc',
            hint:'这是ccc',
            price:19,
            num:0,
            img:require('../assets/IMG_2948.jpg')
        }
    ],
    totalPrice:0.00,
    totalNum:0,
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules:{
        shop
    }
})