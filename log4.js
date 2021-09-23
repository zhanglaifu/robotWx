let log4js = require('log4js');
// log4js的输出级别6个: trace, debug, info, warn, error, fatal

log4js.configure({
    //输出位置的基本信息设置
    appenders: {
        //设置控制台输出 （默认日志级别是关闭的（即不会输出日志））
        out: {type: 'console'},
        //设置每天：以日期为单位,数据文件类型，dataFiel   注意设置pattern，alwaysIncludePattern属性
        allLog: {
            type: 'dateFile',
            filename: './log/allLogs/logs',
            pattern: '_yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },

        //错误日志 type:过滤类型logLevelFilter,将过滤error日志写进指定文件
        errorLog: {type: 'file', filename: './log/error.log'},
        error: {type: "logLevelFilter", level: "error", appender: 'errorLog'},

        wxLog: {
            type: 'dateFile',
            filename: './log/wxLog/logs',
            pattern: '_yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        puppeteerLog:{
            type: 'dateFile',
            filename: './log/puppeteerLog/logs',
            pattern: '_yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
    },
    //不同等级的日志追加到不同的输出位置：appenders: ['out', 'allLog']  categories 作为getLogger方法的键名对应
    categories: {
        default: {appenders: ['out', 'allLog'], level: 'debug'}, //error写入时是经过筛选后留下的
        puppeteerLog:{appenders: ["out", "puppeteerLog"], level: 'info'},
        wxLog:{appenders: ["out", "wxLog"], level: 'info'},

    }

});

module.exports = {log4js};
