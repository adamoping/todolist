 <template>
 <div>
  <div>
    <input v-model="inputValue"/>
    <button @click="handelSubmit">提交</button>
  </div>
  <ul>
    <todo-item  v-for="(item,index) of list" 
    :content="item" 
    :index="index" 
    :key="index"
    @delete="handelDelete"
    >item</todo-item>
  </ul>
</div>
</template>

<script>
import TodoItem from "./components/TodoItem"
export default {
  components:{
    'todo-item':TodoItem  
  },
  data:function(){
     return{
      inputValue:'',
      list:[]
     }
  },
  methods:{
    handelSubmit:function(){
     this.list.push(this.inputValue) ;
     this.inputValue="";
    },
    handelDelete:function(index){
      this.list.splice(index,1);
    }
  }
}
</script>

<style>

</style>
