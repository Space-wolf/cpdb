$(function(){
    //请求域名
    var baseURL = "https://www.easy-mock.com/mock/5bf36194cc4d7e6060d04c51";
    
    $('#ret_btn').click(function() { 
        var s_value = $('#p_type').val();
        console.log(s_value);
        var tValue = $("input[name='keyword']").val();
        window.location.href = "/cpdb/html/conditions.html?type="+s_value+"&keyword="+tValue; 
        return;
    });

    // var sendData = {"type":s_value, "keyword": tValue};

    // $.ajax({
    //     type: "post",
    //     url: baseURL+"/Home/Search/searchdetail",
    //     data: JSON.stringify(sendData),
    //     contentType: "application/json",
    //     success: function (data) {
    //         if(!status){
    //             console.log(data);
                
    //         }
            
    //     }
    // });
})