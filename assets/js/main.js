let search = $(".search");
let searchBox = $("#search-box");
let backToTop = $(".back-to-top");

search.on("click", function(e) {
    e.preventDefault();
    searchBox.toggleClass("d-block");
    searchBox.toggleClass("d-none");
    search.toggleClass("active");
});
// back to top button
backToTop.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

$("#signup-advised").on("click", function(e) {
    $("#liveToast").toast("show");
})