<template>
  <div class="hello">
    <h1>{{title}}</h1> 
  </div>
</template>

<script lang="ts">
import { useStore, createNamespacedHelpers } from 'vuex';
import { computed, defineComponent, onMounted, ref } from 'vue';
// import store from "../store/index"

export default defineComponent({
  name: 'HelloWorldTwo',
  props: {
    msg: String,
  },
  components: {
  },
  setup(){
    const store = useStore();
    //const toast = useToast();
        
    const title = computed(()=> store.state.Title.title);
    
    return {
      title
    }
  }, 
  methods: {
    // ...mapActions({ setTitle: 'setTitle',
    //  login: 'Auth/login'})
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
