"use strict";

var APIYT = function () {

    function init() {
        bindFunctions();

    }

    function bindFunctions() {

        $('.botao.vimeo').click(function () {
            var endpoint = 'https://vimeo.com/api/oembed.json';
            var url = endpoint + '?url=' + encodeURIComponent('http://www.vimeo.com/7100569');
            new GCS().setObj({
                type: 'GET',
                processData: true,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                url: url,
                success: function (data) {
                    
                    console.log(data)
                    var html = '<img width="480" src="'+data.thumbnail_url+'">';
                    
                    $('.row').html(html);
                }
            }).executar();
        });

    }


    return {
        init: init
    };

}();
$(APIYT.init);