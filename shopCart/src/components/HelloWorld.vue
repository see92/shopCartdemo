<template>
  <div id="hello">
    <ul class="shop_container">
      <li class="shop_container_li" v-for="item in $store.state.lists" :key="item.id">
        <div class="shop_img">
         <img :src="item.img" alt="" width="100%" height="100%"> 
        </div>
        <div class="shop_detail">
          <p>{{item.name}} </p>
          <p>{{item.hint}} </p>
          <p>￥{{item.price}} </p>
          <p>
            <span class="shop_reduce" @click="reduce_num(item.id)">-</span>
            <span class="shop_num">{{item.num}}</span>
            <span class="shop_add" @click="add_num(item.id)">+</span>
          </p>
        </div>
      </li>
    </ul>
    <div class="foot">
      <div class="total_price">
        <span>合计:￥{{totalPrice}}</span>
      </div>
      <div class="total_num" :class="{payment: totalNum} ">
        <span>去结账:{{totalNum}} </span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
  name:'HelloWorld',
  data(){
    return {
    }
  },
  created() {
    
  },
  computed: {
    ...mapState([
      'lists','totalPrice','totalNum'
    ]),
    ...mapGetters([
      'lists_obj','lists_length'
    ])
  },
  methods: {
    ...mapMutations([
      'ADD_CART'
    ]),
    reduce_num(id){
      this.$store.commit('REDUCE_CART',id)
    },
    add_num(id){
      this.ADD_CART(id)
    }
  },
}
</script>


<style lang="less" scoped>
  body,li,ul,p{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .hello{
    position: relative;
    top: 0;
    bottom: 0;
    left:0;
    right: 0;
  }
  .shop_container{
    width: 100%;
  }
  .shop_container_li{
    background: #f5f5f5;
    height: 130px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .shop_img{
    flex: 1;
    padding: 10px;
    height: 110px;
  }
  .shop_detail{
    flex: 2; 
  }
  .shop_detail p{
    font-size: 14px;
    line-height: 25px;
    height: 25px;
  }
  .shop_reduce,.shop_add{
    font-size: 18px;
    font-weight: 700;
    display: inline-block;
    text-align: center;
    width: 20px;
    height: 20px;
    border: 1px solid #f5f5f5;
    background-color: #ffffff;
  }
  .shop_num{
    margin: 0 5px;
  }
  .foot{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .total_price{
    background-color: #4cd964;
    flex:2;
    height: 100%;
    line-height: 40px;
  }
  .total_num{
    flex:1;
    background-color: #666;
    height: 100%;
    line-height: 40px
  }
  .payment{
    background-color: #3b95e9
  }
</style>
