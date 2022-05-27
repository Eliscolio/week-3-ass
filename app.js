var p1Score = 0;
var p2Score = 0;
var ties = 0;
var turn =  1;

function checkWin(element, val) {
    if ($(".row-1 ." + val).length === 3 
    || $(".row-2 ." + val).length === 3 
    || $(".row-3 ." + val).length === 3
    || $(".box.col-1." + val).length === 3
    || $(".box.col-2." + val).length === 3
    || $(".box.col-3." + val).length === 3
    || ($("#1").hasClass(val)
        && $("#5").hasClass(val)
        && $("#9").hasClass(val))
    || ($("#3").hasClass(val)
        && $("#5").hasClass(val)
        && $("#7").hasClass(val))
        )
    {   
        if (val === "X") {
            alert("Player 1 won")
            p1Score = p1Score + 1;
            $("#p-1-wins").text(p1Score);
            $(element).removeClass(val);
            $('#turn').text("Click reset button to start")
        } else {
            alert("Player 2 won ")
            p2Score = p2Score + 1;
            $("#p-2-wins").text(p2Score);
            $(element).removeClass(val);
            $('#turn').text("Click reset button to start")
        }
    }S
}




$(".box").click(function (){
    if(turn === 1){
        $(this).text('X')
        $(this).addClass('X')
        turn = 2
        $('#turn').text("Turn: Player " + turn)
        checkWin(this, "X")
    } else {
        $(this).text('O')
        $(this).addClass('O')
        turn = 1
        $('#turn').text("Turn: Player " + turn)
        checkWin(this, "O")
    }
    
})


$("#reset-board").click(function() {
    $(".row .box").text(null);
    $(".box").removeClass("X");
    $(".box").removeClass("O");
    turn = 1;
});