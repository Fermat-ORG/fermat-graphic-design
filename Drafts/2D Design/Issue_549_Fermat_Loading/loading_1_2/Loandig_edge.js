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
                id: 'inter_anim',
                type: 'rect',
                rect: ['387', '833','auto','auto','auto', 'auto']
            },
            {
                id: 'loading',
                type: 'rect',
                rect: ['25', '289','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'inter_anim',
                symbolName: 'inter_anim',
                autoPlay: {

                }
            },
            {
                id: 'loading',
                symbolName: 'Symbol_1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '300px'],
                ["style", "height", '341px'],
                ["style", "overflow", 'hidden']
            ],
            "${_inter_anim}": [
                ["style", "top", '85px'],
                ["style", "left", '-3px'],
                ["transform", "scaleY", '0.81967'],
                ["transform", "scaleX", '0.81967']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1505,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"inter_anim": {
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
                    id: 'carteras-02',
                    type: 'image',
                    rect: ['0px', '-122px', '106px', '144px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/carteras-02.png', '0px', '0px']
                },
                {
                    rect: ['85px', '-94px', '107px', '145px', 'auto', 'auto'],
                    id: 'carteras-03',
                    transform: [[], ['4']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/carteras-03.png', '0px', '0px']
                },
                {
                    id: 'carteras-04',
                    type: 'image',
                    rect: ['41px', '10px', '106px', '145px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/carteras-04.png', '0px', '0px']
                },
                {
                    id: 'cartera_grande-05',
                    type: 'image',
                    rect: ['0px', '0px', '305px', '221px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cartera_grande-05.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_carteras-03}": [
                ["style", "top", '6px'],
                ["style", "left", '85px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_carteras-02}": [
                ["style", "left", '0px'],
                ["style", "top", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '221px'],
                ["style", "width", '305px']
            ],
            "${_carteras-04}": [
                ["style", "top", '43px'],
                ["style", "left", '154px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_cartera_grande-05}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1505,
            autoPlay: true,
            timeline: [
                { id: "eid50", tween: [ "transform", "${_carteras-03}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid54", tween: [ "style", "${_carteras-02}", "top", '-122px', { fromValue: '12px'}], position: 1000, duration: 500 },
                { id: "eid52", tween: [ "style", "${_carteras-03}", "top", '-107px', { fromValue: '6px'}], position: 500, duration: 500 },
                { id: "eid43", tween: [ "style", "${_carteras-04}", "left", '154px', { fromValue: '154px'}], position: 500, duration: 0 },
                { id: "eid38", tween: [ "style", "${_carteras-04}", "top", '-80px', { fromValue: '43px'}], position: 0, duration: 500 },
                { id: "eid45", tween: [ "transform", "${_carteras-04}", "rotateZ", '52deg', { fromValue: '0deg'}], position: 0, duration: 500 }            ]
        }
    }
},
"cartritas": {
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
                    id: 'inter_animCopy',
                    type: 'rect',
                    rect: ['108px', '200px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'inter_animCopy2',
                    type: 'rect',
                    rect: ['108px', '200px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'inter_animCopy2',
                symbolName: 'inter_anim'
            },
            {
                id: 'inter_animCopy',
                symbolName: 'inter_anim'
            }            ]
        },
    states: {
        "Base State": {
            "${_inter_animCopy2}": [
                ["style", "top", '186px'],
                ["transform", "scaleY", '0.274'],
                ["transform", "scaleX", '0.274'],
                ["style", "opacity", '0'],
                ["style", "left", '85px']
            ],
            "${_inter_animCopy}": [
                ["style", "top", '186px'],
                ["transform", "scaleY", '0.274'],
                ["transform", "scaleX", '0.274'],
                ["style", "opacity", '0'],
                ["style", "left", '85px']
            ],
            "${symbolSelector}": [
                ["style", "height", '541px'],
                ["style", "width", '547px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid73", tween: [ "style", "${_inter_animCopy}", "opacity", '0', { fromValue: '0'}], position: 1500, duration: 0 },
                { id: "eid74", tween: [ "style", "${_inter_animCopy}", "opacity", '1', { fromValue: '0'}], position: 1875, duration: 125 },
                { id: "eid65", tween: [ "style", "${_inter_animCopy}", "left", '-110px', { fromValue: '85px'}], position: 1500, duration: 500 },
                { id: "eid78", tween: [ "style", "${_inter_animCopy2}", "opacity", '0', { fromValue: '0'}], position: 1500, duration: 0 },
                { id: "eid79", tween: [ "style", "${_inter_animCopy2}", "opacity", '1', { fromValue: '0'}], position: 1875, duration: 125 },
                { id: "eid66", tween: [ "style", "${_inter_animCopy}", "top", '-80px', { fromValue: '186px'}], position: 1500, duration: 500 },
                { id: "eid76", tween: [ "transform", "${_inter_animCopy2}", "scaleY", '0.274', { fromValue: '0.274'}], position: 2000, duration: 0 },
                { id: "eid75", tween: [ "style", "${_inter_animCopy2}", "top", '399px', { fromValue: '186px'}], position: 1500, duration: 500 },
                { id: "eid77", tween: [ "transform", "${_inter_animCopy2}", "scaleX", '0.274', { fromValue: '0.274'}], position: 2000, duration: 0 },
                { id: "eid60", tween: [ "transform", "${_inter_animCopy}", "scaleY", '0.274', { fromValue: '0.274'}], position: 2000, duration: 0 },
                { id: "eid59", tween: [ "transform", "${_inter_animCopy}", "scaleX", '0.274', { fromValue: '0.274'}], position: 2000, duration: 0 },
                { id: "eid80", tween: [ "style", "${_inter_animCopy2}", "left", '352px', { fromValue: '85px'}], position: 1500, duration: 500 }            ]
        }
    }
},
"Symbol_1": {
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
                    id: 'load_tx-07',
                    type: 'image',
                    rect: ['137px', '12px', '22px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/load_tx-07.png', '0px', '0px']
                },
                {
                    id: 'load_tx-08',
                    type: 'image',
                    rect: ['164px', '12px', '25px', '36px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/load_tx-08.png', '0px', '0px']
                },
                {
                    id: 'load_tx-02',
                    type: 'image',
                    rect: ['0px', '3px', '23px', '34px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/load_tx-02.png', '0px', '0px']
                },
                {
                    id: 'load_tx-06',
                    type: 'image',
                    rect: ['125px', '2px', '6px', '34px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/load_tx-06.png', '0px', '0px']
                },
                {
                    id: 'load_tx-05',
                    type: 'image',
                    rect: ['96px', '0px', '24px', '37px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/load_tx-05.png', '0px', '0px']
                },
                {
                    id: 'load_tx-04',
                    type: 'image',
                    rect: ['64px', '12px', '24px', '25px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/load_tx-04.png', '0px', '0px']
                },
                {
                    id: 'load_tx-09',
                    type: 'image',
                    rect: ['194px', '30px', '6px', '6px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/load_tx-09.png', '0px', '0px']
                },
                {
                    id: 'load_tx-09Copy',
                    type: 'image',
                    rect: ['206px', '30px', '6px', '6px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/load_tx-09.png', '0px', '0px']
                },
                {
                    id: 'load_tx-09Copy2',
                    type: 'image',
                    rect: ['218px', '30px', '6px', '6px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/load_tx-09.png', '0px', '0px']
                },
                {
                    id: 'load_tx-03',
                    type: 'image',
                    rect: ['30px', '12px', '25px', '25px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/load_tx-03.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_load_tx-06}": [
                ["style", "top", '2px'],
                ["style", "opacity", '0'],
                ["style", "left", '125px']
            ],
            "${_load_tx-04}": [
                ["style", "top", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '64px']
            ],
            "${_load_tx-09Copy}": [
                ["style", "top", '30px'],
                ["style", "opacity", '0'],
                ["style", "left", '206px']
            ],
            "${_load_tx-09Copy2}": [
                ["style", "top", '30px'],
                ["style", "opacity", '0'],
                ["style", "left", '218px']
            ],
            "${_load_tx-05}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '96px']
            ],
            "${_load_tx-07}": [
                ["style", "top", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '137px']
            ],
            "${symbolSelector}": [
                ["style", "height", '48px'],
                ["style", "width", '224px']
            ],
            "${_load_tx-09}": [
                ["style", "top", '30px'],
                ["style", "opacity", '0'],
                ["style", "left", '194px']
            ],
            "${_load_tx-02}": [
                ["style", "top", '3px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_load_tx-08}": [
                ["style", "top", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '164px']
            ],
            "${_load_tx-03}": [
                ["style", "top", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '30px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1330,
            autoPlay: true,
            timeline: [
                { id: "eid111", tween: [ "style", "${_load_tx-06}", "opacity", '1', { fromValue: '0'}], position: 205, duration: 100 },
                { id: "eid134", tween: [ "style", "${_load_tx-06}", "opacity", '1', { fromValue: '0'}], position: 985, duration: 100 },
                { id: "eid115", tween: [ "style", "${_load_tx-09Copy}", "opacity", '1', { fromValue: '0'}], position: 400, duration: 100 },
                { id: "eid130", tween: [ "style", "${_load_tx-09Copy}", "opacity", '1', { fromValue: '0'}], position: 1175, duration: 100 },
                { id: "eid116", tween: [ "style", "${_load_tx-09Copy2}", "opacity", '1', { fromValue: '0'}], position: 455, duration: 100 },
                { id: "eid129", tween: [ "style", "${_load_tx-09Copy2}", "opacity", '1', { fromValue: '0'}], position: 1230, duration: 100 },
                { id: "eid110", tween: [ "style", "${_load_tx-05}", "opacity", '1', { fromValue: '0'}], position: 150, duration: 100 },
                { id: "eid133", tween: [ "style", "${_load_tx-05}", "opacity", '1', { fromValue: '0'}], position: 930, duration: 100 },
                { id: "eid109", tween: [ "style", "${_load_tx-04}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 100 },
                { id: "eid132", tween: [ "style", "${_load_tx-04}", "opacity", '1', { fromValue: '0'}], position: 875, duration: 100 },
                { id: "eid112", tween: [ "style", "${_load_tx-07}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 100 },
                { id: "eid137", tween: [ "style", "${_load_tx-07}", "opacity", '1', { fromValue: '0'}], position: 1030, duration: 100 },
                { id: "eid114", tween: [ "style", "${_load_tx-09}", "opacity", '1', { fromValue: '0'}], position: 350, duration: 100 },
                { id: "eid131", tween: [ "style", "${_load_tx-09}", "opacity", '1', { fromValue: '0'}], position: 1125, duration: 100 },
                { id: "eid108", tween: [ "style", "${_load_tx-03}", "opacity", '1', { fromValue: '0'}], position: 50, duration: 100 },
                { id: "eid128", tween: [ "style", "${_load_tx-03}", "opacity", '1', { fromValue: '0'}], position: 825, duration: 100 },
                { id: "eid107", tween: [ "style", "${_load_tx-02}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 100 },
                { id: "eid135", tween: [ "style", "${_load_tx-02}", "opacity", '1', { fromValue: '0'}], position: 780, duration: 100 },
                { id: "eid113", tween: [ "style", "${_load_tx-08}", "opacity", '1', { fromValue: '0'}], position: 300, duration: 100 },
                { id: "eid136", tween: [ "style", "${_load_tx-08}", "opacity", '1', { fromValue: '0'}], position: 1080, duration: 100 }            ]
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
})(jQuery, AdobeEdge, "EDGE-85060418");
