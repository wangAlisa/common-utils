/*
 * @Author  Alisa
 * @Update   Alisa 2017/12/4
 * @Description 数组操作的方法
 */
Array.prototype.clear = function () {
    if (this.length > 0) {
        this.length = 0;
    }
    return this;
};

