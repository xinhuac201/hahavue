<template>
  <!-- 首选 -->
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 margin-bottom">
          <div id="slide-etravel" class="carousel slide index-slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <div class="hidden-xs hidden-sm">
                  <router-link to="/itinerary"><a target="_blank" class="thumb"
                     href=""><img
                    src="http://127.0.0.1:8000/media/banner/2020090703565557.jpg"
                    alt="错峰去云南，人少景美美滋滋啊~"/></a></router-link></div>
                <div class="visible-xs visible-sm">
                  <img src="http://127.0.0.1:8000/media/banner/2020090703565557.jpg"
                       alt="错峰去云南，人少景美美滋滋啊~"/></div>
                <div class="trip-description">
                  <span class="redbar"></span>
                  <router-link to="/itinerary"><a target="_blank"><h5
                    style="height: 16px;line-height: 16px;overflow: hidden;">云南是去不腻的，这辈子都不会的~</h5>
                    <h4>错峰去云南，人少景美美滋滋啊~</h4>
                  </a></router-link>
                </div>
              </div>
<!--              <div class="item">-->
<!--                <div class="hidden-xs hidden-sm">-->
<!--                  <a target="_blank" class="thumb"-->
<!--                     href="https://tour.54traveler.com/route/Itinerary/?id=8515&date="><img-->
<!--                    src="https://alicontent.54traveler.com/wp-content/uploads/2020/09/2020090703552650.jpg"-->
<!--                    alt="小众奢享MAX的海南！不止有三亚哦！"/></a></div>-->
<!--                <div class="visible-xs visible-sm">-->
<!--                  <img src="https://alicontent.54traveler.com/wp-content/uploads/2020/09/2020090703552650.jpg"-->
<!--                       alt="小众奢享MAX的海南！不止有三亚哦！"/></div>-->
<!--                <div class="trip-description">-->
<!--                  <span class="redbar"></span>-->
<!--                  <a href="https://tour.54traveler.com/route/Itinerary/?id=8515&date=" target="_blank"><h5-->
<!--                    style="height: 16px;line-height: 16px;overflow: hidden;">酒店控福利！三亚之外的小众逼格假期~</h5>-->
<!--                    <h4>小众奢享MAX的海南！不止有三亚哦！</h4>-->
<!--                  </a>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="item">-->
<!--                <div class="hidden-xs hidden-sm">-->
<!--                  <a target="_blank" class="thumb"-->
<!--                     href="https://tour.54traveler.com/route/Itinerary/?id=2523&date="><img-->
<!--                    src="https://alicontent.54traveler.com/wp-content/uploads/2020/09/2020090903305077.jpg"-->
<!--                    alt="联合敦煌研究院，深度研学朝圣之旅！"/></a></div>-->
<!--                <div class="visible-xs visible-sm">-->
<!--                  <img src="https://alicontent.54traveler.com/wp-content/uploads/2020/09/2020090903305077.jpg"-->
<!--                       alt="联合敦煌研究院，深度研学朝圣之旅！"/></div>-->
<!--                <div class="trip-description">-->
<!--                  <span class="redbar"></span>-->
<!--                  <a href="https://tour.54traveler.com/route/Itinerary/?id=2523&date=" target="_blank"><h5-->
<!--                    style="height: 16px;line-height: 16px;overflow: hidden;">你还没爱上敦煌？是因为你还没去过敦煌。</h5>-->
<!--                    <h4>联合敦煌研究院，深度研学朝圣之旅！</h4>-->
<!--                  </a>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="item">-->
<!--                <div class="hidden-xs hidden-sm">-->
<!--                  <a target="_blank" class="thumb" href="https://we.54traveler.com/"><img-->
<!--                    src="https://alicontent.54traveler.com/wp-content/uploads/2020/06/2020062402285422.jpg"-->
<!--                    alt="N种玩法&满满福利的【城市玩家】上线了！"/></a></div>-->
<!--                <div class="visible-xs visible-sm">-->
<!--                  <img src="https://alicontent.54traveler.com/wp-content/uploads/2020/06/2020062402285422.jpg"-->
<!--                       alt="N种玩法&满满福利的【城市玩家】上线了！"/></div>-->
<!--                <div class="trip-description">-->
<!--                  <span class="redbar"></span>-->
<!--                  <a href="https://we.54traveler.com/" target="_blank"><h5-->
<!--                    style="height: 16px;line-height: 16px;overflow: hidden;">承包你的周末！玩一年不带重样的！</h5>-->
<!--                    <h4>N种玩法&#038;满满福利的【城市玩家】上线了！</h4>-->
<!--                  </a>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="item">-->
<!--                <div class="hidden-xs hidden-sm">-->
<!--                  <a target="_blank" class="thumb" href="https://assemble.54traveler.com/privateCustomize/order"><img-->
<!--                    src="https://alicontent.54traveler.com/wp-content/uploads/2020/05/2020121603491674.jpg"-->
<!--                    alt="稻稻私家定制团上线啦！"/></a></div>-->
<!--                <div class="visible-xs visible-sm">-->
<!--                  <img src="https://alicontent.54traveler.com/wp-content/uploads/2020/05/2020121603491674.jpg"-->
<!--                       alt="稻稻私家定制团上线啦！"/></div>-->
<!--                <div class="trip-description">-->
<!--                  <span class="redbar"></span>-->
<!--                  <a href="https://assemble.54traveler.com/privateCustomize/order" target="_blank"><h5-->
<!--                    style="height: 16px;line-height: 16px;overflow: hidden;">放宽年龄+灵活成团+时间随心！</h5>-->
<!--                    <h4>稻稻私家定制团上线啦！</h4>-->
<!--                  </a>-->
<!--                </div>-->
<!--              </div>-->
            </div>
            <span class="shouxuan-tab">首选</span>
            <a class="left carousel-control" href="#slide-etravel" role="button" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#slide-etravel" role="button" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container margin-bottom">
      <div class="">

        <div class="col-sm-6 col-xs-12 margin-bottom">
          <div id="etrip" class="carousel slide index-slide carousel-fade" data-interval="false">
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <div class="hidden-xs hidden-sm">
                  <a target="_blank" class="thumb" href="http://tour.54traveler.com/route/Itinerary/?id=153&date=">
                    <img
                      src="http://127.0.0.1:8000/media/banner/tag/2016051203513052.jpg"
                      alt="约旦盛宴"/>
                  </a>
                </div>
                <div class="visible-xs visible-sm">
                  <img src="http://127.0.0.1:8000/media/banner/tag/2016051203513052.jpg"
                       alt="约旦盛宴"/></div>
                <div class="trip-description">
                  <span class="redbar"></span>
                  <a href="http://tour.54traveler.com/route/Itinerary/?id=153&date=" target="_blank"><h5
                    style="line-height: 16px;height: 16px;overflow: hidden;">【明星路线】来“火星”，玩死海~</h5>
                  </a>
                  <h4><a href="http://tour.54traveler.com/route/Itinerary/?id=153&#038;date=" target="_blank">约旦盛宴</a>
                    <router-link to="/international-travel"><small> > 更多国际旅行</small></router-link>
                  </h4>
                </div>
              </div>
              <div class="item">
                <div class="hidden-xs hidden-sm">
                  <a target="_blank" class="thumb" href="http://tour.54traveler.com/route/Itinerary/?id=368&date="><img
                    src="http://127.0.0.1:8000/media/banner/tag/2018032306171510.jpg"
                    alt="摩洛哥掠影"/></a>
                </div>
                <div class="visible-xs visible-sm">
                  <img src="http://127.0.0.1:8000/media/banner/tag/2018032306171510.jpg"
                       alt="摩洛哥掠影"/></div>
                <div class="trip-description">
                  <span class="redbar"></span>
                  <a href="http://tour.54traveler.com/route/Itinerary/?id=368&date=" target="_blank"><h5
                    style="line-height: 16px;height: 16px;overflow: hidden;">【年度主打】由麦地那与撒哈拉编织的北非梦</h5>
                  </a>
                  <h4><a href="http://tour.54traveler.com/route/Itinerary/?id=368&#038;date="
                         target="_blank">摩洛哥掠影</a>
                    <router-link to="/international-travel"><small> > 更多国际旅行</small></router-link>
                  </h4>
                </div>
              </div>
            </div>
            <strong class="trip-tab">国际旅行</strong> <a class="left carousel-control" href="#etrip" role="button"
                                                      data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"
                                                                               aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
            <a class="right carousel-control" href="#etrip" role="button" data-slide="next"> <span
              class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div class="col-sm-6 col-xs-12 margin-bottom">
          <div id="ltrip" class="carousel slide index-slide carousel-fade" data-interval="false">
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <div class="hidden-xs hidden-sm">
                  <a target="_blank" class="thumb"
                     href="http://www.54traveler.com/index.php?action=expeditionDetail&id=4541"><img
                    src="https://alicontent.54traveler.com/wp-content/uploads/2019/09/2019091707571947.jpg"
                    alt="西藏江南冬·升级版"/></a></div>
                <div class="visible-xs visible-sm">
                  <img src="https://alicontent.54traveler.com/wp-content/uploads/2019/09/2019091707571947.jpg"
                       alt="西藏江南冬·升级版"/></div>
                <div class="trip-description">
                  <span class="redbar"></span>
                  <a href="http://www.54traveler.com/index.php?action=expeditionDetail&id=4541" target="_blank"><h5
                    style="line-height: 16px;height: 16px;overflow: hidden;">住宿全线升级！雪域高原享受暖阳</h5>
                  </a>
                  <h4><a href="http://www.54traveler.com/index.php?action=expeditionDetail&#038;id=4541"
                         target="_blank">西藏江南冬·升级版</a>
                    <router-link to="/long-trip"><small> > 更多长途旅行</small></router-link></h4>
                </div>
              </div>
              <div class="item">
                <div class="hidden-xs hidden-sm">
                  <a target="_blank" class="thumb"
                     href="http://www.54traveler.com/index.php?action=expeditionDetail&id=5600"><img
                    src="https://alicontent.54traveler.com/wp-content/uploads/2018/08/2018083008334842.jpg"
                    alt="【私家体验MAX】陌上花开"/></a></div>
                <div class="visible-xs visible-sm">
                  <img src="https://alicontent.54traveler.com/wp-content/uploads/2018/08/2018083008334842.jpg"
                       alt="【私家体验MAX】陌上花开"/></div>
                <div class="trip-description">
                  <span class="redbar"></span>
                  <a href="http://www.54traveler.com/index.php?action=expeditionDetail&id=5600" target="_blank"><h5
                    style="line-height: 16px;height: 16px;overflow: hidden;">2020年全面升级，梦想之地的浪漫旅程！</h5>
                  </a>
                  <h4><a href="http://www.54traveler.com/index.php?action=expeditionDetail&#038;id=5600"
                         target="_blank">【私家体验MAX】陌上花开</a></h4>
                </div>
              </div>
              <div class="item">
                <div class="hidden-xs hidden-sm">
                  <a target="_blank" class="thumb"
                     href="http://www.54traveler.com/index.php?action=expeditionDetail&id=4723"><img
                    src="https://alicontent.54traveler.com/wp-content/uploads/2020/09/2020090205534875.jpg"
                    alt="【私家体验MAX】寻找香格里拉"/></a></div>
                <div class="visible-xs visible-sm">
                  <img src="https://alicontent.54traveler.com/wp-content/uploads/2020/09/2020090205534875.jpg"
                       alt="【私家体验MAX】寻找香格里拉"/></div>
                <div class="trip-description">
                  <span class="redbar"></span>
                  <a href="http://www.54traveler.com/index.php?action=expeditionDetail&id=4723" target="_blank"><h5
                    style="line-height: 16px;height: 16px;overflow: hidden;">好住宿、短车程，带你一起解密“香巴拉”！</h5>
                  </a>
                  <h4><a href="http://www.54traveler.com/index.php?action=expeditionDetail&#038;id=4723"
                         target="_blank">【私家体验MAX】寻找香格里拉</a><router-link to="/long-trip"><small> > 更多长途旅行</small></router-link></h4>
                </div>
              </div>
              <div class="item">
                <div class="hidden-xs hidden-sm">
                  <a target="_blank" class="thumb"
                     href="http://www.54traveler.com/index.php?action=expeditionDetail&id=5432"><img
                    src="https://alicontent.54traveler.com/wp-content/uploads/2020/06/2020062303261417.jpg"
                    alt="贵州贵州！全景之旅"/></a></div>
                <div class="visible-xs visible-sm">
                  <img src="https://alicontent.54traveler.com/wp-content/uploads/2020/06/2020062303261417.jpg"
                       alt="贵州贵州！全景之旅"/></div>
                <div class="trip-description">
                  <span class="redbar"></span>
                  <a href="http://www.54traveler.com/index.php?action=expeditionDetail&id=5432" target="_blank"><h5
                    style="line-height: 16px;height: 16px;overflow: hidden;">【全新路线】从山水到人文，酣畅淋漓的贵州全景</h5>
                  </a>
                  <h4><a href="http://www.54traveler.com/index.php?action=expeditionDetail&#038;id=5432"
                         target="_blank">贵州贵州！全景之旅</a>
                    <router-link to="/long-trip"><small> > 更多长途旅行</small></router-link>
                  </h4>
                </div>
              </div>
              <div class="item">
                <div class="hidden-xs hidden-sm">
                  <a target="_blank" class="thumb"
                     href="http://www.54traveler.com/index.php?action=expeditionDetail&id=4641"><img
                    src="https://alicontent.54traveler.com/wp-content/uploads/2020/09/2020090206255485.jpg"
                    alt="稻城亚丁·经典版"/></a></div>
                <div class="visible-xs visible-sm">
                  <img src="https://alicontent.54traveler.com/wp-content/uploads/2020/09/2020090206255485.jpg"
                       alt="稻城亚丁·经典版"/></div>
                <div class="trip-description">
                  <span class="redbar"></span>
                  <a href="http://www.54traveler.com/index.php?action=expeditionDetail&id=4641" target="_blank"><h5
                    style="line-height: 16px;height: 16px;overflow: hidden;">【一生必去】雪山盛宴，寻找消失于地平线的香巴拉</h5>
                  </a>
                  <h4><a href="http://www.54traveler.com/index.php?action=expeditionDetail&#038;id=4641"
                         target="_blank">稻城亚丁·经典版</a>
                    <router-link to="/long-trip"><small> > 更多长途旅行</small></router-link>
                  </h4>
                </div>
              </div>
            </div>
            <strong class="trip-tab">长途旅行</strong> <a class="left carousel-control" href="#ltrip" role="button"
                                                      data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"
                                                                               aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
            <a class="right carousel-control" href="#ltrip" role="button" data-slide="next"> <span
              class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div class="col-sm-6 col-xs-12 margin-bottom">
          <div id="supertrip" class="carousel slide index-slide carousel-fade" data-interval="false">
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <div class="hidden-xs hidden-sm">
                  <a target="_blank" class="thumb"
                     href="http://www.54traveler.com/index.php?action=expeditionDetail&id=5599"><img
                    src="https://alicontent.54traveler.com/wp-content/uploads/2020/09/2020090206312630.jpg"
                    alt="【小众奢享MAX】第二眼海南"/></a></div>
                <div class="visible-xs visible-sm">
                  <img src="https://alicontent.54traveler.com/wp-content/uploads/2020/09/2020090206312630.jpg"
                       alt="【小众奢享MAX】第二眼海南"/></div>
                <div class="trip-description">
                  <span class="redbar"></span>
                  <a href="http://www.54traveler.com/index.php?action=expeditionDetail&id=5599" target="_blank"><h5
                    style="line-height: 16px;height: 16px;overflow: hidden;">酒店控福利！三亚之外的小众逼格假期</h5>
                  </a>
                  <h4><a href="http://www.54traveler.com/index.php?action=expeditionDetail&#038;id=5599"
                         target="_blank">【小众奢享MAX】第二眼海南</a>
                    <router-link to="/super-weekend"><small> > 更多超级周末</small></router-link>
                  </h4>
                </div>
              </div>
              <div class="item">
                <div class="hidden-xs hidden-sm">
                  <a target="_blank" class="thumb"
                     href="http://www.54traveler.com/index.php?action=expeditionDetail&id=1779"><img
                    src="https://alicontent.54traveler.com/wp-content/uploads/2019/09/2019091708164339.jpg"
                    alt="朝圣敦煌"/></a></div>
                <div class="visible-xs visible-sm">
                  <img src="https://alicontent.54traveler.com/wp-content/uploads/2019/09/2019091708164339.jpg"
                       alt="朝圣敦煌"/></div>
                <div class="trip-description">
                  <span class="redbar"></span>
                  <a href="http://www.54traveler.com/index.php?action=expeditionDetail&id=1779" target="_blank"><h5
                    style="line-height: 16px;height: 16px;overflow: hidden;">【私家体验MAX】联合敦煌研究院，四场私家活动饱览敦煌！</h5>
                  </a>
                  <h4><a href="http://www.54traveler.com/index.php?action=expeditionDetail&#038;id=1779"
                         target="_blank">朝圣敦煌</a>
                    <router-link to="/super-weekend"><small> > 更多超级周末</small></router-link>
                  </h4>
                </div>
              </div>
              <div class="item">
                <div class="hidden-xs hidden-sm">
                  <a target="_blank" class="thumb"
                     href="http://www.54traveler.com/index.php?action=expeditionDetail&id=4150"><img
                    src="https://alicontent.54traveler.com/wp-content/uploads/2020/06/202006220709301.jpg"
                    alt="寻味广东·潮汕"/></a>
                </div>
                <div class="visible-xs visible-sm">
                  <img src="https://alicontent.54traveler.com/wp-content/uploads/2020/06/202006220709301.jpg"
                       alt="寻味广东·潮汕"/></div>
                <div class="trip-description">
                  <span class="redbar"></span>
                  <a href="http://www.54traveler.com/index.php?action=expeditionDetail&id=4150" target="_blank"><h5
                    style="line-height: 16px;height: 16px;overflow: hidden;">【吃货之选】一座美食的孤岛，一片神妙的土地</h5>
                  </a>
                  <h4><a href="http://www.54traveler.com/index.php?action=expeditionDetail&#038;id=4150"
                         target="_blank">寻味广东·潮汕</a>
                    <router-link to="/super-weekend"><small> > 更多超级周末</small></router-link>
                  </h4>
                </div>
              </div>
              <div class="item">
                <div class="hidden-xs hidden-sm">
                  <a target="_blank" class="thumb"
                     href="http://www.54traveler.com/index.php?action=expeditionDetail&id=5183"><img
                    src="https://alicontent.54traveler.com/wp-content/uploads/2020/06/2020062206571253.jpg"
                    alt="徒步武功山"/></a>
                </div>
                <div class="visible-xs visible-sm">
                  <img src="https://alicontent.54traveler.com/wp-content/uploads/2020/06/2020062206571253.jpg"
                       alt="徒步武功山"/></div>
                <div class="trip-description">
                  <span class="redbar"></span>
                  <a href="http://www.54traveler.com/index.php?action=expeditionDetail&id=5183" target="_blank"><h5
                    style="line-height: 16px;height: 16px;overflow: hidden;">【当季推荐】云上草原穿越之旅，户外经典入门路线</h5>
                  </a>
                  <h4><a href="http://www.54traveler.com/index.php?action=expeditionDetail&#038;id=5183"
                         target="_blank">徒步武功山</a>
                    <router-link to="/super-weekend"><small> > 更多超级周末</small></router-link>
                  </h4>
                </div>
              </div>
              <div class="item">
                <div class="hidden-xs hidden-sm">
                  <a target="_blank" class="thumb"
                     href="http://www.54traveler.com/index.php?action=expeditionDetail&id=5356"><img
                    src="https://alicontent.54traveler.com/wp-content/uploads/2020/06/202006220701519.jpg"
                    alt="山林秘境 · 美宿版"/></a></div>
                <div class="visible-xs visible-sm">
                  <img src="https://alicontent.54traveler.com/wp-content/uploads/2020/06/202006220701519.jpg"
                       alt="山林秘境 · 美宿版"/></div>
                <div class="trip-description">
                  <span class="redbar"></span>
                  <a href="http://www.54traveler.com/index.php?action=expeditionDetail&id=5356" target="_blank"><h5
                    style="line-height: 16px;height: 16px;overflow: hidden;">【升级上线】山间美宿，避世治愈，隐于最后的江南秘境</h5>
                  </a>
                  <h4><a href="http://www.54traveler.com/index.php?action=expeditionDetail&#038;id=5356"
                         target="_blank">山林秘境
                    · 美宿版</a>
                    <router-link to="/super-weekend"><small> > 更多超级周末</small></router-link>
                  </h4>
                </div>
              </div>
            </div>
            <strong class="trip-tab">超级周末</strong> <a class="left carousel-control" href="#supertrip" role="button"
                                                      data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"
                                                                               aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
            <a class="right carousel-control" href="#supertrip" role="button" data-slide="next"> <span
              class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div class="col-sm-6 col-xs-12 margin-bottom">
          <div id="strip" class="carousel slide index-slide carousel-fade" data-interval="false">
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <div class="hidden-xs hidden-sm">
                  <a target="_blank" class="thumb"
                     href="http://www.54traveler.com/index.php?action=expeditionDetail&id=5630"><img
                    src="https://alicontent.54traveler.com/wp-content/uploads/2019/09/2019091708362762.jpg"
                    alt="疾风千岛湖"/></a>
                </div>
                <div class="visible-xs visible-sm">
                  <img src="https://alicontent.54traveler.com/wp-content/uploads/2019/09/2019091708362762.jpg"
                       alt="疾风千岛湖"/></div>
                <div class="trip-description">
                  <span class="redbar"></span>
                  <a href="http://www.54traveler.com/index.php?action=expeditionDetail&id=5630" target="_blank"><h5
                    style="line-height: 16px;height: 16px;overflow: hidden;">【当季推荐】极速卡丁车+湖面酷玩，做票圈最耀眼的仔！</h5>
                  </a>
                  <h4><a href="http://www.54traveler.com/index.php?action=expeditionDetail&#038;id=5630"
                         target="_blank">疾风千岛湖</a>
                    <router-link to="/short-trip"><small> > 更多短途旅行</small></router-link>
                  </h4>
                </div>
              </div>
              <div class="item">
                <div class="hidden-xs hidden-sm">
                  <a target="_blank" class="thumb"
                     href="http://www.54traveler.com/index.php?action=expeditionDetail&id=5398"><img
                    src="https://alicontent.54traveler.com/wp-content/uploads/2020/09/2020090207195348.jpg"
                    alt="【私家体验】浮生宜偷闲"/></a></div>
                <div class="visible-xs visible-sm">
                  <img src="https://alicontent.54traveler.com/wp-content/uploads/2020/09/2020090207195348.jpg"
                       alt="【私家体验】浮生宜偷闲"/></div>
                <div class="trip-description">
                  <span class="redbar"></span>
                  <a href="http://www.54traveler.com/index.php?action=expeditionDetail&id=5398" target="_blank"><h5
                    style="line-height: 16px;height: 16px;overflow: hidden;">手作紫砂、温泉、茶道，轻享文艺慢生活~</h5>
                  </a>
                  <h4><a href="http://www.54traveler.com/index.php?action=expeditionDetail&#038;id=5398"
                         target="_blank">【私家体验】浮生宜偷闲</a>
                    <router-link to="/short-trip"><small> > 更多短途旅行</small></router-link>
                  </h4>
                </div>
              </div>
              <div class="item">
                <div class="hidden-xs hidden-sm">
                  <a target="_blank" class="thumb"
                     href="http://www.54traveler.com/index.php?action=expeditionDetail&id=5456"><img
                    src="https://alicontent.54traveler.com/wp-content/uploads/2017/04/2017041805511388-e1592821093183.jpg"
                    alt="淮扬盛宴"/></a></div>
                <div class="visible-xs visible-sm">
                  <img
                    src="https://alicontent.54traveler.com/wp-content/uploads/2017/04/2017041805511388-e1592821093183.jpg"
                    alt="淮扬盛宴"/></div>
                <div class="trip-description">
                  <span class="redbar"></span>
                  <a href="http://www.54traveler.com/index.php?action=expeditionDetail&id=5456" target="_blank"><h5
                    style="line-height: 16px;height: 16px;overflow: hidden;">【逼格周末】2场私家活动&黑珍珠餐厅，邂逅别样扬州</h5>
                  </a>
                  <h4><a href="http://www.54traveler.com/index.php?action=expeditionDetail&#038;id=5456"
                         target="_blank">淮扬盛宴</a>
                    <router-link to="/short-trip"><small> > 更多短途旅行</small></router-link>
                  </h4>
                </div>
              </div>
              <div class="item">
                <div class="hidden-xs hidden-sm">
                  <a target="_blank" class="thumb"
                     href="http://www.54traveler.com/index.php?action=expeditionDetail&id=376"><img
                    src="https://alicontent.54traveler.com/wp-content/uploads/2016/09/2016091409530396.jpg"
                    alt="静心釜托寺"/></a>
                </div>
                <div class="visible-xs visible-sm">
                  <img src="https://alicontent.54traveler.com/wp-content/uploads/2016/09/2016091409530396.jpg"
                       alt="静心釜托寺"/></div>
                <div class="trip-description">
                  <span class="redbar"></span>
                  <a href="http://www.54traveler.com/index.php?action=expeditionDetail&id=376" target="_blank"><h5
                    style="line-height: 16px;height: 16px;overflow: hidden;">【稻迷最爱】夜宿古寺，静心禅修的体验之旅</h5>
                  </a>
                  <h4><a href="http://www.54traveler.com/index.php?action=expeditionDetail&#038;id=376" target="_blank">静心釜托寺</a>
                    <router-link to="/short-trip"><small> > 更多短途旅行</small></router-link>
                  </h4>
                </div>
              </div>
            </div>
            <strong class="trip-tab">短途旅行</strong> <a class="left carousel-control" href="#strip" role="button"
                                                      data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"
                                                                               aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
            <a class="right carousel-control" href="#strip" role="button" data-slide="next"> <span
              class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend'
}
</script>

<style scoped>
  .margin-bottom {
    margin-bottom: 50px;
  }

  .carousel .carousel-control.left, .carousel .carousel-control.right {
    background: none;
  }

  .index-slide .carousel-control {
    bottom: 66px;
  }

  .carousel-control {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 15%;
    font-size: 20px;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
    filter: alpha(opacity=50);
    opacity: .5;
  }

  .trip-description .redbar {
    display: inline-block;
    width: 12px;
    background: #ad0711;
    float: left;
    height: 43px;
    margin: 10px;
  }

  @media (min-width: 768px)
    .trip-description small {
      padding-top: 7px;
      float: right;
      display: inline;
    }

    .trip-description a {
      color: #000;
    }

    .trip-description small {
      display: block;
      text-align: right;
      font-size: 13px;
      color: #31708f;
    }
</style>
