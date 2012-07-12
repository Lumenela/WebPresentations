
/*
@author Matt Crinklaw-Vogt
*/


(function() {

  define(["./ComponentView", "../Templates", "common/Math2"], function(ComponentView, Templates, Math2) {
    var twoPI;
    twoPI = Math.PI * 2;
    return ComponentView.extend({
      transforms: ["rotateX", "rotateY", "rotateZ", "scale"],
      events: function() {
        return {
          "mousedown": "mousedown",
          "click": "clicked",
          "deltadrag span[data-delta='rotateX']": "rotateX",
          "deltadrag span[data-delta='rotateY']": "rotateY",
          "deltadrag span[data-delta='rotateZ']": "rotateZ",
          "deltadragStart span[data-delta='rotateX']": "rotateXStart",
          "deltadragStart span[data-delta='rotateY']": "rotateYStart",
          "deltadragStart span[data-delta='rotateZ']": "rotateZStart",
          "change input[data-option='z']": "manualMoveZ",
          "change input[data-option='scale']": "manualMoveScale",
          "change input[data-option='rotateX']": "manualRotX",
          "change input[data-option='rotateY']": "manualRotY",
          "change input[data-option='rotateZ']": "manualRotZ"
        };
      },
      initialize: function() {
        ComponentView.prototype.initialize.apply(this, arguments);
        this.model.on("change:rotateX", this._rotXChanged, this);
        this.model.on("change:rotateY", this._rotYChanged, this);
        return this.model.on("change:rotateZ", this._rotZChanged, this);
      },
      rotateX: function(e, deltas) {
        var rot;
        rot = (deltas.dy * .02) % twoPI;
        return this.model.set("rotateX", this._initialRotX + rot);
      },
      rotateY: function(e, deltas) {
        var rot;
        rot = (deltas.dx * .02) % twoPI;
        return this.model.set("rotateY", this._initialRotY + rot);
      },
      rotateZ: function(e, deltas) {
        var rot;
        rot = this._calcRot(deltas);
        return this.model.set("rotateZ", this._initialRotZ + rot - this._rotZOffset);
      },
      manualMoveScale: function(e) {
        return this.model.setFloat("impScale", e.target.value);
      },
      manualMoveZ: function(e) {
        return this.model.setInt("z", e.target.value);
      },
      manualRotX: function(e) {
        return this.model.setFloat("rotateX", Math2.toRads(e.target.value));
      },
      manualRotY: function(e) {
        return this.model.setFloat("rotateY", Math2.toRads(e.target.value));
      },
      manualRotZ: function(e) {
        return this.model.setFloat("rotateZ", Math2.toRads(e.target.value));
      },
      rotateXStart: function(e, deltas) {
        this.updateOrigin();
        this._rotXOffset = this._calcRot(deltas);
        return this._initialRotX = this.model.get("rotateX") || 0;
      },
      rotateYStart: function(e, deltas) {
        this.updateOrigin();
        this._rotYOffset = this._calcRot(deltas);
        return this._initialRotY = this.model.get("rotateY") || 0;
      },
      rotateZStart: function(e, deltas) {
        this.updateOrigin();
        this._rotZOffset = this._calcRot(deltas);
        return this._initialRotZ = this.model.get("rotateZ") || 0;
      },
      render: function() {
        ComponentView.prototype.render.apply(this, arguments);
        this.$rotXInput = this.$el.find("[data-option='rotateX']");
        this.$rotYInput = this.$el.find("[data-option='rotateY']");
        return this.$rotZInput = this.$el.find("[data-option='rotateZ']");
      },
      _rotXChanged: function(model, value) {
        this.$rotXInput.val(Math2.toDeg(value));
        return this._setUpdatedTransform();
      },
      _rotYChanged: function(model, value) {
        this.$rotYInput.val(Math2.toDeg(value));
        return this._setUpdatedTransform();
      },
      _rotZChanged: function(model, value) {
        this.$rotZInput.val(Math2.toDeg(value));
        return this._setUpdatedTransform();
      },
      __getTemplate: function() {
        return Templates.ThreeDRotableComponentView;
      },
      constructor: function ThreeDRotableComponentView() {
			ComponentView.prototype.constructor.apply(this, arguments);
		}
    });
  });

}).call(this);
