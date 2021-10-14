<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name:'Scroller',
    props : {
         handleToScroll : {
            type : Function,
            default : function(){}
        },
        handleToTouchEnd : {
            type : Function,
            default : function(){}
        }
    },
    mounted() {
         let bs =new BScroll(this.$refs.wrapper,{
                tap : 'tap',
                probeType:1,
            });
           bs.on('scroll',(pos)=>{
                this.handleToScroll(pos);
                // console.log('lalalla');
            });

            bs.on('touchEnd',(pos)=>{
                this.handleToTouchEnd(pos);
                // console.log('lll');
            }); 
    },
}
</script>

<style scoped>
    .wrapper{height: 100%;overflow: hidden }
</style>