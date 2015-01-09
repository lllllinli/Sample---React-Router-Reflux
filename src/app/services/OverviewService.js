/**
 * Created by apple on 15/1/7.
 */

var OverviewAPI = {
    loadAll:function(){
        return $.ajax({
            url: './app/data/OverviewData.json',
            contentType: "application/json",
            dataType: 'JSON'
        })
    }
};

module.exports=OverviewAPI;
