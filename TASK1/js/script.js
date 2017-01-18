
$(function () {
    $submit = $("#button");
    function search() {
    var txt = $("#search").val();
    $.getJSON("https://pixabay.com/api/?key=4287051-743fc02520ae9a97edd7e8de0&&q="
              +txt+"&image_type=photo&per_page=50&min_width=150px",
        		  function(data){
    console.log('-------------------------------------------------------------');
        		  console.log(data);
        	    for(var i=0; i<data.hits.length;i++)
              var img = $("<img/>").attr("src", data.hits[i].previewURL).appendTo("#content");
              });
    };
    //выводим результат поиска по кнопке "Поиск" или Enter
    $submit.on('click', search)
    $("#search").keypress(function (e) {
        if (e.which == 13) {
            search();
            return false;
        }
    });
//очистить все результаты поиска по клику на логотип
    $(".home").click(function () {
        $("#content").empty();
    });

});
//------------------------------------------------------------------------------
