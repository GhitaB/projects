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
        id: '20.05.2016 - present',
        img: 'http://ghitab.github.io/jonah-illustrated-book/Latest/01.png',
        done: 50,
        title: {
          ro: "Iona",
          en: "Jonah"
        },
        text: {
          ro: "carte ilustrată pentru copii",
          en: "illustrated book for kids"
        },
        url: "http://ghitab.github.io/jonah-illustrated-book/"
      },
      {
        id: '12.02.2017 - present',
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
      },
      {
        id: '...',
        img: 'http://www.farulsperantei.ro/wp-content/uploads/Proverbe-356x516.jpg',
        done: 100,
        title: {
          ro: "Cartea Proverbelor",
          en: "Proverbs"
        },
        text: {
          ro: "carte de colorat",
          en: "coloring book"
        },
        url: "http://www.farulsperantei.ro/produs/cartea-proverbelor/"
      },
      {
        id: '2013',
        img: 'http://www.farulsperantei.ro/wp-content/uploads/Desen-Isaac-2013-363x516.jpg',
        done: 100,
        title: {
          ro: "Isaac",
          en: "Isaac"
        },
        text: {
          ro: "carte de colorat",
          en: "coloring book"
        },
        url: "http://www.farulsperantei.ro/produs/isaac/"
      },
      {
        id: '...',
        img: 'http://www.farulsperantei.ro/wp-content/uploads/Colorat-Moise-353x516.jpg',
        done: 100,
        title: {
          ro: "Moise, copilul de pe Nil",
          en: "Moses"
        },
        text: {
          ro: "carte de colorat",
          en: "coloring book"
        },
        url: "http://www.farulsperantei.ro/produs/moise-copilul-de-pe-nil/"
      },
      {
        id: '...',
        img: 'http://www.farulsperantei.ro/wp-content/uploads/Potopul-356x516.jpg',
        done: 100,
        title: {
          ro: "Potopul lui Noe",
          en: "Noah"
        },
        text: {
          ro: "carte de colorat",
          en: "coloring book"
        },
        url: "http://www.farulsperantei.ro/produs/potopul-lui-noe/"
      },
      {
        id: '...',
        img: 'http://www.farulsperantei.ro/wp-content/uploads/Rebeca-358x516.jpg',
        done: 100,
        title: {
          ro: "Rebeca",
          en: "Rebecca"
        },
        text: {
          ro: "carte de colorat",
          en: "coloring book"
        },
        url: "http://www.farulsperantei.ro/produs/carte-de-colorat-rebeca/"
      },
      {
        id: '2013',
        img: 'http://www.farulsperantei.ro/wp-content/uploads/Cop_Babel-355x516.jpg',
        done: 100,
        title: {
          ro: "Turnul Babel",
          en: "Tower of Babel"
        },
        text: {
          ro: "carte de colorat",
          en: "coloring book"
        },
        url: "http://www.farulsperantei.ro/produs/turnul-babel/"
      },
      {
        id: '...',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51zcXMjkIoL._SX258_BO1,204,203,200_.jpg',
        done: 100,
        title: {
          ro: "Balada unui greier mic",
          en: "Balada unui greier mic"
        },
        text: {
          ro: "ilustrații color, pictură digitală",
          en: "illustrations, digital painting"
        },
        url: "https://www.amazon.co.uk/BALADA-UNUI-GREIER-GEORGE-TOPIRCEANU/dp/6068500039"
      }
    ];

  });
