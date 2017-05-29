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
        id: '2014',
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
        id: '2013-2014',
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
      },
      {
        id: '2013',
        img: 'Latest/condeiul.jpg',
        done: 100,
        title: {
          ro: "Condeiul fermecat",
          en: "Condeiul fermecat"
        },
        text: {
          ro: "caiet de caligrafie (desene și text caligrafic pentru exerciții)",
          en: "calligraphy notebook (drawings and calligraphic text for exercises)"
        },
        url: "#"
      },
      {
        id: '2010-2013',
        img: 'Latest/desenez-net.png',
        done: 100,
        title: {
          ro: "www.desenez.net",
          en: "www.desenez.net"
        },
        text: {
          ro: "PHP, MySQL, programare web",
          en: "PHP, MySQL, web development"
        },
        url: "http://www.desenez.net"
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
        id: '2013',
        img: 'http://i.imgur.com/wP4x0W3.png',
        done: 100,
        title: {
          ro: "Puzzle (joc)",
          en: "Puzzle (game)"
        },
        text: {
          ro: "Joc cu numere, javascript",
          en: "Game with numbers, javascript"
        },
        url: "http://ghitab.github.io/Puzzle/"
      },
      {
        id: '2011',
        img: 'Latest/drumul.jpg',
        done: 100,
        title: {
          ro: "Pe drumul înțelepților",
          en: "Pe drumul înțelepților"
        },
        text: {
          ro: "ilustrații",
          en: "illustrations"
        },
        url: "#"
      },
      {
        id: '2010',
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
        id: '2010',
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
        id: '2009-2010',
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
        id: '2009',
        img: 'Latest/ZZ.png',
        done: 100,
        title: {
          ro: "Dor de țară",
          en: "Dor de țară"
        },
        text: {
          ro: "muzică creștină, CD",
          en: "christian music, CD"
        },
        url: "http://ghitab.blogspot.com"
      }
    ];

  });
