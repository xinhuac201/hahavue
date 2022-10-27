<template>
  <div class="home">
    <Header></Header>
    <Banner></Banner>
    <WhyUs></WhyUs>
    <Recommend></Recommend>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import WhyUs from '../components/WhyUs'
import Recommend from '../components/Recommend'
export default {
  name: 'Home',
  data () {
    return {
    }
  },

  components: {
    Header,
    Footer,
    Banner,
    WhyUs,
    Recommend
  }
}
</script>
<style>

</style>
