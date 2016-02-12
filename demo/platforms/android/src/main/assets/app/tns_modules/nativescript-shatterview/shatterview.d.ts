/**
 * Contains the ShatterView class, which represents a FrameLayout that can be shattered like glass.
 */
declare module "shatterview" {
  import view = require("ui/core/view");
     
  /**
   * Represents a standard ShatterView widget.
   */
  export class ShatterView extends view.View implements view.AddChildFromBuilder {
       
    /**
     * Gets the native [android widget](http://developer.android.com/reference/android/support/v7/widget/CardView.html) that represents the user interface for this component. Valid only when running on Android OS.
     */
      android: any; /* com.yalantis.starwars.TilesFrameLayout */

    /**
    * Called for every child element declared in xml.
    * This method will add a child element (value) to current element.
    * @param name - Name of the element.
    * @param value - Value of the element.
    */
    _addChildFromBuilder(name: string, value: any): void;
  }
}