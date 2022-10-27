<template>
  <!-- 为什么跟我们去旅行 -->
  <div class="container margin-bottom" style="margin-top:40px;">
    <div class="text-center margin-bottom">
      <div class="col-sm-4 col-xs-2" style="border-top:1px dashed #ad0711;margin-top:20px;">
      </div>
      <div class="col-sm-4 col-xs-8">
        <h4 class="brand-red">为什么跟我们去旅行？</h4>
      </div>
      <div class="col-sm-4 col-xs-2" style="border-top:1px dashed #ad0711;margin-top:20px;"></div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12" style="margin-top:10px;">
        <h3><small style="line-height: 1.8;">颠覆传统的奇葩创意旅行公司，为青年小团队旅行呕心沥血十年，85%以上的队员来自朋友推荐，为你带来省心、安全、深入、快乐的精彩旅行体验。</small>
        </h3>
      </div>
      <div id="whyUsContent" class="col-xs-12" style="display: block;">
        <h4 id="whyUsOpenNew" ref='whyUsOpenNew' class="text-muted" style="display: none;" @click="slide($event)"
            v-show="true">
          ......<br><br>
          <a class="icon-open"></a>
        </h4>

        <div id="whyUs" class="carousel slide carousel-fade detail" data-interval="false">
          <ol class="carousel-indicators" style="margin-bottom: 5px;" v-show="this.is_show">
            <li data-target="#whyUs" data-slide-to="0" class="active"></li>
            <li data-target="#whyUs" data-slide-to="1"></li>
            <li data-target="#whyUs" data-slide-to="2"></li>
            <li data-target="#whyUs" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <img src="https://54traveler.com/wp-content/themes/54traveler/images/whyUs1.jpg">
            </div>
            <div class="item">
              <img src="https://54traveler.com/wp-content/themes/54traveler/images/whyUs2.jpg">
            </div>
            <div class="item">
              <img src="https://54traveler.com/wp-content/themes/54traveler/images/whyUs3.jpg">
            </div>
            <div class="item">
              <a href="http://www.54traveler.com/index.php?action=TravelWithUs" target="_blank">
                <img src="https://54traveler.com/wp-content/themes/54traveler/images/whyUs4.jpg">
              </a>
            </div>
          </div>
          <a class="left carousel-control hidden-xs" href="#whyUs" role="button" data-slide="prev"
             v-show="this.is_show">
            <span class="left-arrow" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control hidden-xs" href="#whyUs" role="button" data-slide="next"
             v-show="this.is_show">
            <span class="right-arrow" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhyUs',
  data () {
    return {
      active: true,
      is_show: true
    }
  },
  methods: {
    slide: function (event) {
      const curTarget = event.currentTarget
      const containsCurClass = curTarget.classList.contains('up')
      let nextSibling = curTarget.nextSibling
      this.is_show = !this.is_show
      while (nextSibling.nodeType === 3 && /\s/.test(nextSibling.nodeValue)) {
        nextSibling = nextSibling.nextSibling
      }
      ;
      const detailScrollHeight = nextSibling.scrollHeight
      if (containsCurClass) {
        curTarget.classList.remove('up')
        this.toggleSlide(nextSibling, detailScrollHeight, '500')
      } else {
        curTarget.classList.add('up')
        this.toggleSlide(nextSibling, 0, '500')
      }
    },
    toggleSlide: function (dom, height, time) {
      dom.style.transition = 'height ' + time + 'ms'
      dom.style.height = height + 'px'
    }
  }
}
</script>

<style scoped>
  /* -----------------------
  ** ------ whyUs --------
  */
  #whyUsContent {
    position: relative;
    margin-top: 10px;
    /*display: none; */
  }

  #whyUsContent .left-arrow, #whyUsContent .right-arrow {
    background-image: url(../assets/img/sprites.png);
    background-position: -43px 0;
    width: 35px;
    height: 70px;
    display: block;
    top: 50%;
    position: absolute;
  }

  #whyUsContent .right-arrow {
    background-position: -43px -80px;
  }

  #whyUsContent .carousel-indicators li {
    border-color: #ad0711;
  }

  #whyUsContent .carousel-indicators .active {
    background-color: #ad0711;
  }

  #whyUsContent .carousel-control {
    width: 5%;
  }

  .icon-open {
    background-image: url(../assets/img/sprites.png);
    background-position: 0 -287px;
    width: 27px;
    height: 21px;
    display: inline-block;
  }

  #whyUsClose {
    position: absolute;
    right: 10px;
    display: block;
    /*background-image: url(../assets/img/sprites.png);*/
    background-position: -43px -160px;
    height: 20px;
    width: 20px;
    z-index: 2;
  }

  @media (max-width: 767px) {
    #whyUsContent .carousel-indicators {
      bottom: -10px;
    }

    #whyUsContent {
      padding-top: 20px;
    }
  }

  .container {
    margin-bottom: 50px;
  }

  .carousel img {
    width: 100%;
    height: 100%;
  }

  img {
    border: 0;
  }

  img {
    vertical-align: middle;
  }

  .carousel .carousel-control.left, .carousel .carousel-control.right {
    background: none;
  }
</style>
