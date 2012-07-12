
/*
@author Tantaman
*/


(function() {

  define(["./AbstractButtonBarView", "model/editor/button_bar/ButtonBarModel", "model/presentation/components/ComponentFactory"], function(AbstractButtonBarView, ButtonBarModel, ComponentFactory) {
    var buttonBarOptions, fontSettings;
    fontSettings = ["size", "family", "weight", "style", "decoration"];
    buttonBarOptions = {
      _extractValue: function(e) {
        var $target, value;
        value = e.target.dataset.value;
        if (!(value != null)) {
          $target = $(e.target);
          value = $target.parent()[0].dataset.value;
        }
        return value;
      },
      createSlide: function() {
        return this.deck.newSlide();
      },
      textBox: function() {
        var activeSlide, textBox;
        activeSlide = this.deck.get("activeSlide");
        if (activeSlide != null) {
          textBox = ComponentFactory.createTextBox(this.model.fontConfig());
          activeSlide.add(textBox);
          return textBox.trigger("edit");
        }
      },
      picture: function() {
        var activeSlide,
          _this = this;
        activeSlide = this.deck.get("activeSlide");
        if (activeSlide != null) {
          return this.options.pictureGrabber.show(function(src) {
            return activeSlide.add(ComponentFactory.createImage(_this.model.itemConfig(src)));
          });
        }
      },
      iframe: function() {
        var activeSlide,
          _this = this;
        activeSlide = this.deck.get("activeSlide");
        if (activeSlide != null) {
          return this.options.siteGrabber.show(function(src) {
            var webFrame;
            webFrame = ComponentFactory.createWebFrame(_this.model.itemConfig(src));
            return activeSlide.add(webFrame);
          });
        }
      },
      video: function() {
        var activeSlide,
          _this = this;
        activeSlide = this.deck.get("activeSlide");
        if (activeSlide != null) {
          return this.options.videoGrabber.show(function(src) {
            var video;
            video = ComponentFactory.createVideo(_this.model.itemConfig(src));
            return activeSlide.add(video);
          });
        }
      },
      table: function() {},
      shapes: function() {},
      chart: function() {},
      transitionEditor: function() {
        return this.$el.trigger("changePerspective", {
          perspective: "transitionEditor"
        });
      },
      preview: function() {
        return this.$el.trigger("preview");
      },
      textAlign: function(e) {
        return this.model.textAlign(e.currentTarget.dataset.value);
      }
    };
    fontSettings.forEach(function(setting) {
      var longSetting;
      longSetting = "font" + setting.substr(0, 1).toUpperCase() + setting.substr(1);
      return buttonBarOptions[longSetting] = (function() {
        var _longSetting;
        _longSetting = longSetting;
        return function(e) {
          var value;
          value = buttonBarOptions._extractValue(e);
          return this.model[_longSetting](value);
        };
      })();
    });
    return AbstractButtonBarView.extend({
      events: function() {
        return {
          "click *[data-option]": "optionChosen"
        };
      },
      initialize: function() {
        AbstractButtonBarView.prototype.initialize.call(this, buttonBarOptions);
        this.deck = this.options.deck;
        this.deck.on("change:activeSlide", this.activeSlideChanged, this);
        this.model = new ButtonBarModel();
        this.model.on("change:fontSize", this._fontSizeChanged, this);
        return this.model.on("change:fontFamily", this._fontFamilyChanged, this);
      },
      _fontFamilyChanged: function(model, value) {
        value = value.substr(value.indexOf("'") + 1, value.lastIndexOf("'") - 1);
        return this.$el.find(".fontFamilyBtn .text").text(value);
      },
      _fontSizeChanged: function(model, value) {
        return this.$el.find(".fontSizeBtn .text").text(value);
      },
      activeSlideChanged: function(mode, newSlide) {
        if (this.currentSlide) {
          this.currentSlide.off("change:activeSlide", this.activeSlideChanged, this);
        }
        this.currentSlide = newSlide;
        if (newSlide) {
          return newSlide.on("change:activeComponent", this.activeComponentChanged, this);
        }
      },
      activeComponentChanged: function(slide, newComponent) {
        this.model.activeComponentChanged(newComponent);
        if (newComponent) {
          return this.$el.find(".fontButton").removeClass("disabled");
        } else {
          return this.$el.find(".fontButton").addClass("disabled");
        }
      },
      dispose: function() {
        if (this.currentSlide) {
          this.currentSlide.off("change:activeSlide", this.activeSlideChanged, this);
        }
        return this.deck.off("change:activeSlide", this.activeSlideChanged, this);
      },
      render: function() {
        var $colorChooser,
          _this = this;
        $colorChooser = this.$el.find(".color-chooser");
        $colorChooser.ColorPicker({
          onChange: function(hsb, hex, rgb) {
            $colorChooser.find("div").css("backgroundColor", "#" + hex);
            return _this.model.colorSelected(hex);
          }
        });
        return this.$el;
      }
    });
  });

}).call(this);
