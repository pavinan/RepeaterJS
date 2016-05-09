(function ($) {

    var defaults = {
        data: [],
        onItemCreating: function (sender, eventArgs) {
            return true;
        }
    };

    function Repeater(options) {

        var parentElement = this;

        var settings = $.extend({}, options);

        var itemTemplateHtml = parentElement.find('[data-template]').first().html();

        $.each(settings.data, function (key, value) {

            var RepeaterItem = $(itemTemplateHtml);

            var evtArgs = {
                parent: parentElement
            };

            settings.onItemCreating()

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