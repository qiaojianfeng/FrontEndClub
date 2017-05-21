<template>
  <div id="app" class="layout">
        <!--头部-->
        <div class="layout-ceiling">
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
        <div class="layout-header">
            

              <Menu mode="horizontal"  active-name="1">
                <div class="layout-logo">Front Club</div>
                <div class="layout-nav">
                    <Menu-item name="1">
                        <Icon type="ios-navigate"></Icon>
                        导航一
                    </Menu-item>
                    <Menu-item name="2">
                        <Icon type="ios-keypad"></Icon>
                        导航二
                    </Menu-item>
                    <Menu-item name="3">
                        <Icon type="ios-analytics"></Icon>
                        导航三
                    </Menu-item>
                    <Menu-item name="4">
                        <Icon type="ios-paper"></Icon>
                        导航四
                    </Menu-item>
                </div>
            </Menu>

        </div>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        <div style="height: 200px"></div>

        
        <div class="layout-copy">
            2011-2016 &copy; FrontClub
        </div>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style >
  .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
       font-size:20px;
       color:#464c5b;
       font-weight:700;
    
        float: left;
        position: relative;
        top: 0;
        left: 20px;

    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-ceiling{
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
    }
    
    .layout-ceiling-main{
        float: right;
        margin-right: 15px;
    }
     .layout-ceiling-main.fl{
       float:left;
        margin-left: 15px;
     }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
   .layout-nav{
     overflow:hidden;
     padding-left:200px;
     box-sizing:border-box;
   }
</style>
