"use strict";

var APIYT = function () {

    function init() {
        bindFunctions();
    }

    function bindFunctions() {

        $('.botao.youtube').click(function () {
            new GCS().setObj({
                type: 'GET',
                processData: true,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                url: 'https://www.googleapis.com/youtube/v3/videos',
                data: {
                    part: 'snippet',
                    key: 'AIzaSyDhtU9oebZG4uIMA63utC6AT0OYrXQnpzs',
                    id: 'lKM-8CZRplI'
                },
                success: function (data) {
                    
                    console.log(data.items)
                    var item = data.items;
                    var html = '';
                    for (var i = 0; i < item.length; i++) {
                        html += `<img width="480" src="${item[i].snippet.thumbnails.maxres.url}">`
                    }
                   
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