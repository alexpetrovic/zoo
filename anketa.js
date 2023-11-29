$(document).ready(function () {
  $("#submitBtn").click(function () {
    var q1 = parseInt($("#q1").val());
    var q2 = parseInt($("#q2").val());
    var q3 = parseInt($("#q3").val());

    var averageRating = (q1 + q2 + q3) / 3;
    $("#result").html(
      "Vaše iskustvo u Zoo vrtu ste ocenili sa: " + averageRating.toFixed(2)
    );

    if (averageRating >= 1 && averageRating <= 2.5) {
      $("#result").css("background-color", "red");
    } else if (averageRating > 2.5 && averageRating <= 3.5) {
      $("#result").css("background-color", "orange");
    } else if (averageRating > 3.5) {
      $("#result").css("background-color", "green");
    }
  });
});
