<template>
    <div class="container">
        <!--首页搜索-->
        <my-search></my-search>

        <Row class="slider">
            <!--左侧幻灯-->
            <Col span="18" >
                <Carousel
                    v-model="value3"
                    :autoplay="setting.autoplay"
                    :autoplay-speed="setting.autoplaySpeed"
                    :dots="setting.dots"
                    :trigger="setting.trigger"
                    :arrow="setting.arrow">
                    <Carousel-item>
                        <div class="slider-pic">
                            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2810331871,293459414&fm=23&gp=0.jpg" alt="">
                        </div>
                    </Carousel-item>
                    <Carousel-item>
                        <div class="slider-pic">
                            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2810331871,293459414&fm=23&gp=0.jpg" alt="">
                        </div>
                    </Carousel-item>
                     
                </Carousel>       
            </Col>
            <Col span="6" >
            <!--右侧登录-->
            <Tabs class="user-box">
                <Tab-pane label="热门标签" icon="hammer" class="login">
                    <Card  class="tag-box">
                        <p slot="title">
                            <Icon type="social-html5-outline"></Icon>
                            热门技术榜
                        </p>
                        <a href="#" slot="extra" @click.prevent="changeLimit">
                            <Icon type="ios-loop-strong"></Icon>
                            换一波
                        </a>
                        <ul>
                            <li v-for="item in randomMovieList">
                                <a :href="item.url" target="_blank">{{ item.name }}</a>
                                <span class="star">
                                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon>
                                    <Icon type="ios-star" v-if="item.rate >= 9.5"></Icon>
                                    <Icon type="ios-star-half" v-else></Icon>
                                    {{ item.rate }}
                                </span>
                            </li>
                        </ul>
                    </Card>
                </Tab-pane>

                <Tab-pane label="登录" icon="paper-airplane" class="regier">
                     
                    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                        <Form-item prop="user">
                            <Input type="text" v-model="formInline.user" placeholder="Username">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </Form-item>
                        <Form-item prop="password">
                            <Input type="password" v-model="formInline.password" placeholder="Password">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </Input>
                        </Form-item>
                        <Form-item>
                            <router-link to="/" class="fr">忘记密码？</router-link>
                        </Form-item>
                        <Form-item>
                            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                        </Form-item>
                    </Form>
                </Tab-pane>
               
            </Tabs>
            </Col>
        </Row>
       <!--热门资讯排行-->
       <div class="hot">
            <div class="selectMenu">
                <!--知名门户-->
                <Select v-model="curHotSite" 
                        class="site" >
                    <Option v-for="item in HotSiteLists" 
                            :value="item.value"                            
                            @click.native="getOtherHot(item.value)"
                            :key="item.value">{{ item.label }}
                    </Option>
                </Select>
                <!--GitHub类型-->
                <Select v-model="curHotType" 
                        class="HotType"
                        v-show="!layoutType">
                    <Option v-for="item in HotTypeLists" 
                            :value="item.value"
                            @click.native="getHotData('github')"
                            :key="item.value">{{ item.label }}
                    </Option>
                </Select>
                <!--时间-->
                <Select v-model="curDateType" class="DateType"
                        v-show="!layoutType">
                    <Option v-for="item in DateTypeLists" 
                            :value="item.value"
                            @click.native="getHotData('github')"
                            :key="item.value">{{ item.label }}
                    </Option>
                </Select>
                <!--技术类型-->
                <Select v-model="curHotLang" class="HotLang" 
                        v-show="!layoutType">
                    <Option v-for="item in HotLangLists" 
                            :value="item.value"
                            @click.native="getHotData('github')"
                            :key="item.value">{{ item.label }}
                    </Option>
                </Select>
            </div>
            <!--内容-->
            <div class="spin" v-if="spinShow">
                <Spin size="large" fix ></Spin>                
            </div>
            <div v-else>
                <ul class="list" v-if="layoutType">
                    <li v-for="item in hotLists">
                        <h3> <a :href="item.url" target="_blank">{{item.title}}</a></h3>
                        <p class="date" v-if="item.date.iso">{{item.date.iso.substring(0,10)}}</p>
                    </li>
                </ul>
                <ul class="box" v-else>
                    <li v-for="item in hotLists" >
                        <div class="item" :style="{ 'borderTopColor': BTColor()}">
                            <a :href="item.url" target="_blank">
                                <Icon type="social-github"></Icon>
                                {{item.username}} /<b> {{item.reponame}}</b>
                            </a>
                            <p>{{item.description}}</p>
                            <div class="info">
                                <span class="lang">{{item.lang}}</span>
                                <span class="star-count">
                                    <Icon type="android-star"></Icon>
                                    {{item.starCount}}
                                </span>
                                <span class="fork-count">
                                    <Icon type="fork-repo"></Icon>
                                    {{item.forkCount}}
                                </span>
                            </div>
                        </div> 
                    </li>
                </ul>
            </div>
            
            
       </div>
    
    </div>

         
    
    
</template>

<script src="./index.js"></script>
<style lang="scss">
    @import './index.scss'
</style>