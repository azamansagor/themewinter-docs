jQuery(document).ready(function() {
        var url = jQuery(location).attr('href');
        var name = url.lastIndexOf("/") + 1;
        var name = url.substr(name);
        var name = name.replace('.html', '');
        jQuery('nav.navigation').find('ul li').each(function() {
            var a = jQuery(this).find('a').attr('href');
            var b = a.lastIndexOf('/') + 1;
            var b = a.substr(b);
            var b = b.replace('.html' , '');
            if(b === name)  { jQuery(this).find('a').css({color : "#2fbbff"}); }
        });
});