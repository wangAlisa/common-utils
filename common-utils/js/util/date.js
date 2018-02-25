/*
 * @Author  alisa
 * @Update  alisa  2017/12/4
 * @Description 关于数值的操作
 */
var date = {
    /**
     * 返回： 月 周 小时 分钟前 刚刚
     * @param time 时间戳
     */
    getDateDiff: function(time){
        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var halfamonth = day * 15;
        var month = day * 30;
        var now = new Date().getTime();
        var diffValue = now - time;
        if(diffValue < 0){return;}
        var monthCount =diffValue/month;
        var weekCount =diffValue/(7*day);
        var dayCount =diffValue/day;
        var hourCount =diffValue/hour;
        var minCount =diffValue/minute;
        if(monthCount>=1){
            result="" + parseInt(monthCount) + "月前";
        }
        else if(weekCount>=1){
            result="" + parseInt(weekCount) + "周前";
        }
        else if(dayCount>=1){
            result=""+ parseInt(dayCount) +"天前";
        }
        else if(hourCount>=1){
            result=""+ parseInt(hourCount) +"小时前";
        }
        else if(minCount>=1){
            result=""+ parseInt(minCount) +"分钟前";
        }
        else {
            result="刚刚";
        }

        return result;
    },
    /**
     * 参数表示在当前日期下要增加的天数
     * @param days + 1 代表日期加1，- 1代表日期减1
     */
        changeDate: function(days){
            var now = new Date();
            now.setDate((now.getDate() - 1) + 1 * days +1);
            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            var day = now.getDate();
            if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }

        return year + '-' + month + '-' + day;
        },
        /**
         * 日期格式化 年-月-日 || 年-月-日 时:分:秒
         * @param obj
         * @param IsDay
         * @returns {string}
         */
        FormatDateTime: function (obj, IsDay) {
            var myDate = new Date(obj);
            var year = myDate.getFullYear();
            var month = ("0" + (myDate.getMonth() + 1)).slice(-2);
            var day = ("0" + myDate.getDate()).slice(-2);
            var h = ("0" + myDate.getHours()).slice(-2);
            var m = ("0" + myDate.getMinutes()).slice(-2);
            var s = ("0" + myDate.getSeconds()).slice(-2);
            var mi = ("00" + myDate.getMilliseconds()).slice(-3);
            if (IsDay === true) {
                return year + "-" + month + "-" + day;
            }
            else {
                return year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s;
            }

        },
        /**
         * 超时重定向
         * @param time 设定规定时间
         * @param isUrl 跳转链接
         */
        redirectUrl: function (time,isUrl){
            var topPathArr = top.location.href.split("/");
            var topPath = topPathArr[topPathArr.length-1];
            var exp = new Date();
            time = parseInt(time) || 30;
            exp.setTime(exp.getTime() + time*24*60*60*1000);
            document.cookie = "topPath="+ escape (topPath) + ";expires=" + exp.toGMTString();
            top.location.href = isUrl;
        },
        /**
         * 到某一个时间的倒计时
        */
        getEndTime : function  (endTime){
            var startDate=new Date();  //开始时间，当前时间
            var endDate=new Date(endTime); //结束时间，需传入时间参数
            var t=endDate.getTime()-startDate.getTime();  //时间差的毫秒数
            var d=0,h=0,m=0,s=0;
            if(t>=0){
            d=Math.floor(t/1000/3600/24);
            h=Math.floor(t/1000/60/60%24);
            m=Math.floor(t/1000/60%60);
            s=Math.floor(t/1000%60);
            }
            return "剩余时间"+d+"天 "+h+"小时 "+m+" 分钟"+s+" 秒";
        },
        /**
         * 获取指定年月对应的6*7格日历显示天数
         * @param year  任意年月获取当前日历42个显示天数并对应当前周几
         * @param month 当前月份+上个月+加下个月的日历显示
         * @returns {Array}
        */
        getMonthData : function (year, month) {
            var ret = [];
            if (!year || !month) {
                var today = new Date();
                year = today.getFullYear();
                month = today.getMonth() + 1;
            }
            var firstDay = new Date(year, month - 1, 1);
            var firstDayWeekDay = firstDay.getDay();
            if (firstDayWeekDay === 0) {
                firstDayWeekDay = 7;
            }
            var lastDayOfLastMonth = new Date(year, month - 1, 0);
            var lastDateOfLastMonth = lastDayOfLastMonth.getDate();

            var preMonthDayCount = firstDayWeekDay - 1;
            var lastDay = new Date(year, month, 0);
            var lastDate = lastDay.getDate();

            for (var i = 0; i < 7 * 6; i++) {
                var date = i + 1 - preMonthDayCount;
                var showDate = date;
                var thisMonth = month;

                if (date <= 0) {
                    //上一月
                    thisMonth = month - 1;
                    showDate = lastDateOfLastMonth + date;
                } else if (date > lastDate) {
                    //下一月
                    thisMonth = month + 1;
                    showDate = showDate - lastDate;
                }
                if (thisMonth === 0) thisMonth = 12 ;
                if (thisMonth === 13) thisMonth = 1 ;

                ret.push({
                    month: thisMonth,
                    date: date,
                    showDate: showDate
                });
            }
            return ret;
        }
};