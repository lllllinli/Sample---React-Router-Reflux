/**
 * Created by apple on 15/1/7.
 */

var OverviewAPI = {
    loadAll: function () {

        var promise = $.ajax({
            url: './app/data/OverviewData.json',
            contentType: "application/json",
            dataType: 'JSON'
        });

        return promise;
    }
};

module.exports = OverviewAPI;
