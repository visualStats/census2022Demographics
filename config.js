var config = {
    "counties": [
        {
            "name": "DUBLIN CITY COUNCIL",
            "code": "2ae19629-1433-13a3-e055-000000000001"
        },
        {
            "name": "CORK CITY COUNCIL",
            "code": "2ae19629-1434-13a3-e055-000000000001"
        },
        {
            "name": "GALWAY CITY COUNCIL",
            "code": "2ae19629-1435-13a3-e055-000000000001"
        },
        {
            "name": "OFFALY COUNTY COUNCIL",
            "code": "2ae19629-1496-13a3-e055-000000000001"
        },
        {
            "name": "WICKLOW COUNTY COUNCIL",
            "code": "2ae19629-149e-13a3-e055-000000000001"
        },
        {
            "name": "TIPPERARY COUNTY COUNCIL",
            "code": "2ae19629-1499-13a3-e055-000000000001"
        },
        {
            "name": "MONAGHAN COUNTY COUNCIL",
            "code": "2ae19629-1495-13a3-e055-000000000001"
        },
        {
            "name": "SLIGO COUNTY COUNCIL",
            "code": "2ae19629-1498-13a3-e055-000000000001"
        },
        {
            "name": "WEXFORD COUNTY COUNCIL",
            "code": "2ae19629-149c-13a3-e055-000000000001"
        },
        {
            "name": "SOUTH DUBLIN COUNTY COUNCIL",
            "code": "2ae19629-14a1-13a3-e055-000000000001"
        },
        {
            "name": "FINGAL COUNTY COUNCIL",
            "code": "2ae19629-14a0-13a3-e055-000000000001"
        },
        {
            "name": "CLARE COUNTY COUNCIL",
            "code": "2ae19629-14a2-13a3-e055-000000000001"
        },
        {
            "name": "DONEGAL COUNTY COUNCIL",
            "code": "2ae19629-14a4-13a3-e055-000000000001"
        },
        {
            "name": "MEATH COUNTY COUNCIL",
            "code": "2ae19629-1494-13a3-e055-000000000001"
        },
        {
            "name": "WESTMEATH COUNTY COUNCIL",
            "code": "2ae19629-149b-13a3-e055-000000000001"
        },
        {
            "name": "MAYO COUNTY COUNCIL",
            "code": "2ae19629-1493-13a3-e055-000000000001"
        },
        {
            "name": "LIMERICK CITY AND COUNTY COUNCIL",
            "code": "2ae19629-148f-13a3-e055-000000000001"
        },
        {
            "name": "KILDARE COUNTY COUNCIL",
            "code": "2ae19629-14a7-13a3-e055-000000000001"
        },
        {
            "name": "KERRY COUNTY COUNCIL",
            "code": "2ae19629-14a6-13a3-e055-000000000001"
        },
        {
            "name": "LOUTH COUNTY COUNCIL",
            "code": "2ae19629-1491-13a3-e055-000000000001"
        },
        {
            "name": "LONGFORD COUNTY COUNCIL",
            "code": "2ae19629-1490-13a3-e055-000000000001"
        },
        {
            "name": "DUN LAOGHAIRE-RATHDOWN COUNTY COUNCIL",
            "code": "2ae19629-149f-13a3-e055-000000000001"
        },
        {
            "name": "GALWAY COUNTY COUNCIL",
            "code": "2ae19629-14a5-13a3-e055-000000000001"
        },
        {
            "name": "CARLOW COUNTY COUNCIL",
            "code": "2ae19629-1492-13a3-e055-000000000001"
        },
        {
            "name": "CORK COUNTY COUNCIL",
            "code": "2ae19629-14a3-13a3-e055-000000000001"
        },
        {
            "name": "LEITRIM COUNTY COUNCIL",
            "code": "2ae19629-148e-13a3-e055-000000000001"
        },
        {
            "name": "KILKENNY COUNTY COUNCIL",
            "code": "2ae19629-14a8-13a3-e055-000000000001"
        },
        {
            "name": "LAOIS COUNTY COUNCIL",
            "code": "2ae19629-148d-13a3-e055-000000000001"
        },
        {
            "name": "ROSCOMMON COUNTY COUNCIL",
            "code": "2ae19629-1497-13a3-e055-000000000001"
        },
        {
            "name": "CAVAN COUNTY COUNCIL",
            "code": "2ae19629-149d-13a3-e055-000000000001"
        },
        {
            "name": "WATERFORD CITY AND COUNTY COUNCIL",
            "code": "2ae19629-149a-13a3-e055-000000000001"
        }
    ],
    "countyMap": {
        "autoupdate": true,
        "matrix": null,
        "mapDimension": "C04167V04938",
        "copyright": true,
        "link": "https://data.cso.ie/table/SAP2022T1T1ED",
        "title": "Population",
        "borders": true,
        "colorScale": "red",
        "tooltipTitle": null,
        "showTooltipButton": true,
        "defaultContent": "..",
        "fullScreen": {
            "title": "View Fullscreen",
            "titleCancel": "Exit Fullscreen"
        },
        "easyPrint": {
            "title": "Download"
        },
        "data": {
            "datasets": [
                {
                    "api": {
                        "query": {
                            "url": "https://ws.cso.ie/public/api.jsonrpc",
                            "data": {
                                "jsonrpc": "2.0",
                                "method": "PxStat.Data.Cube_API.ReadDataset",
                                "params": {
                                    "class": "query",
                                    "id": [
                                        "STATISTIC",
                                        "TLIST(A1)",
                                        "C03737V04485",
                                        "C03738V04487"
                                    ],
                                    "dimension": {
                                        "STATISTIC": {
                                            "category": {
                                                "index": [
                                                    "SAP2022T1T1C01"
                                                ]
                                            }
                                        },
                                        "TLIST(A1)": {
                                            "category": {
                                                "index": [
                                                    "2022"
                                                ]
                                            }
                                        },
                                        "C03737V04485": {
                                            "category": {
                                                "index": []
                                            }
                                        },
                                        "C03738V04487": {
                                            "category": {
                                                "index": []
                                            }
                                        }
                                    },
                                    "extension": {
                                        "language": {
                                            "code": "en"
                                        },
                                        "format": {
                                            "type": "JSON-stat",
                                            "version": "2.0"
                                        },
                                        "matrix": "SAP2022T1T1ED"
                                    },
                                    "version": "2.0",
                                    "m2m": false
                                }
                            }
                        },
                        "response": {

                        }
                    },
                    "fluidTime": [
                        0
                    ]
                }
            ]
        },
        "metadata": {
            "api": {
                "query": {
                    "url": "https://ws.cso.ie/public/api.jsonrpc",
                    "data": {
                        "jsonrpc": "2.0",
                        "method": "PxStat.Data.Cube_API.ReadMetadata",
                        "params": {
                            "matrix": "SAP2022T1T1ED",
                            "language": "en",
                            "format": {
                                "type": "JSON-stat",
                                "version": "2.0"
                            }
                        },
                        "version": "2.0"
                    }
                },
                "response": {

                }
            }
        },
        "options": {
            "mode": "q",
            "geojson": null,
            "identifier": "ED_GUID",
            "geometryType": "Polygon"
        },
        "baseMap": {
            "leaflet": [

            ],
            "esri": [
                {
                    "url": "https://utility.arcgis.com/usrsvcs/servers/88f1db9e4ae04df69e499223b8295843/rest/services/MapGeniePremiumWM/MapServer",
                    "disclaimer": "You can use the OSi basemap layer only in conjunction with the CSO map widgets, all other rights are reserved by OSi."
                }
            ]
        }
    },
    "edMap": {
        "autoupdate": true,
        "matrix": null,
        "mapDimension": "C04172V04943",
        "copyright": true,
        "link": "https://data.cso.ie/table/SAP2022T1T1SA",
        "title": null,
        "borders": true,
        "colorScale": "red",
        "tooltipTitle": null,
        "showTooltipButton": false,
        "defaultContent": "..",
        "fullScreen": {
            "title": "View Fullscreen",
            "titleCancel": "Exit Fullscreen"
        },
        "easyPrint": {
            "title": "Download"
        },
        "data": {
            "datasets": [
                {
                    "api": {
                        "query": {
                            "url": "https://ws.cso.ie/public/api.jsonrpc",
                            "data": {
                                "jsonrpc": "2.0",
                                "method": "PxStat.Data.Cube_API.ReadDataset",
                                "params": {
                                    "class": "query",
                                    "id": [
                                        "STATISTIC",
                                        "TLIST(A1)",
                                        "C03737V04485",
                                        "C03738V04487"
                                    ],
                                    "dimension": {
                                        "STATISTIC": {
                                            "category": {
                                                "index": [
                                                    "SAP2022T1T1C01"
                                                ]
                                            }
                                        },
                                        "TLIST(A1)": {
                                            "category": {
                                                "index": [
                                                    "2022"
                                                ]
                                            }
                                        },
                                        "C03737V04485": {
                                            "category": {
                                                "index": []
                                            }
                                        },
                                        "C03738V04487": {
                                            "category": {
                                                "index": []
                                            }
                                        }
                                    },
                                    "extension": {
                                        "language": {
                                            "code": "en"
                                        },
                                        "format": {
                                            "type": "JSON-stat",
                                            "version": "2.0"
                                        },
                                        "matrix": "SAP2022T1T1SA"
                                    },
                                    "version": "2.0",
                                    "m2m": false
                                }
                            }
                        },
                        "response": {

                        }
                    },
                    "fluidTime": [
                        0
                    ]
                }
            ]
        },
        "metadata": {
            "api": {
                "query": {
                    "url": "https://ws.cso.ie/public/api.jsonrpc",
                    "data": {
                        "jsonrpc": "2.0",
                        "method": "PxStat.Data.Cube_API.ReadMetadata",
                        "params": {
                            "matrix": "SAP2022T1T1SA",
                            "language": "en",
                            "format": {
                                "type": "JSON-stat",
                                "version": "2.0"
                            }
                        },
                        "version": "2.0"
                    }
                },
                "response": {

                }
            }
        },
        "options": {
            "mode": "q",
            "geojson": null,
            "identifier": "SA_GUID_2022",
            "geometryType": "MultiPolygon"
        },
        "baseMap": {
            "leaflet": [

            ],
            "esri": [
                {
                    "url": "https://utility.arcgis.com/usrsvcs/servers/88f1db9e4ae04df69e499223b8295843/rest/services/MapGeniePremiumWM/MapServer",
                    "disclaimer": "You can use the OSi basemap layer only in conjunction with the CSO map widgets, all other rights are reserved by OSi."
                }
            ]
        }
    }
};