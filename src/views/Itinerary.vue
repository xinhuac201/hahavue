<template>
  <div>
    <Header></Header>
    <div class="rsearchlisttop" data-v-f9afae80=""></div>
    <!--    第一部分:旅游路线简介-->
    <div class="rsearchlist" data-v-f9afae80="">
      <!--      轮播图-->
      <div class="rsearchlistleft" data-v-f9afae80="">
        <div id="myCarouselGallery" data-ride="carousel" data-pause="false" data-interval="3000" class="carousel slide"
             style="width:740px;height:480px;z-index:2" data-v-f9afae80="">
          <div class="carousel-inner" data-v-f9afae80="" v-for="(gallery,index) in router_desc.gallery" :key="index">
            <!---->
            <div data-v-f9afae80="" class="item active" v-if="index==0"><img data-v-f9afae80=""
                                                                             :src="gallery.url"
                                                                             style="width: 740px; height: 493px;">
              <div data-v-f9afae80=""
                   style="margin: -30px 0px 0px 20px; text-shadow: black 0.1em 0.1em 0.2em; width: 640px; height: 47px; text-align: left; color: rgb(255, 255, 255); font-weight: bold; font-size: 16px;">
                {{gallery.name}}
              </div>
            </div>
            <div data-v-f9afae80="" class="item" v-else><img data-v-f9afae80=""
                                                             :src="gallery.url"
                                                             style="width: 740px; height: 493px;">
              <div data-v-f9afae80=""
                   style="margin: -30px 0px 0px 20px; text-shadow: black 0.1em 0.1em 0.2em; width: 640px; height: 47px; text-align: left; color: rgb(255, 255, 255); font-weight: bold; font-size: 16px;">
                {{gallery.name}}
              </div>
            </div>
          </div>
          <a href="#myCarouselGallery" data-slide="prev" class="carousel-control left" style="z-index:1;height:95%"
             data-v-f9afae80=""><span aria-hidden="true" class="glyphicon glyphicon-chevron-left"
                                      data-v-f9afae80=""></span></a><a id="bannergo" href="#myCarouselGallery"
                                                                       data-slide="next" class="carousel-control right"
                                                                       style="z-index:1;height:95%"
                                                                       data-v-f9afae80=""><span aria-hidden="true"
                                                                                                class="glyphicon glyphicon-chevron-right"
                                                                                                data-v-f9afae80=""></span></a>
        </div>
      </div>
      <!--      右侧介绍栏-->
      <div class="rsearchlistright" data-v-f9afae80="">
        <div class="rearchlist-days" data-v-f9afae80="">
          <div class="rdate" data-v-f9afae80="">
            <div class="ng-binging" data-v-f9afae80="">{{router_desc.duration}}</div>
            <div class="ng-nday" data-v-f9afae80="">DAY</div>
          </div>
          <div class="rdatetop" data-v-f9afae80=""></div>
          <div class="rdatetopb" data-v-f9afae80=""></div>
        </div>
        <div class="rearchlist-title" data-v-f9afae80="">{{router_desc.heading}}</div>
        <div class="rearchlist-mtitle" data-v-f9afae80="" style="display: none;"></div>
        <div class="rearchlist-mtitle" data-v-f9afae80="">{{router_desc.title}}</div>
        <div class="rearchlist-mtab" style="display:none" data-v-f9afae80=""></div>
        <div class="rearchlist-route" data-v-f9afae80="">
          <div class="rc-map-show" style="display:none" data-v-f9afae80=""><img
            src="//we-oss.oss-cn-shanghai.aliyuncs.com/2020/7/MTU5NDIwMDU5MDI2MiVFOCVCNiU4NSVFNSU5MSVBOCVFNiVCNSVCNyVFNSU4RCU5NyVFOCVCNyVBRiVFNyVCQSVCRiVFNSU5QyVCMCVFNSU5QiVCRS5qcGc=.jpg?x-oss-process=image/resize,w_846,h_476"
            style="width:600px;height:337px;cursor:pointer" data-v-f9afae80=""></div>
          <div class="rc-mtitletu" data-v-f9afae80=""></div>
          <div class="rc-mtitlearea" style="min-height:30px" data-v-f9afae80="">
            <div data-v-f9afae80="" style="display: inline-block;" v-for="(overview,index) in router_desc.overview_list"
                 :key="index+ '-only'">
              <div data-v-f9afae80="" class="routelist-areali" style="display: none;"></div>
              <div data-v-f9afae80="" class="routelist-area" style="margin:0 8px">&nbsp;&nbsp;{{overview}}&nbsp;&nbsp;
              </div>
            </div>
          </div>
          <div class="rc-mtitlearea-c" style="display:none" data-v-f9afae80="">
            <div data-v-f9afae80="" style="display: inline-block;">
              <div data-v-f9afae80="" class="routelist-areali" style="display: none;"></div>
              <div data-v-f9afae80="" class="routelist-area">&nbsp;&nbsp;三亚&nbsp;&nbsp;</div>
            </div>
            <div data-v-f9afae80="" style="display: inline-block;">
              <div data-v-f9afae80="" class="routelist-areali"></div>
              <div data-v-f9afae80="" class="routelist-area">&nbsp;&nbsp;保亭&nbsp;&nbsp;</div>
            </div>
            <div data-v-f9afae80="" style="display: inline-block;">
              <div data-v-f9afae80="" class="routelist-areali"></div>
              <div data-v-f9afae80="" class="routelist-area">&nbsp;&nbsp;陵水疍家渔排&nbsp;&nbsp;</div>
            </div>
            <div data-v-f9afae80="" style="display: inline-block;">
              <div data-v-f9afae80="" class="routelist-areali"></div>
              <div data-v-f9afae80="" class="routelist-area">&nbsp;&nbsp;万宁石梅湾&nbsp;&nbsp;</div>
            </div>
            <div data-v-f9afae80="" style="display: inline-block;">
              <div data-v-f9afae80="" class="routelist-areali"></div>
              <div data-v-f9afae80="" class="routelist-area">&nbsp;&nbsp;兴隆咖啡庄园&nbsp;&nbsp;</div>
            </div>
            <div data-v-f9afae80="" style="display: inline-block;">
              <div data-v-f9afae80="" class="routelist-areali"></div>
              <div data-v-f9afae80="" class="routelist-area">&nbsp;&nbsp;三亚&nbsp;&nbsp;</div>
            </div>
          </div>
        </div>
        <div class="rearchlist-route" style="display:none" data-v-f9afae80="">
          <div class="triangle-facing-up" style="margin:0 0 0 140px" data-v-f9afae80=""></div>
          <div class="triangle-facing-down" style="margin:0 0 0 140px;display:none" data-v-f9afae80=""></div>
        </div>
        <div class="rearchlist-route" data-v-f9afae80="">
          <div class="rearchlist-la-n" style="margin-left:-4px" data-v-f9afae80="">
            <div class="rearchlist-la-a" data-v-f9afae80=""></div>
            <div class="rearchlist-la-atxt" data-v-f9afae80="">团队人数上限：{{router_desc.ageLimitWord}}人</div>
          </div>
          <div class="rearchlist-lb-n" style="margin-left:-4px" data-v-f9afae80="">
            <div class="rearchlist-la-b" data-v-f9afae80=""></div>
            <div class="rearchlist-la-atxt" data-v-f9afae80="">
              报名年龄限制：20岁-45岁
              <br data-v-f9afae80=""><span style="color:#409eff" data-v-f9afae80="">寒暑假开放18-45岁报名</span></div>
          </div>
          <div class="rearchlist-lc-n" style="margin-left:-4px" data-v-f9afae80="">
            <div class="rearchlist-la-d" data-v-f9afae80=""></div>
            <div class="rearchlist-la-atxt" data-v-f9afae80="">团队集合地点：{{router_desc.meetingPlace}}</div>
          </div>
          <div class="rearchlist-ld-n" style="margin-left:-4px" data-v-f9afae80="">
            <div class="rearchlist-la-d" data-v-f9afae80=""></div>
            <div class="rearchlist-la-atxt" data-v-f9afae80="">团队解散地点：{{router_desc.meetingPlaceFormat}}</div>
          </div>
          <a href="/foundation" target="_blank" data-v-f9afae80="" class=""></a>
          <div class="rearchlist-bmwy" style="margin-top:42px" data-v-f9afae80=""></div>
          <div class="rearchlist-bmwy" style="height:65px;display:none" data-v-f9afae80=""></div>
          <div class="rearchlist-ld" style="margin-top:10px" data-v-f9afae80="">
            <div class="rearchlist-price-left" data-v-f9afae80=""></div>
            <div class="rearchlist-price-right" data-v-f9afae80="">￥ {{router_desc.price}} <span
              style="color:silver;font-size:14px"
              data-v-f9afae80="">起</span></div>
            <div class="fqnotice" style="box-shadow:1px 1px 5px #888;display:none" data-v-f9afae80=""></div>
          </div>
          <div class="rearchlist-baoming" style="display:none" data-v-f9afae80="">我要预订</div>
          <div class="rearchlist-baoming" style="background-color:#d7d7d7;display:none" data-v-f9afae80="">预售尚未开始</div>
          <div class="rearchlist-baoming" style="" data-v-f9afae80="">我要报名</div>
          <div class="rearchlist-baoming" style="background-color:#ddd;display:none" data-v-f9afae80="">即将上线</div>
          <div class="rearchlist-baoming" style="background-color:#ddd;display:none" data-v-f9afae80="">暂停售卖</div>
          <div class="rearchlist-baoming" style="display:none" data-v-f9afae80="">上线提醒</div>
        </div>
      </div>
    </div>
    <!--    空白部分-->
    <div class="rsearchlist-center" data-v-f9afae80=""></div>
    <div class="adbanner" style="display:none" data-v-f9afae80="">
      <div id="myCarousead" data-ride="carousel" class="carousel slide" style="width:1140px;height:150px;z-index:2"
           data-v-f9afae80="">
        <div class="carousel-inner" data-v-f9afae80=""></div>
      </div>
    </div>
    <div class="rsearchlist-center" data-v-f9afae80=""></div>
    <!--    第二部分路线详情-->
    <div class="rsearchlist-detail" data-v-f9afae80="">
      <div id="searchBar" class="searchBar" data-v-f9afae80="">
<!--        导航栏-->
<!--        <el-tabs v-model="activeName" @tab-click="handleClick">-->
<!--          <el-tab-pane label="路线亮点" name="first" class="detail-menu-liactive"><a href="#menutaba">路线亮点</a>-->
<!--          <div class="menusangle" data-v-f9afae80="" style=""></div>-->
<!--            <div class="menusangle-top" data-v-f9afae80="" style=""></div>-->
<!--          </el-tab-pane>-->
<!--          <el-tab-pane label="行程简介" name="second" class="detail-menu-li">&nbsp;&nbsp;&nbsp;&nbsp;<a href="#menutabb">行程简介</a>-->
<!--          <div class="menusangle" style="display: none;" data-v-f9afae80=""></div>-->
<!--            <div class="menusangle-top" style="display: none;" data-v-f9afae80=""></div>-->
<!--            <div class="menusanglex" style="display: none;" data-v-f9afae80=""></div>-->
<!--          </el-tab-pane>-->
<!--          <el-tab-pane label="费用说明" name="third" class="detail-menu-li">&nbsp;&nbsp;&nbsp;&nbsp;费用说明-->
<!--          <div class="menusangle" style="display: none;" data-v-f9afae80=""></div>-->
<!--            <div class="menusangle-top" style="display: none;" data-v-f9afae80=""></div>-->
<!--            <div class="menusanglex" style="display: none;" data-v-f9afae80=""></div>-->
<!--          </el-tab-pane>-->
<!--          <el-tab-pane label="行前必看" name="fourth" class="detail-menu-li">&nbsp;&nbsp;&nbsp;&nbsp;行前必看-->
<!--          <div class="menusangle" style="display: none;" data-v-f9afae80=""></div>-->
<!--            <div class="menusangle-top" style="display: none;" data-v-f9afae80=""></div>-->
<!--            <div class="menusanglex" style="display: none;" data-v-f9afae80=""></div>-->
<!--          </el-tab-pane>-->
<!--        </el-tabs>-->
        <div data-v-f9afae80="" class="">
          <div class="detail-menu-liactive" data-v-f9afae80=""><a href="#menutaba">路线亮点</a>
            <div class="menusangle" data-v-f9afae80="" style=""></div>
            <div class="menusangle-top" data-v-f9afae80="" style=""></div>
          </div>
          <div class="detail-menu-li" data-v-f9afae80=""><a href="#menutabb">&nbsp;&nbsp;&nbsp;&nbsp;行程简介</a>
            <div class="menusangle" style="display: none;" data-v-f9afae80=""></div>
            <div class="menusangle-top" style="display: none;" data-v-f9afae80=""></div>
            <div class="menusanglex" style="display: none;" data-v-f9afae80=""></div>
          </div>
          <div class="detail-menu-li" data-v-f9afae80="">&nbsp;&nbsp;&nbsp;&nbsp;费用说明
            <div class="menusangle" style="display: none;" data-v-f9afae80=""></div>
            <div class="menusangle-top" style="display: none;" data-v-f9afae80=""></div>
            <div class="menusanglex" style="display: none;" data-v-f9afae80=""></div>
          </div>
          <div class="detail-menu-li" data-v-f9afae80="">&nbsp;&nbsp;&nbsp;&nbsp;行前必看
            <div class="menusangle" style="display: none;" data-v-f9afae80=""></div>
            <div class="menusangle-top" style="display: none;" data-v-f9afae80=""></div>
            <div class="menusanglex" style="display: none;" data-v-f9afae80=""></div>
          </div>
          <div class="detail-menu-li" style="display:none" data-v-f9afae80="">&nbsp;&nbsp;&nbsp;&nbsp;用户反馈
            <div class="menusangle" style="display:none" data-v-f9afae80=""></div>
            <div class="menusangle-top" style="display:none" data-v-f9afae80=""></div>
            <div class="menusanglex" style="display:none" data-v-f9afae80=""></div>
          </div>
          <div class="detail-menu-li" style="cursor:auto" data-v-f9afae80=""></div>
          <div class="detail-menu-li" data-v-f9afae80="">
            <div class="rearchlist-baoming-small" style="display: none;" data-v-f9afae80="">我要报名</div>
            <div class="rearchlist-baoming-small" style="background-color:#ddd;display:none" data-v-f9afae80="">即将上线
            </div>
            <div class="rearchlist-baoming-small" style="background-color:#ddd;display:none" data-v-f9afae80="">暂停售卖
            </div>
            <div class="rearchlist-baoming-small" style="display:none" data-v-f9afae80="">我要预订</div>
            <div class="rearchlist-baoming-small" style="background-color:#d7d7d7;display:none" data-v-f9afae80="">
              预售尚未开始
            </div>
          </div>
        </div>
      </div>
<!--      路线亮点-->
      <div id="menutaba" class="detail-menu-content-centerli" style="height:40px;background-color:#fff"
           data-v-f9afae80=""></div>
      <div class="detail-menu-content" data-v-f9afae80="">
        <div class="content-why" data-v-f9afae80="">
          <div v-for="(desc,index) in router_desc.description" :key="index+'1'">
          <div data-v-f9afae80="">
            <div data-v-f9afae80="" class="content-why-title">{{desc.name}}</div>
            <div data-v-f9afae80="" class="content-why-content content-why-content-close" v-html="$xss(desc.content)">
              </div>
<!--              <p>但一到冬天，你会发现香格里拉真的变成了香巴拉，游客不再息壤，天空蔚蓝而静美、金沙江和澜沧江的江水变得清澈而温柔，雪山巍峨而神圣，雪后的世界亦如童话王国般纯净梦幻、农忙结束后的藏民纷纷走上了朝圣的路。</p>-->
<!--              <p>当你深入塔城、奔子栏这些秘境小城，会发现一片隐匿的乐土。田园牧歌景象、静谧美好的生活，如诗如画。世代生活在这里的纳西族、傈僳族、藏族融合共生，一起享受土地所赋予的丰饶馈赠。</p>-->
<!--              <p>-->
<!--                当梅里神山率领十三峰向你迎面扑来，或是不经意间从云间露出日照金山，漫游于雪山、森林、草甸、河谷间的无人之境、或是在每个繁星璀璨的山谷里感受良夜…那些大自然悄无声息又气场全开的瞬间，总能突如其来击中你的心，让你忘掉一切世俗烦忧，找回内心的平静。</p>-->
<!--              <p>世人仍会一如既往，感叹那香巴拉世界是否真实存在…而香格里拉，无疑是现实世界中距离那个理想国度最近的地方。</p></div>-->
<!--            <div data-v-f9afae80="" class="content-why-content" style="display: none;"><p>-->
<!--              英国小说家詹姆斯·希尔顿在《消失的地平线》创造出的香格里拉（Shangri-la）一词时，或许很难想到有朝一日，会有一片以之命名的地方，且不再神秘又遥远。但那个真正的理想国，仍存在于不为众人知晓的秘境深处，或是有缘人的内心世界里。</p>-->
<!--              <p>但一到冬天，你会发现香格里拉真的变成了香巴拉，游客不再息壤，天空蔚蓝而静美、金沙江和澜沧江的江水变得清澈而温柔，雪山巍峨而神圣，雪后的世界亦如童话王国般纯净梦幻、农忙结束后的藏民纷纷走上了朝圣的路。</p>-->
<!--              <p>当你深入塔城、奔子栏这些秘境小城，会发现一片隐匿的乐土。田园牧歌景象、静谧美好的生活，如诗如画。世代生活在这里的纳西族、傈僳族、藏族融合共生，一起享受土地所赋予的丰饶馈赠。</p>-->
<!--              <p>-->
<!--                当梅里神山率领十三峰向你迎面扑来，或是不经意间从云间露出日照金山，漫游于雪山、森林、草甸、河谷间的无人之境、或是在每个繁星璀璨的山谷里感受良夜…那些大自然悄无声息又气场全开的瞬间，总能突如其来击中你的心，让你忘掉一切世俗烦忧，找回内心的平静。</p>-->
<!--              <p>世人仍会一如既往，感叹那香巴拉世界是否真实存在…而香格里拉，无疑是现实世界中距离那个理想国度最近的地方。</p></div>-->
            <div data-v-f9afae80="" class="content-why-content-close-up">
              <div data-v-f9afae80="" class="triangle-facing-up"></div>
            </div>
            <div data-v-f9afae80="" class="content-why-content-close-up" style="display: none;">
              <div data-v-f9afae80="" class="triangle-facing-down"></div>
            </div>
            <div data-v-f9afae80="" class="content-why-content-close-up" style="height: 1px; display: none;"></div>
          </div>
            </div>
          <div class="content-why-title" data-v-f9afae80="">路线亮点</div>
          <div data-v-f9afae80="" class="content-why-content" v-for="(focus,index) in router_desc.focus" :key="index+'2'">
            <div data-v-f9afae80="" class="ld-title">{{focus.title}}</div>
            <div data-v-f9afae80="" class="ld-image" style="overflow: hidden;"><img data-v-f9afae80=""
                                                                                    :src="focus.picture"
                                                                                    class="ldimagebig"></div>
          </div>
          <div style="width:1040px;height:30px;background-color:#fff" data-v-f9afae80=""></div>
        </div>
      </div>
<!--      行程简介-->
      <div id="menutabb" class="detail-menu-content-centerli" data-v-f9afae80=""></div>
      <div class="detail-menu-content" data-v-f9afae80="" v-for="(desc,index) in router_desc_detail" :key="index+'3'">
        <div style="width:1140px;height:20px;float:left;background-color:#fff" data-v-f9afae80=""></div>
        <div style="width:1140px;height:auto;float:left;background-color:#fff" data-v-f9afae80="">
          <div id="searchBarmenu" class="xc-menu-all" data-v-f9afae80="">
            <div data-v-f9afae80="" class="">
              <div data-v-f9afae80="" class="searchBar-menu">
                <div data-v-f9afae80="" class="xc-menu-active" style="cursor: pointer;"><span
                  data-v-f9afae80="">D{{desc.day}}</span></div>
                <div data-v-f9afae80="" class="xc-menu-active-li" style=""></div>
              </div>
            </div>
          </div>
          <div data-v-f9afae80="" id="x1"
               style="width: 1140px; height: auto; float: left; background-color: rgb(255, 255, 255);">
            <div data-v-f9afae80="" id="mdx1"
                 style="width: 1140px; height: 50px; position: absolute; margin: -50px 0px 0px; opacity: 0; z-index: -1;"></div>
            <div data-v-f9afae80="" style="width: 1140px; height: 70px; float: left; margin-left: 30px;">
              <div data-v-f9afae80="" class="xc-day">
                <div data-v-f9afae80="" class="xc-day-txt">D{{desc.day}}</div>
              </div>
              <div data-v-f9afae80="" class="xc-title-title">
                <span data-v-f9afae80="">
                  <span data-v-f9afae80="">(集合日) &nbsp;</span>
                  <span data-v-f9afae80="">
                    <span data-v-f9afae80="" style="display: none;">-&nbsp;</span>香格里拉&nbsp;</span>
                </span>
              </div>
            </div>
            <div data-v-f9afae80="" style="width: 1140px; height: auto; float: left;">
<!--              左侧轮播图-->
              <div data-v-f9afae80="" style="width: 500px; float: left; margin-left: 30px;">
                <div data-v-f9afae80="" style="float: left; width: 500px; height: 330px;">
                  <div data-v-f9afae80="" id="myCarousel0" data-ride="carousel" class="carousel slide"
                       style="width: 500px; height: 330px; z-index: 2;">
                    <div data-v-f9afae80="" class="carousel-inner">

                      <el-carousel :interval="5000" arrow="always">
                        <el-carousel-item v-for="(gallery,index) in desc.gallery" :key="index+'6'">
                          <img data-v-f9afae80=""
                                                                :src="gallery.url"
                                                                style="width: 500px; height: 333px; background: linear-gradient(rgba(245, 245, 245, 0), rgba(245, 245, 245, 0), rgb(245, 245, 245));">
                        </el-carousel-item>
                      </el-carousel>
<!--                      <div data-v-f9afae80="" class="item class"><img data-v-f9afae80=""-->
<!--                                                                :src="gallery.url"-->
<!--                                                                style="width: 500px; height: 333px; background: linear-gradient(rgba(245, 245, 245, 0), rgba(245, 245, 245, 0), rgb(245, 245, 245));">-->
<!--                      </div>-->
<!--                      <div data-v-f9afae80="" class="item"><img data-v-f9afae80=""-->
<!--                                                                src="//we-oss.oss-cn-shanghai.aliyuncs.com/2020/11/MTYwNDQ3NzMyODU3OCVFNiU5RSU5NyVFNSU4RCVBMSVFOCVCMSVBQSVFNSU4RCU4RSVFNSVBNCVBNyVFNSVCQSU4QSVFNiU4OCVCRl8lRTUlODklQUYlRTYlOUMlQUMuanBn.jpg?x-oss-process=image/resize,w_1000,h_333"-->
<!--                                                                style="width: 500px; height: 333px; background: linear-gradient(rgba(245, 245, 245, 0), rgba(245, 245, 245, 0), rgb(245, 245, 245));">-->
<!--                      </div>-->
<!--                      <div data-v-f9afae80="" class="item"><img data-v-f9afae80=""-->
<!--                                                                src="//we-oss.oss-cn-shanghai.aliyuncs.com/2020/11/MTYwNDQ3Njk4NzIzMl9TU0MxOTE0XzElRTYlOUUlOTclRTUlOEQlQTElRTklQTQlOTAlRTUlOEUlODVfJUU1JTg5JUFGJUU2JTlDJUFDLmpwZw==.jpg?x-oss-process=image/resize,w_1000,h_333"-->
<!--                                                                style="width: 500px; height: 333px; background: linear-gradient(rgba(245, 245, 245, 0), rgba(245, 245, 245, 0), rgb(245, 245, 245));">-->
<!--                      </div>-->
<!--                      <div data-v-f9afae80="" class="item"><img data-v-f9afae80=""-->
<!--                                                                src="//we-oss.oss-cn-shanghai.aliyuncs.com/2020/11/MTYwNDQ3Njk4OTcyOV9TU0MyMDIxXzElRTYlOUUlOTclRTUlOEQlQTFfJUU1JTg5JUFGJUU2JTlDJUFDLmpwZw==.jpg?x-oss-process=image/resize,w_1000,h_333"-->
<!--                                                                style="width: 500px; height: 333px; background: linear-gradient(rgba(245, 245, 245, 0), rgba(245, 245, 245, 0), rgb(245, 245, 245));">-->
<!--                      </div>-->
<!--                      <div data-v-f9afae80="" class="item"><img data-v-f9afae80=""-->
<!--                                                                src="//we-oss.oss-cn-shanghai.aliyuncs.com/2020/11/MTYwNDQ3NzA1OTkwMElNR1AxMDEwJUU2JTlFJTk3JUU1JThEJUExJUU0JUI5JUE2JUU1JTkwJUE3XyVFNSU4OSVBRiVFNiU5QyVBQy5qcGc=.jpg?x-oss-process=image/resize,w_1000,h_333"-->
<!--                                                                style="width: 500px; height: 333px; background: linear-gradient(rgba(245, 245, 245, 0), rgba(245, 245, 245, 0), rgb(245, 245, 245));">-->
<!--                      </div>-->
<!--                      <div data-v-f9afae80="" class="item"><img data-v-f9afae80=""-->
<!--                                                                       src="//we-oss.oss-cn-shanghai.aliyuncs.com/2020/11/MTYwNDQ3Njk5MjIyNzRHOUc0MjQwJUU2JTlFJTk3JUU1JThEJUExXyVFNSU4OSVBRiVFNiU5QyVBQy5qcGc=.jpg?x-oss-process=image/resize,w_1000,h_333"-->
<!--                                                                       style="width: 500px; height: 333px; background: linear-gradient(rgba(245, 245, 245, 0), rgba(245, 245, 245, 0), rgb(245, 245, 245));">-->
<!--                      </div>-->
<!--                      <div data-v-f9afae80="" class="item"><img data-v-f9afae80=""-->
<!--                                                                src="//we-oss.oss-cn-shanghai.aliyuncs.com/2020/11/MTYwNDQ3NzMyMjIwMiVFNiU5RSU5NyVFNSU4RCVBMSVFOCVCRiU5QyVFNiU5OSVBRjFfJUU1JTg5JUFGJUU2JTlDJUFDLmpwZw==.jpg?x-oss-process=image/resize,w_1000,h_333"-->
<!--                                                                style="width: 500px; height: 333px; background: linear-gradient(rgba(245, 245, 245, 0), rgba(245, 245, 245, 0), rgb(245, 245, 245));">-->
<!--                      </div>-->
<!--                      <div data-v-f9afae80="" class="item"><img data-v-f9afae80=""-->
<!--                                                                src="//we-oss.oss-cn-shanghai.aliyuncs.com/2020/11/MTYwNDQ3Njk5NDQyNUlNR1AxNzA1JUU3JTlBJTg0JUU1JTg5JUFGJUU2JTlDJUFDXyVFNSU4OSVBRiVFNiU5QyVBQy5qcGc=.jpg?x-oss-process=image/resize,w_1000,h_333"-->
<!--                                                                style="width: 500px; height: 333px; background: linear-gradient(rgba(245, 245, 245, 0), rgba(245, 245, 245, 0), rgb(245, 245, 245));">-->
<!--                      </div>-->
                    </div>
                    <a data-v-f9afae80="" href="#myCarousel0" data-slide="prev" class="carousel-control left"
                       style="z-index: 1;"><span data-v-f9afae80="" aria-hidden="true"
                                                 class="glyphicon glyphicon-chevron-left"></span></a><a
                    data-v-f9afae80="" id="bannergo0" href="#myCarousel0" data-slide="next"
                    class="carousel-control right" style="z-index: 1;"><span data-v-f9afae80="" aria-hidden="true"
                                                                             class="glyphicon glyphicon-chevron-right"></span></a>
                  </div>
                </div>
                <div data-v-f9afae80="" style="float: left; min-height: 100px; width: 500px;">
                  <div data-v-f9afae80="" style="float: left; min-height: 30px; width: 500px;">
                    <div data-v-f9afae80="" class="rz-a"></div>
                    <div data-v-f9afae80="" class="rz-a-title">&nbsp;&nbsp;入住：
                      <span data-v-f9afae80="">{{desc.room}}</span> {{desc.roomtype}}
                      &nbsp;&nbsp;
                      <img data-v-f9afae80="" src="https://dao-library.54traveler.com/common/dao-fill-h.png"
                           style="width: 12px; height: 12px; margin-right: 5px;"><img data-v-f9afae80=""
                                                                                      src="https://dao-library.54traveler.com/common/dao-fill-h.png"
                                                                                      style="width: 12px; height: 12px; margin-right: 5px;"><img
                        data-v-f9afae80="" src="https://dao-library.54traveler.com/common/dao-fill-h.png"
                        style="width: 12px; height: 12px; margin-right: 5px;"><img data-v-f9afae80=""
                                                                                   src="https://dao-library.54traveler.com/common/dao-fill-h.png"
                                                                                   style="width: 12px; height: 12px; margin-right: 5px;"><img
                        data-v-f9afae80="" src="https://dao-library.54traveler.com/common/dao-fill-h.png"
                        style="width: 12px; height: 12px; margin-right: 5px;"><img data-v-f9afae80=""
                                                                                   src="https://dao-library.54traveler.com/common/dao-half-five-five.png"
                                                                                   style="width: 16px; height: 16px; margin-left: -2px; margin-top: 2.5px; display: none;"><img
                        data-v-f9afae80="" src="https://dao-library.54traveler.com/common/dao-fill-six.png"
                        style="width: 16px; height: 16px; margin-left: -2px; margin-top: 2.5px; display: none;"></div>
                  </div>
                  <div data-v-f9afae80="" style="float: left; min-height: 30px; width: 500px; display: none;">
                    <div data-v-f9afae80="" class="rz-car"><img data-v-f9afae80=""
                                                                src="https://dao-library.54traveler.com/tour/jhe.png"
                                                                style="width: 26px; height: 26px; margin-left: 1px;">
                    </div>
                    <div data-v-f9afae80="" class="rz-a-title">&nbsp;&nbsp;车程：<span data-v-f9afae80=""
                                                                                    style="font-weight: normal;"></span>
                    </div>
                  </div>
                  <div data-v-f9afae80="" style="float: left; min-height: 30px; width: 500px;">
                    <div data-v-f9afae80="" class="rz-b"></div>
                    <div data-v-f9afae80="" class="rz-a-title">&nbsp;&nbsp;海拔：<span data-v-f9afae80=""
                                                                                    style="font-weight: normal;">{{desc.height}}</span>
                    </div>
                  </div>
                  <div data-v-f9afae80="" style="float: left; min-height: 30px; width: 500px; display: none;">
                    <div data-v-f9afae80="" class="rz-d"></div>
                    <div data-v-f9afae80="" class="rz-a-title" style="display: none;">&nbsp;&nbsp;餐食：<span
                      data-v-f9afae80="" style="font-weight: normal;"></span></div>
                  </div>
                  <div data-v-f9afae80="" style="float: left; min-height: 30px; width: 500px; display: none;">
                    <div data-v-f9afae80="" class="rz-c"></div>
                    <div data-v-f9afae80="" class="rz-a-title">&nbsp;&nbsp;体能：
                      <div data-v-f9afae80="" style="display: none;">0
                        0
                        5
                      </div>
                      <img data-v-f9afae80="" src="https://dao-library.54traveler.com/common/dao-stroke-h.png"
                           style="width: 12px; height: 12px; margin-right: 5px;"><img data-v-f9afae80=""
                                                                                      src="https://dao-library.54traveler.com/common/dao-stroke-h.png"
                                                                                      style="width: 12px; height: 12px; margin-right: 5px;"><img
                        data-v-f9afae80="" src="https://dao-library.54traveler.com/common/dao-stroke-h.png"
                        style="width: 12px; height: 12px; margin-right: 5px;"><img data-v-f9afae80=""
                                                                                   src="https://dao-library.54traveler.com/common/dao-stroke-h.png"
                                                                                   style="width: 12px; height: 12px; margin-right: 5px;"><img
                        data-v-f9afae80="" src="https://dao-library.54traveler.com/common/dao-stroke-h.png"
                        style="width: 12px; height: 12px; margin-right: 5px;"></div>
                  </div>
                  <div data-v-f9afae80="" style="float: left; height: 10px; width: 500px;"></div>
                </div>
              </div>
<!--              右侧内容-->
              <div data-v-f9afae80="" style="width: 540px; height: auto; margin-left: 40px; float: left;">
                <div data-v-f9afae80="" v-for="(attach,index) in desc.attach" :key="index+'7'">
                  <div data-v-f9afae80=""
                       style="width: 540px; min-height: 25px; float: left; border-left: 1px solid rgb(235, 235, 235);">
                    <div data-v-f9afae80="" class="xc-img-b"><img data-v-f9afae80=""
                                                                  src="../assets/img/jhabout.png"
                                                                  class="xc-img-icon"><!----><!----><!----><!---->
                      <!----><!----><!----><!----></div>
                    <div data-v-f9afae80=""
                         style="width: 540px; color: rgb(175, 1, 2); font-weight: bold; font-size: 14px; line-height: 21px; word-break: break-all; padding-left: 21px;">
                      {{attach.name}}&nbsp;
                      <!----></div>
                  </div>
                  <div data-v-f9afae80="" class="xcleft">
                    <div data-v-f9afae80=""
                         style="margin-left: 22px; float: left; line-height: 24px; width: 520px; color: rgb(51, 51, 51); font-weight: normal; font-size: 13px;" v-html="$xss(attach.content)">
                      <p ></p>
                      </div>
                    <div data-v-f9afae80="" style="width: 520px; height: 10px; float: left;"></div>
                  </div>
                  <div data-v-f9afae80="" class="xcleft-no" style="display: none;">
                    <div data-v-f9afae80=""
                         style="margin-left: 22px; float: left; line-height: 24px; width: 520px; color: rgb(51, 51, 51); font-weight: normal; font-size: 13px;">
                      <p>今天是集合日，这一天没有活动安排，一整天都是集合时间哦！</p>
                      <p>晚上，领队会根据大家到达的情况开一个准备会，晚些抵达的队员也不用担心，我们的领队会找时间再单独和你讲一下行程中的注意事项。</p>
                      <p>酒店通常入住时间为集合日当天下午14:00，如果你到的较早，酒店还没准备好房间的话，你可以把行李寄存在前台，先去周边逛逛~</p></div>
                    <div data-v-f9afae80="" style="width: 520px; height: 10px; float: left;"></div>
                  </div>
                </div>
                <p data-v-f9afae80="" style="color: rgb(170, 170, 170); display: none;">*
                  行程中的时间节点会因为路况等不可抗力等因素有所偏差，望伙伴们理解ε-(•́ω•̀๑)</p></div>
            </div>
          </div>
        </div>
        <!----></div>
      <p class="text-right" style="padding:10px" data-v-f9afae80="">* 注：本页面所用图片均为专业摄影师在特定天气及光线条件下拍摄。</p>
      <div id="menutabc" class="detail-menu-content-centerli" data-v-f9afae80=""></div>
<!--      <div class="detail-menu-content" style="margin-top:0" data-v-f9afae80="">-->
<!--        <div style="width:1140px;height:80px;margin-top:20px;float:left" data-v-f9afae80="">-->
<!--          <div style="font-size:14px;color:#333;font-weight:700;line-height:80px;margin-left:30px" data-v-f9afae80="">-->
<!--            以下文件仅供收藏或打印或分享或看着玩：-->
<!--          </div>-->
<!--        </div>-->
<!--        <div style="width:1140px;height:150px;float:left" data-v-f9afae80="">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
<!--          &lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
<!--          <div data-v-f9afae80="" style="width: 120px; height: 90px; float: left; cursor: pointer; margin-right: 40px;">-->
<!--            <a data-v-f9afae80="" href="https://user.54traveler.com/user/readylist?rid=8614&amp;uid=0" target="_blank"-->
<!--               style="text-decoration: none;"><img data-v-f9afae80=""-->
<!--                                                   src="https://dao-library.54traveler.com/tour/xcdyb.png"-->
<!--                                                   style="width: 80px; height: 80px; margin-left: 20px;">-->
<!--              <div data-v-f9afae80=""-->
<!--                   style="width: 120px; text-align: center; color: rgb(51, 51, 51); font-size: 14px; margin-top: 5px;">-->
<!--                准备清单-->
<!--              </div>-->
<!--            </a></div>&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
<!--          &lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;</div>-->
<!--      </div>-->
      <div id="menutabe" class="detail-menu-content-centerli-no" data-v-f9afae80=""></div>
      <div class="detail-menu-content" style="margin-top:20px;display:none" data-v-f9afae80="">
        <div data-v-f9afae80="">
          <div
            style="width:1140px;min-height:70px;background-color:#fff;border-bottom:1px solid #f5f5f5;float:left;text-align:center;font-size:20px;line-height:70px"
            data-v-f9afae80="">
            现在还木有小伙伴反馈呢┭┮﹏┭┮
          </div>
        </div><!----></div>
<!--      <div id="menutabf" class="detail-menu-content-centerli" data-v-f9afae80=""></div>-->
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'Itinerary',
  data () {
    return {
      route_id: 0, // 当前旅游线路信息的id
      router_desc: [], // 当前旅游线路简介
      router_desc_detail: [], // 当前旅游线路详情
      activeName: 'second'
    }
  },
  created () {
    this.get_route_id()
    this.get_router_desc()
    this.get_router_detail()
  },
  mounted () {
    // http://localhost:8080/course/detail/79?name=lqz&age=18
    console.log(this.$route.params) // 打印出{pk：79}
    console.log(this.$route.query)// 打印出{name：lqz,age:18}
  },
  components: {
    Header,
    Footer
  },
  methods: {
    get_route_id () {
      // 获取地址栏上面的线路ID
      this.route_id = this.$route.params.pk || this.$route.query.pk
      if (this.route_id < 1) {
        const _this = this
        _this.$alert('对不起，当前线路不存在！', '警告', {
          callback () {
            _this.$router.go(-1)
          }
        })
      }
    },
    get_router_desc () {
      // 获取地址栏的旅游线路简介
      this.$axios.get(`${this.$settings.base_url}/travel/router_desc/?routerId=${this.route_id}`).then(response => {
        // window.console.log(response.data);
        this.router_desc = response.data.data[0]
        // console.log(response.data)
        console.log(this.router_desc)
      }).catch(() => {
        this.$message({
          message: '对不起，访问页面出错！请联系客服工作人员！'
        })
      })
    },
    get_router_detail () {
      // ajax请求旅游线路信息详情
      this.$axios.get(`${this.$settings.base_url}/travel/router_desc_detail/?routerId=${this.route_id}`).then(response => {
        // window.console.log(response.data);
        this.router_desc_detail = response.data.data
        console.log(this.router_desc_detail)
      }).catch(() => {
        this.$message({
          message: '对不起，访问页面出错！请联系客服工作人员！'
        })
      })
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>
  @import "../assets/css/itinerary.css";
</style>
