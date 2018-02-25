/*
 * @Author  alisa
 * @Update  alisa  2017/12/4
 * @Description 表单校验操作
 */
var validate = {
    /**
     * 是否为空
     * @param objVal
     */
    isEmpty: function (objVal) {
        return !JSUtils.string.isAvailably(objVal);
    },
    /**
     * 是否是邮箱格式
     * @param objVal
     */
    isMail: function (objVal) {
        var pattern = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
        return pattern.test(objVal);
    },
    /**
     * 验证只能是数字
     * @param objVal
     */
    isDigit: function (objVal) {
        var reg = new RegExp("^[0-9]*$");
        return reg.test(objVal);
    },
    /**
     * 根据一个字符串，判断是否是正确的手机号
     * @param str
     * @returns {boolean}
     */
    isPhone: function (str) {
        var re = /^(13[0-9]{9})|(14[0-9]{9})|(15[0-9]{9})|(18[0-9]{9})$/;
        return re.test(str);
    },
    keydown: {
        /**
         * 改变光标focus对象
         * @param obj 原对象
         * @param focusObj 需要focus的对象
         */
        changeFocus: function (obj, focusObj) {
            obj.keydown(function (e) {
                var keyCode = e.which;
                if (keyCode == 13 || keyCode == 9) {
                    if(keyCode == 9){
                        e.preventDefault();
                    }
                    focusObj.focus();
                    return false;
                }
            });
        },
        /**
         * 改变光标 点击
         * @param obj 原对象
         * @param clickObj
         */
        changeClick: function (obj, clickObj) {
            obj.keydown(function (e) {
                var keyCode = e.which;
                if (keyCode == 13) {
                    clickObj.click();
                    obj.blur();
                    return false;
                }
            });
        }
    }
};
