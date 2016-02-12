import common = require("./shatterview-common");
import {PropertyMetadata} from "ui/core/proxy";
import {Property, PropertyMetadataSettings} from "ui/core/dependency-observable";

global.moduleMerge(common, exports);

export class ShatterView extends common.ShatterView {
  //public static radiusProp = radiusProp;
  //public static elevationProp = elevationProp;
  private _android: com.yalantis.starwars.TilesFrameLayout;

  constructor() {
    super();
  }

  get android(): com.yalantis.starwars.TilesFrameLayout {
    return this._android;
  }

  get _nativeView(): com.yalantis.starwars.TilesFrameLayout {
    return this._android;
  }

  //get radius(): number {
  //  return this._getValue(CardView.radiusProp);
  //}
  //set radius(value: number) {
  //  this._setValue(CardView.radiusProp, value);
  //}

  public _createUI() {

      this._android = new com.yalantis.starwars.TilesFrameLayout(this._context);

      if (!this._androidViewId) {

          this._androidViewId = android.view.View.generateViewId();
      }
      this._android.setId(this._androidViewId);

  }
}