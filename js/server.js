$(function(){
    //请求域名
    var baseURL = "http://gbrssj.hylanda.com/";

    $('#ret_btn').click(function() { 
        var s_value = $('#p_type').val();
        var tValue = $('#text_value').val();
        var type = 1;
        if(s_value == "姓名"){
            type = 1;
        }else if(s_value == "职位"){
            type = 2;
        }

        $.ajax({
            type: "post",
            url: baseURL+"/Home/Search/searchdetail",
            data: "type="+type+"&keyword="+encodeURI(tValue),
            dataType: "json",
            success: function (data) {
                console.log(data);
            }
        });
        
    });
})