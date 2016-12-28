var listLink = $("#link-list");
var listView = $("#list-view");

listLink.click(function(event) {
    event.preventDefault();
    addView.addClass("hidden");

    listView.addClass("visible");
    listView.removeClass("hidden");
});
