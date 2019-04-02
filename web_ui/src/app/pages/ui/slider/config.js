var CONFIG = {
 "data": {
  "_lastModified": 1554065447005,
  "assetsPath": "C:\\Users\\azizi\\Gapminder Offline\\resources\\/preview-data/",
  "ddfPath": "./data/ddf--gapminder--systema_globalis",
  "lastModified": 1554065447005,
  "path": "./data/ddf--gapminder--systema_globalis",
  "reader": "ddf"
 },
 "locale": {
  "filePath": "assets/translation/",
  "id": "en"
 },
 "state": {
  "entities": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "country",
   "filter": {
    "country": {
     "un_state": true
    }
   },
   "show": {
    "country": {
     "$in": [
      "usa",
      "rus",
      "chn",
      "nga"
     ]
    }
   },
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "entities_colorlegend": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "world_4region",
   "filter": {},
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "marker": {
   "allowSelectMultiple": true,
   "axis_x": {
    "allow": {
     "scales": [
      "time"
     ]
    },
    "autoconfig": {
     "index": 0,
     "type": "time"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "fixBaseline": null,
    "scaleType": "time",
    "syncModels": [],
    "use": "indicator",
    "which": "time",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "axis_y": {
    "allow": {
     "scales": [
      "linear",
      "log"
     ]
    },
    "autoconfig": {
     "type": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "fixBaseline": null,
    "scaleType": "log",
    "syncModels": [],
    "use": "indicator",
    "which": "income_per_person_gdppercapita_ppp_inflation_adjusted",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "color": {
    "allow": {
     "scales": [
      "ordinal"
     ]
    },
    "autoconfig": {},
    "data": "data",
    "palette": {
     "_default": [
      "#ffb600",
      "#ffaa14",
      "#ffc500",
      "#fb6d19",
      "#ffb600",
      "#9b4838"
     ],
     "africa": [
      "#00d5e9",
      "#00c8ec",
      "#00e1ec",
      "#0098df",
      "#77dff7",
      "#0586c6"
     ],
     "americas": [
      "#7feb00",
      "#5de200",
      "#81f201",
      "#00b900",
      "#b5ea32",
      "#008d36"
     ],
     "asia": [
      "#ff5872",
      "#ff5178",
      "#ff658a",
      "#da0025",
      "#fa4e73",
      "#b2043a"
     ],
     "europe": [
      "#ffe700",
      "#fbdd00",
      "#fff400",
      "#fbaf09",
      "#ffe700",
      "#b17f4a"
     ]
    },
    "paletteLabels": null,
    "scaleType": "ordinal",
    "syncModels": [
     "marker_colorlegend"
    ],
    "use": "property",
    "which": "world_4region"
   },
   "highlight": [],
   "label": {
    "autoconfig": {
     "includeOnlyIDs": [
      "name"
     ],
     "type": "string"
    },
    "data": "data",
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "property",
    "which": "name"
   },
   "limit": 5000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "space": [
    "entities",
    "time"
   ],
   "superHighlight": []
  },
  "marker_colorlegend": {
   "allowSelectMultiple": true,
   "highlight": [],
   "hook_geoshape": {
    "data": "data",
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "property",
    "which": "shape_lores_svg"
   },
   "hook_rank": {
    "data": "data",
    "scaleType": "linear",
    "syncModels": [],
    "use": "property",
    "which": "rank"
   },
   "label": {
    "data": "data",
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "property",
    "which": "name"
   },
   "limit": 1000,
   "opacityHighlightDim": 0.3,
   "opacityRegular": 0.8,
   "opacitySelectDim": 0.3,
   "select": [],
   "space": [
    "entities_colorlegend"
   ],
   "superHighlight": []
  },
  "time": {
   "autoconfig": {
    "type": "time"
   },
   "delay": 150,
   "delayThresholdX2": 90,
   "delayThresholdX4": 45,
   "dim": "time",
   "end": "2019",
   "endBeforeForecast": "2019",
   "endOrigin": null,
   "endSelected": "2019",
   "format": {
    "data": null,
    "ui": null
   },
   "immediatePlay": true,
   "loop": false,
   "offset": 0,
   "pauseBeforeForecast": true,
   "playable": true,
   "playing": false,
   "record": false,
   "round": "round",
   "showForecast": false,
   "start": "1800",
   "startOrigin": null,
   "startSelected": "1800",
   "step": 1,
   "unit": "year",
   "value": "2019"
  }
 },
 "ui": {
  "buttons": [
   "colors",
   "find",
   "moreoptions",
   "presentation",
   "sidebarcollapse",
   "fullscreen"
  ],
  "chart": {
   "curve": "curveMonotoneX",
   "labels": {
    "min_number_of_entities_when_values_hide": 2
   },
   "showForecastOverlay": true,
   "whenHovering": {
    "hideVerticalNow": false,
    "higlightValueX": true,
    "higlightValueY": true,
    "showProjectionLineX": true,
    "showProjectionLineY": true,
    "showTooltip": false
   }
  },
  "datawarning": {
   "doubtDomain": [
    1800,
    1950,
    2015
   ],
   "doubtRange": [
    1,
    0.3,
    0.2
   ]
  },
  "dialogs": {
   "dialog": {
    "find": {
     "enableSelectShowSwitch": false,
     "panelMode": "show",
     "showTabs": {
      "country": "open"
     }
    }
   },
   "moreoptions": [
    "opacity",
    "speed",
    "axes",
    "colors",
    "presentation",
    "technical",
    "about"
   ],
   "popup": [
    "colors",
    "find",
    "moreoptions"
   ],
   "sidebar": [
    "colors",
    "find"
   ]
  },
  "presentation": false,
  "sidebarCollapse": false,
  "splash": false,
  "treemenu": {
   "folderStrategyByDataset": {
    "data": "spread",
    "data_fasttrack": "spread",
    "data_wdi": "folder:other_datasets"
   }
  }
 },
 "chartType": "LineChart"
};