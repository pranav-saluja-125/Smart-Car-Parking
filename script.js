var i = 0;
var inputText;
function buttonClick() {
    document.getElementById('inc').value = ++i;
    inputText = document.getElementById('SN').value;
    document.getElementById('SN').value = '';
    }
    $(document).ready(function(){
        $("#btn1").click(function(){
            $("table").append("<tr><td>"+i+"</td><td>"+inputText+"</td></tr>");
        })
    })


    $(document).ready(function(){
        $(".slot").click(function(){
            $(this).toggleClass("booked");
        });
        
        $("#A1").click(function(){
            $("#a1").toggle();
        });
        $("#A2").click(function(){
            $("#a2").toggle();
        });
        $("#A3").click(function(){
            $("#a3").toggle();
        });
        $("#A4").click(function(){
            $("#a4").toggle();
        });
        $("#A5").click(function(){
            $("#a5").toggle();
        });
        $("#A6").click(function(){
            $("#a6").toggle();
        });
        $("#A7").click(function(){
            $("#a7").toggle();
        });
        $("#A8").click(function(){
            $("#a8").toggle();
        });
        $("#B1").click(function(){
            $("#b1").toggle();
        });
        $("#B2").click(function(){
            $("#b2").toggle();
        });
        $("#B3").click(function(){
            $("#b3").toggle();
        });
        $("#B4").click(function(){
            $("#b4").toggle();
        });
        $("#B5").click(function(){
            $("#b5").toggle();
        });
        $("#B6").click(function(){
            $("#b6").toggle();
        });
        $("#B7").click(function(){
            $("#b7").toggle();
        });
        $("#B8").click(function(){
            $("#b8").toggle();
        });
    });