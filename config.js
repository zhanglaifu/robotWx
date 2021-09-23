//config.js

const WxHandler = require('./wx/dao/wxHandler');
//默认提示信息
const groupSuggestMsg1=`
    干啥嘞，大帅哥！
`;

module.exports = {
    wxRobot:{
        /**
         *
         * 如果需要使用他人微信，需要先获取wxid，修改robotWxId，
         * 机器人的微信id,在微信中可以直接看到
         */
        robotWxId:" TODO 您的微信id",
        /**
         * 自定义群聊配置信息
         * groupId  群id，通过e小天(管理面板->功能测试)可以获取群列表，找到指定群的编号即可
         * id  自定义自增编号，方便其他系统发送信息至指定群聊（这里主要是为了后面与puppeteer结合使用！）
         * groupNickName 机器人在当前群的昵称，用于 用户直接@
         * autoAnswer  是否自动回复@本人的，默认为true即可，针对某些场景仅仅只是发送通知信息，不对用户信息进行回复的，可以设置成false
         * groupSuggestMsg   autoAnswer为true时并且有其他群成员@了你 默认返回的提示信息
         * getResultFun  @并回复了指定内容，执行操作函数
         */
        groupList:[
            {
                groupId:" TODO 微信群的id",
                id:0,
                groupNickName:" TODO 本人微信群昵称",
                groupName:" TODO 微信群名称（方便记忆）",
                autoAnswer:true,
                groupSuggestMsg:groupSuggestMsg1,
                /**
                 *
                 * @param WebSocketClient  ws客户端信息
                 * @param logger
                 * @param acceptMsg  接受到的微信信息
                 * @returns {Promise<*>}
                 */
                getResultFun:async function(WebSocketClient,logger,acceptMsg){
                    return new WxHandler(WebSocketClient,logger,acceptMsg,this).init();
                }
            }
        ]
    }
}
