/**
 * Created by apple on 15/1/7.
 */
var MenuService=function(){

    var p = $.ajax({
        url: './app/data/MenuData.json',
        contentType: "application/json",
        dataType: 'JSON'
    });

    return p;
};

module.exports=MenuService;
