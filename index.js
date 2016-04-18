var UUID = require('node-uuid');
var ccap = require('ccap')();


function getUUID(){
    return UUID.v4().replace(/-/g, '');
}

function getImgAndCode(){
    return ccap.get();
}

function IMGCODE(){

}

IMGCODE.prototype.get = function(){
    var uuid = getUUID();
    var arr = ccap.get();
    var ret = {
        key: uuid,
        txt: arr[0],
        buf: arr[1]
    };
    return ret;
}

module.exports = IMGCODE;
