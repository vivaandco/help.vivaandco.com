$(function(){
	$('a[href^="http"]').each(function(){
		var prefix = "http://vivaandco.github.io/help.vivaandco.com";
		var link = $(this).attr('href');

		if(link.substr(0, prefix.length).toLowerCase() != prefix.toLowerCase()){
			$(this).addClass('external-link').attr('target', '_blank');
		}
	});
	generate_toc();
});
function generate_toc(){
	$headings = $('#main_content h2, #main_content h3');
	if($headings.length == 0){
		return;
	}
	var html = '<div id="TOC"><h6>Table Of Contents<br />(For This Page)</h6><ul class="unstyled" /></div>';
	var indent = 0;
	$('#main_content_wrap').prepend(html);
	$toc = $('#TOC').css({'position':'absolute', 'right':0});
	$tocList = $('#TOC ul');
	$headings.each(function(index){
		if($(this).is('h3')){
			itemclass = "minor";
		} else if ($(this).is('h2')){
			itemclass = "major";
		}
		$(this).attr('id', 'TOC_item_'+index);
		$tocList.append('<li class="'+itemclass+'"><a href="#TOC_item_'+index+'">'+ $(this).text() + '</a></li>');
	});
	$tocList.on('click', 'li a', function(event) {
		event.preventDefault();
		$.scrollTo($($(this).attr('href')), 800);
		/* Act on the event */
	});
	sizeTOC();
	$(window).on('resize', sizeTOC);
}
function sizeTOC(){
	var width = ($('#main_content_wrap').width() - $('#main_content').width()) / 2 - 10;
	if(width < 100){
		$('#TOC').hide();
	} else {
		$('#TOC').show();
	}
	$('#TOC').width(width);
}