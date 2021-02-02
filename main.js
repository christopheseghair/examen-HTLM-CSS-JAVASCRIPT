$(".alert").hide();

/* En cas de non-validation des champs, les bordures deviennent rouge */

$("form").submit((e) => {
  e.preventDefault();
  if ($("select").val() === null || $("textarea").val().length < 15) {
    $("textarea").addClass("red");
    $("select").addClass("red");
  } else $("form").hide() && $(".alert").show();
});
