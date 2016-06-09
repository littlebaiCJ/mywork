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
                var futureDate = new Date(),
                    nowDate = new Date(),
                    h_inn = $('.count-down').eq(i).find('span').eq(0),
                    m_inn = $('.count-down').eq(i).find('span').eq(1),
                    s_inn = $('.count-down').eq(i).find('span').eq(2);

                futureDate.setFullYear(2016, 05, 10);
                futureDate.setHours(12);
                futureDate.setMinutes(00);
                futureDate.setSeconds(00);

                var time = (futureDate.getTime() - nowDate.getTime()) / 1000,
                    s = parseInt(time % 60),
                    m = parseInt((time / 60) % 60),
                    h = parseInt(time / 3600);

                if (s <= 0 && m <= 0 && h <= 0) {
                    $('.count-down').text('活动已下架~');
                }

                if (s < 10) {
                    s = '0' + s;
                }
                if (m < 10) {
                    m = '0' + m;
                }
                if (h < 10) {
                    h = '0' + h;
                }

                s_inn.text(s);
                m_inn.text(m);
                h_inn.text(h);
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
        if ($('#province').find('option:selected').val() != 0) {
            $('#city').removeAttr('disabled');
        } else {
            $('#city').attr('disabled', '');
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
