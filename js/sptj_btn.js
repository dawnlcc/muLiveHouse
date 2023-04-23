(function(){

    //获取元素
    var rightBtn = document.getElementById('rightbtn1');
    var leftBtn = document.getElementById('leftbtn1');
    var bannerUl = document.getElementById('banner-ul1'); 

    //全局变量idx
    var idx=0;


    // 右按钮事件监听
    rightBtn.onclick = right_btn_handler;
    //右按钮事件处理函数
    function right_btn_handler () {
        //idx递增
        idx++;

        //拉动
        bannerUl.style.left = -221*idx+'px';

        // 判断是否是最后一张，如果是最后一张，不再切换
        if (idx > 4) {
            idx=5;
            bannerUl.style.left = -221*idx+'px';
        }
    }


    // 左按钮事件监听
    leftBtn.onclick = function(){

        if (idx==0){
            bannerUl.style.left = -221*idx+'px';
            // 改变idx的值:最后一张图
        }else{
           //idx递减
            idx--;
            //拉动
            bannerUl.style.left = -221*idx+'px'; 
        }
    }
})();