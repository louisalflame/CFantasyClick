window.requestAnimFrame = (function(callback){
    return  window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame || 
            window.oRequestAnimationFrame || 
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1);
            };
})();

window.cancelAnimationFrame = (function(callback){
    return  window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame || 
            window.webkitCancelRequestAnimationFrame || 
            window.mozCancelAnimationFrame || 
            window.mozCancelRequestAnimationFrame ||
            function(id) {
                clearTimeout(id);;
            };
})();

