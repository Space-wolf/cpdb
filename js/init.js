$(function () {
    //批量数据分析选项卡切换
    $('.tfinfo_names li').click(function() {
        $(this).addClass('licheck').siblings().removeClass('licheck');
        console.log($('tf_box .figure_box').eq($(this).index()));
        $('.figure_box li').eq($(this).index()).addClass('show').siblings().removeClass('show');
    })

    var age_figure = echarts.init(document.getElementById('age_figure'));
    
    var option = {

        legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 10,
            left: 'center',
            data: ['55岁', '56岁', '57岁', '58岁', '59岁', '60岁', '61岁', '62岁', '63岁', '64岁', '90岁']
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: [
                    { value: 456, name: '55岁' },
                    { value: 535, name: '56岁' },
                    { value: 510, name: '57岁' },
                    { value: 634, name: '58岁' },
                    { value: 735, name: '59岁' },
                    { value: 862, name: '60岁' },
                    { value: 156, name: '61岁' },
                    { value: 458, name: '62岁' },
                    { value: 354, name: '63岁' },
                    { value: 255, name: '64岁' },
                    { value: 55, name: '90岁' },
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    age_figure.setOption(option);

    console.log(document.getElementById('age_figure'));
    function convertCanvasToImage() {
        html2canvas(document.getElementById('age_figure'), {
                onrendered: function(canvas) {
                    createPDFObject(canvas.toDataURL("image/jpeg"));
                }
        });
    }

    function createPDFObject(imgData) {
        //默认a4纸张
        var doc = new jsPDF('p', 'pt',"a3");
        doc.addImage(imgData, 5, 5, 1000, 310, 'img');
        doc.save('GCXDATA_PDF.pdf');
    }
    
    $('#export').click(function(){
        convertCanvasToImage();
    });
    
});