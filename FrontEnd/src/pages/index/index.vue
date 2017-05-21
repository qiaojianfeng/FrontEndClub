<template>
    <div class="container">
                <!--左侧幻灯-->
         <Row class="slider">
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
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495376078064&di=bb08fcd4471c7ff2a6ed91fd9d405784&imgtype=0&src=http%3A%2F%2Fimg.dgtle.com%2Fportal%2F201301%2F17%2F125417kee4tsfdod24h9dn.jpg" alt="">
                        </div>
                    </Carousel-item>
                    <Carousel-item>
                        <div class="slider-pic">
                            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2810331871,293459414&fm=23&gp=0.jpg" alt="">
                        </div>
                    </Carousel-item>
                    <Carousel-item>
                        <div class="slider-pic">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495376078064&di=bb08fcd4471c7ff2a6ed91fd9d405784&imgtype=0&src=http%3A%2F%2Fimg.dgtle.com%2Fportal%2F201301%2F17%2F125417kee4tsfdod24h9dn.jpg" alt="">
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
        <!--右侧登录-->
    
    
    </div>

         
    
    
</template>

<script src="./index.js"></script>
<style lang="scss">
    @import './index.scss'
</style>