import definition = require("shatterview");
import contentView = require("ui/content-view");

export class ShatterView extends contentView.ContentView implements definition.ShatterView {

  constructor() {
    super();
  }

  get android(): any {
    return;
  }

}