'use strict';
var _ = require('lodash');

function cache(){
    this.data = [];
};

cache.prototype.save = function (index_, caaml_, json_) {
    var now = Date.now();
    data.push ({'index':index_,
                'timestamp':now,
                'caaml':caaml_ ,
                'json': json_});
};

cache.prototype.get = function (index_) {
   var ret = _.find(data, function(f){ return 'index' === index;});
};

