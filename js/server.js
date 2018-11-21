$(function () {
    

    $('#ret_btn').click(function () {
        var s_value = $('#p_type').val();
        var tValue = $("input[name='keyword']").val();
        if(tValue!=""){
            window.location.href = "/cpdb/html/searchresult.html?type=" + s_value + "&keyword=" + tValue;
        }else{
            window.location.href = "/cpdb/html/searchresult.html";
        }
        
    });

    searchResult = function () {
        //var sendData = { "type": svalue, "keyword": tValue };
        var url = location.search;
        var theRequest = new Object();
        var baseURL = "https://www.easy-mock.com/mock/5bf36194cc4d7e6060d04c51";
        if (url.indexOf("?") != -1) {
            var str = url.slice(1);
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split('=')[1]);
            }

            $.ajax({
                type: "post",
                url: baseURL + "/Home/Search/searchdetail",
                data: JSON.stringify(theRequest),
                contentType: "application/json",
                success: function (data) {
                    if (!status) {
                        console.log(data.data);
                        for(var i=0;i<data.data.length;i++){
                            console.log(data.data[i].photo_url);
                            $('.resulf_items').append("<li class='resulf_item fl'><img src='"+data.data[i].photo_url+"' alt='' class='fl'>"
                            +"<div class='text_info fl'><div class='info_top'><div class='top_left fl'><a href='' class='position fourteen'>"+data.data[i].position
                            +"</a><a href='' class='peo_name fourteen'>"+data.data[i].name+"</a></div><div class='top_center fl'>"
                            +"<span>职位树位置</span><a href='' class='fourteen'>"+data.data[i].newpos_name+"</a></div>"
                            +"<div class='top_right fr'><a href='' class='contrast'>加入对比</a><a href='' class='modify'>修改</a>"
                            +"<a href='' class='collection'>收藏</a></div></div><div class='info_bottom'><ul class='inf_bottom_left fl'>"
                            +"<li class='others'><label class=''>籍贯</label><span>"+data.data[i].nation+"</span>"
                            +"</li><li class='others'><label class=''>籍贯</label><span>"+data.data[i].native+data.data[i].native
                            +"</span></li><li class='others'><label class=''>学历</label><span>+data.data[i].education+</span>"
                            +"</li></ul><ul class='inf_bottom_right fl'><li class='others'><label class='right_label'>出生日期</label>"
                            +"<span>"+data.data[i].birth_date+"</span></li><li class='others'><label class='right_label'>参加工作时间</label>"
                            +"<span>"+data.data[i].work_time+"</span></li><li class='others'><label class='right_label'>入党时间</label>"
                            +"<span>"+data.data[i].party_start+"</span></li></ul><div class='checkbox btn_posi'></div></div></div></li>");
                        }
                    }else{
                        console.log("您的请求地址错误");
                    }
    
                }
            });
        }else{
            return;
        }

        
    }
})