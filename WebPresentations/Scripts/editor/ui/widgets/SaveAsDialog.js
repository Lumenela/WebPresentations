
/*
@author Matt Crinklaw-Vot
*/


(function() {

<<<<<<< HEAD
  define(["vendor/amd/backbone", "./Templates", "./OpenDialog"], function(Backbone, Templates, OpenDialog) {
=======
  define(["vendor/backbone", "./Templates", "./OpenDialog"], function(Backbone, Templates, OpenDialog) {
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
    return OpenDialog.extend({
      initialize: function() {
        return OpenDialog.prototype.initialize.apply(this, arguments);
      },
      fileClicked: function(e) {
        OpenDialog.prototype.fileClicked.call(this, e);
        return this.$nameInput.val($(e.currentTarget).text());
      },
      okClicked: function() {
        console.log(this.$nameInput.val());
        if (this.cb != null) {
          this.cb(this.$nameInput.val());
        }
        return this.$el.modal("hide");
      },
      __template: function() {
        return Templates.SaveAsDialog;
      },
      _renderPartial: function() {
        OpenDialog.prototype._renderPartial.call(this);
        return this.$nameInput = this.$el.find("input");
      },
      render: function() {
        this._renderPartial();
        this.$el.modal();
        this.$el.modal("hide");
        return this.$el;
      }
    });
  });

}).call(this);
