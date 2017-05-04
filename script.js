angular.module('galleryApp', [])
  .controller('galleryController', function() {
    var gallery = this;
    gallery.language = "en";

    gallery.title = {
      en: "Projects",
      ro: "Proiecte"
    };

    gallery.description = {
      en: "a list of projects in which I participate or participated",
      ro: "o listă de proiecte la care particip sau am participat"
    };

    gallery.complete = {
      ro: "Realizat",
      en: "Complete"
    };

    gallery.credits = {
      title: {
        ro: "Contact",
        en: "Contact"
      },
      text: {
        ro: "ghita_bizau@yahoo.com",
        en: "ghita_bizau@yahoo.com"
      }
    };

    gallery.languages = [
      {
        short: "ro",
        text: "Română"
      },
      {
        short: "en",
        text: "English"
      }
    ];

    gallery.change_language = function(language) {
      gallery.language = language;
      console.log(language);
    };

    gallery.get_progress = function(done) {
      if(done <= 10) {
        return "danger"
      } else {
        if(done > 80) {
          return "success"
        } else {
          if(done <= 50) {
            return "warning"
          } else {
            return "info"
          }
        }
      }
    };

    // EDIT HERE
    gallery.items = [
      {
        id: '02.2017 - present',
        img: 'https://ghitab.github.io/miracles-of-jesus/Latest/00.png',
        done: 95,
        title: {
          ro: "Minunile lui Isus",
          en: "Miracles of Jesus"
        },
        text: {
          ro: "carte de colorat",
          en: "coloring book"
        },
        url: "https://ghitab.github.io/miracles-of-jesus/"
      }
    ];

  });
