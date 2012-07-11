(function() {

  define(function() {
    var FileUtils;
    return FileUtils = {
      baseName: function(path, extension) {
        var idx;
        if (path[path.length - 1] === "/") {
          path = path.substring(0, path.length - 1);
        }
        idx = path.lastIndexOf("/");
        if (idx !== -1 && idx + 1 < path.length) {
          path = path.substring(idx + 1, path.length);
        }
        if (extension != null) {
          idx = path.lastIndexOf(extension);
          if (idx + extension.length === path.length) {
            path = path.substring(0, idx);
          }
        }
        return path;
      },
      imageType: function(uri) {
        var idx;
        if (uri.indexOf("data:") === 0) {
          idx = uri.indexOf(";");
          return uri.substring(11, idx).toUpperCase();
        } else {
          return FileUtils.extension(uri);
        }
      },
      extension: function(uri) {
        var extension, idx;
        idx = uri.lastIndexOf(".");
        if (idx !== -1 && idx + 1 < uri.length) {
          extension = uri.substring(idx + 1, uri.length);
          idx = extension.lastIndexOf("?");
          if (idx !== -1) {
            extension = extension.substring(0, idx);
          }
          return extension.toUpperCase();
        } else {
          return "";
        }
      },
      type: function(extension) {
        switch (extension) {
          case "MP4":
            return "video/mp4";
          case "WEBM":
            return "video/webm";
          case "OGG":
            return "video/ogg";
          default:
            return "";
        }
      }
    };
  });

}).call(this);
