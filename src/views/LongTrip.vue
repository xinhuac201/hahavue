<template>
  <div>
    <Header></Header>
    <div>
      <div id="accordion" class="panel-group"
           style="border-radius:2px;z-index:10;width:800px;height:82px;position:absolute;left:50%;top:590px;transform:translate(-50%,-50%)">
        <div class="panel panel-warning" style="border:1px rgba(0,0,0,.12)">
          <div class="panel-heading" style="background-color:#fff;border-color:#fff;height:80px">
            <h4 class="panel-title" style="background-color:#fff"><br>
              <div>
                <div class="goareashow">
                  <div data-parent="#accordion" href="#collapseFour1" data-toggle="collapse"
                       style="cursor:pointer;text-align:center;width:320px;margin-left:20px;hite-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:none">
                    目的地
                  </div>
                  <div data-parent="#accordion" href="#collapseFour1" data-toggle="collapse"
                       style="cursor:pointer;text-align:center;width:360px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden">
                    目的地
                  </div><!----></div>
                <div class="goareahide" style="display:none">
                  <div data-parent="#accordion" href="#collapseFour1" data-toggle="collapse"
                       style="cursor:pointer;text-align:center;width:320px;margin-left:20px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:none">
                    目的地
                  </div>
                  <div data-parent="#accordion" href="#collapseFour1" data-toggle="collapse"
                       style="cursor:pointer;text-align:center;width:360px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden">
                    目的地
                  </div><!----></div>
                <div style="width:18px;color:#b8b8b8;float:left;text-align:center">|</div>
                <div class="goareashow"><!---->
                  <div data-parent="#accordion" href="#collapseFour2" data-toggle="collapse"
                       style="cursor:pointer;text-align:center;width:360px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden">
                    时间&amp;天数
                  </div><!----></div>
                <div class="goareahide" style="display:none"><!---->
                  <div data-parent="#accordion" href="#collapseFour2" data-toggle="collapse"
                       style="cursor:pointer;text-align:center;width:360px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden">
                    时间&amp;天数
                  </div><!----></div>
              </div>
              <br><br>
              <div style="width:360px;float:left;text-align:center"><a data-toggle="collapse" data-parent="#accordion"
                                                                       href="#collapseFour1" style="width:300px"><span
                aria-hidden="true" class="glyphicon glyphicon-chevron-down" style="color:#b8b8b8"></span></a></div>
              <div style="width:390px;float:left;text-align:center"><a data-toggle="collapse" data-parent="#accordion"
                                                                       href="#collapseFour2"><span aria-hidden="true"
                                                                                                   class="glyphicon glyphicon-chevron-down"
                                                                                                   style="color:#b8b8b8"></span></a>
              </div>
            </h4>
          </div>
          <div id="collapseFour1" class="panel-collapse collapse" style="z-index:10">
            <div class="panel-body" style="border-top-color:#fff;border-color:#fff;height:auto">
              <div style="float: left; width: 100%; display: none;"><label class="checkbox checkbox-indent"
                                                                           style="float: left; padding-right: 20px; margin-top: 10px;"><input
                type="checkbox" name="areagpall" class="icon-checkboxbig" value="false"><i class="icon-checkbox"></i>
                西北
              </label><label class="checkbox checkbox-indent"
                             style="float: left; padding-right: 20px; margin-top: 10px;"><input type="checkbox"
                                                                                                name="areagpall"
                                                                                                class="icon-checkboxbig"
                                                                                                value="false"><i
                class="icon-checkbox"></i>
                华东
              </label><label class="checkbox checkbox-indent"
                             style="float: left; padding-right: 20px; margin-top: 10px;"><input type="checkbox"
                                                                                                name="areagpall"
                                                                                                class="icon-checkboxbig"
                                                                                                value="false"><i
                class="icon-checkbox"></i>
                福建
              </label><label class="checkbox checkbox-indent"
                             style="float: left; padding-right: 20px; margin-top: 10px;"><input type="checkbox"
                                                                                                name="areagpall"
                                                                                                class="icon-checkboxbig"
                                                                                                value="false"><i
                class="icon-checkbox"></i>
                广东
              </label><label class="checkbox checkbox-indent"
                             style="float: left; padding-right: 20px; margin-top: 10px;"><input type="checkbox"
                                                                                                name="areagpall"
                                                                                                class="icon-checkboxbig"
                                                                                                value="false"><i
                class="icon-checkbox"></i>
                广西
              </label><label class="checkbox checkbox-indent"
                             style="float: left; padding-right: 20px; margin-top: 10px;"><input type="checkbox"
                                                                                                name="areagpall"
                                                                                                class="icon-checkboxbig"
                                                                                                value="false"><i
                class="icon-checkbox"></i>
                中原
              </label><label class="checkbox checkbox-indent"
                             style="float: left; padding-right: 20px; margin-top: 10px;"><input type="checkbox"
                                                                                                name="areagpall"
                                                                                                class="icon-checkboxbig"
                                                                                                value="false"><i
                class="icon-checkbox"></i>
                内蒙古
              </label><label class="checkbox checkbox-indent"
                             style="float: left; padding-right: 20px; margin-top: 10px;"><input type="checkbox"
                                                                                                name="areagpall"
                                                                                                class="icon-checkboxbig"
                                                                                                value="false"><i
                class="icon-checkbox"></i>
                西南
              </label></div>
              <div style="float: left; width: 100%; display: none;"></div>
              <div style="float: left; width: 100%;"><label class="checkboxbig checkbox-indent"
                                                            style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="西北" style="display: none;">
                <div class="icon-checkboxbig">西北</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="华东" style="display: none;">
                <div class="icon-checkboxbig">华东</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="福建" style="display: none;">
                <div class="icon-checkboxbig">福建</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="广东" style="display: none;">
                <div class="icon-checkboxbig">广东</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="广西" style="display: none;">
                <div class="icon-checkboxbig">广西</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="中原" style="display: none;">
                <div class="icon-checkboxbig">中原</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="内蒙古" style="display: none;">
                <div class="icon-checkboxbig">内蒙古</div>
              </label><label class="checkboxbig checkbox-indent" style="float: left; padding-right: 20px;"><input
                type="checkbox" name="areagp" class="icon-checkboxbig" value="西南" style="display: none;">
                <div class="icon-checkboxbig">西南</div>
              </label></div>
            </div>
            <div style="width:100%;height:70px">
              <div class="icon-checkboxbigout" data-toggle="collapse" data-parent="#accordion" href="#collapseFour1">
                取消
              </div>
              <div class="icon-checkboxbigok" data-toggle="collapse" data-parent="#accordion" href="#collapseFour1">确定
              </div>
            </div>
          </div>
          <div id="collapseFour2" class="panel-collapse collapse">
            <div class="panel-body" style="border-top-color:#fff;border-color:#fff">
              <div style="float: left;"><span style="font-weight:700">时间</span><br><br>
                <div style="float: left; padding-right: 20px;"><label class="checkboxbig checkbox-indent">
                  <div class="icon-checkboxmbigone">2021</div><!----><input type="checkbox" name="areagpm"
                                                                            class="icon-checkboxbig" value="1"
                                                                            style="display: none;">
                  <div class="icon-checkboxbig" style="display: none;">1月</div>
                  <div class="icon-checkboxbig">1月</div>
                </label></div>
                <div style="float: left; padding-right: 20px;"><label class="checkboxbig checkbox-indent"><!----><!----><input
                  type="checkbox" name="areagpm" class="icon-checkboxbig" value="2" style="display: none;">
                  <div class="icon-checkboxbig" style="display: none;">2月</div>
                  <div class="icon-checkboxbig">2月</div>
                </label></div>
                <div style="float: left; padding-right: 20px;"><label class="checkboxbig checkbox-indent"><!----><!----><input
                  type="checkbox" name="areagpm" class="icon-checkboxbig" value="3" style="display: none;">
                  <div class="icon-checkboxbig" style="display: none;">3月</div>
                  <div class="icon-checkboxbig">3月</div>
                </label></div>
                <div style="float: left; padding-right: 20px;"><label class="checkboxbig checkbox-indent"><!----><!----><input
                  type="checkbox" name="areagpm" class="icon-checkboxbig" value="4" style="display: none;">
                  <div class="icon-checkboxbig" style="display: none;">4月</div>
                  <div class="icon-checkboxbig">4月</div>
                </label></div>
              </div>
              <div style="width: 100%; float: left;"><span style="font-weight:700">节日</span><br><br>
                <div style="float: left; padding-right: 20px;"><label class="checkboxbig checkbox-indent"><input
                  type="checkbox" name="areagph" class="icon-checkboxbig" value="春节" style="display: none;">
                  <div class="icon-checkboxbig">春节</div>
                </label></div>
                <div style="float: left; padding-right: 20px;"><label class="checkboxbig checkbox-indent"><input
                  type="checkbox" name="areagph" class="icon-checkboxbig" value="踏青" style="display: none;">
                  <div class="icon-checkboxbig">踏青</div>
                </label></div>
              </div>
              <div style="width: 100%; float: left; display: none;"><span style="font-weight:700">天数</span><br><br>
              </div>
              <div style="width:100%;float:left"><span style="font-weight:700">名额</span><br><br>
                <div style="float:left;padding-right:20px"><label class="checkboxbig checkbox-indent"><input
                  type="checkbox" name="areagph" class="icon-checkboxbig" style="display:none">
                  <div class="icon-checkboxbig">仅看有名额</div>
                </label></div>
              </div>
            </div>
            <div style="width:100%;height:70px">
              <div class="icon-checkboxbigout" data-toggle="collapse" data-parent="#accordion" href="#collapseFour2">
                取消
              </div>
              <div class="icon-checkboxbigok" data-toggle="collapse" data-parent="#accordion" href="#collapseFour2">确定
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
          <div data-v-673ee647="" class="item"><a data-v-673ee647="" target="_blank" style="display: none;">
            <div data-v-673ee647="" onclick="gioBannerClick(this)" bannerid="557" bannername="超周slogan"
                 bannercatalog="SW" class="bannerlistarea"
                 style="background-image: url(http://127.0.0.1:8000/media/banner/category/11_VDR0aBV.jpg); width: 100%; height: 480px;"></div>
          </a><a data-v-673ee647="">
            <div data-v-673ee647="" onclick="gioBannerClick(this)" bannerid="557" bannername="超周slogan"
                 bannercatalog="SW" class="bannerlistarea"
                 style="background-image: url(http://127.0.0.1:8000/media/banner/category/11_VDR0aBV.jpg); width: 100%; height: 480px;"></div>
          </a>
            <div data-v-673ee647="" class="carousel-caption "
                 style="top: 50px; left: 248px; height: 47px; text-align: left; font-size: 36px; color: rgb(255, 255, 255); line-height: 47px;"></div>
          </div>
          <div data-v-673ee647="" class="item active left"><a data-v-673ee647=""
                                                              href="https://assemble.54traveler.com/privateCustomize/order"
                                                              target="_blank">
            <div data-v-673ee647="" onclick="gioBannerClick(this)" bannerid="721" bannername="2020定制团"
                 bannercatalog="SW" class="bannerlistarea"
                 style="background-image: url(http://127.0.0.1:8000/media/banner/category/11_VDR0aBV.jpg); width: 100%; height: 480px;"></div>
          </a><a data-v-673ee647="" style="display: none;">
            <div data-v-673ee647="" onclick="gioBannerClick(this)" bannerid="721" bannername="2020定制团"
                 bannercatalog="SW" class="bannerlistarea"
                 style="background-image: url(http://127.0.0.1:8000/media/banner/category/11_VDR0aBV.jpg); width: 100%; height: 480px;"></div>
          </a>
            <div data-v-673ee647="" class="carousel-caption "
                 style="top: 50px; left: 248px; height: 47px; text-align: left; font-size: 36px; color: rgb(255, 255, 255); line-height: 47px;"></div>
          </div>
          <div data-v-673ee647="" class="item next left"><a data-v-673ee647=""
                                                            href="https://tour.54traveler.com/route/Itinerary/?id=2523&amp;date="
                                                            target="_blank">
            <div data-v-673ee647="" onclick="gioBannerClick(this)" bannerid="709" bannername="朝圣敦煌" bannercatalog="SW"
                 class="bannerlistarea"
                 style="background-image: url(&quot;//we-oss.oss-cn-shanghai.aliyuncs.com/2020/9/MTU5OTYxOTI3NjUzOSVFNiU5QyU5RCVFNSU5QyVBMyVFNiU5NSVBNiVFNyU4NSU4QzEuanBn.jpg&quot;); width: 100%; height: 480px;"></div>
          </a><a data-v-673ee647="" style="display: none;">
            <div data-v-673ee647="" onclick="gioBannerClick(this)" bannerid="709" bannername="朝圣敦煌" bannercatalog="SW"
                 class="bannerlistarea"
                 style="background-image: url(&quot;//we-oss.oss-cn-shanghai.aliyuncs.com/2020/9/MTU5OTYxOTI3NjUzOSVFNiU5QyU5RCVFNSU5QyVBMyVFNiU5NSVBNiVFNyU4NSU4QzEuanBn.jpg&quot;); width: 100%; height: 480px;"></div>
          </a>
            <div data-v-673ee647="" class="carousel-caption "
                 style="top: 50px; left: 248px; height: 47px; text-align: left; font-size: 36px; color: rgb(255, 255, 255); line-height: 47px;"></div>
          </div>
        </div>
        <a href="#myCarousel" data-slide="prev" class="carousel-control left" style="z-index: 1;"
           data-v-673ee647=""><span aria-hidden="true" class="glyphicon glyphicon-chevron-left"
                                    data-v-673ee647=""></span></a><a id="bannergo" href="#myCarousel" data-slide="next"
                                                                     class="carousel-control right" style="z-index: 1;"
                                                                     data-v-673ee647=""><span aria-hidden="true"
                                                                                              class="glyphicon glyphicon-chevron-right"
                                                                                              data-v-673ee647=""></span></a>
      </div>
    </div>
    <div seotitle="稻草人旅行" style="height:auto;background-color:#f5f5f5" data-v-a5d53fc8="">
      <div class="searchtab" style="" data-v-a5d53fc8=""></div>
      <div class="searchtabnodoor" style="height: 90px; display: none;" data-v-a5d53fc8=""></div>
      <div class="seartop" style="" data-v-a5d53fc8="">
        <div data-v-a5d53fc8="" class="topareatxte"><span data-v-a5d53fc8="" class="topareaeline"></span><span
          data-v-a5d53fc8="">&nbsp;&nbsp;&nbsp;&nbsp;正常路线&nbsp;&nbsp;&nbsp;&nbsp;</span><span data-v-a5d53fc8=""
                                                                                              style="display: none;">&nbsp;&nbsp;&nbsp;&nbsp;出发去浪&nbsp;&nbsp;&nbsp;&nbsp;</span><span
          data-v-a5d53fc8="" class="topareaeline"></span></div>
      </div>
<!--      线路部分-->
      <div class="route-list">
      <div data-v-a5d53fc8="" class="rsearchlist">
        <div data-v-a5d53fc8="" class="route-destination" v-for="(route,index) in route_list.slice(0,5)" :key="index">
          <div data-v-a5d53fc8="" class="rslist">
            <div data-v-a5d53fc8="" class="topimg"></div>
<!--            目的地-->
            <div data-v-a5d53fc8="" class="topareatxt" >{{route.destination}}</div>
          </div>
          <div data-v-a5d53fc8="" class="rcontent">
            <div data-v-a5d53fc8="" class="rcontent-content-left"><!---->
              <div data-v-a5d53fc8="" class="rcontent-tabx-c" style="display: none;">superior</div>
              <div data-v-a5d53fc8="" class="rcontent-tabx-red" style="display: none;"></div>
              <div data-v-a5d53fc8="" class="rcontent-tabx-red-a" style="display: none;"></div>
<!--              <div data-v-a5d53fc8="">-->
<!--                <div data-v-a5d53fc8="" class="rcontent-tabx-c">升级Plus</div>-->
<!--                <div data-v-a5d53fc8="" class="rcontent-tabx-red"></div>-->
<!--                <div data-v-a5d53fc8="" class="rcontent-tabx-red-a"></div>-->
<!--              </div>-->
<!--              图片-->
              <div data-v-a5d53fc8="" class="rcontent-img" style="cursor: pointer;"><router-link :to="'/itinerary/detail/'+route.routeId"><a data-v-a5d53fc8=""
                                                                                       href="/"
                                                                                       target="_blank"
                                                                                       onclick="gioGetTitle(this)"
                                                                                       cstitle="route.heading"
                                                                                       csid="8515" cscatalog="SW"
                                                                                       style="text-decoration: none; color: rgb(51, 51, 51);"><img
                data-v-a5d53fc8=""
                :src="route.cover"
                lazy="loaded" style="width: 405px; height: 270px;"></a></router-link>
              </div>
            </div>
            <div data-v-a5d53fc8="" id="8515" class="rcontent-content">
              <div data-v-a5d53fc8="" class="rc-titlea">
                <div data-v-a5d53fc8="" class="rdate">
                  <div data-v-a5d53fc8="" class="ng-binging">{{route.duration}}</div>
                  <div data-v-a5d53fc8="" class="ng-nday">DAY</div>
                </div>
                <div data-v-a5d53fc8="" class="rdatetop"></div>
                <div data-v-a5d53fc8="" class="rdatetopb"></div>
              </div>
              <div data-v-a5d53fc8="" class="rc-title">
                <div data-v-a5d53fc8=""
                     style="float: left; color: rgb(51, 51, 51); font-weight: bold; font-size: 30px;"><router-link :to="'/itinerary/detail/'+route.routeId"><a
                  data-v-a5d53fc8="" href="" target="_blank"
                  onclick="gioGetTitle(this)" cstitle="route.heading" csid="8515" cscatalog="SW" class="heading-css">
                  {{route.heading}}
                </a></router-link></div>
              </div>
              <div data-v-a5d53fc8="" class="rc-mtitle" style="display: none;"></div>
              <div data-v-a5d53fc8="" class="rc-mtitle">{{route.title}}</div>
              <div data-v-a5d53fc8="" style="width: 700px; height: auto; float: left;">
                <div data-v-a5d53fc8="" class="rc-titlea" style="margin-top: 10px;">
                  <div data-v-a5d53fc8="" class="rc-mtitletu"></div>
                </div>
                <div data-v-a5d53fc8="" class="rc-title" style="width: 600px; margin-top: 10px; height: auto;">
                  <div data-v-a5d53fc8="" class="rc-ablist">
                    <div data-v-a5d53fc8="" style="width: auto; float: left;">
                      <div data-v-a5d53fc8="" class="routelistli" style="display: none;"></div>
                      <div data-v-a5d53fc8="" class="routelistimg" style="margin:0 8px" v-for="(site,index) in route.overview_list" :key="index+1">&nbsp;&nbsp;{{site}}&nbsp;&nbsp;</div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-a5d53fc8="" class="rc-title">
                <div data-v-a5d53fc8="" class="rc-contact">
                  <div data-v-a5d53fc8="" class="yha"></div>
                  <div data-v-a5d53fc8="" class="rc-contact-m"><span data-v-a5d53fc8="">
                  {{route.desc}}
                </span><!----><span data-v-a5d53fc8="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                    data-v-a5d53fc8="" class="yhb"></span></div>
                </div>
              </div>
              <div data-v-a5d53fc8="" class="rc-mtitledown">
                <div data-v-a5d53fc8="" class="lookgodate">出队日期</div>
                <div data-v-a5d53fc8="" class="lookgodate" style="display: none;">出队日期</div>
                <div data-v-a5d53fc8="" class="lookgodatedawn"></div>
                <div data-v-a5d53fc8="" class="lookgodateup" style="display: none;"></div>
                <div data-v-a5d53fc8="" class="lookgodateHoday"></div>
                <div data-v-a5d53fc8="" class="rpice">
                  <div data-v-a5d53fc8="" style="float: right; color: rgb(175, 1, 2); font-size: 24px;">￥ {{route.price}}<span
                    data-v-a5d53fc8="" style="color: rgb(192, 192, 192); font-size: 14px;">起</span></div>
                  <div data-v-a5d53fc8="" style="float: right; width: 20px; height: 26px;"></div>
                </div>
              </div>
              <div data-v-a5d53fc8="" class="rc-mtitletuinfo" style="display: none;"><img data-v-a5d53fc8=""
                                                                                          src="//we-oss.oss-cn-shanghai.aliyuncs.com/2020/7/MTU5NDIwMDU5MDI2MiVFOCVCNiU4NSVFNSU5MSVBOCVFNiVCNSVCNyVFNSU4RCU5NyVFOCVCNyVBRiVFNyVCQSVCRiVFNSU5QyVCMCVFNSU5QiVCRS5qcGc=.jpg?x-oss-process=image/resize,w_846,h_476"
                                                                                          class="rc-mtitletuinfo-map">
              </div>
            </div>
          </div><!----></div>
      </div>
      </div>
<!--      空白部分-->
      <div class="seartop" style="height:40px" data-v-a5d53fc8=""></div>
      <div
        style="width: 1140px; margin: 0em auto 2em; text-align: center; padding: 10px; color: rgb(153, 153, 153); border: 1px solid rgb(153, 153, 153); display: none;"
        data-v-a5d53fc8="">
        以上线路是稻稻在了解了全国各地的政策后筛选出的。由稻草人旅行与当地旅行社合作，路线行程和体验均按照稻草人标准展开。报名成功后，稻稻会安排小伙伴与当地旅行社签订合同。
      </div>
      <div style="width:100%;height:2em;display:none" data-v-a5d53fc8=""></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'Travel',
  data () {
    return {
      route_list: [] // 线路列表
    }
  },
  created () {
    this.get_route()
  },
  components: {
    Header,
    Footer
  },
  methods: {
    get_route () {
      // 获取线路信息
      this.$axios.get(`${this.$settings.base_url}/travel/travel_route/`).then(response => {
        // console.log(response.data.data)
        this.route_list = response.data.data
      }).catch(() => {
        this.$message({
          message: '获取旅游线路信息有误,请联系客服工作人员'
        })
      })
    }
  }
}
</script>

<style scoped src="../assets/css/long.css">
</style>
