/*
支持识别的浏览器：
Firefox  新版Edge  IE  Opera  企业微信  微信  QQ  TIM  迅雷  支付宝

V1.0    新版发布
V1.1    更新了 企业微信  微信  QQ  TIM  迅雷  支付宝
V1.2    修复了name()的Bug
        更改了网页文案
*/

var ua = navigator.userAgent;
window.onload = function () {
    // 软件版本
    document.getElementById('v').innerText = '1.2';
    document.getElementById('browserUA').innerText = ua;
    var browserName = document.getElementById('browserName');
    var browserCore = document.getElementById('browserCore');

    // 新版Edge浏览器
    if (index('Edg/')) {
        browserName.innerText = 'Edge浏览器' + ' ' + ua.match('(?<=Edg/).*');
        if (index('Chrome/')) {
            browserCore.innerText = 'Chromium' + ' ' + ua.match('(?<=Chrome/).*').toString().split(' ')[0];
        }
    }

    // 新版Edge浏览器 Android
    if (index('EdgA/')) {
        browserName.innerText = 'Edge浏览器' + ' ' + ua.match('(?<=EdgA/).*');
        if (index('Chrome/')) {
            browserCore.innerText = 'Chromium' + ' ' + ua.match('(?<=Chrome/).*').toString().split(' ')[0];
        }
    }

    // IE浏览器
    if (index('Trident/')) {
        browserCore.innerText = 'Trident(IE)' + ' ' + ua.split('Trident/')[1].split(';')[0];
        if (index('MSIE')) {
            browserName.innerText = 'InternetExplorer' + ' ' + ua.split('MSIE ')[1].split(';')[0];
        } else if (index('rv:')) {
            browserName.innerText = 'InternetExplorer 11.0';
        }
    }

    // Firefox
    if (index('Gecko/') && index('Firefox')) {
        browserCore.innerText = 'Gecko' + ' ' + name('Gecko');
        browserName.innerText = 'Firefox' + ' ' + name('Firefox');
    }

    // Opera
    if (index('Opera/')) {
        browserName.innerText = 'Opera' + ' ' + name('Opera');
        browserCore.innerText = 'Presto' + ' ' + name('Presto');
    }

    // 企业微信
    if (index('wxwork/')) {
        browserName.innerText = '企业微信' + ' ' + name('wxwork');
    }

    // 微信
    if (index('WeChat/')) {
        browserName.innerText = '微信' + ' ' + name('MicroMessenger');
    }

    // TIM
    if (index('TIM/') && index('QQ/')) {
        browserName.innerText = 'TIM' + ' ' + name('QQ');
    }

    // QQ
    if (index('QQ/') && index('TIM/') === false) {
        browserName.innerText = 'TIM' + ' ' + name('QQ');
    }

    // 支付宝
    if (index('AlipayClient/')) {
        browserName.innerText = '支付宝' + ' ' + name('AlipayClient');
    }

    // 迅雷
    if (index('Thunder/')) {
        browserName.innerText = '迅雷' + ' ' + name('Thunder');
    }

    // 尝试检测内核
    if (index('Chrome/')) {
        browserCore.innerText = 'Chromium' + ' ' + ua.match('(?<=Chrome/).*').toString().split(' ')[0];
    } else if (index('WebKit/')) {
        browserCore.innerText = 'WebKit' + ' ' + ua.split('WebKit/')[1].split(' ')[0];
    }

};

function name(name) {
    return ua.split(name + '/')[1].split(' ')[0];
}

function index(name) {
    return ua.indexOf(name) !== -1;
}
