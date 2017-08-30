<template>
    
    <div id="app" class="mian-layout" >
            <!--头部-->
            <div class="layout-ceiling" v-if="$route.path.indexOf('/admin') == -1">
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
            <div class="layout-header"  v-if="$route.path.indexOf('/admin') == -1">
                <div class="container">
                    <Menu mode="horizontal" active-name="1">
                        <div class="layout-logo">Front Club</div>
                        <div class="layout-nav">

                            <router-link to="/" tag="a">
                                <Menu-item name="index">
                                    <Icon type="aperture"></Icon>
                                    首页
                                </Menu-item>
                            </router-link>
                            <router-link to="/docs" tag="a">
                                <Menu-item name="docs">
                                    <Icon type="ios-navigate"></Icon>
                                    资源
                                </Menu-item>
                            </router-link>
                            <router-link to="/admin" tag="a">
                                <Menu-item name="3">
                                    <Icon type="ios-keypad"></Icon>
                                    工具
                                </Menu-item>
                             </router-link>
                            <Menu-item name="4">
                                <Icon type="ios-analytics"></Icon>
                                API接口
                            </Menu-item>
                            <Menu-item name="5">
                                <Icon type="ios-paper"></Icon>
                                前端大全
                            </Menu-item>
                            <router-link to="/about" tag="a">
                                <Menu-item name="about">
                                    <Icon type="android-happy"></Icon>
                                    ABOUT US
                                </Menu-item>
                            </router-link>
                        </div>
                    </Menu>
                </div>
            </div>
            <!--内容区域-->
            <keep-alive>
                <router-view v-wechat-title="$route.meta.title"></router-view>
            </keep-alive>
            <!--底部版权-->
            <div class="layout-copy" v-if="$route.path.indexOf('/admin') == -1">
                2011-2017 &copy; Front Sir 技术支持
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
.mian-layout {
    width:100%;
    height:100%;
    .admin ,.front{
        height:100%;
    }
}

</style>
