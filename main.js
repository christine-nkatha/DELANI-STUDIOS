$(document).ready(function () {
  $("#designcontent").toggle();
  $("#devcontent").toggle();
  $("#productcontent").toggle();
  $("#proj2hover").toggleClass("visually-hidden");
  $("#proj1hover").toggleClass("visually-hidden");
  $("#proj3hover").toggleClass("visually-hidden");
  $("#proj4hover").toggleClass("visually-hidden");
  $("#proj5hover").toggleClass("visually-hidden");
  $("#proj6hover").toggleClass("visually-hidden");
  $("#proj7hover").toggleClass("visually-hidden");
  $("#proj8hover").toggleClass("visually-hidden");
});

//what we do logic
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
$("#producticon").click(function () {
  $("#producttext").addClass(["text-center", "fw-bolder"]);
  $("#productcontent").addClass(["text-center"]);
  $("#producticon").toggle();
  $("#productcontent").toggle();
});
$("#productcontent").click(function () {
  $("#producttext").removeClass(["text-center", "fw-bolder"]);

  $("#producticon").toggle();
  $("#productcontent").toggle();
});

//portfolio logic

$("#project2").hover(function () {
  $("#proj2hover").toggleClass("visually-hidden");
});
$("#project1").hover(function () {
  $("#proj1hover").toggleClass("visually-hidden");
});
$("#project3").hover(function () {
  $("#proj3hover").toggleClass("visually-hidden");
});
$("#project4").hover(function () {
  $("#proj4hover").toggleClass("visually-hidden");
});
$("#project5").hover(function () {
  $("#proj5hover").toggleClass("visually-hidden");
});
$("#project6").hover(function () {
  $("#proj6hover").toggleClass("visually-hidden");
});
