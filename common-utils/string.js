/*
 * @Author  gaoling
 * @Update  gaoling  2017/12/4
 * @Description 关于字符的操作
 */
//关于字符串的操作
var string = {
    /**
     * 判断字符串是否有效 字符串为null 或 "" 认为无效
     * @param str 需要判断的字符串
     * @return boolean
     */
    isAvailably: function (str) {
        if (str == null) return false;
        if (typeof (str) == "undefined") return false;
        if (str == "") return false;
        if (str == "null" || str == "undefined") return false;
        //其他返回正确
        return true;
    },
    /**
     * 反转字符串
     * @param name 需要反转的字符或数字
     * @return string
     */
    reverse: function (name){
        if (name == null) return false;
        if (typeof name === 'number'){
           name = name + '';
        }
        return name.split('').reverse().join('');
    }
};