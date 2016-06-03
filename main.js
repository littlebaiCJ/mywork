$(function() {
    /*侧栏商品分类*/
    $('.classify-group li').mouseover(function() {
        var $t = $(this).index();
        $('.classify-float div').eq($t).css({
            display: 'block'
        })
    });
    $('.classify-float div').mouseover(function(event) {
        $('.classify-group li').eq($(this).index()).addClass('active');
        $(this).css({
            display: 'block'
        })
    });
    $('.classify-group li').mouseout(function() {
        var $t = $(this).index();
        $('.classify-float div').eq($t).css({
            display: 'none'
        })
    });

    $('.classify-float div').mouseout(function(event) {
        $('.classify-group li').eq($(this).index()).removeClass('active');
        $(this).css({
            display: 'none'
        })
    });
    /*限时活动tab栏*/
    $('.tab-nav li').click(function(event) {
        $('.tab-nav li').removeClass('active');
        $(this).addClass('active');
        var $t = $(this).index();
        $('.tab-content').removeClass('active');
        $('.tab-content').eq($t).addClass('active');
    });

    /*倒计时*/
    function countdown() {
        setInterval(function() {
            for (var i = 0; i < $('.count-down').length; i++) {
                var hours = $('.count-down').eq(i).find('span').eq(0).text();
                var minute = $('.count-down').eq(i).find('span').eq(1).text();
                var second = $('.count-down').eq(i).find('span').eq(2).text();
                second--;
                if (second < 0) {
                    second = 59;
                } else if (second < 10) {
                    second = '0' + second;
                }
                $('.count-down').eq(i).find('span').eq(2).text(second);
                if (second == "00") {
                    minute--;
                    if (minute < 0) {
                        minute = 59;
                    } else if (minute < 10) {
                        minute = '0' + minute;
                    }
                    $('.count-down').eq(i).find('span').eq(1).text(minute);
                    if (minute == "59") {
                        hours--;
                        if (hours < 10) {
                            hours = '0' + hours;
                        }
                        $('.count-down').eq(i).find('span').eq(0).text(hours);
                    }
                }
            }
        }, 1000)
    }
    countdown();
    /*省市联动层页面居中*/
    function pagemiddle() {
        var page_width = $(window).width(),
            page_height = $(window).height(),
            pcdiv_width = $('.pro-city').width()
        pcdiv_height = $('.pro-city').height();

        $('.pro-city').css({
            top: (page_height - pcdiv_height) / 2,
            left: (page_width - pcdiv_width) / 2
        })
    }
    pagemiddle();
    $(window).resize(pagemiddle);

    /*省市联动*/
    var city_html = $('#city').html();

    $('#province').change(function() {
        var proval = $(this).val();

        $('#city').html(city_html);

        $('#city').find("option[value!='" + proval + "']").remove();
       if($('#province').find('option:selected').val()!=0){
            $('#city').removeAttr('disabled');
       }else {
             $('#city').attr('disabled','');
       }
    });

    $('.place').click(function(event) {
        event.preventDefault();
        $('.opacity-div').css({
            display: 'block'
        })
    });
    $('#cancel').click(function() {
        $('.opacity-div').css({
            display: 'none'
        })
    });
    $('#confirm').click(function() {
        var citytext = $('#city').find('option:selected').text();
        if ($('#city').find('option:selected').val() != 0) {
            $('.place').text(citytext);
            $('.opacity-div').css({
                display: 'none'
            })
        } else {
            alert('请选择您的城市！');
        }
    })
})
