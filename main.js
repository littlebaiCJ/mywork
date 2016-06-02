
        $(function (){
            /*侧栏商品分类*/
            $('.classify-group li').mouseover(function() {
                var $t=$(this).index();
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
                var $t=$(this).index();
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
                var $t=$(this).index();
                $('.tab-content').removeClass('active');
                $('.tab-content').eq($t).addClass('active');
            });

            /*倒计时*/
            function countdown(){
                setInterval(function (){
                    for(var i=0;i<$('.count-down').length;i++){
                        var second=$('.count-down').eq(i).find('span').eq(2).text();
                        second--;
                        if(second<0){
                            second=59;
                        }else if(second<10){
                            second='0'+second;
                        }
                        $('.count-down').eq(i).find('span').eq(2).text(second);
                        if(second=="00"){
                            var minute=$('.count-down').eq(i).find('span').eq(1).text();
                            minute--;
                            if(minute<0){
                                minute=59;
                            }else if(minute<10){
                                minute='0'+minute;
                            }
                            $('.count-down').eq(i).find('span').eq(1).text(minute);
                            if(minute=="59"){
                                var hours=$('.count-down').eq(i).find('span').eq(0).text();
                                hours--;
                                if (hours<10) {
                                    hours='0'+hours;
                                }else if(hours=="00"){
                                    return false;
                                }
                                $('.count-down').eq(i).find('span').eq(0).text(hours);
                            }
                        }
                    }
                },1000)
            }
            countdown();
        })