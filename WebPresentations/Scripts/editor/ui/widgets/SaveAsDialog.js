
/*
@author Matt Crinklaw-Vot
*/


(function() {

  define(["vendor/backbone", "./Templates", "./OpenDialog"], function(Backbone, Templates, OpenDialog) {
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
