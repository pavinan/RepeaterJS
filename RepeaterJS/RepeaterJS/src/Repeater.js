(function ($) {

    function Repeater(options) {

        var settings = $.extend({}, options);

        var itemTemplate = $($(this).find('[data-template]').first().html());

        $.each(settings.data, function (key, value) {

        });
    }

    $.fn.Repeater = Repeater;

})(jQuery);


/*

options = {

    data: [],

    onItemCreating: function(sender, eventArgs) : true|false,

    itemClicked: function(sender,eventArgs) : undefined,



}

*/