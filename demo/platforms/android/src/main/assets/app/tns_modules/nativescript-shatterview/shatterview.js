var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var common = require("./shatterview-common");
global.moduleMerge(common, exports);
var ShatterView = (function (_super) {
    __extends(ShatterView, _super);
    function ShatterView() {
        _super.call(this);
    }
    Object.defineProperty(ShatterView.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShatterView.prototype, "_nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    //get radius(): number {
    //  return this._getValue(CardView.radiusProp);
    //}
    //set radius(value: number) {
    //  this._setValue(CardView.radiusProp, value);
    //}
    ShatterView.prototype._createUI = function () {
        this._android = new com.yalantis.starwars.TilesFrameLayout(this._context);
        //if (!this._androidViewId) {
        //    this._androidViewId = android.view.View.generateViewId();
        //}
        //this._android.setId(this._androidViewId);
    };
    return ShatterView;
})(common.ShatterView);
exports.ShatterView = ShatterView;
