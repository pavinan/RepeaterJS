(function ($) {

    var defaults = {
        data: [],
        onItemCreating: function (sender, eventArgs) {
            return true;
        },
        commands: []
    };

    function Repeater(options) {

        var parentElement = this;

        var settings = $.extend({}, defaults, options);

        var itemTemplateHtml = parentElement.find('[data-item-template]').first().html();

        $.each(settings.data, function (key, value) {

            var repeaterItem = $(itemTemplateHtml);

            var evtArgs = {
                parent: parentElement,
                data: value
            };

            var containerlength = repeaterItem.filter('[data-item-container]').length;

            if (containerlength != 1) {
                throw "Elements must be nested in data-item-container and only one data-item-container is allowed.";
            }

            if (settings.onItemCreating(repeaterItem, evtArgs)) {

                var elements = repeaterItem.find('[data-item-property]');

                $.each(elements, function (elekey, element) {

                    var propAttr = $(element).attr('data-item-property');

                    if (propAttr === '$root') {
                        $(element).text(value);
                    } else if (propAttr && propAttr.length) {
                        $(element).text(value[propAttr]);
                    }

                    $(parentElement).append($(element));
                });

            }

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