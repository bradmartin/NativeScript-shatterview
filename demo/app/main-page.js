var observable = require("data/observable");
var frame = require("ui/frame");
var app = require("application");
var viewModel = new observable.Observable({});


function pageLoaded(args) {
    var page = args.object;
    var sv = frame.topmost().currentPage.getViewById('shatterView');
    console.log('shatterview = ' + sv.android);

    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;

function goAway(args) { 
    try {
        var page = frame.topmost().currentPage;
        var sv = page.getViewById('shatterView');
        var mTilesFrameLayout = sv.android;
        console.log('sv native: ' + mTilesFrameLayout);

        mTilesFrameLayout.startAnimation();

    } catch (ex) {
        console.log(ex);
    }
}
exports.goAway = goAway;