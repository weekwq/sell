
jQuery(document).ready(function($) {

   if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
    };
    function placeholderSupport() {
        return 'placeholder' in document.createElement('input');
    }
    //end

    var can=true;
   $(".ti").click(function(event) { 
      can=false;
      $(".ti").removeClass('show')&&$(this).addClass('show')
      var index=this.id

      var id='#'+'index_'+index

     $("html,body").animate({scrollTop: $(id).offset().top-86}, 700,function(){can=true;});

   });

    function pos()
    {
        var t = $(document).scrollTop();
        var com1=$('#index_1').offset().top-86;
        var com2=$('#index_2').offset().top-86;
        var com3=$('#index_3').offset().top-86;
        if(t>=0&&t<com2){$('.ti').removeClass('show')&&$('.ti').eq(3).addClass('show');}
        else if(t>=com2&&t<1400){$('.ti').removeClass('show')&&$('.ti').eq(2).addClass('show');}
        if(t>=1400){$('.ti').removeClass('show')&&$('.ti').eq(1).addClass('show');} 
    } 
      pos();
    $(window).scroll(function(){
      if(can)
      {
        pos();
      }
      
    }) 
  






});