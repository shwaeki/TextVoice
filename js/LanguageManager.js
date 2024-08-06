var langs = {
  'ar' : 'العربية',
  'en' : 'English',
  'he' : 'עברית',
};

var language = localStorage.getItem('language');
var default_lang = 'en';


function setLanguage(lang) {
    localStorage.setItem('language', lang);
    language = localStorage.getItem('language');
    updateLanguage();
    location.reload();
}

function getLanguage() {
    language = localStorage.getItem('language');
    return language;
}


function updateLanguage() {
    if (language === null) {
        setLanguage(default_lang);
    }


    $.ajax({
        url: 'languages/' + language + '.json',
        dataType: 'json',
        async: true,
        success: function (lang) {
            $("body").removeClassStartingWith('lang-');
            $('body').addClass('lang-'+language);

            $("[data-key]").each(function () {
                var key = $(this).attr('data-key');
                $(this).html(lang[key]);
            });
            $("#selectedLang").html(langs[language]);
        },
        error: function (xhr, status, error) {
            console.error("Error loading language file:", error);
        }
    });
}

$(document).ready(function () {
    console.log(language+" "+default_lang);
    if (language != null ){
        console.log("2");
        updateLanguage(language);
    }

    var existingLinks = $('head').find('link[rel="stylesheet"]');

    if (language === "ar" || language === "he") {
        existingLinks.first().before( $('<link>', {rel: 'stylesheet'}).attr('href', 'css/bootstrap.rtl.min.css'));
        existingLinks.last().after( $('<link>', {rel: 'stylesheet'}).attr('href', 'css/style_rtl.css'));
    } else {
        existingLinks.first().before( $('<link>', {rel: 'stylesheet'}).attr('href', 'css/bootstrap.min.css'));
    }

});


$.fn.removeClassStartingWith = function (filter) {
    $(this).removeClass(function (index, className) {
        return (className.match(new RegExp("\\S*" + filter + "\\S*", 'g')) || []).join(' ')
    });
    return this;
};