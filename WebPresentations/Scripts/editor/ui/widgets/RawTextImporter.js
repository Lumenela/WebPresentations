
/*
@author Matt Crinklaw-Vot
*/


(function() {

  define(["vendor/amd/backbone", "./Templates"], function(Backbone, Templates) {
    return Backbone.View.extend({
      className: "rawTextImporter modal",
      events: {
        "click .ok": "okClicked",
        "hidden": "hidden"
      },
      initialize: function() {},
      show: function(cb, val) {
        this.cb = cb;
        if (val != null) {
          this.$txtArea.val(val);
        }
        return this.$el.modal("show");
      },
      okClicked: function() {
        if (this.cb != null) {
          this.cb(this.$txtArea.val());
        }
        return this.$el.modal("hide");
      },
      hidden: function() {
        if (this.$txtArea != null) {
          return this.$txtArea.val("");
        }
      },
      render: function() {
        this.$el.html(Templates.RawTextImporter());
        this.$el.modal();
        this.$el.modal("hide");
        this.$txtArea = this.$el.find("textarea");
        return this.$el;
      }
    });
  });

}).call(this);
