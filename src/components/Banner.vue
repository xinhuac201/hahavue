<template>
  <div>
        <el-carousel height="400px">
            <el-carousel-item v-for="item in img_list" :key="item.id">
                <router-link :to="item.link">
                    <img :src="item.img">
                </router-link>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      img_list: []
    }
  },
  // 这个主要是接口没有写，但是我又是不想看到前端报错
  mounted () {
    this.$axios.get(this.$settings.base_url + '/home/top_banner/').then(item => {
      console.log(item.data)
      this.img_list = item.data.data
    })
  }

}
</script>

<style scoped>
  .el-carousel__item {
        height: 400px;
        min-width: 1200px;
    }

    .el-carousel__item img {
        height: 400px;
        margin-left: calc(50% - 1920px / 2);
    }
</style>
