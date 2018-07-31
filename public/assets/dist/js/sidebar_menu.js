$(function () {
    // get url
    var url = window.location.href;

    $(".sidebar-menu li").each(function () {
        var li = $(this);
        if (li != undefined) {
            // Check treeview
            if (li.hasClass("treeview")) {
                $("li .treeview-menu li").each(function () {
                    var li_child = $(this);
                    var link = $('a', li_child).attr('href');
                    if (link == url) {
                        if (!li_child.hasClass("active")) {
                            li_child.addClass("active");

                            li.addClass("active");
                            li.addClass("menu-open");
                        }
                    }
                    else {
                        li_child.removeClass("active");
                    }
                });
            }
            else {
                var link = $('a', li).attr('href');
                if (link == url) {
                    if (!li.hasClass("active")) {
                        li.addClass("active");
                    }
                }
                else {
                    li.removeClass("active");
                }
            }
        }
    });

    $(".sidebar-menu").click(function () {

    });
});