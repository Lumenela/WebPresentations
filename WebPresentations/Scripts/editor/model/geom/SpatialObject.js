<<<<<<< HEAD

=======
// Generated by CoffeeScript 1.3.3
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
/*
@author Matt Crinklaw-Vogt
*/

<<<<<<< HEAD

(function() {

  define(["common/Calcium", "common/Math2"], function(Backbone) {
    return Backbone.Model.extend({
      initialize: function() {},
      setInt: function(name, value) {
        if (typeof value === "string") {
          try {
            value = parseInt(value);
          } catch (e) {
            return;
          }
        }
        return this.set(name, Math.round(value));
      },
      setFloat: function(name, value, dec) {
        if (typeof value === "string") {
          try {
            value = parseInt(value);
          } catch (e) {
            return;
          }
        }
        if (dec != null) {
          value = Math2.round(value, dec);
        }
        return this.set(name, value);
      },
      constructor: function SpatialObject() {
			Backbone.Model.prototype.constructor.apply(this, arguments);
		}
    });
  });

}).call(this);
=======
define(["common/Calcium", "common/Math2"], function(Backbone) {
  return Backbone.Model.extend({
    initialize: function() {},
    setInt: function(name, value) {
      if (typeof value === "string") {
        try {
          value = parseInt(value);
        } catch (e) {
          return;
        }
      }
      return this.set(name, Math.round(value));
    },
    setFloat: function(name, value, dec) {
      if (typeof value === "string") {
        try {
          value = parseInt(value);
        } catch (e) {
          return;
        }
      }
      if (dec != null) {
        value = Math2.round(value, dec);
      }
      return this.set(name, value);
    },
    constructor: function SpatialObject() {
			Backbone.Model.prototype.constructor.apply(this, arguments);
		}
  });
});
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
