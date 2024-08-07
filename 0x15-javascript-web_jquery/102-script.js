// fetches and prints how to say “Hello” depending on the language code entered in the INPUT#language_code field when the user clicks on INPUT#btn_translate.
$(document).ready(function () {
  $("#btn_translate").click(function () {
    const langCode = $("#language_code").val();
    $.get(
      `https://www.fourtonfish.com/hellosalut/hello/?lang=${langCode}`,
      function (data) {
        $("#hello").text(data.hello);
      }
    );
  });
});