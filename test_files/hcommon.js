(function ($) {
var nameUA = navigator.userAgent.toLowerCase();
var isIe678 = (nameUA.match(/ie 6/) || nameUA.match(/ie 7/) || nameUA.match(/ie 8/)) ? true : false;
var isIe67 = (nameUA.match(/ie 6/)||nameUA.match(/ie 7/)) ? true : false;
if(!isIe678) {
    $(function() {
	  $('tr.tr-hover').hover(function() {
	          $(this).addClass('hover');
	  },function() {
	          $(this).removeClass('hover');
	  });
	});
	   }else{}
	 $(function() {
	  $('tbody.tbody-hover').hover(function() {
	  	  if(!isIe678) {
	          $(this).children('tr').addClass('hover');
	      }else{}
	  },function() {
	  	  if(!isIe678) {
	          $(this).children('tr').removeClass('hover');
	      }else{}
	  });
	});
	if(!isIe678) {
		$(function() {
		  $('tr.tr-selected-hover').hover(function() {
		          $(this).addClass('selected-hover');
		  },function() {

		          $(this).removeClass('selected-hover');
		  });
		});
	}else{}
	if(!isIe678) {
		$(function() {
		  $('tbody.tbody-selected-hover').hover(function() {
		          $(this).children('tr').addClass('selected-hover');
		  },function() {
		          $(this).children('tr').removeClass('selected-hover');
		  });
		});
	}else{}
	
$(function() {
  $('tr.tr-hover').hover(function() {
		    if (($(this).find(':checkbox:not(:disabled)').attr('checked')==true) || ($(this).find(':checkbox:not(:disabled)').attr('checked')=="checked")){
			 if(!isIe67){
				 $(this).addClass('selected');
			 }
		      if(!isIe678) {
		         $(this).addClass('selected-hover');
		      }else{}
		    } else {
		      if(!isIe678) {
		         $(this).addClass('hover');
		      }else{}
		      $(this).removeClass('selected');
		    }
  },function() {
		   if (($(this).find(':checkbox:not(:disabled)').attr('checked')==true) || ($(this).find(':checkbox:not(:disabled)').attr('checked')=="checked")){
		      if(!isIe678) {
		          $(this).removeClass('selected-hover');
		       }else{}
			 if(!isIe67){
				 $(this).addClass('selected');
			 }
		    } else {
		     if(!isIe678) {
		          $(this).removeClass('hover');
	          }else{}
		      $(this).removeClass('selected');
		    }
  });
});

$(function() {
  $('tr.tr-hover').click(function() {
		   if (($(this).find(':checkbox:not(:disabled)').attr('checked')==true) || ($(this).find(':checkbox:not(:disabled)').attr('checked')=="checked")){
			   if(!isIe678) {
		         $(this).addClass('selected-hover');
		         $(this).removeClass('hover');
		     }else{}
			 if(!isIe67){
				 $(this).addClass('selected');
			 }
		     
		   } else {
		   	  if(!isIe678) {
		   	  	  $(this).addClass('hover');
		         $(this).removeClass('selected-hover');
		     }else{}
		     $(this).removeClass('selected');
		   }
  });
});
if(!isIe678) {
	$(function() {
	  $('tr.amount-hover').hover(function() {

			 if(!isIe67){
				 $(this).addClass('selected');
			 }

	  },function() {

	          $(this).removeClass('selected');
	      
	  });
	});
}else{}

$(function() {
  $('tbody.tr-hover').hover(function() {
		    if (($(this).find(':checkbox').attr('checked')==true) || ($(this).find(':checkbox').attr('checked')=="checked")){
			      if(!isIe678) {
			          $(this).children('tr').addClass('selected-hover');
			      }else{}

			 if(!isIe67){
				 $(this).children('tr').addClass('selected');
			 }

			      
		    } else {
			      if(!isIe678) {
			          $(this).children('tr').addClass('hover');
			      }else{}
			      $(this).children('tr').removeClass('selected');
		    }
	},function() {
		    if (($(this).find(':checkbox').attr('checked')==true) || ($(this).find(':checkbox').attr('checked')=="checked")){
		      if(!isIe678) {
		          $(this).children('tr').removeClass('selected-hover');
		      }else{}

			  if(!isIe67){
				$(this).children('tr').addClass('selected');
			  }
		      
		    } else {
		      $(this).children('tr').removeClass('selected');
		      if(!isIe678) {
		          $(this).children('tr').removeClass('hover');
		      }else{}
		    }
  });
});

$(function() {
	$('tbody.tr-hover').click(function() {
		   if (($(this).find(':checkbox').attr('checked')==true) || ($(this).find(':checkbox').attr('checked')=="checked")){
		     if(!isIe678) {
		     	 $(this).children('tr').removeClass('hover');
			     $(this).children('tr').addClass('selected-hover');
			 }else{}

			if(!isIe67){
				$(this).children('tr').addClass('selected');
			}
			 
		   } else {
		   	 if(!isIe678) {
		   	 	 $(this).children('tr').addClass('hover');
			     $(this).children('tr').removeClass('selected-hover');
			 }else{}
			 $(this).children('tr').removeClass('selected');
		   }
	});
});

$(function() {
  $('tbody.tbody-hover').hover(function() {
		    if (($(this).children('tr').find(':checkbox:not(:disabled)').attr('checked')==true) || ($(this).children('tr').find(':checkbox:not(:disabled)').attr('checked')=="checked")){
				if(!isIe67){
					$(this).children('tr').addClass('selected');
				}
			      
			      if(!isIe678) {
			          $(this).children('tr').addClass('selected-hover');
			      }else{}
		    } else {
			      if(!isIe678) {
			          $(this).children('tr').addClass('hover');
			      }else{}
			      $(this).children('tr').removeClass('selected');
		    }
	},function() {
		    if (($(this).children('tr').find(':checkbox:not(:disabled)').attr('checked')==true) || ($(this).children('tr').find(':checkbox:not(:disabled)').attr('checked')=="checked")){
		      if(!isIe678) {
		          $(this).children('tr').removeClass('selected-hover');
		      }else{}

			if(!isIe67) {
				$(this).children('tr').addClass('selected');
			}
		      
		    } else {
		      if(!isIe678) {
		          $(this).children('tr').removeClass('hover');
		      }else{}
		      $(this).children('tr').removeClass('selected');
		    }
  });
});

$(function() {
  $('tbody.tbody-hover').click(function() {
		   if (($(this).children('tr').find(':checkbox:not(:disabled)').attr('checked')==true) || ($(this).children('tr').find(':checkbox:not(:disabled)').attr('checked')=="checked")){
		     if(!isIe678) {
		     	 $(this).children('tr').removeClass('hover');
			     $(this).children('tr').addClass('selected-hover');
			 }else{}

			if(!isIe67){
				$(this).children('tr').addClass('selected');
			}
			 
		   } else {
		   	 if(!isIe678) {
		   	 	 $(this).children('tr').addClass('hover');
			     $(this).children('tr').removeClass('selected-hover');
			 }else{}
			 $(this).children('tr').removeClass('selected');
		   }
  });
});
if(!isIe678) {
	$(function() {
	  $('td.td-hover').hover(function() {
	      $(this).addClass('hover');
	  },function() {
	      $(this).removeClass('hover');
	  });
	});
}else{}
if(!isIe678) {
    $(function() {
	  $('tr.tr-hoverS').hover(function() {
	          $(this).addClass('hover');
	  },function() {
	          $(this).removeClass('hover');
	  });
	});
}else{}
})(jQuery);
