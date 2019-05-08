import {
    ADD_CART,
    REDUCE_CART
}from './mutations-types'

export default {
    [ADD_CART](state,id){
        state.lists[id].num++
        state.totalNum++
        state.totalPrice += state.lists[id].price
    },
    [REDUCE_CART](state,id){
        if(state.lists[id].num > 0){
            state.lists[id].num--
            state.totalNum--
            state.totalPrice -= state.lists[id].price
        }
    }
}