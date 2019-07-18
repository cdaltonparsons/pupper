// When submitting the main survey grab form field values and post to the Pupper's table
$("#submit").on("click", function(event) {
    event.preventDefault();

    if (!$("input").val() == "") {

        $("input").removeClass("border border-danger");
// need to grab dogPhotoInput to send to the S3
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


        $.post("/api/pups", newPupper)
            .then(function (data) {
                
                    console.log("added new pupper", data);
                    
                
            });


        $("#survey-modal").modal("toggle");

        $("input").val("");
        $("select").val("1");
        $("#file-name").empty().text("Choose file")

    } else {
        $("#error-modal").modal("toggle");
        $("input").addClass("border border-danger");
    }
});

// $("#signup-btn").on("click", function (event) {
//     event.preventDefault();
//     $("#signup-modal").modal("toggle");
// })

$("#find-match").on("click", function (event) {
    event.preventDefault();


    var matchFilters = {
        size: parseInt($("#match-q1 :selected").val()),
        energetic: parseInt($("#match-q2 :selected").val()),
        dominant: parseInt($("#match-q3 :selected").val())
    }

    var queryUrl = `/api/matches/${matchFilters.size}/${matchFilters.energetic}/${matchFilters.dominant}`;


    $.get(queryUrl)
        .then(function (data) {

            console.log("added new match filters", data);

        });

    console.log(matchFilters);

    $("#match-modal").modal("toggle");


    $("select").val("1");

});


