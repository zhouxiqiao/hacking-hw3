var title = document.title;
document.title = 'you cant get anything';


function ha() {

	$('p').not('a').css({'opacity': '0.1'});
	$('h1').not('a').css({'opacity': '0.1'});
	$('h2').not('a').css({'opacity': '0.1'});
	$('h3').not('a').css({'opacity': '0.1'});

	$('a').removeAttr("href");
	$('a').click(function() {
		var paragraphText = $(this).text();
		$(this).text('OOPS.');
	});

	$('img').on({
		'click': function(){
			$('img').attr('src','http://s3.amazonaws.com/libapps/accounts/2127/images/nothing-here.jpg');
		}
	});

}

ha();