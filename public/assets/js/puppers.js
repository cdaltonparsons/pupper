// When submitting the main survey grab form field values and post to the Pupper's table
$("#submit").on("click", function(event) {
    event.preventDefault();

    if (!$("input").val() == "") {

        $("input").removeClass("border border-danger");
// need to grab dogPhotoInput to send to the S3
        var ownerNameInput = $("#owner-name").val().trim();
        var dogNameInput = $("#dog-name").val().trim();
        var dogPhotoInput = $("#dog-photo").val();
        var q1Input = $("#q1 :selected").val();
        var q2Input = $("#q2 :selected").val();
        var q3Input = $("#q3 :selected").val();
        var q4Input = $("#q4 :selected").val();
        var q5Input = $("#q5 :selected").val();
        var q6Input = $("#q6 :selected").val();
        var q7Input = $("#q7 :selected").val();
        var q8Input = $("#q8 :selected").val();
        var q9Input = $("#q9 :selected").val();
        var q10Input = $("#q10 :selected").val();
        var q11Input = $("#q11 :selected").val();
        var q12Input = $("#q12 :selected").val();
        var q13Input = $("#q13 :selected").val();


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
        $("select").val("Yes");
        $("#file-name").empty().text("Choose file")

    } else {
        $("#error-modal").modal("toggle");
        $("input").addClass("border border-danger");
    }
});

$("#find-match").on("click", function (event) {
    event.preventDefault();


    var matchFilters = {
        size: $("#match-q1 :selected").val(),
        energetic: $("#match-q2 :selected").val(),
        dominant: $("#match-q3 :selected").val()
    }

    var queryUrl = `/api/matches/${matchFilters.size}/${matchFilters.energetic}/${matchFilters.dominant}`;


    $.get(queryUrl)
        .then(function (data) {

            console.log(data);

        });

    console.log(matchFilters);

    $("#match-modal").modal("toggle");

    $("select").val("Yes");

});


