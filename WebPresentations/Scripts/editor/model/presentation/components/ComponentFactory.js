<<<<<<< HEAD

=======
// Generated by CoffeeScript 1.3.3
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
/*
@author Tantaman
*/

<<<<<<< HEAD

(function() {

  define(["./Image", "./Table", "./TextBox", "./WebFrame", "./Video"], function(Image, Table, TextBox, WebFrame, Video) {
    var ComponentFactory;
    return ComponentFactory = {
      createTextBox: function(configuration) {
        return new TextBox(configuration);
      },
      createImage: function(configuration) {
        return new Image(configuration);
      },
      createWebFrame: function(configuration) {
        return new WebFrame(configuration);
      },
      createVideo: function(configuration) {
        return new Video(configuration);
      },
      create: function(rawComp) {
        switch (rawComp.type) {
          case "ImageModel":
            return new Image(rawComp);
          case "TextBox":
            return new TextBox(rawComp);
          case "Video":
            return new Video(rawComp);
        }
      }
    };
  });

}).call(this);
=======
define(["./Image", "./Table", "./TextBox"], function(Image, Table, TextBox) {
  var ComponentFactory;
  return ComponentFactory = {
    createTextBox: function(configuration) {
      return new TextBox(configuration);
    },
    createImage: function(configuration) {
      return new Image(configuration);
    }
  };
});
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
