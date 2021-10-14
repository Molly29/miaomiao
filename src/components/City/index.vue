<template>
  <div class="city_body">
        <div class="city_list">
            <div class="city_sort" ref="city_sort">
                <div v-for="item in cities" :key="item.index">
                    <h2>{{item.initial}}</h2>
                    <ul>
                        <li v-for="itemList in item.list" :key="itemList.index">{{itemList.name}}</li>
                    </ul>
                </div>	
            </div>
        </div>
        <div class="city_index">
            <ul>
                <li v-for="(item,index) in cities" :key="item.index" @touchstart="handeeToIndex(index)">{{item.initial}}</li>   
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'City',
    data() {
        return {
            cities : []
        }
    },
    mounted() {
        //ip定位
       /* this.axios.get('http://ip-api.com/json/').then((res)=>{
          console.log(res);
       }) */
       //各个城市
       this.axios.get('/cityList.json',{}).then(
           response => {
            //    console.log('请求成功了',response.data.city[0].list);
                   var cities = response.data.city;
                   this.cities = cities;
                //    console.log(cities);
           },
           error => {
               console.log('请求失败了',error.message);
           }
       )
    }, 
    methods: {
        handeeToIndex(index){
            var h2 =this.$refs.city_sort.getElementsByTagName('h2');
            this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
        }
    },
}    

</script>

<style scoped>
#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}

.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}

.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}

</style>