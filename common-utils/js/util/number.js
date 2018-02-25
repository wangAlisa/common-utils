/*
 * @Author  alisa
 * @Update  alisa  2017/12/4
 * @Description 关于数值的操作
 */
var number = {

    /**
     * 当数值小于零时 返回0 否则返回自身
     * @param {Number} val
     */
    nonNegative: function (val) {
        if (val < 0) return 0;
        return val;
    },
    /**
     * 用来判断val数值是否在array中存在
     * @param {Number} val
     * @param {Array.<Number>} array
     * @return {Boolean}
     */
    IN: function (val, array) {
        for (var i = 0; i < array.length; i++) {
            if (val == array[i]) return true;
        }
        return false;
    },
    /**
     * 十进制方式，把一个数字或字符串转换成整数
     * 因为 向字符串 “08” 直接 parseInt 按8进制解析 返回0 操作错误
     * @param req
     * @returns {Number}
     */
    chnInt: function (req) {
        return parseInt(req, 10);
    },
    /**
     * 获得一个随机数，>=min <=max 之间的一个整数
     * @param min 最小数
     * @param max 最大数
     */
    getRandomInt: function (min, max) {
        if (min > max || max < 0) throw "min max 错误";
        var tmp = 0;
        if (min < 0) {
            tmp = min;
            max = max - min;
            min = 0;
        }
        return JSUtils.number.chnInt(Math.random() * (max - min + 1) + min) + tmp;
    },

    /**
     * 截取小数点后两位小数
     * @param Number
     * @returns {string}
     */
    getCutDouble: function (Number)
    {
        var num=String(Number);
        var numStr = num+"";
        var bit = numStr.indexOf('.');
        var result = "";
        if(bit == -1){
            result =  num;
        }else{
            var bit2 = numStr.substring(bit+1,numStr.length);
            if(bit2.length >=3){
                result = num.substring(0,bit+3);
            }else{
                result = num;
            }
        }
        return result;
    },
    /**
     * 数字金额大写转换
     * @param Number
     * @returns {string}
     */
    upDigit: function(n) {
        var fraction = ['角', '分', '厘'];
        var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
        var unit = [
            ['元', '万', '亿'],
            ['', '拾', '佰', '仟']
        ];
        var head = n < 0 ? '欠人民币' : '人民币';
        n = Math.abs(n);
        var s = '';
        for (var i = 0; i < fraction.length; i++) {
            s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
        }
        s = s || '整';
        n = Math.floor(n);
        for (var k = 0; k < unit[0].length && n > 0; k++) {
            var p = '';
            for (var j = 0; j < unit[1].length && n > 0; j++) {
                p = digit[n % 10] + unit[1][j] + p;
                n = Math.floor(n / 10);
            }
            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][k] + s;
            //s = p + unit[0][i] + s;
        }
        return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
    }
};