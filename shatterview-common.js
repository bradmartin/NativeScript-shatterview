var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var contentView = require("ui/content-view");
var ShatterView = (function (_super) {
    __extends(ShatterView, _super);
    function ShatterView() {
        _super.call(this);
    }
    Object.defineProperty(ShatterView.prototype, "android", {
        get: function () {
            return;
        },
        enumerable: true,
        configurable: true
    });
    return ShatterView;
})(contentView.ContentView);
exports.ShatterView = ShatterView;
