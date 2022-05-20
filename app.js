var p1Score = 0;
var p2Score = 0;
var ties = 0;
var turn = 1;


$(".box").click(function(){
    if(turn ---1){
        $(this).text('X')
        $(this).addClass('X')
        turn - 2
    } else{
        $(this).text('O')
        $(this).addClass('O')
        turn - 1
    }
    $('#turn').text(turn)
})