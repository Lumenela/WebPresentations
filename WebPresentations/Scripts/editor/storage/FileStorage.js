<<<<<<< HEAD
(function() {

  define([], function() {
    var FileStorage, prefix;
    prefix = "Strut_";
    FileStorage = (function() {

      FileStorage.name = 'FileStorage';

      function FileStorage() {
        this.storageImpl = localStorage;
      }

      FileStorage.prototype.fileNames = function() {
        var fileName, fileNames, idx, numFiles;
        numFiles = this.storageImpl.length;
        idx = 0;
        fileNames = [];
        while (idx < numFiles) {
          fileName = localStorage.key(idx);
          if (fileName.indexOf(prefix) !== -1) {
            fileNames.push(fileName.replace(prefix, ""));
          }
          ++idx;
        }
        return fileNames;
      };

      FileStorage.prototype.remove = function(fileName) {
        return this.storageImpl.removeItem(prefix + fileName);
      };

      FileStorage.prototype.save = function(fileName, contents) {
        return this.storageImpl.setItem(prefix + fileName, JSON.stringify(contents));
      };

      FileStorage.prototype.open = function(fileName) {
        var item;
        item = this.storageImpl.getItem(prefix + fileName);
        if (item != null) {
          try {
            return JSON.parse(item);
          } catch (e) {
            return null;
          }
        } else {
          return null;
        }
      };

      return FileStorage;

    })();
    return new FileStorage();
  });

}).call(this);
=======
// Generated by CoffeeScript 1.3.3

define([], function() {
  var FileStorage, prefix;
  prefix = "Strut_";
  FileStorage = (function() {

    function FileStorage() {
      this.storageImpl = localStorage;
    }

    FileStorage.prototype.fileNames = function() {
      var fileName, fileNames, idx, numFiles;
      numFiles = this.storageImpl.length;
      idx = 0;
      fileNames = [];
      while (idx < numFiles) {
        fileName = localStorage.key(idx);
        if (fileName.indexOf(prefix) !== -1) {
          fileNames.push(fileName.replace(prefix, ""));
        }
        ++idx;
      }
      return fileNames;
    };

    FileStorage.prototype.remove = function(fileName) {
      return this.storageImpl.removeItem(prefix + fileName);
    };

    FileStorage.prototype.save = function(fileName, contents) {
      return this.storageImpl.setItem(prefix + fileName, JSON.stringify(contents));
    };

    FileStorage.prototype.open = function(fileName) {
      return JSON.parse(this.storageImpl.getItem(prefix + fileName));
    };

    return FileStorage;

  })();
  return new FileStorage();
});
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
