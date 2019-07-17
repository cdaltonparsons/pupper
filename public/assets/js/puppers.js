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
            q1: q1Input,
            q2: q2Input,
            q3: q3Input,
            q4: q4Input,
            q5: q5Input,
            q6: q6Input,
            q7: q7Input,
            q8: q8Input,
            q9: q9Input,
            q10: q10Input,
            q11: q11Input,
            q12: q12Input,
            q13: q13Input
          };

        alert("Thank you for submitting your survey!");

        $("input").val("");
        $("select").val("1");

        // $.post("/api/friends", newFriend)
        //     .then(function(data) {
        //     console.log("added friend", data);

        //     $.get(`/api/match/${newFriend.name}`, function(data) {
        //         console.log(data);

        //         $("#modal").modal();

        //         if (data) {
        //             $("#match-photo").attr("src", data.photo);
        //             $("#title").text("Your Compatible Friend Match Is: " + data.name);
                    
        //         } else {
        //             $("#match-message").text("There are currently no matches.");
        //         }
        //     });
        // });
    } else {
        alert(`Please complete all required fields.`);
        $("input").addClass("border border-danger");
    }
});
