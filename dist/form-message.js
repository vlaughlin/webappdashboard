

var $submitMessage = $(document.getElementById("sendMessage"));

$submitMessage.click(function () {
    if (document.getElementById("comments").value === "") {
        $("#warning").text("Please enter a message");
    } else if ($("#search-user").val() === "") {
        $("#warning").text("Please select a user");
    } else {
        $("#warning").text("Your message has been sent");
    }
});



