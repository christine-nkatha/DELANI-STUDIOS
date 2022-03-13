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
$("#devicon").click(function () {
  $("#devtext").addClass(["text-center", "fw-bolder"]);
  $("#devcontent").addClass(["text-center"]);

  $("#devicon").toggle();
  $("#devcontent").toggle();
});
$("#devcontent").click(function () {
  $("#devtext").removeClass(["text-center", "fw-bolder"]);
  $("#devicon").toggle();
  $("#devcontent").toggle();
});
