$(function(){
    //请求域名
    var baseURL = "https://www.easy-mock.com/mock/5bf36194cc4d7e6060d04c51";

    $('#ret_btn').click(function() { 
        var s_value = $('#p_type').val();
        var tValue = $('#text_value').val();
        var sendData = {"type":type, "keyword": tValue};
        var type = 1;
        if(s_value == "姓名"){
            type = 1;
        }else if(s_value == "职位"){
            type = 2;
        }
        //data:data: JSON.stringify(sendData),//使用变量sendData
        $.ajax({
            type: "get",
            url: baseURL+"/Home/Search/searchdetail",
            data: "type="+type+"&keyword="+encodeURI(tValue),
            contentType: "application/json",
            success: function (data) {
                console.log(data);
                window.location.href = "/InviteBid/ExportTemplateFile";
            }
        });
        
    });
})