<template>
  <div class="hello">
    <h1>{{title}}</h1> -->

    <button @click="updateTitle">Update title from API</button>
    <button @click="updateToast">Update toast</button>
  </div>
</template>

<script lang="ts">
import { useStore, createNamespacedHelpers } from 'vuex';
import { computed, defineComponent, onMounted, ref } from 'vue';
import CountryService from '../services/CountryService';
import { useToast } from "primevue/usetoast";

const { mapState, mapActions } = createNamespacedHelpers('Title')
// import store from "../store/index"

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
  },
  setup(){
    const store = useStore();
    //const toast = useToast();
        
    const title = computed(()=> store.state.Title.title);
    const setTitle = () => {
      store.dispatch('Title/setTitle',"New app title");
    }
    const updateTitle = () => {
      store.dispatch("Title/updateTitle")
    }

    const updateToast = () =>{
      //toast.add({severity:'info', summary: 'Info Message', detail:'Message Content', life: undefined});
    }

    onMounted(()=> {
      updateTitle();
      countryService.value.getCountries().then((data: any) => countries.value = data);
      console.log("onMounted: ", countries);
    })

    const countries = ref();
        const countryService = ref(new CountryService());
        const selectedCountry1 = ref();
        const selectedCountry2 = ref();
        const selectedCity = ref();
        const filteredCities = ref();
        const filteredCountries = ref();
        const selectedCountries = ref([]);
        
        const searchCountry = (event: any) => {
            console.log("searchCountry: ")
        };
        const searchCity = (event: any) => {
            console.log("searchCity: ")
        }

    return {
      countries, countryService, selectedCountry1, selectedCountry2, selectedCity, filteredCities, filteredCountries, selectedCountries, searchCountry, searchCity,
      title,
      setTitle,
      updateTitle,
      updateToast
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
