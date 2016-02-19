var observable = require("data/observable");
var frame = require("ui/frame");
var application = require("application");
var color = require("color");
var viewModel = new observable.Observable({});


function pageLoaded(args) {

    var page = args.object;
    var sw = page.getViewById('shatterView').android;
    console.log('sw: ' + sw);

    if (application.android) {
        application.android.on(application.AndroidApplication.activityCreatedEvent, function (args) {
            console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
        });

        application.android.on(application.AndroidApplication.activityDestroyedEvent, function (args) {
            console.log("Event: " + args.eventName + ", Activity: " + args.activity);
        });

        application.android.on(application.AndroidApplication.activityStartedEvent, function (args) {
            console.log("Event: " + args.eventName + ", Activity: " + args.activity);
        });

        application.android.on(application.AndroidApplication.activityPausedEvent, function (args) {
            console.log("Event: " + args.eventName + ", Activity: " + args.activity);
            sw.onPause();
            console.log("SHATTERVIEW Paused... ");
        });

        application.android.on(application.AndroidApplication.activityResumedEvent, function (args) {
            console.log("Event: " + args.eventName + ", Activity: " + args.activity);
            sw.onResume();
            console.log("SHATTERVIEW Resume...");
        });

        application.android.on(application.AndroidApplication.activityStoppedEvent, function (args) {
            console.log("Event: " + args.eventName + ", Activity: " + args.activity);
        });

        application.android.on(application.AndroidApplication.saveActivityStateEvent, function (args) {
            console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
        });

        application.android.on(application.AndroidApplication.activityResultEvent, function (args) {
            console.log("Event: " + args.eventName + ", Activity: " + args.activity +
                ", requestCode: " + args.requestCode + ", resultCode: " + args.resultCode + ", Intent: " + args.intent);
        });

        application.android.on(application.AndroidApplication.activityBackPressedEvent, function (args) {
            console.log("Event: " + args.eventName + ", Activity: " + args.activity);
            // Set args.cancel = true to cancel back navigation and do something custom.
        });
    }


    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;


function goAway(args) { 
    try {

        var mTilesFrameLayout = args.object.android;
        console.log('sv native: ' + mTilesFrameLayout);

        mTilesFrameLayout.startAnimation();

    } catch (ex) {
        console.log(ex);
    }
}
exports.goAway = goAway;