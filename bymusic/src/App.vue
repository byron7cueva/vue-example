<template lang="pug">
#app
  img(src='./assets/logo.png')
  h1 ByMusic
  select(v-model="selectedCountry")
    option(v-for="country in countries" v-bind:value="country.value") {{ country.name }}
  spinner(v-show="loading")
  ul
    artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
</template>

<script>
import api from './api';
import Artist from './components/Artist';
import Spinner from './components/Spinner';

export default {
  name: 'app',
  components: {
    Artist,
    Spinner
  },
  data () {
    return {
      artists: [],
      countries: [
        {name: 'Ecuador', value: 'ecuador'},
        {name: 'España', value: 'spain'},
        {name: 'Colombia', value: 'colombia'},
        {name: 'Argentina', value: 'argentina'}
      ],
      selectedCountry: 'ecuador',
      loading: false
    }
  },
  mounted() {
    this.refreshArtist();
  },
  methods: {
    refreshArtist() {
      this.loading = true
      api(this.selectedCountry).then(artists => {
        this.loading = false;
        this.artists = artists;
    })
    }
  },
  watch: {
    selectedCountry()  {
      this.refreshArtist();
    }
  }
}
</script>

<style lang="stylus">
#app 
	font-family 'Avenir', Helvetica, Arial, sans-serif
	-webkit-font-smoothing antialiased
	-moz-osx-font-smoothing grayscale
	text-align center
	color #2c3e50
	margin-top 60px
h1, h2 
	font-weight normal
ul 
	list-style-type none
	padding 0
li 
	display inline-block
	margin 0 10px
a 
	color #42b983
</style>
