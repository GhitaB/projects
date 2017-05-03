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

    gallery.intro = {
      ro: "Ghiță Bizău",
      en: "Ghiță Bizău"
    };

    gallery.episode = {
      ro: "Proiect",
      en: "Project"
    };

    gallery.complete = {
      ro: "Realizat",
      en: "Complete"
    };

    gallery.you_can_help = {
      ro: "Poți să ajuți.",
      en: "You can help."
    };

    gallery.credits = {
      title: {
        ro: "Despre",
        en: "About"
      },
      text: {
        ro: "credits",
        en: "credits"
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
        id: 0,
        img: '00.png',
        done: 100,
        title: {
          ro: "Coperta",
          en: "Cover"
        },
        text: {
          ro: "Coperta cărții (color)",
          en: "Book cover (color)"
        }
      }
    ];

  });
