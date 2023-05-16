function changeLanguage() {
  for (var id in translations) {
    if (translations.hasOwnProperty(id)) {
      var translation = translations[id];
      $("#" + id).html(translation);
    }
  }
}

function loadTranslations(language) {
  $.getJSON("translations.json", function (data) {
    translations = data[language];
    changeLanguage();

    $("#languageDropdown").html(
      "<img src='images/icons/flags/" +
        language +
        ".svg' alt='" + language + " flag' /> " +
        language.toUpperCase()
    );
    $(".dropdown-item").show();
    $(".dropdown-item:contains('" + language.toUpperCase() + "')").hide();
    truncateText();
    localStorage.setItem('selectedLanguage', language);
  });

}

$.get("header.html", function (data) {
  $("header").html(data); // Load the header content

  // Your code to manipulate the header content goes here
  if (localStorage.getItem('selectedLanguage'))
    loadTranslations(localStorage.getItem('selectedLanguage'));
  else
    loadTranslations("en");
});

$.get("footer.html", function (data) {
  $("footer").html(data); // Load the footer content
});

$.get("sidebar.html", function (data) {
  $("#sidebar").html(data); // Load the sidebar content
});
