<template>
  <div>
    <li @click="handelDelete">{{content}}</li>
  </div>
</template>

<script>
export default {
  props:['content','index'],
  methods:{
    handelDelete:function(){
      this.$emit('delete',this.index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
