/*
V1.0    新版发布
V1.1    [数据更新]更新了浏览器数据
V1.2    [问题修复]修复了name()的Bug
        [系统优化]更改了网页文案
V1.3    [问题修复]修复了内核检测的Bug
V1.4    [系统优化]更新了判断方式
V1.5    [数据更新]更新了浏览器数据
V1.6    [系统优化]更改了判断顺序，改为：先判断内核，再判断名称（解决手机Edge再for循环后不向下进行的Bug）
*/



var ua = navigator.userAgent;
window.onload = function () {

    // 软件版本
    document.getElementById('v').innerText = '1.5';
    document.getElementById('browserUA').innerText = ua;
    var browserName = document.getElementById('browserName');
    var browserCore = document.getElementById('browserCore');


    // 尝试检测内核
    if (index('Chrome/')) {
        browserCore.innerText = 'Chromium' + ' ' + name('Chrome');
    } else if (index('WebKit/')) {
        browserCore.innerText = 'WebKit' + ' ' + name('WebKit');
    } else if (index('Presto/')) {
        browserCore.innerText = 'Presto' + ' ' + name('Presto');
    } else if (index('Gecko/')) {
        browserCore.innerText = 'Gecko' + ' ' + name('Gecko');
    } else if (index('Trident/')) {
        browserCore.innerText = 'Trident(IE)' + ' ' + ua.split('Trident/')[1].split(';')[0];
    }


    // 常识判断浏览器名称
    for (var dataKey in data) {
        if (ua.indexOf(data[dataKey][0]) !== -1) {
            browserName.innerText = data[dataKey][1] + ' ' + ua.split(data[dataKey][0] + '/')[1].split(' ')[0];
        }
    }

    // IE浏览器
    if (index('MSIE')) {
        browserName.innerText = 'InternetExplorer' + ' ' + ua.split('MSIE ')[1].split(';')[0];
    } else if (index('rv:')) {
        browserName.innerText = 'InternetExplorer 11.0';
    }

    // TIM
    if (index('TIM/') && index('QQ/')) {
        browserName.innerText = 'TIM' + ' ' + name('QQ');
    }

    // QQ
    if (index('QQ/') && index('TIM/') === false) {
        browserName.innerText = 'TIM' + ' ' + name('QQ');
    }

};

function name(name) {
    return ua.split(name + '/')[1].split(' ')[0];
}

function index(name) {
    return ua.indexOf(name) !== -1;
}
