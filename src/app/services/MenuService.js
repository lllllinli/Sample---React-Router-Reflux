/**
 * Created by apple on 15/1/7.
 */
var MenuService=function(){

    var promise = $.ajax({
        url: './app/data/MenuData.json',
        contentType: "application/json",
        dataType: 'JSON'
    });

    return promise;
};

module.exports=MenuService;
