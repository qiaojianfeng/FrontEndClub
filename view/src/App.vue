<template>
  <div id="app" class="layout">
        <!--头部-->
        <div class="layout-ceiling ">
            <div class="container">
                <!--工具快捷入口-->
                <div class="layout-ceiling-main fl">
                        <span>快捷工具入口 : </span>
                        <a href="#">json格式化</a> |
                        <a href="#">js格式化</a> |
                        <a href="#">ajax接口</a> |
                        <a href="#">开发工具</a>
                    </div>
                    <div class="layout-ceiling-main">
                        <a href="#">注册登录</a> |
                        <a href="#">帮助中心</a> |
                        <a href="#">安全中心</a> |
                        <a href="#">服务大厅</a>
                    </div>
            </div>
        </div>
        <div class="layout-header ">
            <div class="container">
              <Menu mode="horizontal"  active-name="1" >
                <div class="layout-logo">Front Club</div>
                <div class="layout-nav">
                    <Menu-item name="1">
                        <Icon type="aperture"></Icon>
                        首页
                    </Menu-item>
                     
                    <Menu-item name="2">
                        <Icon type="ios-navigate"></Icon>
                        开发文档
                    </Menu-item>
                    <Menu-item name="3">
                        <Icon type="ios-keypad"></Icon>
                        转码工具
                    </Menu-item>
                    <Menu-item name="4">
                        <Icon type="ios-analytics"></Icon>
                        API接口
                    </Menu-item>
                    <Menu-item name="5">
                        <Icon type="ios-paper"></Icon>
                        热门导航
                    </Menu-item>
                </div>
              </Menu>
            </div>
        </div>
        <!--内容区域-->
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
         
          <!--底部版权-->
        
        <div class="layout-copy ">
            2011-2017 &copy; FrontClub
        </div>
            <!--返回顶部-->
         <Back-top></Back-top>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './common/style/base.scss';
</style>
