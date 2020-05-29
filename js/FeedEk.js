/*! FeedEk jQuery RSS/ATOM Feed Plugin v3.1.1
* https://jquery-plugins.net/FeedEk/FeedEk.html  https://github.com/enginkizil/FeedEk
* Author : Engin KIZIL */

(function ($) {
	$.fn.FeedEk = function (opt) {
		var def = $.extend({
			MaxCount: 5,
			ShowDesc: true,
			ShowPubDate: true,
			DescCharacterLimit: 0,
			TitleLinkTarget: "_blank",
			DateFormat: "",
			DateFormatLang: "en",
      PostNum:0
		}, opt);

		var id = $(this).attr("id"), s = "", dt, postOrder=0;
		$("#" + id).empty();
		if (def.FeedUrl == undefined) return;
		$("#" + id).append('<img style="max-width:30px;" class="centered" src="images/loader.gif" />');
		$.ajax({
			url: "https://feed.jquery-plugins.net/load?url=" + encodeURIComponent(def.FeedUrl) + "&maxCount=" + def.MaxCount + "&dateCulture=" + def.DateFormatLang + "&dateFormat=" + def.DateFormat + "&postNum=" + def.PostNum,
			dataType: "json",
			success: function (result) {
				$("#" + id).empty();
				if (result.data == null)
					return;

				$.each(result.data, function (e, itm) {
					++postOrder; //counting posts, this var contains the order of the post in the feed.
					if(def.PostNum == postOrder || def.PostNum == 0){ //when calling for a specific post, or if none specified (PostNum=0), show max count.

						s += '<li><div class="itemTitle"><a href="' + itm.link + '" target="' + def.TitleLinkTarget + '" >' + itm.title + '</a></div>';
						$("#" + id +"Container").attr( "href", itm.link);
						$("#" + id +"Container").attr( "target", def.TitleLinkTarget);
						$("#" + id +"Title").append("<h3>" + itm.title + "</h3>");

						if (def.ShowPubDate) {
							dt = new Date(itm.publishDate);
							s += '<div class="itemDate">';
							if ($.trim(def.DateFormat).length > 0) {
								s += itm.publishDateFormatted;
							}
							else {
								s += dt.toLocaleDateString();
							}
							s += '</div>';
						}
						if (def.ShowDesc) {
							s += '<div class="itemContent">';
							if (def.DescCharacterLimit > 0 && itm.description.length > def.DescCharacterLimit) {
								s += itm.description.substring(0, def.DescCharacterLimit) + '...';
									$("#" + id).append(itm.description.substring(0, def.DescCharacterLimit) + '...');
							}
							else {
								s += itm.description;
								$("#" + id).append(itm.description);
							}
							s += '</div>';
						}


					}
				});


				//$("#" + id).append('<ul class="feedEkList">' + s + '</ul>');
			}
		});
	};
})(jQuery);
