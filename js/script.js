$(function(){

  var model = {
        selectedCatsIndex: 0,
        "cat": [
              {
                "name": "Max",
                "clickCount": 0,
                "picture": "images/birali.jpg"
              },
              {
                "name": "Lucy",
                "clickCount": 0,
                "picture": "images/bob.jpg"
              },
              {
                "name": "Charlie",
                "clickCount": 0,
                "picture": "images/katty.jpg"
              },
              {
                "name": "Bailey",
                "clickCount": 0,
                "picture": "images/kitten.jpg"
              },
              {
                "name": "Buddy",
                "clickCount": 0,
                "picture": "images/luis.jpg"
              },
              ],
        init: function() {
            
        },
        getAllCats: function() {
            return cat;
        }
    };
    var octopus = {
        init: function() {
            model.init();
            view.init();
        },
        render: function(){
            view.render();
        },
        increaseCatCcount: function(){
          model.cat[model.selectedCatsIndex].clickCount+=1;
        }

    };


    var view = {
        init: function() {

          $('body').append('<img id="catImg" src="./images/birali.jpg" width="300" height="300"'+'>');
          $('body').append('<h3 class="catCountDisplay" '+'/>');
          $('.catCountDisplay').text(model.cat[0].name + " has been clicked " + model.cat[model.selectedCatsIndex].clickCount + " times");
          // Let's loop over the numbers in our array
          for (var i = 0; i < model.cat.length; i++) {
              var cat = model.cat[i].name;
              var elem = document.createElement('div');
              elem.className = 'catDiv';
              elem.textContent = cat;
              elem.addEventListener('click', (function(catCopy,iIndexCopy) {
                  return function() {
                      model.selectedCatsIndex = iIndexCopy;
                      var srcImage = './' + model.cat[iIndexCopy].picture;
                      $("#catImg").attr('src', srcImage);
                      $('.catCountDisplay').text(model.cat[model.selectedCatsIndex].name + " has been clicked " + model.cat[model.selectedCatsIndex].clickCount + " times");
                  };
              })(cat,i));

              $( "#catImg" ).before(elem);
          }
        },

        render: function() {
          $( "#catImg" ).click(function() {
            octopus.increaseCatCcount();
            $('.catCountDisplay').text(model.cat[model.selectedCatsIndex].name + " has been clicked " + model.cat[model.selectedCatsIndex].clickCount + " times");
          });
        }
        
    };

    octopus.init();
    octopus.render();

});


