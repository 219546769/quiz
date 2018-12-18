/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        //var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
        totalScore= CalculateQuestion1Score(q1Result);
        totalScore= totalScore + CalculateQuestion2Score(q2Result);
        totalScore= totalScore + CalculateQuestion3Score(q3Result);
        console.log("cool")
        placement(totalScore , $("#name").val());
    });


function displayResult(techplacement,name,imgSrc){
    return $(".result").html("Congratulations, " + name + " This is your meme " + techplacement + "<img src="+imgSrc+">");

}
function CalculateQuestion1Score(question1){
     if (question1 === " a pillowmet" || question1 === "pillowmet" ){
    return 2;
    }
    else if (question1 === "a tissue" || "tissue"){
    return 3;
    }
    else if (question1 === "a stinky sock"|| "stinky sock" || "sock"){
    return 4;
    }
    else if (question1 === " a durag" || "durag") {
    return 5;
    }
    else {
    return 0;
    }
}

function CalculateQuestion2Score(question2){
    if (question2 === "takeoff" || "Takeoff"){
        return 1;
    }
    else if (question2 === "quavo" || "Quavo"){
        return 2;
    }
    else if (question2 === "offset" || "Offset"){
        return 3;
    }
    else {
        return 0;
    }
}
function CalculateQuestion3Score(question3){
    if (question3 === "cat" || "Cat"){
        return 2;
    }
    else if (question3 === "dog"|| "Dog"){
        return 3;
    }
    else {
        return 1; 
    }
}
function placement (totalScore, name ){
    var techPlacement;
    var imgSrc;
    if (totalScore >11){
    techPlacement = "You Smart";
    imgSrc="https://i.makeagif.com/media/1-18-2017/AGhPEs.gif";
    displayResult(techPlacement,name,imgSrc);
    }
    else if (totalScore >8 && totalScore <= 10){
        techPlacement= "The Office";
        imgSrc="https://i.pinimg.com/originals/62/99/ce/6299ce554436cd39b9862b2f6438f718.jpg";
        displayResult(techPlacement,name,imgSrc);
    }
    else if (totalScore ===5){
    techPlacement="Ug lee";
    imgSrc="https://i.pinimg.com/originals/62/99/ce/6299ce554436cd39b9862b2f6438f718.jpg";
    displayResult(techPlacement,name,imgSrc);
    }
     else { 
            $(".result").html("<h2>Make sure to answer all of the questions, " + name + " We want to make sure we get this right!</h2>");
     }

}

});