var listLink = $("#link-list");
var listView = $("#list-view");

listLink.click(function(event) {
  event.preventDefault();
  addView.classList.add("hidden");

  listView.classList.add("visible");
  listView.classList.remove("hidden");
});
