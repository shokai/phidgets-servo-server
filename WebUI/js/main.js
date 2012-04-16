
$(function(){
    setInterval(function(e){
        var pos = $('#control').val();
        $('#position').val(pos);
        var url = $('#addr').val();
        $.post(url, pos, function(e){
            status(e);
        }, 'text');
    }, 1000);
});
