<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>

    <h1>{{title}}</h1>

    <button @click="setTitle">set new title</button>

    <button @click="updateTitle">Update title from API</button>

    <AutoComplete v-model="selectedCountry" :suggestions="filteredCountriesBasic" @complete="searchCountry($event)" field="name" />

  </div>
</template>

<script lang="ts">
import { useStore, createNamespacedHelpers } from 'vuex';
import { computed, defineComponent, onMounted, ref } from 'vue';
import CountryService from '../services/CountryService';
import {FilterService,FilterMatchMode} from 'primevue/api';
import AutoComplete from 'primevue/autocomplete';

const { mapState, mapActions } = createNamespacedHelpers('Title')
// import store from "../store/index"

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    AutoComplete
  },
  setup(){
    const store = useStore();
    const title = computed(()=> store.state.Title.title);
    const setTitle = () => {
      store.dispatch('Title/setTitle',"New app title");
    }
    const updateTitle = () => {
      store.dispatch("Title/updateTitle")
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
      updateTitle
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
