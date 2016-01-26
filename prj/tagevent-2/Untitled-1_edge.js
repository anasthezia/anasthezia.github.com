/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'anonymous-pro, sans-serif': '<script src=\"http://use.edgefonts.net/anonymous-pro:n4,i4,n7,i7:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'content3_-12',
                            type: 'image',
                            rect: ['0px', '-2px', '550px', '221px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"content%283%29%20%5B%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%5D-1.jpg",'0px','0px']
                        },
                        {
                            id: 'content3_',
                            type: 'image',
                            rect: ['0.1%', '0px', '100%', '223px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"content%283%29%20%5B%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%5D.jpg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['550px', '23px', '236px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "ДЕРЖИ ПОД РУКОЙ",
                            align: "right",
                            font: ['Lucida Console, Monaco, monospace', [19, "px"], "rgba(0,171,251,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['575px', '52px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "самый полный справочник",
                            align: "right",
                            font: ['\'Lucida Console\', Monaco, monospace', [14, "px"], "rgba(238,234,99,1.00)", "400", "none solid rgb(0, 171, 251)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['283px', '80px', 'auto', 'auto', 'auto', 'auto'],
                            text: "ПРАЗДНИЧНЫХ УСЛУГ",
                            align: "right",
                            font: ['\'Lucida Console\', Monaco, monospace', [24, "px"], "rgba(124,207,42,1.00)", "400", "none solid rgb(0, 171, 251)", "normal", "break-word", "nowrap"],
                            textShadow: ["rgba(43,255,2,0.65)", 0, 0, 5]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '218px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 6291,
                    autoPlay: true,
                    labels: {
                        "Label 1": 1519
                    },
                    data: [
                        [
                            "eid31",
                            "opacity",
                            3000,
                            1500,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "left",
                            4500,
                            25,
                            "linear",
                            "${Text3}",
                            '566px',
                            '493px'
                        ],
                        [
                            "eid49",
                            "left",
                            4525,
                            1766,
                            "linear",
                            "${Text3}",
                            '493px',
                            '283px'
                        ],
                        [
                            "eid64",
                            "textShadow.offsetH",
                            6291,
                            0,
                            "linear",
                            "${Text3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid35",
                            "opacity",
                            4500,
                            1250,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "left",
                            2750,
                            2250,
                            "linear",
                            "${Text2}",
                            '575px',
                            '337px'
                        ],
                        [
                            "eid14",
                            "left",
                            1519,
                            1981,
                            "linear",
                            "${Text}",
                            '550px',
                            '285px'
                        ],
                        [
                            "eid62",
                            "textShadow.blur",
                            6291,
                            0,
                            "linear",
                            "${Text3}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid59",
                            "textShadow.color",
                            6291,
                            0,
                            "linear",
                            "${Text3}",
                            'rgba(43,255,2,0.65)',
                            'rgba(43,255,2,0.65)'
                        ],
                        [
                            "eid8",
                            "opacity",
                            1029,
                            490,
                            "linear",
                            "${content3_}",
                            '0',
                            '1'
                        ],
                        [
                            "eid65",
                            "textShadow.offsetV",
                            6291,
                            0,
                            "linear",
                            "${Text3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "opacity",
                            1750,
                            1000,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Untitled-1_edgeActions.js");
})("EDGE-220623044");
