const shopCart= {
    state:{
        lists:[
            {
                id:0,
                name:'aaa',
                hint:'这是aaa',
                price:12,
                num:0,
                img:require('../../assets/logo.png')
            },
            {
                id:1,
                name:'bbb',
                hint:'这是bbb',
                price:15,
                num:0,
                img:require('../../assets/IMG_2333.jpg')
            },
            {
                id:2,
                name:'ccc',
                hint:'这是ccc',
                price:19,
                num:0,
                img:require('../../assets/IMG_2948.jpg')
            },
        ],
        mutations:{
            ADD_CART(state,id){
                state.lists[id].num++
                state.totalNum++
                state.totalPrice += state.lists[id].price
            },
            REDUCE_CART(state,id){
                if(state.lists[id].num>0){
                    state.lists[id].num--
                    state.totalNum--
                    state.totalPrice -= state.lists[id].price
                }
            }
        }
    }
}

export default shopCart;