var listDataService = [
    function() {
        var list = function(list) {
            this.listOfSites = list ? list : [];
        };

        list.prototype.getList = function()
        {
            return this.listOfSites;
        };
        list.prototype.setList = function()
        {
            for(var i=0; i<10; i++)
                this.listOfSites.push({site: 'www.lemonde'+i+'.fr', nb: i});
        };

        return list;
    }
];

angular.module('services').factory('listData', listDataService);