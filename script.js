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

    // EDIT HERE
    gallery.items = [
      {
        id: '10.02.2019 - present',
        img: './Latest/happywords.png',
        done: 10,
        title: {
          ro: "happywords.net",
          en: "happywords.net"
        },
        text: {
          ro: "site wordpress",
          en: "Vanilla JavaScript website"
        },
        url: "https://happywords.net/"
      },
      {
        id: '27.06.2017 - present',
        img: 'https://ghitab.github.io/esther/Latest/00.png',
        done: 27,
        title: {
          ro: "Estera",
          en: "Esther"
        },
        text: {
          ro: "carte de colorat",
          en: "coloring book"
        },
        url: "https://ghitab.github.io/esther/"
      },
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
        id: '12.02.2017 - 15.02.2018',
        img: 'https://ghitab.github.io/miracles-of-jesus/Latest/00.png',
        done: 100,
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
        id: '2017',
        img: 'http://i.imgur.com/DM0YvZu.png',
        done: 100,
        title: {
          ro: "Implementat design pentru EEA Copernicus In Situ",
          en: "Implemented design for EEA Copernicus In Situ"
        },
        text: {
          ro: "Bootstrap, CSS. E folosit aici: http://insitu.copernicus.eu/library/fact-sheets",
          en: "Bootstrap, CSS. It is used here: http://insitu.copernicus.eu/library/fact-sheets"
        },
        url: "https://ghitab.github.io/insitu-fact-sheet-design/"
      },
      {
        id: '2016',
        img: 'http://i.imgur.com/iVExoF6.png',
        done: 100,
        title: {
          ro: "Culori mai frumoase",
          en: "Beautify colors"
        },
        text: {
          ro: "paletă drăguță de culori derivată din culorile alese de tine",
          en: "nice palette from given colors"
        },
        url: "https://ghitab.github.io/beautify-colors/"
      },
      {
        id: '2015',
        img: 'http://i.imgur.com/vfsRtCY.jpg',
        done: 100,
        title: {
          ro: "Ghicește numărul (joc)",
          en: "Guess my number (game)"
        },
        text: {
          ro: "jquery, ghicește numărul din 4 cifre",
          en: "jquery, guess the 4 digits number"
        },
        url: "http://ghitab.github.io/guess-my-number/"
      },
      {
        id: '2015',
        img: 'http://i.imgur.com/qA8Wv3m.png',
        done: 100,
        title: {
          ro: "Generator de cuvinte încurcate ascunse (joc)",
          en: "Word Search Maker (game)"
        },
        text: {
          ro: "angularjs, jquery, generează joc de căutare de cuvinte",
          en: "angularjs, jquery, create your own game with hidden words"
        },
        url: "https://github.com/Voluntari-Noi/crossword-puzzle-generator"
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
        img: 'http://www.farulsperantei.ro/wp-content/uploads/Cop-Conflict-353x516.jpg',
        done: 100,
        title: {
          ro: "Corectură carte (română)",
          en: "Book correction (romanian)"
        },
        text: {
          ro: "Conflict și biruință - Davi Paes Silva. Am citit-o și am trimis la editură greșelile găsite, înainte de a fi publicată în română.",
          en: "Conflict and victory - Davi Paes Silva. I read it and sent to the publishing house the errors before they published it in romanian."
        },
        url: "http://www.farulsperantei.ro/produs/conflict-si-biruinta/"
      },
      {
        id: '2013',
        img: 'http://www.farulsperantei.ro/wp-content/uploads/Istoria-MR-366x516.jpg',
        done: 100,
        title: {
          ro: "Corectură carte (română)",
          en: "Book correction (romanian)"
        },
        text: {
          ro: "Istoria Mișcării de Reformă a Adventiștilor de Ziua a Șaptea - Alfons Balbach. Am citit-o și am trimis la editură greșelile găsite, înainte de a fi publicată în română.",
          en: "History of the Seventh Day Adventist Reform Movement - Alfons Balbach. I read it and sent to the publishing house the errors before they published it in romanian."
        },
        url: "http://www.farulsperantei.ro/produs/istoria-miscarii-de-reforma/"
      },
      {
        id: '2013',
        img: 'Latest/retete.png',
        done: 100,
        title: {
          ro: "Copertă de carte - design",
          en: "Book cover design"
        },
        text: {
          ro: "design copertă carte și câteva pagini interior pentru cartea cu rețete vegetariene a Restaurantului Vegetarian Cris Oradea",
          en: "book cover design (also for some pages) for Restaurant Vegetarian Cris Oradea"
        },
        url: "http://www.restvegan.ro/shop/retete-vegetariene/"
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
        img: 'Latest/dor_de_tara_preview.jpg',
        done: 100,
        title: {
          ro: "Dor de țară",
          en: "Dor de țară"
        },
        text: {
          ro: "muzică creștină, CD",
          en: "christian music, CD"
        },
        url: "http://aievea.net/dor-de-tara"
      },
      {
        id: '05.2006',
        img: 'Latest/pribeag.jpg',
        done: 100,
        title: {
          ro: "Pribeag",
          en: "Pribeag"
        },
        text: {
          ro: "muzică creștină, CD",
          en: "christian music, CD"
        },
        url: "http://www.aievea.net/ghita-bizau-pribeag"
      }
    ];

  });
