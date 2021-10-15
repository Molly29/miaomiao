<template>
  <div id="main">
      <Header title="个人中心"/>
      <div id="content">
        <Login/>
      </div>
      <TabBat/>
  </div>
</template>

<script>
import Header from '@/components/Header';
import TabBat from '@/components/TabBat';
import Login from '@/components/Login';



export default {
  name:'Mine',
  components:{
    Header,
    TabBat,
    Login
  }
}
</script>

<style>

</style>