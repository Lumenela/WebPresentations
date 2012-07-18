
/*
@author Tantaman
*/


(function() {
  var continuation;

  requirejs.config({
    paths: {
      "css": "vendor/amd_plugins/css",
      "text": "vendor/amd_plugins/text"
    },
    shim: {
      'vendor/amd/jszip': {
        exports: 'JSZip'
      },
      'vendor/amd/jszip-deflate': ['vendor/amd/jszip']
    }
  });

  window.browserPrefix = "";

  if ($.browser.mozilla) {
    window.browserPrefix = "-moz-";
  } else if ($.browser.msie) {
    window.browserPrefix = "-ms-";
  } else if ($.browser.opera) {
    window.browserPrefix = "-o-";
  } else if ($.browser.webkit) {
    window.browserPrefix = "-webkit-";
  }

  if (!(window.localStorage != null)) {
    window.localStorage = {
      setItem: function() {},
      getItem: function() {},
      length: 0
    };
  }

  if (!(Function.bind != null) || (Function.prototype.bind != null)) {
    Function.prototype.bind = function(ctx) {
      var fn;
      fn = this;
      return function() {
        return fn.apply(ctx, arguments);
      };
    };
  }

  if (window.location.href.indexOf("preview=true") !== -1) {

  } else {
    continuation = function() {
      return requirejs(["ui/editor/Editor_supress", "model/presentation/Deck", "storage/FileStorage"], function(Editor, Deck, FileStorage) {
        var deck, editor, lastPres;
        deck = new Deck();
        editor = new Editor({
          model: deck
        });
        window.zTracker = {
          z: 0,
          next: function() {
            return ++this.z;
          }
        };
        $("body").append(editor.render());
        lastPres = localStorage.getItem("editablePresentation");
        return deck["import"](JSON.parse(lastPres));
      });
    };
    requirejs(["vendor/amd/backbone", "state/DefaultState"], function(Backbone, DefaultState) {
      Backbone.sync = function(method, model, options) {
        if (options.keyTrail != null) {
          return options.success(DefaultState.get(options.keyTrail));
        }
      };
      window.slideConfig = {
        size: {
          width: 1024,
          height: 768
        }
      };
      return continuation();
    });
  }

}).call(this);
