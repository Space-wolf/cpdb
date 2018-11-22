$(function () {
    var age_figure = echarts.init(document.getElementById('age_figure'));

    var option = {
        backgroundColor: '#fff',
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
                    { value: 456, name: '55岁' ,itemStyle: {color: '#96a8b1'} },
                    { value: 535, name: '56岁' ,itemStyle: {color: '#93a591'}},
                    { value: 510, name: '57岁' ,itemStyle: {color: '#576f69'}},
                    { value: 634, name: '58岁' ,itemStyle: {color: '#363d46'}},
                    { value: 735, name: '59岁' ,itemStyle: {color: '#8b7b82'}},
                    { value: 862, name: '60岁' ,itemStyle: {color: '#523347'}},
                    { value: 156, name: '61岁' ,itemStyle: {color: '#803941'}},
                    { value: 458, name: '62岁' ,itemStyle: {color: '#ae7757'}},
                    { value: 354, name: '63岁' ,itemStyle: {color: '#d0ba98'}},
                    { value: 255, name: '64岁' ,itemStyle: {color: '#ed5e51'}},
                    { value: 55, name: '90岁' ,itemStyle: {color: '#dfdbe7'}},
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

    function convertCanvasToImage(ele) {
        html2canvas(document.getElementById(ele), {
            onrendered: function (canvas) {

                var contentWidth = canvas.width;
                var contentHeight = canvas.height;

                //一页pdf显示html页面生成的canvas高度;
                var pageHeight = contentWidth / 592.28 * 841.89;
                //未生成pdf的html页面高度
                var leftHeight = contentHeight;
                //页面偏移
                var position = 0;
                //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                var imgWidth = 595.28;
                var imgHeight = 592.28 / contentWidth * contentHeight;
                var pageData = canvas.toDataURL("image/jpeg", 1.0);
                //默认a4纸张
                var pdf = new jsPDF('', 'pt', "a4");
                if (leftHeight < pageHeight) {
                    pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                } else {
                    while (leftHeight > 0) {
                        pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                        leftHeight -= pageHeight;
                        position -= 841.89;
                        //避免添加空白页
                        if (leftHeight > 0) {
                            pdf.addPage();
                        }
                    }
                }
                pdf.save('a4.pdf');
            }
        });
    }

    $('#export').click(function () {
        convertCanvasToImage("age_figure");
    });
})