// fetches and prints how to say “Hello” depending on the language code entered in the INPUT#language_code field when the user clicks on INPUT#btn_translate or presses ENTER when the focus is on INPUT#language_code.
$(document).ready(function () {
  function fetchHello() {
    const langCode = $("#language_code").val();
    $.get(
      `https://www.fourtonfish.com/hellosalut/hello/?lang=${langCode}`,
      function (data) {
        $("#hello").text(data.hello);
      }
    );
  }

  $("#btn_translate").click(fetchHello);

  $("#language_code").keypress(function (event) {
    if (event.which === 13) {
      fetchHello();
    }
  });
});