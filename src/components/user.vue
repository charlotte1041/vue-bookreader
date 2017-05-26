<template>
    <div class="user">
        <div class="header">
            <img src="/src/assets/images/touxiang.jpg" alt="" class="mypic">
            <p>
                <router-link tag="a" to="/login">登录</router-link>
                <router-link tag="a" to="/reg">注册</router-link>
            </p>
            <ul>
                <li>收藏夹</li>
                <li>|</li>
                <li>足迹</li>
            </ul>
        </div>
        <ul class="middle">
            <li>
                <span>社区论坛</span>
                <i class="iconfont">&#xe6a7;</i>
            </li>
            <li>
                <span>联系客服</span>
                <i class="iconfont">&#xe6a7;</i>
            </li>
            <li>
                <span>发表的评论</span>
                <i class="iconfont">&#xe6a7;</i>
            </li>
            <li>
                <span>收件箱</span>
                <i class="iconfont">&#xe6a7;</i>
            </li>
            <li>
                <span>发件箱</span>
                <i class="iconfont">&#xe6a7;</i>
            </li>
            <li>
                <span>设置</span>
                <i class="iconfont">&#xe6a7;</i>
            </li>
        </ul>
    </div>
</template>