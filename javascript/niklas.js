$(document).ready(function() {

// När jag klickar på en tabb så ska innhållet ändras
$("#tabs").tabs({
  event: "click"
});

// Ändrar färg på outline från grön till blå när jag hovrar över socialamedier-blocket
$("#socialamedier").hover(function() {
  $(this).css('outline-color', 'blue');
}, function() {
  $('#socialamedier').css('outline-color', 'green');
});

});

// Google Translate översättningsfunktion
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'sv',
    includedLanguages: 'en,es,fi,no',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: true
  }, 'google_translate_element');
}
