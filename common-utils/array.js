/*
 * @Author  alisa
 * @Update  alisa  2017/12/4
 * @Description 数组操作的方法
 */
Array.prototype.clear = function () {
    if (this.length > 0) {
        this.length = 0;
    }
    return this;
};

//数组去重(普通版)
/*
    eg:removeRepeatArray([1,'1',2,1]);
    res:[1, "1", 2]
    * */
function removeRepeatArray (arr){
    return arr.filter(function (item, index, self) {
        return self.indexOf(item) === index;
    });
}

//数组去重(e6版)
/*
    eg:removeRepeatArrayEs6([1,'1',2,1]);
    res:[1, "1", 2]
    * */
function removeRepeatArrayEs6 (arr) {
    return Array.from(new Set(arr));
}

