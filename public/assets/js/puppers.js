// MAIN-SURVEY.HTML ------------------------------
// When submitting the main survey grab form field values and post to the Pupper's table
$("#submit").on("click", function(event) {
    event.preventDefault();

    if (!$("input").val() == "") {

        $("input").removeClass("border border-danger");

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
        $("#q1").val("Small");
        $("#file-name").empty().text("Choose file")

    } else {
        $("#error-modal").modal("toggle");
        $("input").addClass("border border-danger");
    }
});

// MATCH-SURVEY.HTML -----------------------------------------------------
$(window).load(function() {
    $("#show-matches").hide();
});

$("#find-match").on("click", function (event) {
    event.preventDefault();

    // $("#match-modal").modal("toggle");

    var matchFilters = {
        size: $("#match-q1 :selected").val(),
        energetic: $("#match-q2 :selected").val(),
        dominant: $("#match-q3 :selected").val()
    }

    var queryUrl = `/api/matches/${matchFilters.size}/${matchFilters.energetic}/${matchFilters.dominant}`;

    console.log(queryUrl);


    $.get(queryUrl)
        .then(function (data) {

            console.log(data);

            $("#filters").hide();

            for (var i = 0; i < data.length; i++) {

                var messageButton = $("<a>").addClass("btn btn-secondary btn-sm").attr("id", "contact-btn").attr("role", "button").text("Contact");
                var image = $("<div>").attr("style", "height: 200px; width: 100%; display: block;").attr("src", data[i].image).attr("alt", "Pupper Pic");
                var dog = $("<h4>").addClass("card-title").text(data[i].dogName);
                var cardBody = $("<div>").addClass("card-body");
                var owner = $("<div>").addClass("card-header").text(`Owner: ${data[i].ownerName}`)
                var cardStyleDiv = $("<div>").addClass("card text-white bg-info mb-3").attr("style", "max-width: 20rem;");
                var column = $("<div>").addClass("col-md-4 col-xs-12");

                $(cardBody).prepend(messageButton);
                $(cardBody).prepend(image);
                $(cardBody).prepend(dog);
                $(cardStyleDiv).prepend(cardBody);
                $(cardStyleDiv).prepend(owner);
                $(column).prepend(cardStyleDiv);
                $("#match-card-row").prepend(column);

            }

            $("#show-matches").show();

            $("#contact-btn").on("click", function (event) {
                console.log("You clicked it!");
                $("#contact-modal").modal("toggle");
            
            });

        });

    // console.log(matchFilters);

    $("select").val("Yes");
    $("#match-q1").val("Small");

});





$("#send").on("click", function (event) {
    event.preventDefault();

    $("input").val("");
    $("#contactbox").empty().text("My pup would love to meet yours!");
    $("#contact-modal").modal("toggle");

});


