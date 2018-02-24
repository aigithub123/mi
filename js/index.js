/* 
* @Author: lenovo
* @Date:   2018-02-22 17:05:57
* @Last Modified by:   lenovo
* @Last Modified time: 2018-02-24 16:50:26
*/

$(document).ready(function(){
     // $('#mi .nav ul li').eq(0).hover(function(){
        // 	 $('#mi .nav ul li').eq(0).find('.subUl').stop().slideDown('1500');
        // },function(){
        //      $('#mi .nav ul li').eq(0).find('.subUl').stop().slideUp('1500');
        // });
          $('#mi .nav .firstUl li').eq(0).hover(function(){
        	  $('#mi .nav .firstUl li').eq(0).find('.subUl').stop().slideDown('1500');
        },function(){
            $('#mi .nav .firstUl li').eq(0).find('.subUl').stop().slideUp('1500');
        });
              $('.two').hover(function(){
        	  $('.two').find('.subUl').stop().slideDown('1500');
        },function(){
            $('.two').find('.subUl').stop().slideUp('1500');
        });
        $('.three').hover(function(){
        	  $('.three').find('.subUl').stop().slideDown('1500');
        },function(){
            $('.three').find('.subUl').stop().slideUp('1500');
        });
          $('.four').hover(function(){
        	  $('.four').find('.subUl').stop().slideDown('1500');
        },function(){
            $('.four').find('.subUl').stop().slideUp('1500');
        });
            $('.five').hover(function(){
        	  $('.five').find('.subUl').stop().slideDown('1500');
        },function(){
            $('.five').find('.subUl').stop().slideUp('1500');
        });
          $('.six').hover(function(){
        	  $('.six').find('.subUl').stop().slideDown('1500');
        },function(){
            $('.six').find('.subUl').stop().slideUp('1500');
        });
            $('.three').hover(function(){
        	  $('.three').find('.subUl').stop().slideDown('1500');
        },function(){
            $('.three').find('.subUl').stop().slideUp('1500');
        });
        $('.seven').hover(function(){
        	  $('.seven').find('.subUl').stop().slideDown('1500');
        },function(){
            $('.seven').find('.subUl').stop().slideUp('1500');
        });
        var input=document.querySelector('input');
        var searchUl=document.querySelector('.searchUl');
        var sousuo=document.querySelector('.sousuo');
        input.onclick=function(){
        searchUl.style.display='block';
        }
        input.onblur=function(){
        	 searchUl.style.display='';
        }
        var mySwiper=new Swiper('.swiper-container',{
        	direction: 'horizontal',
            loop: true,
            autoplay:true,
            speed:2000,
            pagination:'.swiper-pagination',
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next'
        });
        //star开始
        (function(){
            var btn=document.querySelectorAll("#mi .btn i");
            var $show=$("#mi .star .show");
            var p=$show.position();
            console.log(p);
           btn[0].onclick=function(){
            $show.stop().animate({marginLeft:-0*1226+"px"},2000)
            this.className="iconfont icon-arrow-left able";
             btn[1].className="iconfont icon-youjiantou";
           }
            btn[1].onclick=function(){
            $show.stop().animate({marginLeft:-1*1226+"px"},2000)
             this.className=" iconfont icon-youjiantou able";
             btn[0].className="iconfont icon-arrow-left";
           }
           //自动轮播
           auto();
           function auto(){
             if(p.left>0){
               $show.stop().animate({marginLeft:-1*1226+"px"},2000)
               console.log(p.left)
               if(p.left==-1226){
                    $show.stop().animate({marginLeft:-0*1226+"px"},2000)
               }
             }
           }
        })();
        //向上滑动效果
        (function(){
        	var $li=$("#mi .smartyingjian ul.right li");
        	$li.hover(function(){
             $(this).stop().animate({top:-6+"px",textShadow:'0px 4px 4px red'},600);
        	},function(){
              $(this).stop().animate({top:0+"px"},600);
        	})
        	var $content=$("#mi .dapei ul.goodlist li.content");
        	var $content1=$("#mi .dapei ul.goodlist li.content1");
        	console.log($content1)
        	var $content3=$("#mi .dapei ul.goodlist li.content3");
        	var $content5=$("#mi .dapei ul.goodlist li.content5");
        	var $content7=$("#mi .dapei ul.goodlist li.content7");
        	var $hide1=$("#mi .dapei ul.goodlist li.content1 .hide");
        	var $hide3=$("#mi .dapei ul.goodlist li.content3 .hide");
        	var $hide5=$("#mi .dapei ul.goodlist li.content5 .hide");
        	var $hide7=$("#mi .dapei ul.goodlist li.content7 .hide");
        	$hide1.hide();$hide3.hide();$hide5.hide();$hide7.hide();
        	$content.hover(function() {
        		/* Stuff to do when the mouse enters the element */
        		 $(this).stop().animate({top:-6+"px",textShadow:'0px 4px 4px red'},600);
        	}, function() {
        		/* Stuff to do when the mouse leaves the element */
        		$(this).stop().animate({top:0+"px"},600);
        	});
            $content1.hover(function(){
        		 $(this).stop().animate({top:-6+"px",textShadow:'0px 4px 4px red'},600);
                 $hide1.stop().show(1000).css({bottom:0+"px",left:0+"px"});
        	},function(){
        		$(this).stop().animate({top:0+"px"},600);
        		$hide1.stop().hide(1000);
        	});
            $content3.hover(function(){
        		 $(this).stop().animate({top:-6+"px",textShadow:'0px 4px 4px red'},600);
                 $hide3.stop().show(1000).css({bottom:0+"px",left:0+"px"});
        	},function(){
        		$(this).stop().animate({top:0+"px"},600);
        		$hide3.stop().hide(1000);
        	});
        	 $content5.hover(function(){
        		 $(this).stop().animate({top:-6+"px",textShadow:'0px 4px 4px red'},600);
                 $hide5.stop().show(1000).css({bottom:0+"px",left:0+"px"});
        	},function(){
        		$(this).stop().animate({top:0+"px"},600);
        		$hide5.stop().hide(1000);
        	});
        	$content7.hover(function(){
        		 $(this).stop().animate({top:-6+"px",textShadow:'0px 4px 4px red'},600);
                 $hide7.stop().show(1000).css({bottom:0+"px",left:0+"px"});
        	},function(){
        		$(this).stop().animate({top:0+"px"},600);
        		$hide7.stop().hide(1000);
        	});
            var $firstLi=$("#mi .dapei .right ul li.firstLi");
            var $secondLi=$("#mi .dapei .right ul li.secondLi");
            var $thirdLi=$("#mi .dapei .right ul li.thirdLi");
            var $fouthLi=$("#mi .dapei .right ul li.fouthLi");
             $firstLi.hover(function(){
             	$(this).stop().css({color:"#ff6600",borderBottom:"solid 2px #ff6600"})
             },function(){
                $(this).stop().css({color:"",borderBottom:""})
             })
              $secondLi.hover(function(){
             	$(this).stop().css({color:"#ff6600",borderBottom:"solid 2px #ff6600"})
             },function(){
                $(this).stop().css({color:"",borderBottom:""})
             })
              $thirdLi.hover(function(){
             	$(this).stop().css({color:"#ff6600",borderBottom:"solid 2px #ff6600"})
             },function(){
                $(this).stop().css({color:"",borderBottom:""})
             })
             $fouthLi.hover(function(){
             	$(this).stop().css({color:"#ff6600",borderBottom:"solid 2px #ff6600"})
             },function(){
                $(this).stop().css({color:"",borderBottom:""})
             })
             var $goodlist1=$(".firstLi").find(".goodlist1");
             var $goodlist2=$(".secondLi").find(".goodlist2")
             var $goodlist3=$(".thirdLi").find(".goodlist3")
             var $goodlist4=$(".fouthLi").find(".goodlist4")
             $goodlist1.show();
             $firstLi.hover(function(){
	              $goodlist1.stop().show();
	              $goodlist2.hide();
	              $goodlist3.hide();
	              $goodlist4.hide()
             });
             $secondLi.hover(function(){
	             $goodlist1.hide();
	              $goodlist2.stop().show();
	              $goodlist3.hide();
	              $goodlist4.hide()	
             })
             $thirdLi.hover(function(){
	              $goodlist1.hide();
	              $goodlist3.stop().show();
	              $goodlist2.hide();
	              $goodlist4.hide()	
             })
              $fouthLi.hover(function(){
	              $goodlist1.hide();
	              $goodlist4.stop().show();
	              $goodlist2.hide();
	              $goodlist3.hide()	
             })
        
        })();
                //内容部分1
             (function(){
             	var $innerUl1=$("#mi .contenting .totalUl li.firstLi ul.inner");
             	var $left=$("#mi .contenting .totalUl li.firstLi ul.inner li.innerLi .left");
             	var $right=$("#mi .contenting .totalUl li.firstLi ul.inner li.innerLi .right");
             	var $tabLi=$("#mi .contenting .totalUl li.firstLi ul.inner li.innerLi ul.tab li");
             	var index=0;
             	$left.stop().click(function(){
             		index--;
             		if(index<=0){
                        index=0;
             		}
             		$innerUl1.animate({marginLeft:-index*296+"px"},1000);
             		// if(index<=0){
               //          index=0;
             		// }
             	});
             		$right.stop().click(function(){
             		index++;
             		if(index>=2){
                        index=2;
             		}
             		$innerUl1.animate({marginLeft:-index*296+"px"},1000);
             	});
                 $tabLi.click(function(){
                 	$innerUl1.animate({marginLeft:-$(this).index()*296+"px"},1000)
                 })
             })();
             //内容部分2
             (function(){
             	var $innerUl2=$("#mi .contenting .totalUl li.secondLi ul.inner");
             	var $left=$("#mi .contenting .totalUl li.secondLi ul.inner li.innerLi .left");
             	var $right=$("#mi .contenting .totalUl li.secondLi ul.inner li.innerLi .right");
             	var $tabLi=$("#mi .contenting .totalUl li.secondLi ul.inner li.innerLi ul.tab li");
             	var index=0;
             	$left.stop().click(function(){
             		index--;
             		if(index<=0){
                        index=0;
             		}
             		$innerUl2.animate({marginLeft:-index*296+"px"},1000);
             		// if(index<=0){
               //          index=0;
             		// }
             	});
             		$right.stop().click(function(){
             		index++;
             		if(index>=3){
                        index=3;
             		}
             		$innerUl2.animate({marginLeft:-index*296+"px"},1000);
             	});
                 $tabLi.click(function(){
                 	$innerUl2.animate({marginLeft:-$(this).index()*296+"px"},1000)
                 })
             })();
             //内容部分3
             (function(){
             	var $innerUl3=$("#mi .contenting .totalUl li.thirdLi ul.inner");
             	var $left=$("#mi .contenting .totalUl li.thirdLi ul.inner li.innerLi .left");
             	var $right=$("#mi .contenting .totalUl li.thirdLi ul.inner li.innerLi .right");
             	var $tabLi=$("#mi .contenting .totalUl li.thirdLi ul.inner li.innerLi ul.tab li");
             	var index=0;
             	$left.stop().click(function(){
             		index--;
             		if(index<=0){
                        index=0;
             		}
             		$innerUl3.animate({marginLeft:-index*296+"px"},1000);
             		// if(index<=0){
               //          index=0;
             		// }
             	});
             		$right.stop().click(function(){
             		index++;
             		if(index>=3){
                        index=3;
             		}
             		$innerUl3.animate({marginLeft:-index*296+"px"},1000);
             	});
                 $tabLi.click(function(){
                 	$innerUl3.animate({marginLeft:-$(this).index()*296+"px"},1000)
                 })
             })();
              //内容部分4
             (function(){
             	var $innerUl4=$("#mi .contenting .totalUl li.fouthLi ul.inner");
             	var $left=$("#mi .contenting .totalUl li.fouthLi ul.inner li.innerLi .left");
             	var $right=$("#mi .contenting .totalUl li.fouthLi ul.inner li.innerLi .right");
             	var $tabLi=$("#mi .contenting .totalUl li.fouthLi ul.inner li.innerLi ul.tab li");
             	var index=0;
             	$left.stop().click(function(){
             		index--;
             		if(index<=0){
                        index=0;
             		}
             		$innerUl4.animate({marginLeft:-index*296+"px"},1000);
             		// if(index<=0){
               //          index=0;
             		// }
             	});
             		$right.stop().click(function(){
             		index++;
             		if(index>=3){
                        index=3;
             		}
             		$innerUl4.animate({marginLeft:-index*296+"px"},1000);
             	});
                 $tabLi.click(function(){
                 	$innerUl4.animate({marginLeft:-$(this).index()*296+"px"},1000)
                 })
             })();
             //首页弹窗
             // (function(){
             	
             // 	 var $main=$("#mi .video  ul.videoShowArea li .cover ");
             // 	 $close=$("#mi .video  ul.videoShowArea li .cover .main .title .close");
             // 	 $("#mi .video  ul.videoShowArea li .btn").click(function(){
             //        $(this).parent().find(".cover").fadeIn(600)
             // 	  });
             // 	 $close.eq(0).click(function(){
             // 	 	$main.eq(0).animate({top:-200+"px"}, 1000).fadeOut(1000)
             // 	 });
             // 	 $close.eq(1).click(function(){
             // 	 	$main.eq(1).animate({top:-200+"px"}, 1000).fadeOut(1000)
             // 	 });
             // 	 $close.eq(2).click(function(){
             // 	 	$main.eq(2).animate({top:-200+"px"}, 1000).fadeOut(1000)
             // 	 });
             // 	 $close.eq(3).click(function(){
             // 	 	$main.eq(3).animate({top:-200+"px"}, 1000).fadeOut(1000)
             // 	 });
             // })()
              (function(){
             	var $cover=$("#mi .video  ul.videoShowArea li .cover")
             	 var $main=$("#mi .video  ul.videoShowArea li .cover .main ");
             	 $close=$("#mi .video  ul.videoShowArea li .cover .main .title .close");
             	 $("#mi .video  ul.videoShowArea li .btn").click(function(){
                    $(this).parent().find(".cover").fadeIn(600)
             	  });
             	 $close.eq(0).click(function(){
             	 	$main.eq(0).animate({marginTop:-200+"px"}, 1000).fadeOut(1000);
             	 	$cover.eq(0).delay(1000).fadeOut();
             	 });
             	 $close.eq(1).click(function(){
             	 	$main.eq(1).animate({marginTop:-200+"px"}, 1000).fadeOut(1000);
             	 	$cover.eq(1).delay(1000).fadeOut();
             	 });
             	 $close.eq(2).click(function(){
             	 	$main.eq(2).animate({marginTop:-200+"px"}, 1000).fadeOut(1000);
             	 	$cover.eq(2).delay(1000).fadeOut();
             	 });
             	 $close.eq(3).click(function(){
             	 	$main.eq(3).animate({marginTop:-200+"px"}, 1000).fadeOut(1000);
             	 	$cover.eq(3).delay(1000).fadeOut();
             	 });
             
  })()
});