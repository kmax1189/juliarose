$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    }
});

$(document).pjax("[data-pjax]", ".wrapper")
.on("pjax:send", function()
{

})
.on("pjax:complete", function()
{
    init();
});

$.fn.toggleDropdown = function()
{
    return this.each(function()
    {
        var $this = $(this),
            $dropdown = $("[data-dropdown]");

        $this.off(".dropdown").on("click.dropdown", function()
        {
            $this.toggleClass("active");
            $dropdown.not(this).removeClass("active");
        });

        $(document).off(".dropdown").on("click.dropdown", function(event)
        {
            if (!$(event.target).closest("[data-dropdown]").length)
            {
                $dropdown.removeClass("active");
            }
        });
    });
}

$.fn.toggleSidebar = function()
{
    var $this = $(this),
        href = $this.attr("href"),
        $sidebar = $this.parent(".sidebar");

    $this.off(".sidebar").on("click.sidebar", function(event)
    {
        event.preventDefault();

        $sidebar.toggleClass("collapsed");

        $.ajax({
            url: href,
            method: "PATCH",
            data: {
                collapsed: $sidebar.hasClass("collapsed")
            }
        });
    });
}

$.fn.preventHashtag = function()
{
    return this.each(function()
    {
        var $this = $(this);

        $this.off(".hashtag").on("click.hashtag", function(event)
        {
            event.preventDefault();
        });
    });
}

function init()
{
    /* Prevents default on hashtag href */
    $("a[href='#']").preventHashtag();

    /* Enables sidebar collapse toggle */
    $(".burger").toggleSidebar();

    /* Toggles dropdowns */
    $("[data-dropdown]").toggleDropdown();
}

init();

//# sourceMappingURL=app.js.map
