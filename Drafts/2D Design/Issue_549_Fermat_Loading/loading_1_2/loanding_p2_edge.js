/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'circulo_load-02',
                type: 'image',
                rect: ['0', '0','302px','302px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"circulo_load-02.png",'0px','0px']
            },
            {
                id: 'cartera_grande-05',
                type: 'image',
                rect: ['79px', '104px','144px','104px','auto', 'auto'],
                borderRadius: ["0px", "0px", "0px", "0px"],
                fill: ["rgba(0,0,0,0)",im+"cartera_grande-05.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                transform: [[],[],[],['1.14421','1.14421']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_circulo_load-02}": [
                ["transform", "rotateZ", '360deg'],
                ["style", "opacity", '1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '300px'],
                ["style", "height", '300px'],
                ["style", "overflow", 'hidden']
            ],
            "${_cartera_grande-05}": [
                ["subproperty", "filter.contrast", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1.14421'],
                ["style", "left", '79px'],
                ["style", "width", '144px'],
                ["style", "top", '104px'],
                ["transform", "scaleY", '1.14421'],
                ["style", "height", '104px'],
                ["subproperty", "filter.hue-rotate", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid41", tween: [ "transform", "${_circulo_load-02}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 0, duration: 1000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-849368");
