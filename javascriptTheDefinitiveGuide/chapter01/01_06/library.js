// 在document 中的一个指定的区域输出调试消息
// if not exist, so create it.
function debug(msg){
    var log  = document.getElementById('debuglog')
    if(!log){
        var log  = document.createElement('div')
        log.id = 'debuglog'
        log.innerHTML = '<h1>debug log</h1>'
        document.body.appendChild(log)
    }
    var pre = document.createElement('pre')
    var text = document.createTextNode(msg)
    pre.appendChild(text)
    log.appendChild(pre)
}

function hide(e, reflow){
    console.log('nihao')
    if(reflow){
        e.style.display='none'
    }else {
        e.style.visibility = 'hidden'
    }
}

function highlight(e){
    if(!e.className) e.className = 'hilite'
    else e.className += ' hilite'
}



