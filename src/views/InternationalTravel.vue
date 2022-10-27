<template>
  <div>
    <Header></Header>
    <div>
      <div id="accordion" class="panel-group"
           style="border-radius:2px;z-index:10;width:800px;height:82px;position:absolute;left:50%;top:590px;transform:translate(-50%,-50%)">
        <div class="panel panel-warning" style="border:1px rgba(0,0,0,.12)">
          <div id="collapseFour1" class="panel-collapse collapse" style="z-index: 10; height: 0px;"
               aria-expanded="false">
            <div class="panel-body" style="border-top-color:#fff;border-color:#fff;height:auto">
              <div style="float:left;width:100%"><label class="checkbox checkbox-indent"
                                                        style="float: left; padding-right: 20px; margin-top: 10px;"><input
                type="checkbox" name="areagpall" class="icon-checkboxbig" value="false"><i class="icon-checkbox"></i>
                亚洲
              </label><label class="checkbox checkbox-indent"
                             style="float: left; padding-right: 20px; margin-top: 10px;"><input type="checkbox"
                                                                                                name="areagpall"
                                                                                                class="icon-checkboxbig"
                                                                                                value="false"><i
                class="icon-checkbox"></i>
                中东
              </label><label class="checkbox checkbox-indent"
                             style="float: left; padding-right: 20px; margin-top: 10px;"><input type="checkbox"
                                                                                                name="areagpall"
                                                                                                class="icon-checkboxbig"
                                                                                                value="false"><i
                class="icon-checkbox"></i>
                欧洲
              </label><label class="checkbox checkbox-indent"
                             style="float: left; padding-right: 20px; margin-top: 10px;"><input type="checkbox"
                                                                                                name="areagpall"
                                                                                                class="icon-checkboxbig"
                                                                                                value="false"><i
                class="icon-checkbox"></i>
                非洲
              </label><label class="checkbox checkbox-indent"
                             style="float: left; padding-right: 20px; margin-top: 10px;"><input type="checkbox"
                                                                                                name="areagpall"
                                                                                                class="icon-checkboxbig"
                                                                                                value="false"><i
                class="icon-checkbox"></i>
                大洋洲
              </label><label class="checkbox checkbox-indent"
                             style="float: left; padding-right: 20px; margin-top: 10px;"><input type="checkbox"
                                                                                                name="areagpall"
                                                                                                class="icon-checkboxbig"
                                                                                                value="false"><i
                class="icon-checkbox"></i>
                美洲
              </label></div>
              <div style="float:left;width:100%"><label class="checkboxbig checkbox-indent"
                                                        style="float: left; padding-right: 20px;"><input type="checkbox"
                                                                                                         name="areagp"
                                                                                                         class="icon-checkboxbig"
                                                                                                         value="尼泊尔"
                                                                                                         style="display: none;">
                <div class="icon-checkboxbig">尼泊尔</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="缅甸" style="display: none;">
                <div class="icon-checkboxbig">缅甸</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="约旦" style="display: none;">
                <div class="icon-checkboxbig">约旦</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="西班牙" style="display: none;">
                <div class="icon-checkboxbig">西班牙</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="葡萄牙" style="display: none;">
                <div class="icon-checkboxbig">葡萄牙</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="新西兰" style="display: none;">
                <div class="icon-checkboxbig">新西兰</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="斯里兰卡" style="display: none;">
                <div class="icon-checkboxbig">斯里兰卡</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="冰岛" style="display: none;">
                <div class="icon-checkboxbig">冰岛</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="伊朗" style="display: none;">
                <div class="icon-checkboxbig">伊朗</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="印度" style="display: none;">
                <div class="icon-checkboxbig">印度</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="以色列" style="display: none;">
                <div class="icon-checkboxbig">以色列</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="俄罗斯" style="display: none;">
                <div class="icon-checkboxbig">俄罗斯</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="贝加尔湖" style="display: none;">
                <div class="icon-checkboxbig">贝加尔湖</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="格鲁吉亚" style="display: none;">
                <div class="icon-checkboxbig">格鲁吉亚</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="阿塞拜疆" style="display: none;">
                <div class="icon-checkboxbig">阿塞拜疆</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="外高加索" style="display: none;">
                <div class="icon-checkboxbig">外高加索</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="摩洛哥" style="display: none;">
                <div class="icon-checkboxbig">摩洛哥</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="墨西哥" style="display: none;">
                <div class="icon-checkboxbig">墨西哥</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="土耳其" style="display: none;">
                <div class="icon-checkboxbig">土耳其</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="日本" style="display: none;">
                <div class="icon-checkboxbig">日本</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="塞尔维亚" style="display: none;">
                <div class="icon-checkboxbig">塞尔维亚</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="黑山" style="display: none;">
                <div class="icon-checkboxbig">黑山</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="波黑" style="display: none;">
                <div class="icon-checkboxbig">波黑</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="东欧巴尔干" style="display: none;">
                <div class="icon-checkboxbig">东欧巴尔干</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="东非" style="display: none;">
                <div class="icon-checkboxbig">东非</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="坦桑尼亚" style="display: none;">
                <div class="icon-checkboxbig">坦桑尼亚</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="乌兹别克斯坦" style="display: none;">
                <div class="icon-checkboxbig">乌兹别克斯坦</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="土库曼斯坦" style="display: none;">
                <div class="icon-checkboxbig">土库曼斯坦</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="中亚" style="display: none;">
                <div class="icon-checkboxbig">中亚</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="埃及" style="display: none;">
                <div class="icon-checkboxbig">埃及</div>
              </label></div>
              <div style="float:left;width:100%;display:none"><label class="checkboxbig checkbox-indent"
                                                                     style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="亚洲" style="display: none;">
                <div class="icon-checkboxbig">亚洲</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="中东" style="display: none;">
                <div class="icon-checkboxbig">中东</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="欧洲" style="display: none;">
                <div class="icon-checkboxbig">欧洲</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="非洲" style="display: none;">
                <div class="icon-checkboxbig">非洲</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="大洋洲" style="display: none;">
                <div class="icon-checkboxbig">大洋洲</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="美洲" style="display: none;">
                <div class="icon-checkboxbig">美洲</div>
              </label></div>
            </div>
            <div style="width:100%;height:70px">
              <div class="icon-checkboxbigout collapsed" data-toggle="collapse" data-parent="#accordion"
                   href="#collapseFour1" aria-expanded="false">取消
              </div>
              <div class="icon-checkboxbigok collapsed" data-toggle="collapse" data-parent="#accordion"
                   href="#collapseFour1" aria-expanded="false">确定
              </div>
            </div>
          </div>
          <div id="collapseFour2" class="panel-collapse collapse" aria-expanded="false">
            <div class="panel-body" style="border-top-color:#fff;border-color:#fff">
              <div style="with:100%;float:left;display:none"><span style="font-weight:700">时间</span><br><br></div>
              <div style="width:100%;float:left;display:none"><span style="font-weight:700">节日</span><br><br></div>
              <div style="width:100%;float:left"><span style="font-weight:700">天数</span><br><br>
                <div style="float: left; padding-right: 20px;"><label class="checkboxbig checkbox-indent"><input
                  type="radio" name="areagph" class="icon-checkboxbig" value="9天以内" style="display: none;">
                  <div class="icon-checkboxbig">9天以内</div>
                </label></div>
                <div style="float: left; padding-right: 20px;"><label class="checkboxbig checkbox-indent"><input
                  type="radio" name="areagph" class="icon-checkboxbig" value="10至15天" style="display: none;">
                  <div class="icon-checkboxbig">10至15天</div>
                </label></div>
                <div style="float: left; padding-right: 20px;"><label class="checkboxbig checkbox-indent"><input
                  type="radio" name="areagph" class="icon-checkboxbig" value="16天以上" style="display: none;">
                  <div class="icon-checkboxbig">16天以上</div>
                </label></div>
              </div>
              <div style="width:100%;float:left"><span style="font-weight:700">名额</span><br><br>
                <div style="float:left;padding-right:20px"><label class="checkboxbig checkbox-indent"><input
                  type="checkbox" name="areagph" class="icon-checkboxbig" style="display:none">
                  <div class="icon-checkboxbig">仅看有名额</div>
                </label></div>
              </div>
            </div>
            <div style="width:100%;height:70px">
              <div class="icon-checkboxbigout collapsed" data-toggle="collapse" data-parent="#accordion"
                   href="#collapseFour2" aria-expanded="false">取消
              </div>
              <div class="icon-checkboxbigok collapsed" data-toggle="collapse" data-parent="#accordion"
                   href="#collapseFour2" aria-expanded="false">确定
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="background-color:#f5f5f5" data-v-673ee647="">
      <div id="myCarousel" data-ride="carousel" class="carousel slide"
           style="width:100%;height:480px;z-index:2;max-width:1920px;margin:0 auto" data-v-673ee647="">
        <div class="carousel-inner" data-v-673ee647="">
          <div data-v-673ee647="" class="item  active"><a data-v-673ee647="" target="_blank">
            <div data-v-673ee647="" onclick="gioBannerClick(this)" bannerid="631" bannername="定制团上线" bannercatalog="E"
                 class="bannerlistarea"
                 style="background-image: url(&quot;//we-oss.oss-cn-shanghai.aliyuncs.com/2020/5/MTU4OTAyMjM1Nzk3MC0lRTQlQjglQkIlRTclQUIlOTklRTQlQkElOEMlRTclQkElQTclRTklQTElQjUlRTklOUQlQTIlRTklQTElQjYlRTklODMlQThiYW5uZXIlMjBQQyVFNyU4OSU4OC5qcGc=.jpg&quot;); width: 100%; height: 480px;"></div>
          </a><a data-v-673ee647="" style="display: none;">
            <div data-v-673ee647="" onclick="gioBannerClick(this)" bannerid="631" bannername="定制团上线" bannercatalog="E"
                 class="bannerlistarea"
                 style="background-image: url(&quot;//we-oss.oss-cn-shanghai.aliyuncs.com/2020/5/MTU4OTAyMjM1Nzk3MC0lRTQlQjglQkIlRTclQUIlOTklRTQlQkElOEMlRTclQkElQTclRTklQTElQjUlRTklOUQlQTIlRTklQTElQjYlRTklODMlQThiYW5uZXIlMjBQQyVFNyU4OSU4OC5qcGc=.jpg&quot;); width: 100%; height: 480px;"></div>
          </a>
            <div data-v-673ee647="" class="carousel-caption "
                 style="top: 50px; left: 248px; height: 47px; text-align: left; font-size: 36px; color: rgb(255, 255, 255); line-height: 47px;"></div>
          </div>
        </div>
        <a href="#myCarousel" data-slide="prev" class="carousel-control left" style="z-index:1;display:none"
           data-v-673ee647=""><span aria-hidden="true" class="glyphicon glyphicon-chevron-left"
                                    data-v-673ee647=""></span></a><a id="bannergo" href="#myCarousel" data-slide="next"
                                                                     class="carousel-control right"
                                                                     style="z-index:1;display:none"
                                                                     data-v-673ee647=""><span aria-hidden="true"
                                                                                              class="glyphicon glyphicon-chevron-right"
                                                                                              data-v-673ee647=""></span></a>
      </div>
    </div>
    <div style="text-align: center;border-bottom: 300px;background-color: transparent;">
      <br>
      <br>
      <br>
      <h1>因疫情原因,国际线暂时下架,敬请谅解</h1>
      <br>
      <br>
      <br>
    </div>
    <div seotitle="稻草人旅行" style="height:auto;background-color:#f5f5f5" data-v-a5d53fc8="">
      <div data-v-a5d53fc8="" name="anydoor" class="anydoor">
        <div data-v-a5d53fc8="" class="anydoorincenter"></div>
      </div>
      <div class="searchtab" style="" data-v-a5d53fc8=""></div>
      <div class="searchtabnodoor" style="height: 90px; display: none;" data-v-a5d53fc8=""></div><!---->
      <div class="seartop" style="display:none" data-v-a5d53fc8="">
        <div class="topareatxte" data-v-a5d53fc8=""><span class="topareaeline" data-v-a5d53fc8=""></span><span
          data-v-a5d53fc8="">&nbsp;&nbsp;&nbsp;&nbsp;预订路线&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="topareaeline"
                                                                                              data-v-a5d53fc8=""></span>
        </div>
      </div>
      <div class="seartop" style="display:none" data-v-a5d53fc8="">
        <div class="topareatxte" data-v-a5d53fc8=""><span class="topareaeline" data-v-a5d53fc8=""></span><span
          data-v-a5d53fc8="">&nbsp;&nbsp;&nbsp;&nbsp;预约路线&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="topareaeline"
                                                                                              data-v-a5d53fc8=""></span>
        </div>
      </div>
      <div class="seartop" style="height:40px" data-v-a5d53fc8=""></div>
      <div
        style="width: 1140px; margin: 0em auto 2em; text-align: center; padding: 10px; color: rgb(153, 153, 153); border: 1px solid rgb(153, 153, 153); display: none;"
        data-v-a5d53fc8="">
        以上线路是稻稻在了解了全国各地的政策后筛选出的。由稻草人旅行与当地旅行社合作，路线行程和体验均按照稻草人标准展开。报名成功后，稻稻会安排小伙伴与当地旅行社签订合同。
      </div>
      <div style="width:100%;height:2em;display:none" data-v-a5d53fc8=""></div>
      <div id="fixed-container" class="text-center hidden-sm hidden-xs" data-v-a5d53fc8="">
        <div id="backToTop" class="fixed-item" style="cursor: pointer; display: none;" data-v-a5d53fc8=""><a
          data-v-a5d53fc8=""></a></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'Course',
  data () {
    return {
      currentDate: new Date()
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped src="../assets/css/international.css">
</style>
