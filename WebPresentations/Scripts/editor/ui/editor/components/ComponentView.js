<<<<<<< HEAD

=======
// Generated by CoffeeScript 1.3.3
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
/*
@author Matt Crinklaw-Vogt
*/

<<<<<<< HEAD

(function() {

  define(["vendor/amd/backbone", "ui/widgets/DeltaDragControl", "../Templates", "common/Math2", "css!../res/css/ComponentView.css"], function(Backbone, DeltaDragControl, Templates, Math2, empty) {
    return Backbone.View.extend({
      transforms: ["skewX", "skewY"],
      className: "component",
      events: function() {
        return {
          "mousedown": "mousedown",
          "click": "clicked",
          "click .removeBtn": "removeClicked",
          "change input[data-option='x']": "manualMoveX",
          "change input[data-option='y']": "manualMoveY",
          "deltadrag span[data-delta='skewX']": "skewX",
          "deltadrag span[data-delta='skewY']": "skewY",
          "deltadrag span[data-delta='rotate']": "rotate",
          "deltadrag span[data-delta='scale']": "scale",
          "deltadragStart span[data-delta='skewX']": "skewXStart",
          "deltadragStart span[data-delta='skewY']": "skewYStart",
          "deltadragStart span[data-delta='rotate']": "rotateStart",
          "deltadragStart span[data-delta='scale']": "scaleStart"
        };
      },
      initialize: function() {
        this._dragging = false;
        this.allowDragging = true;
        this.model.on("change:selected", this.__selectionChanged, this);
        this.model.on("change:color", this._colorChanged, this);
        this.model.on("unrender", this._unrender, this);
        this._mouseup = this.stopdrag.bind(this);
        this._mousemove = this.mousemove.bind(this);
        $(document).bind("mouseup", this._mouseup);
        $(document).bind("mousemove", this._mousemove);
        this._deltaDrags = [];
        this.model.on("rerender", this._setUpdatedTransform, this);
        this.model.on("change:x", this._xChanged, this);
        this.model.on("change:y", this._yChanged, this);
        return this._lastDeltas = {
          dx: 0,
          dy: 0
        };
      },
      __selectionChanged: function(model, selected) {
        if (selected) {
          return this.$el.addClass("selected");
        } else {
          return this.$el.removeClass("selected");
        }
      },
      _colorChanged: function(model, color) {
        return this.$el.css("color", "#" + color);
      },
      _xChanged: function(model, value) {
        this.$el.css("left", value);
        return this.$xInput.val(value);
      },
      _yChanged: function(model, value) {
        this.$el.css("top", value);
        return this.$yInput.val(value);
      },
      clicked: function(e) {
        this.$el.trigger("focused");
        e.stopPropagation();
        return false;
      },
      removeClicked: function(e) {
        e.stopPropagation();
        return this.remove();
      },
      skewX: function(e, deltas) {
        this.model.set("skewX", this._initialSkewX + Math.atan2(deltas.dx, 22));
        return this._setUpdatedTransform();
      },
      skewXStart: function() {
        return this._initialSkewX = this.model.get("skewX") || 0;
      },
      skewY: function(e, deltas) {
        this.model.set("skewY", this._initialSkewY + Math.atan2(deltas.dy, 22));
        return this._setUpdatedTransform();
      },
      skewYStart: function() {
        return this._initialSkewY = this.model.get("skewY") || 0;
      },
      manualMoveX: function(e) {
        return this.model.setInt("x", e.target.value);
      },
      manualMoveY: function(e) {
        return this.model.setInt("y", e.target.value);
      },
      rotate: function(e, deltas) {
        var rot;
        rot = this._calcRot(deltas);
        this.model.set("rotate", this._initialRotate + rot - this._rotOffset);
        return this._setUpdatedTransform();
      },
      rotateStart: function(e, deltas) {
        this.updateOrigin();
        this._rotOffset = this._calcRot(deltas);
        return this._initialRotate = this.model.get("rotate") || 0;
      },
      updateOrigin: function() {
        var offset;
        offset = this.$el.offset();
        return this._origin = {
          x: this.$el.width() / 2 + offset.left,
          y: this.$el.height() / 2 + offset.top
        };
      },
      _calcRot: function(point) {
        return Math.atan2(point.y - this._origin.y, point.x - this._origin.x);
      },
      scaleStart: function(e, deltas) {
        var H, elHeight, elOffset, elWidth, theta;
        this.dragScale = this.$el.parent().css(window.browserPrefix + "transform");
        this.dragScale = parseFloat(this.dragScale.substring(7, this.dragScale.indexOf(","))) || 1;
        this._initialScale = this.model.get("scale");
        elOffset = this.$el.offset();
        elWidth = this.$el.width() * this._initialScale.x;
        elHeight = this.$el.height() * this._initialScale.y;
        H = Math.sqrt((elWidth / 2) * (elWidth / 2) + (elHeight / 2) * (elHeight / 2));
        theta = this.model.get("rotate") || 0;
        theta = theta + Math.atan2(elHeight / 2, elWidth / 2);
        this._scaleCenter = {
          x: elOffset.left + Math.abs(Math.cos(theta)),
          y: elOffset.top + Math.abs(Math.sin(theta))
        };
        this._scaleDeltas = {
          x: Math.abs(deltas.x - this._scaleCenter.x) / this.dragScale,
          y: Math.abs(deltas.y - this._scaleCenter.y) / this.dragScale
        };
        if (!(this.origSize != null)) {
          return this.origSize = {
            width: this.$el.width(),
            height: this.$el.height()
          };
        }
      },
      scale: function(e, deltas) {
        var dx, dy, scale;
        dx = Math.abs(deltas.x - this._scaleCenter.x) / this.dragScale;
        dy = Math.abs(deltas.y - this._scaleCenter.y) / this.dragScale;
        scale = {
          x: this._initialScale.x * (dx / this._scaleDeltas.x),
          y: this._initialScale.y * (dy / this._scaleDeltas.y)
        };
        scale.width = scale.x * this.origSize.width;
        scale.height = scale.y * this.origSize.height;
        this.model.set("scale", scale);
        return this._setUpdatedTransform();
      },
      _setUpdatedTransform: function() {
        var newHeight, newWidth, obj, scale, transformStr;
        transformStr = this.buildTransformString();
        obj = {
          transform: transformStr
        };
        obj[window.browserPrefix + "transform"] = transformStr;
        this.$content.css(obj);
        scale = this.model.get("scale");
        if (this.origSize != null) {
          newWidth = scale.width || this.origSize.width;
          newHeight = scale.height || this.origSize.height;
          this.$el.css({
            width: newWidth,
            height: newHeight
          });
        }
        if (scale != null) {
          this.$contentScale.css(window.browserPrefix + "transform", "scale(" + scale.x + "," + scale.y + ")");
        }
        return this.$el.css(window.browserPrefix + "transform", "rotate(" + this.model.get("rotate") + "rad)");
      },
      buildTransformString: function() {
        var transformStr,
          _this = this;
        transformStr = "";
        this.transforms.forEach(function(transformName) {
          var transformValue;
          transformValue = _this.model.get(transformName);
          if (transformValue) {
            return transformStr += transformName + "(" + transformValue + "rad) ";
          }
        });
        return transformStr;
      },
      mousedown: function(e) {
        this.model.set("selected", true);
        this.$el.css("zIndex", zTracker.next());
        this.dragScale = this.$el.parent().css(window.browserPrefix + "transform");
        this.dragScale = parseFloat(this.dragScale.substring(7, this.dragScale.indexOf(","))) || 1;
        this._dragging = true;
        return this._prevPos = {
          x: e.pageX,
          y: e.pageY
        };
      },
      render: function() {
        var size,
          _this = this;
        this.$el.html(this.__getTemplate()(this.model.attributes));
        this.$el.find("span[data-delta]").each(function(idx, elem) {
          var deltaDrag;
          deltaDrag = new DeltaDragControl($(elem), true);
          return _this._deltaDrags.push(deltaDrag);
        });
        this.$content = this.$el.find(".content");
        this.$contentScale = this.$el.find(".content-scale");
        this.__selectionChanged(this.model, this.model.get("selected"));
        this.$xInput = this.$el.find("[data-option='x']");
        this.$yInput = this.$el.find("[data-option='y']");
        this.$el.css({
          top: this.model.get("y"),
          left: this.model.get("x")
        });
        size = {
          width: this.$el.width(),
          height: this.$el.height()
        };
        if (size.width > 0 && size.height > 0) {
          this.origSize = size;
        }
        this._setUpdatedTransform();
        return this.$el;
      },
      __getTemplate: function() {
        return Templates.Component;
      },
      _unrender: function() {
        return this.remove(true);
      },
      remove: function(keepModel) {
        var $doc, deltaDrag, idx, _ref;
        Backbone.View.prototype.remove.call(this);
        _ref = this._deltaDrags;
        for (idx in _ref) {
          deltaDrag = _ref[idx];
          deltaDrag.dispose();
        }
        if (!keepModel) {
          this.model.dispose();
          this.model.off(null, null, this);
        } else {
          this.model.off(null, null, this);
        }
        $doc = $(document);
        $doc.unbind("mouseup", this._mouseup);
        return $doc.unbind("mousemove", this._mousemove);
      },
      mousemove: function(e) {
        var dx, dy, newX, newY, x, y;
        if (this._dragging && this.allowDragging) {
          x = this.model.get("x");
          y = this.model.get("y");
          dx = e.pageX - this._prevPos.x;
          dy = e.pageY - this._prevPos.y;
          newX = x + dx / this.dragScale;
          newY = y + dy / this.dragScale;
          this.model.set("x", newX);
          this.model.set("y", newY);
          this._prevPos.x = e.pageX;
          return this._prevPos.y = e.pageY;
        }
      },
      stopdrag: function() {
        this._dragging = false;
        return true;
      },
      constructor: function ComponentView() {
			Backbone.View.prototype.constructor.apply(this, arguments);
		}
    });
  });

}).call(this);
=======
define(["vendor/backbone", "ui/widgets/DeltaDragControl", "../Templates"], function(Backbone, DeltaDragControl, Templates) {
  return Backbone.View.extend({
    transforms: ["skewX", "skewY"],
    className: "component",
    events: function() {
      return {
        "mousedown": "mousedown",
        "click": "clicked",
        "click .removeBtn": "removeClicked",
        "change input[data-option='x']": "manualMoveX",
        "change input[data-option='y']": "manualMoveY",
        "deltadrag span[data-delta='skewX']": "skewX",
        "deltadrag span[data-delta='skewY']": "skewY",
        "deltadrag span[data-delta='rotate']": "rotate",
        "deltadrag span[data-delta='scale']": "scale",
        "deltadragStart span[data-delta='skewX']": "skewXStart",
        "deltadragStart span[data-delta='skewY']": "skewYStart",
        "deltadragStart span[data-delta='rotate']": "rotateStart",
        "deltadragStart span[data-delta='scale']": "scaleStart"
      };
    },
    initialize: function() {
      this._dragging = false;
      this.allowDragging = true;
      this.model.on("change:selected", this._selectionChanged, this);
      this.model.on("change:color", this._colorChanged, this);
      this.model.on("unrender", this._unrender, this);
      this._mouseup = this.stopdrag.bind(this);
      this._mousemove = this.mousemove.bind(this);
      $(document).bind("mouseup", this._mouseup);
      $(document).bind("mousemove", this._mousemove);
      this._deltaDrags = [];
      this.model.on("rerender", this._setUpdatedTransform, this);
      this.model.on("change:x", this._xChanged, this);
      return this.model.on("change:y", this._yChanged, this);
    },
    _selectionChanged: function(model, selected) {
      if (selected) {
        return this.$el.addClass("selected");
      } else {
        return this.$el.removeClass("selected");
      }
    },
    _colorChanged: function(model, color) {
      return this.$el.css("color", "#" + color);
    },
    _xChanged: function(model, value) {
      this.$el.css("left", value);
      return this.$xInput.val(value);
    },
    _yChanged: function(model, value) {
      this.$el.css("top", value);
      return this.$yInput.val(value);
    },
    clicked: function(e) {
      this.$el.trigger("focused");
      e.stopPropagation();
      return false;
    },
    removeClicked: function(e) {
      e.stopPropagation();
      return this.remove();
    },
    skewX: function(e, deltas) {
      this.model.set("skewX", this._initialSkewX + Math.atan2(deltas.dx, 22));
      return this._setUpdatedTransform();
    },
    skewXStart: function() {
      return this._initialSkewX = this.model.get("skewX") || 0;
    },
    skewY: function(e, deltas) {
      this.model.set("skewY", this._initialSkewY + Math.atan2(deltas.dy, 22));
      return this._setUpdatedTransform();
    },
    skewYStart: function() {
      return this._initialSkewY = this.model.get("skewY") || 0;
    },
    manualMoveX: function(e) {
      return this.model.setInt("x", e.target.value);
    },
    manualMoveY: function(e) {
      return this.model.setInt("y", e.target.value);
    },
    rotate: function(e, deltas) {
      var rot;
      rot = this._calcRot(deltas);
      this.model.set("rotate", this._initialRotate + rot - this._rotOffset);
      return this._setUpdatedTransform();
    },
    rotateStart: function(e, deltas) {
      this.updateOrigin();
      this._rotOffset = this._calcRot(deltas);
      return this._initialRotate = this.model.get("rotate") || 0;
    },
    updateOrigin: function() {
      var offset;
      offset = this.$el.offset();
      return this._origin = {
        x: this.$el.width() / 2 + offset.left,
        y: this.$el.height() / 2 + offset.top
      };
    },
    _calcRot: function(point) {
      return Math.atan2(point.y - this._origin.y, point.x - this._origin.x);
    },
    scale: function(e, deltas) {
      var contentHeight, contentWidth, newHeight, newWidth, scale;
      contentWidth = this.$content.width();
      contentHeight = this.$content.height();
      newWidth = contentWidth + deltas.dx;
      newHeight = contentHeight + deltas.dy;
      scale = (newWidth * newHeight) / (contentWidth * contentHeight) * this._initialScale;
      if (newWidth * newHeight > 10) {
        this.model.set("scale", scale);
        return this._setUpdatedTransform();
      }
    },
    scaleStart: function() {
      this._initialScale = this.model.get("scale") || 1;
      if (!(this.origSize != null) || this.origSize.width === 0 || this.origSize.height === 0) {
        return this.origSize = {
          width: this.$el.width(),
          height: this.$el.height()
        };
      }
    },
    _setUpdatedTransform: function() {
      var newHeight, newWidth, obj, scale, transformStr;
      transformStr = this.buildTransformString();
      obj = {
        transform: transformStr
      };
      obj[window.browserPrefix + "transform"] = transformStr;
      this.$content.css(obj);
      scale = this.model.get("scale");
      if (this.origSize != null) {
        newWidth = this.origSize.width * scale;
        newHeight = this.origSize.height * scale;
        this.$el.css({
          width: newWidth,
          height: newHeight
        });
      }
      this.$contentScale.css(window.browserPrefix + "transform", "scale(" + scale + ")");
      return this.$el.css(window.browserPrefix + "transform", "rotate(" + this.model.get("rotate") + "rad)");
    },
    buildTransformString: function() {
      var transformStr,
        _this = this;
      transformStr = "";
      this.transforms.forEach(function(transformName) {
        var transformValue;
        transformValue = _this.model.get(transformName);
        if (transformValue) {
          if (transformName === "scale") {
            return transformStr += transformName + "(" + transformValue + ") ";
          } else {
            return transformStr += transformName + "(" + transformValue + "rad) ";
          }
        }
      });
      return transformStr;
    },
    mousedown: function(e) {
      this.model.set("selected", true);
      this.$el.css("zIndex", zTracker.next());
      this.dragScale = this.$el.parent().css(window.browserPrefix + "transform");
      this.dragScale = parseFloat(this.dragScale.substring(7, this.dragScale.indexOf(","))) || 1;
      this._dragging = true;
      return this._prevPos = {
        x: e.pageX,
        y: e.pageY
      };
    },
    render: function() {
      var _this = this;
      this.$el.html(this.__getTemplate()(this.model.attributes));
      this.$el.find("span[data-delta]").each(function(idx, elem) {
        var deltaDrag;
        deltaDrag = new DeltaDragControl($(elem), true);
        return _this._deltaDrags.push(deltaDrag);
      });
      this.$content = this.$el.find(".content");
      this.$contentScale = this.$el.find(".content-scale");
      this._selectionChanged(this.model, this.model.get("selected"));
      this.$xInput = this.$el.find("[data-option='x']");
      this.$yInput = this.$el.find("[data-option='y']");
      setTimeout(function() {
        var size;
        size = {
          width: _this.$el.width(),
          height: _this.$el.height()
        };
        if (size.width > 0 && size.height > 0) {
          _this.origSize = size;
        }
        return _this._setUpdatedTransform();
      }, 0);
      return this.$el;
    },
    _fixScaling: function(scale) {
      var dh, dw, height, pos, width;
      pos = this.$el.position();
      width = this.$el.width() * scale;
      height = this.$el.height() * scale;
      dw = width - this.$el.width();
      dh = height - this.$el.height();
      return this.$el.css({
        width: width,
        height: height,
        left: pos.left - dw / 2,
        top: pos.top - dh / 2
      });
    },
    __getTemplate: function() {
      return Templates.Component;
    },
    _unrender: function() {
      return this.remove(true);
    },
    remove: function(keepModel) {
      var $doc, deltaDrag, idx, _ref;
      Backbone.View.prototype.remove.call(this);
      _ref = this._deltaDrags;
      for (idx in _ref) {
        deltaDrag = _ref[idx];
        deltaDrag.dispose();
      }
      if (!keepModel) {
        this.model.dispose();
        this.model.off(null, null, this);
      } else {
        this.model.off(null, null, this);
      }
      $doc = $(document);
      $doc.unbind("mouseup", this._mouseup);
      return $doc.unbind("mousemove", this._mousemove);
    },
    mousemove: function(e) {
      var dx, dy, newX, newY, x, y;
      if (this._dragging && this.allowDragging) {
        x = this.model.get("x");
        y = this.model.get("y");
        dx = e.pageX - this._prevPos.x;
        dy = e.pageY - this._prevPos.y;
        newX = x + dx / this.dragScale;
        newY = y + dy / this.dragScale;
        this.model.set("x", newX);
        this.model.set("y", newY);
        this._prevPos.x = e.pageX;
        return this._prevPos.y = e.pageY;
      }
    },
    stopdrag: function() {
      this._dragging = false;
      return true;
    },
    constructor: function ComponentView() {
			Backbone.View.prototype.constructor.apply(this, arguments);
		}
  });
});
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
