<template>
    <footer>
        <!--<div class="homeBtn">
            <i class="iconfont">&#xf0175;</i>
            <a href="index.html">主页</a>
        </div>
        <div class="bookListBtn">
            <i class="iconfont">&#x3447;</i>
            <a href="booklist.html">图书</a>
        </div>
        <div class="talk">
            <i class="iconfont">&#xe86f;</i>
            <a href="write.html">随笔</a>
        </div>
        <div class="user">
            <i class="iconfont">&#xf0132;</i>
            <a href="user.html">我的</a>
        </div>-->
        <router-link to="/home" class="homeBtn" tag="div">
            <i class="iconfont">&#xf0175;</i>
            <a href="javascript:;">主页</a>
        </router-link>
        <router-link to="/booklist" class="bookListBtn" tag="div">
            <i class="iconfont">&#x3447;</i>
            <a href="javascript:;">图书</a>
        </router-link>
        <router-link to="/write" class="talk" tag="div">
            <i class="iconfont">&#xe86f;</i>
            <a href="javascript:;">随笔</a>
        </router-link>
        <router-link to="/user" class="user" tag="div">
            <i class="iconfont">&#xf0132;</i>
            <a href="javascript:;">我的</a>
        </router-link>
    </footer>
</template>