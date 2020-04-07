/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        //var techPlacement = "TBD";
        //var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
        totalScore = totalScore + CalculateQuestion1Score(q1Result);
        totalScore = totalScore + CalculateQuestion2Score(q2Result);
        totalScore = totalScore + CalculateQuestion3Score(q3Result);
        //console.log(totalScore);
        placement(totalScore,name);
        console.log(totalScore)
    });


    function displayResult(techplacement, name, imgSrc) {
        return $(".result").html("Congratulations, " + name + " This is your meme " + techplacement + "<img src=" + imgSrc + ">");

    }

    function CalculateQuestion1Score(question1) {
        if (question1 === " keep it" || question1 === "Keep it") {
            return 2;
        }
        else if (question1 === "Police" || question1 === "police") {
            return 3;
        }

        else {
            return 1;
        }
    }

    function CalculateQuestion2Score(question2) {
        if (question2 === "invisible" || question2 === "invisible") {
            return 2;
        }
        else if (question2 === "Fly" || question2 === "fly") {
            return 3;
        }

        else {
            return 1;
        }
    }

    function CalculateQuestion3Score(question3) {
        //console.log(question3);
        if (question3 === "ceviche" || question3 === "Ceviche") {
            return 2;
        }
        else if (question3 === "Tacos" || question3 === "tacos") {
            return 3;
        }
        else {
            return 1;
        }

    }

    function placement(totalScore,name) {
        var techplacement;
        var imgSrc;
        console.log(totalScore);
        if (totalScore > 11) {
            techplacement = "Superman";
            imgSrc = "https://images-na.ssl-images-amazon.com/images/I/81%2Bx0iZ9MEL._AC_SX425_.jpg";
            displayResult(techplacement,name,imgSrc);
        }
        else if (totalScore > 8 && totalScore <= 11) {
            techplacement = "Black Widow";
            imgSrc = "2wCEAAkGBxMTEhUTExMWFhUXFxoYGBgYGBcYGBgXFxcWFx0aGBgYHSggGBolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf";
            displayResult(techplacement,name,imgSrc);
        }
        else if (totalScore == 5) {
            techplacement = "batmannnn";
            imgSrc = "https://images-na.ssl-images-amazon.com/images/I/810c4ywQsEL._AC_SY679_.jpg";
            displayResult(techplacement,name,imgSrc);
        }
        else {
            $(".result").html("<h2>Make sure to answer all of the questions, " + name + " We want to make sure we get this right!</h2>");
        }

    }

});
