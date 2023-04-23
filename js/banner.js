(function () {
    var banner = document.getElementById('banner');
    var carousel_list = document.getElementById('carousel_list');
    var circles = document.getElementById('circles');
    var circle_lis = circles.getElementsByTagName('li');


    //克隆第一张图
    var clone_li = carousel_list.firstElementChild.cloneNode(true);
    //上树
    carousel_list.appendChild(clone_li);

    var idx = 0;

    // 节流锁
    var lock = true;

    //自动轮播
    var auto_carousel = function () {

        // 判断节流锁的状态，如果是关闭的，那么就什么都不做
        if (!lock) return;
        // 关锁
        lock = false;

        //加上过渡
        carousel_list.style.transition = 'transform .5s ease 0s';

        //idx递增
        idx++;

        //拉动
        carousel_list.style.transform = 'translateX(' + -25 * idx + '%)';

        if (idx > 2) {
            //延时器
            setTimeout(function () {
                //去掉过渡
                carousel_list.style.transition = 'none';
                //删除transform属性
                carousel_list.style.transform = 'none';
                idx = 0;
            }, 500)
            setCircles();
            // 开锁，动画结束之后开锁
            setTimeout(function () {
                lock = true;
            }, 500);
        }
        setCircles();
        // 开锁，动画结束之后开锁
        setTimeout(function () {
            lock = true;
        }, 500);
    }

    //设置小圆点
    function setCircles() {
        for (var i = 0; i < 3; i++) {
            if (i == idx % 3) {
                circle_lis[i].className = 'current';
            } else {
                circle_lis[i].className = '';
            }
        }
    }

    //小圆点事件监听
    circles.onclick = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            var n = Number(e.target.getAttribute('data-n'));
            idx = n;
            //加上过渡
            carousel_list.style.transition = 'transform .5s ease 0s';
            //拉动
            carousel_list.style.transform = 'translateX(' + -25 * idx + '%)';

        }
        setCircles();
    }

    //定时器：图片自动轮播，每2s切换一次图片
    var timer = setInterval(auto_carousel, 2000);

    //鼠标移入轮播图时，停止轮播
    banner.onmouseover = function () {
        clearInterval(timer);
    }

    //鼠标移出轮播图时，自动轮播
    banner.onmouseleave = function () {
        clearInterval(timer);
        timer = setInterval(auto_carousel, 2000);
    }

})();