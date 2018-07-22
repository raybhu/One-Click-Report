// ==UserScript==
// @name         一键举报 for 百度贴吧
// @namespace    https://github.com/raizocn/One-Click-Report
// @version      0.1
// @description  在浏览百度贴吧时，在每一个帖子左上角显示的回复数位置加入一个"举报"按键
// @author       Raizo_cn
// @supportURL   https://github.com/raizocn/One-Click-Report
// @grant        none

// @include        http://tieba.baidu.com/*
// @include        https://tieba.baidu.com/*
// @match          http://tieba.baidu.com/*
// @match          https://tieba.baidu.com/*
// @run-at              context-menu
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var append_div = document.getElementsByClassName(' j_thread_list clearfix');
    var append_location = document.getElementsByClassName('col2_left j_threadlist_li_left');

    var x, i;

    for (i=0; i<append_location.length; i++) {


        x = append_location[i];
        var btn = document.createElement('a');
        btn.innerText = '举报';
        btn.setAttribute('href', '#')
        var id = JSON.parse(append_div[i].getAttribute('data-field')).id;
        var first_post_id = JSON.parse(append_div[i].getAttribute('data-field')).first_post_id;
        var oneclickContent = "window.open('http://tieba.baidu.com/complaint/info?type=2&cid=0&tid=" + id + "&pid=" + first_post_id + "','newwindow', 'height=900, width=800, toolbar =no, menubar=no, scrollbars=yes, resizable=yes, location=no, status=no');return false;"
        console.log(oneclickContent)
        btn.setAttribute('onclick',oneclickContent)
        x.appendChild(btn)
    }

    console.log("done");
})();