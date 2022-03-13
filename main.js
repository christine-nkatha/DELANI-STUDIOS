$(document).ready(function () {
  $("#designcontent").toggle();
  $("#devcontent").toggle();
  $("#productcontent").toggle();
});

$("#designcontent").click(function () {
  $("#designtext").removeClass(["text-center", "fw-bolder"]);
  $("#designicon").toggle();
  $("#designcontent").toggle();
});
$("#designicon").click(function () {
  $("#designtext").addClass(["text-center", "fw-bolder"]);
  $("#designicon").toggle();
  $("#designcontent").toggle();
});
