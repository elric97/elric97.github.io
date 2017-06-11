$(document).ready(function() 
{
	$("#quote-gen").on("click",function()
  	{
    	$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",function(a)
    	{
      		var content=a.quoteText;
      		var author=a.quoteAuthor;
     	 	$("#quote").hide().html(content).fadeIn("slow");
      		$("#author").hide().html("-"+author).fadeIn("slow");                                 
	  		$("#link").attr("href","https://twitter.com/intent/tweet?text="+"'"+a.quoteText+"'");
    	});
  	});
});