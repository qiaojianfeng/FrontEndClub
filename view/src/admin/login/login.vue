<template>
    <div class="login">
        <canvas id="canvas" ref="canvas"></canvas>
        <div class="login-box">
            <h1>Front 管理系统</h1>
            <p class="item">
                <label for="username">用户名：</label>
                <input type="text" id="username" placeholder="输入用户名或手机号">
            </p>
            <p class="item">
                <label for="pwd">密码：</label>
                <input type="password" id="pwd" placeholder="输入密码">
            </p>
            <div class="sign">
                <p class="sign-up">
                    还没有账号？去
                    <a href="###">注册</a>
                </p>
                <button class="sign-in">Sign in</button>
            </div>
            <p class="copyright">
                2011-2017 &copy;
                <a href="#">Front Sir</a> 技术支持
            </p>
        </div>
    </div>
</template>
<script src="./login.js"></script>
<style lang="scss" scoped>
@import './login.scss';
</style>