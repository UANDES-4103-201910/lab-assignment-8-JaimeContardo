// Note: $(() => {}); is equivalent to $(document).ready(function(){})
function write_on_console(){
	$(".key").click(function(){
		console.log($(this).text());
	});
};

function write(){
	$(".key").click(function(){
		var $text = $("#text");

		var $this = $(this),
			character = $this.html();


		if (character=="Shift") {
			shift = true;
			character = "";
		}

		if (character==" ") character = " ";
		if (character=="Tab") character = "\t";
		if (character=="Enter") character = "\n";

		if (character=="Bksp") {
			var html = $text.html();
			
			$text.html(html.substr(0, html.length - 1));
			return false;
		}

		$text.html($text.html() + character);
		shift = false;
	});

};

$(document).ready(function(){
	write_on_console();
	write();
});