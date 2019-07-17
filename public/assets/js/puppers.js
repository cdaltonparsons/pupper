$("#submit").on("click", function(event) {
    event.preventDefault();

    if (!$("input").val() == "") {

        $("input").removeClass("border border-danger");

        var ownerNameInput = $("#owner-name").val().trim();
        var dogNameInput = $("#dog-name").val().trim();
        var dogPhotoInput = $("#dog-photo").val();
        var q1Input = parseInt($("#q1 :selected").val());
        var q2Input = parseInt($("#q2 :selected").val());
        var q3Input = parseInt($("#q3 :selected").val());
        var q4Input = parseInt($("#q4 :selected").val());
        var q5Input = parseInt($("#q5 :selected").val());
        var q6Input = parseInt($("#q6 :selected").val());
        var q7Input = parseInt($("#q7 :selected").val());
        var q8Input = parseInt($("#q8 :selected").val());
        var q9Input = parseInt($("#q9 :selected").val()); 
        var q10Input = parseInt($("#q10 :selected").val());
        var q11Input = parseInt($("#q11 :selected").val());
        var q12Input = parseInt($("#q12 :selected").val());
        var q13Input = parseInt($("#q13 :selected").val());

        
        var newPupper = {
            ownerName: ownerNameInput,
            dogName: dogNameInput,
            image: dogPhotoInput,
            size: q1Input,
            familyFriendly: q2Input,
            energetic: q3Input,
            lazy: q4Input,
            strangerDanger: q5Input,
            dogDanger: q6Input,
            largeDogDanger: q7Input,
            smallDogDanger: q8Input,
            dominant: q9Input,
            doesntShare: q10Input,
            chaser: q11Input,
            wrestler: q12Input,
            allDogFriendly: q13Input
          };

        alert("Thank you for submitting your survey!");

        $("input").val("");
        $("select").val("1");

        $.post("/api/pups", newPupper)
            .then(function(data) {
            console.log("added new pupper", data);

        });

    } else {
        alert(`Please complete all required fields.`);
        $("input").addClass("border border-danger");
    }
});

$("#find-match").on("click", function(event) {
    event.preventDefault();

    var q1Input = parseInt($("#match-q1 :selected").val());
    var q2Input = parseInt($("#match-q2 :selected").val());
    var q3Input = parseInt($("#match-q3 :selected").val());

    var newMatch = {
            size: q1Input,
            energetic: q2Input,
            dominant: q3Input,
        };

        alert("Thank you for submitting your match requirements!");

        $("select").val("1");

        $.post("/api/match", newMatch)
            .then(function(data) {
            console.log("added new match reqs", data);

        });
});

