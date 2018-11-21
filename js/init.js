$(function () {
    //批量数据分析选项卡切换
    $('.tfinfo_names li').click(function () {
        $(this).addClass('licheck').siblings().removeClass('licheck');
        console.log($('tf_box .figure_box').eq($(this).index()));
        $('.figure_box li').eq($(this).index()).addClass('show').siblings().removeClass('show');
    })

    //条件搜索单选
    $('.cdts_items .ad_item').click(function(){
        stopDefault();
        $(this).addClass('checkColor').siblings().removeClass('checkColor');
    })
    $('.ages_items .ad_item').click(function(){
        stopDefault();
        $(this).addClass('checkColor').siblings().removeClass('checkColor');
    })
    $('.address_items .ad_item').click(function(){
        stopDefault();
        $(this).addClass('checkColor').siblings().removeClass('checkColor');
    })
    $('.education_items .ad_item').click(function(){
        stopDefault();
        $(this).addClass('checkColor').siblings().removeClass('checkColor');
    })
    $('.education_items .list').click(function(){
        stopDefault();
        $(this).addClass('checkColor').siblings().removeClass('checkColor');
    })

    //阻止默认事件函数
    function stopDefault(e) {
        if (e && e.preventDefault)
            e.preventDefault();
        else
            window.event.returnValue = false; //兼容IE
    }

});