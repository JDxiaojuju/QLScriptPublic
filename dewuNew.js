/**
 * cron 10 10 * * *
 * Show:得物农场0.0.3版本得物 心愿森林  &  得物 心愿海洋 入口都在 APP下方=>我=> 下方=>
 * 变量名:dewu
 * 变量值:抓app.dewu.com/hacking-tree/v1   请求头Headers中的x-x-auth-token  去掉Bearer  去掉Bearer  去掉Bearer
 * 多账号& 或换行 或新建同名变量
 * scriptVersionNow = "0.0.3";
 * new Env("得物")
 * 把UA换成自己的UA  把UA换成自己的UA   把UA换成自己的UA   否则会触发风控
 * 依赖 crypto-js & jsencrypt 版本最新即可
 * UA变量名 dewuUA  必须填自己的 否则会风控 请求头Headers中的User-Agent 必填
 * SK变量名 dewuSK  任意账号的即可 必填
 * 助力码变量名 dewuHelpCode 分享链接中的几个表情 例如 😻💥💬😻🌹🌼😿
 * 首账号助力作者，后面得账号助力heloCode
 * 3/27 11.59 把变量名独立出来了 自己根据自己的情况换变量名 适用于设备多的UA不一致得情况
 * 如果是一个设备抓的很多号 那就不用管
 * 这里我只推荐在青龙配置文件里面写UA SK 和helpCode变量
 * export dewuUA=""
 * export dewuSK=""
 * export dewuHelpCode=""
 */

let UAName = "dewuUA";
let helpCodeName = "dewuHelpCode"
let SKName = "dewuSK"
let ckName = "dewu";


let UA = process.env[UAName] ? process.env[UAName] : "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_0 like Mac OS X) AppleWebKit/604.5.15 (KHTML, like Gecko) Mobile/15E148/duapp/5.39.0"
let helpCode = process.env[helpCodeName] ? process.env[helpCodeName] : "😻💥💬😻🌹🌼😿"
let SK = process.env[SKName] ? process.env[SKName] : ""
