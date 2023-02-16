function debug(msg){
    var log  = $('#debuglog')
    if(log.length == 0){
        log = $('<div><h1>debug log</h1></div>')
        log.appendTo(document.body)
    }
    log.append($('<pre />').text(msg))
}