
/*
@author Tantaman
*/


(function() {

  define(["./Component", "common/FileUtils"], function(Component, FileUtils) {
    return Component.extend({
      initialize: function() {
        var videoType;
        Component.prototype.initialize.apply(this, arguments);
        this.set("type", "Video");
        videoType = FileUtils.type(FileUtils.extension(this.get('src')));
        return this.set("videoType", videoType);
      },
      constructor: function Video() {
			Component.prototype.constructor.apply(this, arguments);
		}
    });
  });

}).call(this);
