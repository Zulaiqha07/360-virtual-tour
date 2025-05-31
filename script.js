(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB,this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57,this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarMargin": 2,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarWidth": 10,
 "layout": "absolute",
 "width": "100%",
 "horizontalAlign": "left",
 "overflow": "visible",
 "shadow": false,
 "buttonToggleMute": [
  "this.IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D"
 ],
 "borderRadius": 0,
 "definitions": [{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_camera"
},
{
 "levels": [
  {
   "url": "media/popup_EF92575F_F6B1_28D0_41A3_170B4EAAFE1F_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_EF92575F_F6B1_28D0_41A3_170B4EAAFE1F_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_EF92575F_F6B1_28D0_41A3_170B4EAAFE1F_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_EF92575F_F6B1_28D0_41A3_170B4EAAFE1F_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_EF92575F_F6B1_28D0_41A3_170B4EAAFE1F_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_D7C694B1_F6B1_2853_41E8_6981F7FCC103",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_camera"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -74.12,
   "yaw": 87.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A"
  },
  {
   "backwardYaw": 71.85,
   "yaw": -162.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D"
  }
 ],
 "label": "1734580547794",
 "id": "panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F",
 "overlays": [
  "this.overlay_FE8733C5_F1B8_1FB9_4196_84DA7BD0BCA9",
  "this.overlay_FE737A55_F1B8_2959_41D5_0A45FD6A6910",
  "this.overlay_EDD28506_F1B8_38BB_41AE_5CAD0B4DB852",
  "this.overlay_ED0D3829_F1B8_68C9_41E2_A6DBDE335563"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 5.48,
 "id": "popup_ED736FD5_E2AE_45D0_41B0_1D7BE00F3956",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_ED736FD5_E2AE_45D0_41B0_1D7BE00F3956_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 683
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -7.84,
 "showEasing": "cubic_in",
 "yaw": -148.84,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "levels": [
  {
   "url": "media/popup_ED9E5329_F6B1_E87E_41D4_9796BA8866D9_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_ED9E5329_F6B1_E87E_41D4_9796BA8866D9_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_ED9E5329_F6B1_E87E_41D4_9796BA8866D9_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_ED9E5329_F6B1_E87E_41D4_9796BA8866D9_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_ED9E5329_F6B1_E87E_41D4_9796BA8866D9_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_D639B4B1_F6B1_2853_41E7_74001B8FA831",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 4.7,
 "id": "popup_ED40C9C3_E2D6_4A30_41E4_BFD5219AA002",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_ED40C9C3_E2D6_4A30_41E4_BFD5219AA002_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 942
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.77,
 "showEasing": "cubic_in",
 "yaw": 147.11,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "thumbnailUrl": "media/video_F28AA0B6_E2D2_5A51_41E9_FE10E51DD589_t.jpg",
 "label": "present one ",
 "class": "Video",
 "width": 1614,
 "loop": false,
 "id": "video_F28AA0B6_E2D2_5A51_41E9_FE10E51DD589",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1614,
  "class": "VideoResource",
  "mp4Url": "media/video_F28AA0B6_E2D2_5A51_41E9_FE10E51DD589.mp4",
  "height": 1080
 }
},
{
 "levels": [
  {
   "url": "media/popup_ED94FB25_F6D3_781C_41E2_642009980C78_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_ED94FB25_F6D3_781C_41E2_642009980C78_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_ED94FB25_F6D3_781C_41E2_642009980C78_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_ED94FB25_F6D3_781C_41E2_642009980C78_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_ED94FB25_F6D3_781C_41E2_642009980C78_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_D7C5E4B2_F6B1_2851_41EC_0108B52036D2",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -95.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_288A91A5_25F3_3AA5_41A0_F9BE23D7E614"
},
{
 "initialPosition": {
  "yaw": 17.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_2840C1D2_25F3_3AFF_41C1_9F0E5891AA67"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 4.69,
 "id": "popup_ED2F5237_E2BE_7E50_41CA_6D8B6A7895B6",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_ED2F5237_E2BE_7E50_41CA_6D8B6A7895B6_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 861
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -3.37,
 "showEasing": "cubic_in",
 "yaw": 52.88,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "initialPosition": {
  "yaw": -132.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_28981199_25F3_3B6D_4196_C23221C9E125"
},
{
 "initialPosition": {
  "yaw": 76.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_2BD47285_25F3_3965_41A5_950C2550291A"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 5.36,
 "id": "popup_EF92575F_F6B1_28D0_41A3_170B4EAAFE1F",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_EF92575F_F6B1_28D0_41A3_170B4EAAFE1F_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 17.8,
 "showEasing": "cubic_in",
 "yaw": 22.02,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_camera"
},
{
 "levels": [
  {
   "url": "media/popup_ED2F5237_E2BE_7E50_41CA_6D8B6A7895B6_0_0.jpg",
   "width": 3342,
   "class": "ImageResourceLevel",
   "height": 2813
  },
  {
   "url": "media/popup_ED2F5237_E2BE_7E50_41CA_6D8B6A7895B6_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1723
  },
  {
   "url": "media/popup_ED2F5237_E2BE_7E50_41CA_6D8B6A7895B6_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 861
  },
  {
   "url": "media/popup_ED2F5237_E2BE_7E50_41CA_6D8B6A7895B6_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 430
  }
 ],
 "id": "ImageResource_F3344178_E2B1_DAD0_41D2_EF5C8EBC02FE",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -95.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_287461B0_25F3_3ABB_41B2_0A7B474133C6"
},
{
 "class": "MediaAudio",
 "audio": {
  "mp3Url": "media/audio_D2953AE2_F268_E97B_41D7_46ECEAFD5A5C.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_D2953AE2_F268_E97B_41D7_46ECEAFD5A5C.ogg"
 },
 "autoplay": true,
 "id": "audio_D2953AE2_F268_E97B_41D7_46ECEAFD5A5C",
 "data": {
  "label": "1926"
 }
},
{
 "levels": [
  {
   "url": "media/popup_ED5A107C_F6D1_28F4_41B3_19D52DC55AC2_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_ED5A107C_F6D1_28F4_41B3_19D52DC55AC2_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_ED5A107C_F6D1_28F4_41B3_19D52DC55AC2_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_ED5A107C_F6D1_28F4_41B3_19D52DC55AC2_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_ED5A107C_F6D1_28F4_41B3_19D52DC55AC2_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_D7CFF4B6_F6B1_2851_41E2_2710C5E8C854",
 "class": "ImageResource"
},
{
 "items": [
  {
   "media": "this.video_ECDE0E11_E2B2_4651_41E4_359C25D501C8",
   "start": "this.viewer_uid2901511B_25F3_3B6D_41C0_DC911BABA3DBVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_28E4713B_25F3_3BAD_41BC_D4D8700CB357, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_28E4713B_25F3_3BAD_41BC_D4D8700CB357, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2901511B_25F3_3B6D_41C0_DC911BABA3DBVideoPlayer)",
   "player": "this.viewer_uid2901511B_25F3_3B6D_41C0_DC911BABA3DBVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_28E4713B_25F3_3BAD_41BC_D4D8700CB357",
 "class": "PlayList"
},
{
 "height": 3368,
 "thumbnailUrl": "media/photo_ECF8904A_F268_394B_41E8_62E485CD79F1_t.jpg",
 "label": "IMG_6733",
 "class": "Photo",
 "duration": 5000,
 "width": 6000,
 "id": "photo_ECF8904A_F268_394B_41E8_62E485CD79F1",
 "image": {
  "levels": [
   {
    "url": "media/photo_ECF8904A_F268_394B_41E8_62E485CD79F1.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 8.58,
 "id": "popup_ED9D3A95_F6D1_183F_41EC_51FA7C4C2065",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_ED9D3A95_F6D1_183F_41EC_51FA7C4C2065_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -12.62,
 "showEasing": "cubic_in",
 "yaw": -42.71,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "1734580547373",
 "id": "panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41",
 "overlays": [
  "this.overlay_E19FCC19_F6D3_3FC3_41DE_83218066278C",
  "this.overlay_EE6AA5F4_F6F3_281F_41D4_00A92959147B",
  "this.popup_EE7949F5_F6F0_F818_41E6_0F9B4E77EEF4",
  "this.overlay_EFF3FBF0_F6F1_181A_41DD_D180E04E7F30",
  "this.popup_EC2F2555_F6F7_6804_41DA_540B9BD4AAA7",
  "this.overlay_EC803E44_F6F7_F805_41E9_FA8A27B5EAB8",
  "this.popup_EC7E660A_F6F7_280D_41B5_B07A7C41EDD5"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_t.jpg"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 47.73,
   "yaw": 123.85,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42"
  },
  {
   "backwardYaw": 84.16,
   "yaw": -83.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A"
  }
 ],
 "label": "1734580547827",
 "id": "panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D",
 "overlays": [
  "this.overlay_FEF41E36_F1B8_68DB_41DC_764E674F947A",
  "this.overlay_FE03602E_F1B8_18CB_41D6_21BC83133ED7",
  "this.overlay_EDED3DDF_F1B8_2B49_41E7_EF713260502F"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_t.jpg"
},
{
 "class": "MediaAudio",
 "audio": {
  "mp3Url": "media/audio_D3907168_F278_1B77_41B7_B2A3113FFB0E.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_D3907168_F278_1B77_41B7_B2A3113FFB0E.ogg"
 },
 "autoplay": true,
 "id": "audio_D3907168_F278_1B77_41B7_B2A3113FFB0E",
 "data": {
  "label": "1890"
 }
},
{
 "thumbnailUrl": "media/video_F3CC9223_E2D7_BE77_41D8_CFBA01C3FD95_t.jpg",
 "label": "676510d8d3a2b1cab713834b (1)",
 "class": "Video",
 "width": 720,
 "loop": false,
 "id": "video_F3CC9223_E2D7_BE77_41D8_CFBA01C3FD95",
 "scaleMode": "fit_inside",
 "height": 1280,
 "video": {
  "width": 720,
  "class": "VideoResource",
  "mp4Url": "media/video_F3CC9223_E2D7_BE77_41D8_CFBA01C3FD95.mp4",
  "height": 1280
 }
},
{
 "headerBorderSize": 0,
 "headerBackgroundColorRatios": [
  0.79
 ],
 "data": {
  "name": "Window22103"
 },
 "shadowSpread": 1,
 "id": "window_ED1B3809_F1B8_68C9_41EA_8CEFD727E9C7",
 "width": 400,
 "veilOpacity": 0.4,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "bodyPaddingRight": 5,
 "overflow": "scroll",
 "minHeight": 20,
 "shadow": true,
 "closeButtonIconColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0
 ],
 "modal": true,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFCC"
 ],
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "veilColorDirection": "horizontal",
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "verticalAlign": "middle",
 "title": "Peralatan Telefon BPO",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "bodyPaddingLeft": 5,
 "titlePaddingTop": 5,
 "headerBorderColor": "#FFCC00",
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "contentOpaque": false,
 "titlePaddingRight": 5,
 "backgroundColor": [],
 "headerBackgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "closeButtonBorderRadius": 11,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontSize": "1.3vmin",
 "closeButtonPressedIconColor": "#FFFFFF",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerHeight": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowBlurRadius": 6,
 "children": [
  "this.image_uid290C7129_25F3_3BAD_41AA_AEDF788AFDE0_0",
  "this.htmlText_ED1AE80A_F1B8_68CB_41CF_EECD30A67621"
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "layout": "vertical",
 "headerPaddingRight": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "class": "Window",
 "closeButtonIconLineWidth": 2,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconWidth": 12,
 "paddingLeft": 0,
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingLeft": 5,
 "titleFontColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "titleFontFamily": "Times New Roman",
 "bodyBorderColor": "#999999"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "1734580547299",
 "id": "panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1",
 "overlays": [
  "this.overlay_E53B11BB_F6B1_6881_41E6_DD50843D7423"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_t.jpg"
},
{
 "thumbnailUrl": "media/video_F2789D06_E2B2_4A30_41E1_5EE5F93F91B4_t.jpg",
 "label": "1220 (1)",
 "class": "Video",
 "width": 2338,
 "loop": false,
 "id": "video_F2789D06_E2B2_4A30_41E1_5EE5F93F91B4",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 2338,
  "class": "VideoResource",
  "mp4Url": "media/video_F2789D06_E2B2_4A30_41E1_5EE5F93F91B4.mp4",
  "height": 1080
 }
},
{
 "levels": [
  {
   "url": "media/popup_EC24A3B2_F268_3FDB_41E7_0E51F9BA72B3_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_EC24A3B2_F268_3FDB_41E7_0E51F9BA72B3_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_EC24A3B2_F268_3FDB_41E7_0E51F9BA72B3_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_EC24A3B2_F268_3FDB_41E7_0E51F9BA72B3_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_EC24A3B2_F268_3FDB_41E7_0E51F9BA72B3_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_D7CC47DA_F278_E74B_41BE_8798786B08CB",
 "class": "ImageResource"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D7859CF5_DDD9_F930_41D9_E38542F68884",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "exhibition 2",
 "id": "panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D",
 "overlays": [
  "this.overlay_CD381488_DE56_89DE_41DF_B918793406B8",
  "this.overlay_EDACD868_E2D1_CAFF_41E1_6867C2B1CFAE",
  "this.overlay_ED44C179_E2D6_BAD0_41CF_2099D40527D6",
  "this.overlay_EDA405BD_E2D7_FA50_41DC_5953C550031C",
  "this.popup_F3F09FA5_E2D6_C670_41BF_78BE51F697A8",
  "this.popup_F2E83EE1_E2D2_47F0_41EC_43B2AE12E140",
  "this.popup_F24FB207_E2D7_FE30_41A2_2B1D9CEDB56D"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_camera"
},
{
 "initialPosition": {
  "yaw": 96.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_2832B1F0_25F3_3ABB_41BE_07D7244C5A2F"
},
{
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window519"
 },
 "shadowSpread": 1,
 "id": "window_2E45A791_25F1_677A_41AC_3FD6F47DD873",
 "closeButtonPaddingLeft": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "horizontalAlign": "center",
 "bodyPaddingRight": 0,
 "overflow": "scroll",
 "minHeight": 20,
 "shadow": true,
 "closeButtonIconColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "modal": true,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingRight": 5,
 "propagateClick": false,
 "paddingRight": 0,
 "closeButtonRollOverIconColor": "#666666",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "closeButtonPaddingBottom": 5,
 "scrollBarColor": "#000000",
 "bodyPaddingLeft": 0,
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "closeButtonBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "titlePaddingRight": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "closeButtonBorderRadius": 0,
 "scrollBarVisible": "rollOver",
 "closeButtonBackgroundOpacity": 0.3,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontSize": "1.29vmin",
 "closeButtonPressedIconColor": "#888888",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerHeight": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "closeButtonPaddingTop": 5,
 "headerPaddingBottom": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 0,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowBlurRadius": 6,
 "children": [
  "this.viewer_uid2904711F_25F3_3B65_41C1_5407BD7581E3"
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 0,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "layout": "vertical",
 "headerPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonIconHeight": 20,
 "closeButtonIconLineWidth": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedIconLineWidth": 5,
 "class": "Window",
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconWidth": 20,
 "paddingLeft": 0,
 "headerBackgroundOpacity": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "titlePaddingLeft": 5,
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "titleFontFamily": "Arial"
},
{
 "levels": [
  {
   "url": "media/popup_F3CD6E19_E35E_4650_41E1_2BE6FA029E36_0_0.jpg",
   "width": 2828,
   "class": "ImageResourceLevel",
   "height": 1682
  },
  {
   "url": "media/popup_F3CD6E19_E35E_4650_41E1_2BE6FA029E36_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1218
  },
  {
   "url": "media/popup_F3CD6E19_E35E_4650_41E1_2BE6FA029E36_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 609
  },
  {
   "url": "media/popup_F3CD6E19_E35E_4650_41E1_2BE6FA029E36_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 304
  }
 ],
 "id": "ImageResource_F249AA9A_E371_CE51_41E1_94E12E244119",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 7.48,
 "id": "popup_EC7E660A_F6F7_280D_41B5_B07A7C41EDD5",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_EC7E660A_F6F7_280D_41B5_B07A7C41EDD5_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -6.97,
 "showEasing": "cubic_in",
 "yaw": -148.09,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 4.96,
 "id": "popup_F3DE3B3F_E35E_CE4F_41D5_C7185EF704F2",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_F3DE3B3F_E35E_CE4F_41D5_C7185EF704F2_0_2.jpg",
    "width": 961,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 9.53,
 "showEasing": "cubic_in",
 "yaw": -23.46,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "height": 3368,
 "thumbnailUrl": "media/photo_ED23603F_F268_18CA_41E6_D5AC0F01833A_t.jpg",
 "label": "IMG_6751",
 "class": "Photo",
 "duration": 5000,
 "width": 6000,
 "id": "photo_ED23603F_F268_18CA_41E6_D5AC0F01833A",
 "image": {
  "levels": [
   {
    "url": "media/photo_ED23603F_F268_18CA_41E6_D5AC0F01833A.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 3.85,
 "id": "popup_ECE90554_E372_5AD0_41EB_6E24BA0038D0",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_ECE90554_E372_5AD0_41EB_6E24BA0038D0_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 714
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -12.49,
 "showEasing": "cubic_in",
 "yaw": -43.33,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "levels": [
  {
   "url": "media/popup_EC7E660A_F6F7_280D_41B5_B07A7C41EDD5_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_EC7E660A_F6F7_280D_41B5_B07A7C41EDD5_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_EC7E660A_F6F7_280D_41B5_B07A7C41EDD5_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_EC7E660A_F6F7_280D_41B5_B07A7C41EDD5_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_EC7E660A_F6F7_280D_41B5_B07A7C41EDD5_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_ED239378_F6F1_280F_41CB_5F2E9EADCF3E",
 "class": "ImageResource"
},
{
 "thumbnailUrl": "media/video_ECDE0E11_E2B2_4651_41E4_359C25D501C8_t.jpg",
 "label": "radio pp ai",
 "class": "Video",
 "width": 992,
 "loop": false,
 "id": "video_ECDE0E11_E2B2_4651_41E4_359C25D501C8",
 "scaleMode": "fit_inside",
 "height": 960,
 "video": {
  "width": 992,
  "class": "VideoResource",
  "mp4Url": "media/video_ECDE0E11_E2B2_4651_41E4_359C25D501C8.mp4",
  "height": 960
 }
},
{
 "levels": [
  {
   "url": "media/popup_F2B3976B_E2AE_46F1_41E1_91007B1F7211_0_0.jpg",
   "width": 2395,
   "class": "ImageResourceLevel",
   "height": 2830
  },
  {
   "url": "media/popup_F2B3976B_E2AE_46F1_41E1_91007B1F7211_0_1.jpg",
   "width": 1733,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_F2B3976B_E2AE_46F1_41E1_91007B1F7211_0_2.jpg",
   "width": 866,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_F2B3976B_E2AE_46F1_41E1_91007B1F7211_0_3.jpg",
   "width": 433,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_F0A0EF74_E2DF_C6D0_41E2_359B3646B8CA",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 5.47,
 "id": "popup_F3DDDE69_E377_C6F3_41E7_B997645FE28B",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_F3DDDE69_E377_C6F3_41E7_B997645FE28B_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 12.83,
 "showEasing": "cubic_in",
 "yaw": -165.47,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "levels": [
  {
   "url": "media/popup_ED736FD5_E2AE_45D0_41B0_1D7BE00F3956_0_0.jpg",
   "width": 4489,
   "class": "ImageResourceLevel",
   "height": 2998
  },
  {
   "url": "media/popup_ED736FD5_E2AE_45D0_41B0_1D7BE00F3956_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2735
  },
  {
   "url": "media/popup_ED736FD5_E2AE_45D0_41B0_1D7BE00F3956_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1367
  },
  {
   "url": "media/popup_ED736FD5_E2AE_45D0_41B0_1D7BE00F3956_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 683
  },
  {
   "url": "media/popup_ED736FD5_E2AE_45D0_41B0_1D7BE00F3956_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_F0A1CF73_E2DF_C6D0_41D6_4FC2006C9692",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 78.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_28098249_25F3_39ED_41AB_DF4B1D795A51"
},
{
 "headerBorderSize": 0,
 "headerBackgroundColorRatios": [
  0.79
 ],
 "data": {
  "name": "Window22103"
 },
 "shadowSpread": 1,
 "id": "window_EDFF4DBA_F1B8_2BCB_41D1_A253AF36D112",
 "width": 400,
 "veilOpacity": 0.4,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "bodyPaddingRight": 5,
 "overflow": "scroll",
 "minHeight": 20,
 "shadow": true,
 "closeButtonIconColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0
 ],
 "modal": true,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFCC"
 ],
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "veilColorDirection": "horizontal",
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "verticalAlign": "middle",
 "title": "Sistem telefon",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "bodyPaddingLeft": 5,
 "titlePaddingTop": 5,
 "headerBorderColor": "#FFCC00",
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "contentOpaque": false,
 "titlePaddingRight": 5,
 "backgroundColor": [],
 "headerBackgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "closeButtonBorderRadius": 11,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontSize": "1.3vmin",
 "closeButtonPressedIconColor": "#FFFFFF",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerHeight": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowBlurRadius": 6,
 "children": [
  "this.image_uid290D312A_25F3_3BAF_4166_35F10B5488D4_0",
  "this.htmlText_EDFD2DBB_F1B8_2BC9_4199_054FE49E96E1",
  "this.image_uid290D312A_25F3_3BAF_4166_35F10B5488D4_2"
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "layout": "vertical",
 "headerPaddingRight": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "class": "Window",
 "closeButtonIconLineWidth": 2,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconWidth": 12,
 "paddingLeft": 0,
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "close": "this.stopGlobalAudio(this.audio_ED7FC5C6_F278_3BBA_41BB_D16E14309B34)",
 "bodyPaddingBottom": 5,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingLeft": 5,
 "titleFontColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "titleFontFamily": "Times New Roman",
 "bodyBorderColor": "#999999"
},
{
 "headerBorderSize": 0,
 "headerBackgroundColorRatios": [
  0.79
 ],
 "data": {
  "name": "Window22103"
 },
 "shadowSpread": 1,
 "id": "window_EE4B5539_F258_18C9_4192_45A9BBBC0BC3",
 "width": 400,
 "veilOpacity": 0.4,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "bodyPaddingRight": 5,
 "overflow": "scroll",
 "minHeight": 20,
 "shadow": true,
 "closeButtonIconColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0
 ],
 "modal": true,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFCC"
 ],
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "veilColorDirection": "horizontal",
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "verticalAlign": "middle",
 "title": "Pos & Telegraf",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "bodyPaddingLeft": 5,
 "titlePaddingTop": 5,
 "headerBorderColor": "#FFCC00",
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "contentOpaque": false,
 "titlePaddingRight": 5,
 "backgroundColor": [],
 "headerBackgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "closeButtonBorderRadius": 11,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontSize": "1.3vmin",
 "closeButtonPressedIconColor": "#FFFFFF",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerHeight": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowBlurRadius": 6,
 "children": [
  "this.image_uid290EF124_25F3_3B5B_41B9_284566AFD1A8_0",
  "this.htmlText_EE50753E_F258_18CB_41E6_04646429C343",
  "this.image_uid290EF124_25F3_3B5B_41B9_284566AFD1A8_2"
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "layout": "vertical",
 "headerPaddingRight": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "class": "Window",
 "closeButtonIconLineWidth": 2,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconWidth": 12,
 "paddingLeft": 0,
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingLeft": 5,
 "titleFontColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "titleFontFamily": "Times New Roman",
 "bodyBorderColor": "#999999"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 6.01,
 "id": "popup_ED9E5329_F6B1_E87E_41D4_9796BA8866D9",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_ED9E5329_F6B1_E87E_41D4_9796BA8866D9_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -13.24,
 "showEasing": "cubic_in",
 "yaw": 18.06,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 8.73,
 "id": "popup_ED94FB25_F6D3_781C_41E2_642009980C78",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_ED94FB25_F6D3_781C_41E2_642009980C78_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 20.03,
 "showEasing": "cubic_in",
 "yaw": 19.85,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_camera"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 6.52,
   "yaw": -79.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690"
  },
  {
   "backwardYaw": 123.85,
   "yaw": 47.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D"
  }
 ],
 "label": "1734580547646",
 "id": "panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42",
 "overlays": [
  "this.overlay_FE20AAD3_F1B8_6959_41E1_CC71FBB3B9A2",
  "this.overlay_E18A8B53_F1B8_2F59_41C3_5E39F1732FAA"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_t.jpg"
},
{
 "items": [
  {
   "media": "this.video_F3CC9223_E2D7_BE77_41D8_CFBA01C3FD95",
   "start": "this.viewer_uid2905911E_25F3_3B67_41BD_4F6AC5635A0AVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_28E5C13B_25F3_3BAD_41AB_CDEDEA1EDAD5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_28E5C13B_25F3_3BAD_41AB_CDEDEA1EDAD5, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2905911E_25F3_3B67_41BD_4F6AC5635A0AVideoPlayer)",
   "player": "this.viewer_uid2905911E_25F3_3B67_41BD_4F6AC5635A0AVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_28E5C13B_25F3_3BAD_41AB_CDEDEA1EDAD5",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 3.12,
 "id": "popup_F2FDE342_E2BE_BE30_41EA_00EE347C400C",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_F2FDE342_E2BE_BE30_41EA_00EE347C400C_0_2.jpg",
    "width": 790,
    "class": "ImageResourceLevel",
    "height": 1023
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 18.38,
 "showEasing": "cubic_in",
 "yaw": 59.2,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "1734580547458",
 "id": "panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC",
 "overlays": [
  "this.overlay_EEED6FC3_F6D1_1859_41D5_736C83B05D18",
  "this.overlay_E9C8032D_F6CF_6819_41DA_26A298706BC6",
  "this.popup_EF60B0B7_F6CF_2809_41E8_D917A42A9C52",
  "this.overlay_EC3C6C23_F6D1_7809_41E6_C04A61C3F50C",
  "this.popup_ED83BD0F_F6D1_3818_41ED_69AC05B8A73E",
  "this.overlay_ED9859AA_F6D1_181C_41EA_9ACC4BE280FE",
  "this.popup_ED5A107C_F6D1_28F4_41B3_19D52DC55AC2"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 8.49,
 "id": "popup_EE7949F5_F6F0_F818_41E6_0F9B4E77EEF4",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_EE7949F5_F6F0_F818_41E6_0F9B4E77EEF4_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 6.22,
 "showEasing": "cubic_in",
 "yaw": -100.87,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "thumbnailUrl": "media/video_F2B61D0E_E2AE_4A31_41B0_3AF36F03124C_t.jpg",
 "label": "1220 (2)",
 "class": "Video",
 "width": 1600,
 "loop": false,
 "id": "video_F2B61D0E_E2AE_4A31_41B0_3AF36F03124C",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1600,
  "class": "VideoResource",
  "mp4Url": "media/video_F2B61D0E_E2AE_4A31_41B0_3AF36F03124C.mp4",
  "height": 1080
 }
},
{
 "levels": [
  {
   "url": "media/popup_EDDE4B48_E2BE_4E3F_41C4_FF686BB8B9B1_0_0.jpg",
   "width": 3501,
   "class": "ImageResourceLevel",
   "height": 2984
  },
  {
   "url": "media/popup_EDDE4B48_E2BE_4E3F_41C4_FF686BB8B9B1_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1745
  },
  {
   "url": "media/popup_EDDE4B48_E2BE_4E3F_41C4_FF686BB8B9B1_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 872
  },
  {
   "url": "media/popup_EDDE4B48_E2BE_4E3F_41C4_FF686BB8B9B1_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 436
  }
 ],
 "id": "ImageResource_F3335177_E2B1_DAD0_41EA_89533A5FD2AB",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_EC2F2555_F6F7_6804_41DA_540B9BD4AAA7_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_EC2F2555_F6F7_6804_41DA_540B9BD4AAA7_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_EC2F2555_F6F7_6804_41DA_540B9BD4AAA7_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_EC2F2555_F6F7_6804_41DA_540B9BD4AAA7_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_EC2F2555_F6F7_6804_41DA_540B9BD4AAA7_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_ED22A377_F6F1_2801_41EA_E4F2E2D95D49",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 4.76,
 "id": "popup_ED49A0E4_E2AE_7BF0_41DD_79E5C0BAD2B1",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_ED49A0E4_E2AE_7BF0_41DD_79E5C0BAD2B1_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 865
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 10.74,
 "showEasing": "cubic_in",
 "yaw": -155.59,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "levels": [
  {
   "url": "media/popup_ED1A1B30_F268_28D7_41EA_E2B24928F3AC_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_ED1A1B30_F268_28D7_41EA_E2B24928F3AC_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_ED1A1B30_F268_28D7_41EA_E2B24928F3AC_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_ED1A1B30_F268_28D7_41EA_E2B24928F3AC_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_ED1A1B30_F268_28D7_41EA_E2B24928F3AC_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_D7CE17D9_F278_E749_41E5_8E712D6F5FC2",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 4.67,
 "id": "popup_F23148D2_E2D2_4BD0_41C8_F3710E3AD7CB",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_F23148D2_E2D2_4BD0_41C8_F3710E3AD7CB_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -45.07,
 "showEasing": "cubic_in",
 "yaw": -34.55,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "headerBorderSize": 0,
 "headerBackgroundColorRatios": [
  0.79
 ],
 "data": {
  "name": "Window22103"
 },
 "shadowSpread": 1,
 "id": "window_EA4A63CA_F1B8_FF4B_41CF_5B8D692882F4",
 "width": 400,
 "veilOpacity": 0.4,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "bodyPaddingRight": 5,
 "overflow": "scroll",
 "minHeight": 20,
 "shadow": true,
 "closeButtonIconColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0
 ],
 "modal": true,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFCC"
 ],
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "veilColorDirection": "horizontal",
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "verticalAlign": "middle",
 "title": "Teleprinter",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "bodyPaddingLeft": 5,
 "titlePaddingTop": 5,
 "headerBorderColor": "#FFCC00",
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "contentOpaque": false,
 "titlePaddingRight": 5,
 "backgroundColor": [],
 "headerBackgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "closeButtonBorderRadius": 11,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontSize": "1.3vmin",
 "closeButtonPressedIconColor": "#FFFFFF",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerHeight": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowBlurRadius": 6,
 "children": [
  "this.image_uid290F8126_25F3_3BA7_41C2_D2F195707FE7_0",
  "this.htmlText_EA4803CB_F1B8_FF49_41ED_71DB926B96C1",
  "this.image_uid290F8126_25F3_3BA7_41C2_D2F195707FE7_2"
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "layout": "vertical",
 "headerPaddingRight": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "class": "Window",
 "closeButtonIconLineWidth": 2,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconWidth": 12,
 "paddingLeft": 0,
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "close": "this.stopGlobalAudio(this.audio_D36DC254_F278_795E_41E7_6DA0AE89FE5B)",
 "bodyPaddingBottom": 5,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingLeft": 5,
 "titleFontColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "titleFontFamily": "Times New Roman",
 "bodyBorderColor": "#999999"
},
{
 "levels": [
  {
   "url": "media/popup_F3F09FA5_E2D6_C670_41BF_78BE51F697A8_0_0.jpg",
   "width": 2239,
   "class": "ImageResourceLevel",
   "height": 2913
  },
  {
   "url": "media/popup_F3F09FA5_E2D6_C670_41BF_78BE51F697A8_0_1.jpg",
   "width": 1574,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_F3F09FA5_E2D6_C670_41BF_78BE51F697A8_0_2.jpg",
   "width": 787,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_F3F09FA5_E2D6_C670_41BF_78BE51F697A8_0_3.jpg",
   "width": 393,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_F6670C8D_E2D2_4A30_41E6_03BD14CF9271",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_ED49A0E4_E2AE_7BF0_41DD_79E5C0BAD2B1_0_0.jpg",
   "width": 3064,
   "class": "ImageResourceLevel",
   "height": 2591
  },
  {
   "url": "media/popup_ED49A0E4_E2AE_7BF0_41DD_79E5C0BAD2B1_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1731
  },
  {
   "url": "media/popup_ED49A0E4_E2AE_7BF0_41DD_79E5C0BAD2B1_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 865
  },
  {
   "url": "media/popup_ED49A0E4_E2AE_7BF0_41DD_79E5C0BAD2B1_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 432
  }
 ],
 "id": "ImageResource_F0A28F73_E2DF_C6D0_41D6_6EAA1E7786DD",
 "class": "ImageResource"
},
{
 "height": 3368,
 "thumbnailUrl": "media/photo_EF6A2290_F268_79D6_41D7_5F688A73A72B_t.jpg",
 "label": "IMG_6723",
 "class": "Photo",
 "duration": 5000,
 "width": 6000,
 "id": "photo_EF6A2290_F268_79D6_41D7_5F688A73A72B",
 "image": {
  "levels": [
   {
    "url": "media/photo_EF6A2290_F268_79D6_41D7_5F688A73A72B.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "levels": [
  {
   "url": "media/popup_EE7949F5_F6F0_F818_41E6_0F9B4E77EEF4_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_EE7949F5_F6F0_F818_41E6_0F9B4E77EEF4_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_EE7949F5_F6F0_F818_41E6_0F9B4E77EEF4_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_EE7949F5_F6F0_F818_41E6_0F9B4E77EEF4_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_EE7949F5_F6F0_F818_41E6_0F9B4E77EEF4_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_ED235376_F6F1_2803_41DA_98DCD97EB52D",
 "class": "ImageResource"
},
{
 "height": 3368,
 "thumbnailUrl": "media/photo_EC1ADC98_F268_29D7_41AC_9E348891535E_t.jpg",
 "label": "IMG_6725",
 "class": "Photo",
 "duration": 5000,
 "width": 6000,
 "id": "photo_EC1ADC98_F268_29D7_41AC_9E348891535E",
 "image": {
  "levels": [
   {
    "url": "media/photo_EC1ADC98_F268_29D7_41AC_9E348891535E.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "items": [
  {
   "media": "this.video_EC586C60_E2B1_CAF0_41E8_A6197DBB8D98",
   "start": "this.viewer_uid2907C11D_25F3_3B65_41C0_30DC179F0912VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_28E5813B_25F3_3BAD_41B1_ECEACA730C70, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_28E5813B_25F3_3BAD_41B1_ECEACA730C70, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2907C11D_25F3_3B65_41C0_30DC179F0912VideoPlayer)",
   "player": "this.viewer_uid2907C11D_25F3_3B65_41C0_30DC179F0912VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_28E5813B_25F3_3BAD_41B1_ECEACA730C70",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_camera"
},
{
 "levels": [
  {
   "url": "media/popup_EF60B0B7_F6CF_2809_41E8_D917A42A9C52_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_EF60B0B7_F6CF_2809_41E8_D917A42A9C52_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_EF60B0B7_F6CF_2809_41E8_D917A42A9C52_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_EF60B0B7_F6CF_2809_41E8_D917A42A9C52_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_EF60B0B7_F6CF_2809_41E8_D917A42A9C52_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_D69AB4B9_F6D3_287A_41E2_F630907B5BC5",
 "class": "ImageResource"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "exhibition 5",
 "id": "panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2",
 "overlays": [
  "this.overlay_CA80AF4D_DE49_9751_41D6_C90BD4896857",
  "this.overlay_F3339881_E352_CA30_41D8_ABEFA1DFB054",
  "this.overlay_F3294F14_E352_C650_41CA_17E7A8EF0E39",
  "this.overlay_F398FE74_E352_46D0_41E0_0FBDCCDA78A8",
  "this.overlay_F33D34DF_E353_DBD0_41D7_5E3A37D6BD96",
  "this.overlay_F3B71049_E352_DA33_41E2_A9E4AE8694F5",
  "this.overlay_F210C85C_E352_CAD0_41C5_C111B3FBC62C",
  "this.popup_F3DE3B3F_E35E_CE4F_41D5_C7185EF704F2",
  "this.popup_F3CFC31D_E35E_7E50_41D6_6941AD7EEA41",
  "this.popup_F3CD6E19_E35E_4650_41E1_2BE6FA029E36",
  "this.popup_F3ADC71C_E351_C650_41D0_7124FB7D1A12",
  "this.popup_F3CCBA3F_E36E_CE50_41D5_FF1C7802CD44",
  "this.popup_ECE90554_E372_5AD0_41EB_6E24BA0038D0"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_t.jpg"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -83.16,
   "yaw": 84.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D"
  },
  {
   "backwardYaw": 87.42,
   "yaw": -74.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F"
  }
 ],
 "label": "1734580547808",
 "id": "panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A",
 "overlays": [
  "this.overlay_FEF45635_F1B8_38D9_41EA_94D682F96570",
  "this.overlay_FE0B213D_F1B8_78C9_41AA_D17E95A5F2DB",
  "this.overlay_EDDD507E_F1B8_194B_41D3_40EE0A8BAD4E"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 4.02,
 "id": "popup_EDDE4B48_E2BE_4E3F_41C4_FF686BB8B9B1",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_EDDE4B48_E2BE_4E3F_41C4_FF686BB8B9B1_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 872
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 7.27,
 "showEasing": "cubic_in",
 "yaw": 58.81,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "thumbnailUrl": "media/video_EC586C60_E2B1_CAF0_41E8_A6197DBB8D98_t.jpg",
 "label": "telefon ai ",
 "class": "Video",
 "width": 1120,
 "loop": false,
 "id": "video_EC586C60_E2B1_CAF0_41E8_A6197DBB8D98",
 "scaleMode": "fit_inside",
 "height": 864,
 "video": {
  "width": 1120,
  "class": "VideoResource",
  "mp4Url": "media/video_EC586C60_E2B1_CAF0_41E8_A6197DBB8D98.mp4",
  "height": 864
 }
},
{
 "items": [
  {
   "media": "this.panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_camera"
  },
  {
   "media": "this.panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_camera"
  },
  {
   "media": "this.panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_camera"
  },
  {
   "media": "this.panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_camera"
  },
  {
   "media": "this.panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_camera"
  },
  {
   "media": "this.panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_camera"
  },
  {
   "media": "this.panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_camera"
  },
  {
   "media": "this.panorama_E32C72DF_F6D1_284C_41E0_8A897249F151",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_camera"
  },
  {
   "media": "this.panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_camera"
  },
  {
   "media": "this.panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_camera"
  },
  {
   "media": "this.panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_camera"
  },
  {
   "media": "this.panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_camera"
  },
  {
   "media": "this.panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_camera"
  },
  {
   "media": "this.panorama_D7859CF5_DDD9_F930_41D9_E38542F68884",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_camera"
  },
  {
   "media": "this.panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_camera"
  },
  {
   "media": "this.panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_camera"
  },
  {
   "media": "this.panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_camera"
  },
  {
   "media": "this.video_ECDE0E11_E2B2_4651_41E4_359C25D501C8",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 17, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 17)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_F3CC9223_E2D7_BE77_41D8_CFBA01C3FD95",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 18, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 18)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_F2789D06_E2B2_4A30_41E1_5EE5F93F91B4",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 19, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 19)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_F2B61D0E_E2AE_4A31_41B0_3AF36F03124C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 20, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 20)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_camera"
  },
  {
   "media": "this.panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_camera"
  },
  {
   "media": "this.panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_camera"
  },
  {
   "media": "this.panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_camera"
  },
  {
   "media": "this.panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_camera"
  },
  {
   "media": "this.panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_camera"
  },
  {
   "media": "this.panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_camera"
  },
  {
   "media": "this.panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_camera"
  },
  {
   "media": "this.panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_camera"
  },
  {
   "media": "this.panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 4.11,
 "id": "popup_F3CFC31D_E35E_7E50_41D6_6941AD7EEA41",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_F3CFC31D_E35E_7E50_41D6_6941AD7EEA41_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 928
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -7.27,
 "showEasing": "cubic_in",
 "yaw": -23.31,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "levels": [
  {
   "url": "media/popup_F3CFC31D_E35E_7E50_41D6_6941AD7EEA41_0_0.jpg",
   "width": 3714,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_F3CFC31D_E35E_7E50_41D6_6941AD7EEA41_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1857
  },
  {
   "url": "media/popup_F3CFC31D_E35E_7E50_41D6_6941AD7EEA41_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 928
  },
  {
   "url": "media/popup_F3CFC31D_E35E_7E50_41D6_6941AD7EEA41_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 464
  }
 ],
 "id": "ImageResource_F24A3A99_E371_CE53_4192_2AF7BCA70D9C",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_F286EC4B_E2D2_4A30_41EB_446680CBEED3_0_0.jpg",
   "width": 2085,
   "class": "ImageResourceLevel",
   "height": 2143
  },
  {
   "url": "media/popup_F286EC4B_E2D2_4A30_41EB_446680CBEED3_0_1.jpg",
   "width": 1992,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_F286EC4B_E2D2_4A30_41EB_446680CBEED3_0_2.jpg",
   "width": 996,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_F286EC4B_E2D2_4A30_41EB_446680CBEED3_0_3.jpg",
   "width": 498,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_F0AC5F75_E2DF_C6D0_41E7_4279689D4850",
 "class": "ImageResource"
},
{
 "headerBorderSize": 0,
 "headerBackgroundColorRatios": [
  0.79
 ],
 "data": {
  "name": "Window22103"
 },
 "shadowSpread": 1,
 "id": "window_EA6391DA_F1B8_1B4B_41B7_75449840F0EC",
 "width": 400,
 "veilOpacity": 0.4,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "bodyPaddingRight": 5,
 "overflow": "scroll",
 "minHeight": 20,
 "shadow": true,
 "closeButtonIconColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0
 ],
 "modal": true,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFCC"
 ],
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "veilColorDirection": "horizontal",
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "verticalAlign": "middle",
 "title": "Buku Panduan Telefon",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "bodyPaddingLeft": 5,
 "titlePaddingTop": 5,
 "headerBorderColor": "#FFCC00",
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "contentOpaque": false,
 "titlePaddingRight": 5,
 "backgroundColor": [],
 "headerBackgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "closeButtonBorderRadius": 11,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontSize": "1.3vmin",
 "closeButtonPressedIconColor": "#FFFFFF",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerHeight": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowBlurRadius": 6,
 "children": [
  "this.image_uid290E2125_25F3_3BA5_41A8_C1563BBFB105_0",
  "this.htmlText_EA6631DB_F1B8_1B49_41DB_A1F06CB1BFC4"
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "layout": "vertical",
 "headerPaddingRight": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "class": "Window",
 "closeButtonIconLineWidth": 2,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconWidth": 12,
 "paddingLeft": 0,
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingLeft": 5,
 "titleFontColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "titleFontFamily": "Times New Roman",
 "bodyBorderColor": "#999999"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "exhibition 4",
 "id": "panorama_D7859CF5_DDD9_F930_41D9_E38542F68884",
 "overlays": [
  "this.overlay_CA910782_DE4F_B7D3_41E6_9DFDDF197ADC",
  "this.overlay_ED318DC3_E2DE_4A30_41E0_DD24036F176F",
  "this.overlay_ED332B44_E2D2_CE32_41DF_6A410FC8F2A0",
  "this.popup_F23148D2_E2D2_4BD0_41C8_F3710E3AD7CB",
  "this.popup_F20C0C06_E2B2_4A31_41D5_3E632A17A66F",
  "this.overlay_F2F71DD2_E2AF_C5D1_41E3_F6AE5260C027",
  "this.popup_F296B534_E2AF_BA51_41E5_8EA4D4720262"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_t.jpg"
},
{
 "height": 3368,
 "thumbnailUrl": "media/photo_ED45AC79_F268_6956_41DF_94E31F336C47_t.jpg",
 "label": "IMG_6720",
 "class": "Photo",
 "duration": 5000,
 "width": 6000,
 "id": "photo_ED45AC79_F268_6956_41DF_94E31F336C47",
 "image": {
  "levels": [
   {
    "url": "media/photo_ED45AC79_F268_6956_41DF_94E31F336C47.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "initialPosition": {
  "yaw": 177.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0.07
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_camera"
},
{
 "levels": [
  {
   "url": "media/popup_F3DDDE69_E377_C6F3_41E7_B997645FE28B_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_F3DDDE69_E377_C6F3_41E7_B997645FE28B_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_F3DDDE69_E377_C6F3_41E7_B997645FE28B_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_F3DDDE69_E377_C6F3_41E7_B997645FE28B_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_F3DDDE69_E377_C6F3_41E7_B997645FE28B_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_F2450A9C_E371_CE50_41E4_8B9B63CE3ACA",
 "class": "ImageResource"
},
{
 "items": [
  {
   "media": "this.video_F2789D06_E2B2_4A30_41E1_5EE5F93F91B4",
   "start": "this.viewer_uid2904711F_25F3_3B65_41C1_5407BD7581E3VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_28E5413B_25F3_3BAD_41C0_CCFC4BFB0CDB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_28E5413B_25F3_3BAD_41C0_CCFC4BFB0CDB, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2904711F_25F3_3B65_41C1_5407BD7581E3VideoPlayer)",
   "player": "this.viewer_uid2904711F_25F3_3B65_41C1_5407BD7581E3VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_28E5413B_25F3_3BAD_41C0_CCFC4BFB0CDB",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 106.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_28A3F181_25F3_3B5D_41AF_9CB3103A488A"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "autoplay": true,
 "hfov": 5.34,
 "id": "popup_EDBBA763_E2B2_46F0_41D9_57A4CDF79B79",
 "rotationZ": 0,
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "pitch": 19.45,
 "showEasing": "cubic_in",
 "yaw": 94.52,
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "video": {
  "width": 992,
  "class": "VideoResource",
  "mp4Url": "media/video_ECDE0E11_E2B2_4651_41E4_359C25D501C8.mp4",
  "height": 960
 }
},
{
 "headerBorderSize": 0,
 "headerBackgroundColorRatios": [
  0.79
 ],
 "data": {
  "name": "Window22103"
 },
 "shadowSpread": 1,
 "id": "window_EDEFE059_F1B8_1949_41D8_8A9D0D337FDE",
 "width": 400,
 "veilOpacity": 0.4,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "bodyPaddingRight": 5,
 "overflow": "scroll",
 "minHeight": 20,
 "shadow": true,
 "closeButtonIconColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0
 ],
 "modal": true,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFCC"
 ],
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "veilColorDirection": "horizontal",
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "verticalAlign": "middle",
 "title": "Kerani Telegraf",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "bodyPaddingLeft": 5,
 "titlePaddingTop": 5,
 "headerBorderColor": "#FFCC00",
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "contentOpaque": false,
 "titlePaddingRight": 5,
 "backgroundColor": [],
 "headerBackgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "closeButtonBorderRadius": 11,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontSize": "1.3vmin",
 "closeButtonPressedIconColor": "#FFFFFF",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerHeight": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowBlurRadius": 6,
 "children": [
  "this.image_uid290DA129_25F3_3BAD_41C0_708726EBC5DD_0",
  "this.htmlText_EDED405A_F1B8_194B_41D5_485480F61780"
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "layout": "vertical",
 "headerPaddingRight": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "class": "Window",
 "closeButtonIconLineWidth": 2,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconWidth": 12,
 "paddingLeft": 0,
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingLeft": 5,
 "titleFontColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "titleFontFamily": "Times New Roman",
 "bodyBorderColor": "#999999"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E32C72DF_F6D1_284C_41E0_8A897249F151",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "1734580547416",
 "id": "panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983",
 "overlays": [
  "this.overlay_E15917BC_F6D3_28C3_41C0_C295DE13A3B9",
  "this.overlay_EC267516_F6D3_6824_41D1_1211AE57D962",
  "this.popup_EF7B0183_F6D3_281C_41C4_B1E40BF6315E",
  "this.overlay_EC86BCF6_F6D1_19EE_41DD_E783493B3151",
  "this.popup_EC09E9CA_F6D1_1827_41D1_143F0E17BB0E",
  "this.overlay_EC522A03_F6B1_3832_41ED_C771949F5D39",
  "this.popup_ED9E5329_F6B1_E87E_41D4_9796BA8866D9",
  "this.overlay_EC0ECA11_F6B1_1851_41EB_C40CE44EAAE2",
  "this.popup_EF92575F_F6B1_28D0_41A3_170B4EAAFE1F"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 4.52,
 "id": "popup_F2B3976B_E2AE_46F1_41E1_91007B1F7211",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_F2B3976B_E2AE_46F1_41E1_91007B1F7211_0_2.jpg",
    "width": 866,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 3.47,
 "showEasing": "cubic_in",
 "yaw": 137.75,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "initialPosition": {
  "yaw": 105.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_2BC41292_25F3_397F_41BB_B7580D6FCD10"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "1734580547351",
 "id": "panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA",
 "overlays": [
  "this.overlay_E32134D9_F6D1_E8A7_41CA_91553CD8792A",
  "this.overlay_ECD015A4_F6D1_2863_4180_A48A781EBEFC",
  "this.overlay_EC81ECCC_F6B3_7830_41CF_C367FACFC9A3",
  "this.popup_EC1BC794_F6B3_2851_41E0_CF2DCC5701C6"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 10.2,
 "id": "popup_ED828E1B_F6B1_185D_41DD_D8AA146D6D69",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_ED828E1B_F6B1_185D_41DD_D8AA146D6D69_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 19.16,
 "showEasing": "cubic_in",
 "yaw": -106.27,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "initialPosition": {
  "yaw": 87.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_286601BB_25F3_3AAD_41AE_7DFF52119CE7"
},
{
 "levels": [
  {
   "url": "media/popup_ED0FAC78_E2B2_CADF_41B2_4F90E8B37F8F_0_0.jpg",
   "width": 4898,
   "class": "ImageResourceLevel",
   "height": 3050
  },
  {
   "url": "media/popup_ED0FAC78_E2B2_CADF_41B2_4F90E8B37F8F_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2550
  },
  {
   "url": "media/popup_ED0FAC78_E2B2_CADF_41B2_4F90E8B37F8F_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1275
  },
  {
   "url": "media/popup_ED0FAC78_E2B2_CADF_41B2_4F90E8B37F8F_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 637
  },
  {
   "url": "media/popup_ED0FAC78_E2B2_CADF_41B2_4F90E8B37F8F_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 318
  }
 ],
 "id": "ImageResource_F34A4492_E2B2_7A50_41E2_09BBAC2A512C",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 8.56,
 "id": "popup_EF7B0183_F6D3_281C_41C4_B1E40BF6315E",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_EF7B0183_F6D3_281C_41C4_B1E40BF6315E_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 18.9,
 "showEasing": "cubic_in",
 "yaw": -108.4,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_camera"
},
{
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "maximumZoomFactor": 1.2,
 "thumbnailUrl": "media/map_F385B56F_E2D2_DAF1_41DD_BFBF184A400C_t.jpg",
 "initialZoomFactor": 1,
 "label": "1950",
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "scaleMode": "fit_inside",
 "id": "map_F385B56F_E2D2_DAF1_41DD_BFBF184A400C",
 "image": {
  "levels": [
   {
    "url": "media/map_F385B56F_E2D2_DAF1_41DD_BFBF184A400C.jpeg",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 1796
   },
   {
    "url": "media/map_F385B56F_E2D2_DAF1_41DD_BFBF184A400C_lq.jpeg",
    "width": 341,
    "class": "ImageResourceLevel",
    "tags": "preload",
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "width": 6000,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "height": 3368
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "autoplay": true,
 "hfov": 17.01,
 "id": "popup_F2E83EE1_E2D2_47F0_41EC_43B2AE12E140",
 "rotationZ": 0,
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "pitch": 26.58,
 "showEasing": "cubic_in",
 "yaw": 117.99,
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "video": {
  "width": 1614,
  "class": "VideoResource",
  "mp4Url": "media/video_F28AA0B6_E2D2_5A51_41E9_FE10E51DD589.mp4",
  "height": 1080
 }
},
{
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window518"
 },
 "shadowSpread": 1,
 "id": "window_2E42A790_25F1_677A_41BB_1B3581C53F46",
 "closeButtonPaddingLeft": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "horizontalAlign": "center",
 "bodyPaddingRight": 0,
 "overflow": "scroll",
 "minHeight": 20,
 "shadow": true,
 "closeButtonIconColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "modal": true,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingRight": 5,
 "propagateClick": false,
 "paddingRight": 0,
 "closeButtonRollOverIconColor": "#666666",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "closeButtonPaddingBottom": 5,
 "scrollBarColor": "#000000",
 "bodyPaddingLeft": 0,
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "closeButtonBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "titlePaddingRight": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "closeButtonBorderRadius": 0,
 "scrollBarVisible": "rollOver",
 "closeButtonBackgroundOpacity": 0.3,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontSize": "1.29vmin",
 "closeButtonPressedIconColor": "#888888",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerHeight": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "closeButtonPaddingTop": 5,
 "headerPaddingBottom": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 0,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowBlurRadius": 6,
 "children": [
  "this.viewer_uid2905A11E_25F3_3B67_41BE_85E00F80279B"
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 0,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "layout": "vertical",
 "headerPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonIconHeight": 20,
 "closeButtonIconLineWidth": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedIconLineWidth": 5,
 "class": "Window",
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconWidth": 20,
 "paddingLeft": 0,
 "headerBackgroundOpacity": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "titlePaddingLeft": 5,
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "titleFontFamily": "Arial"
},
{
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window520"
 },
 "shadowSpread": 1,
 "id": "window_2E44C791_25F1_677A_41AF_71F054319B87",
 "closeButtonPaddingLeft": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "horizontalAlign": "center",
 "bodyPaddingRight": 0,
 "overflow": "scroll",
 "minHeight": 20,
 "shadow": true,
 "closeButtonIconColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "modal": true,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingRight": 5,
 "propagateClick": false,
 "paddingRight": 0,
 "closeButtonRollOverIconColor": "#666666",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "closeButtonPaddingBottom": 5,
 "scrollBarColor": "#000000",
 "bodyPaddingLeft": 0,
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "closeButtonBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "titlePaddingRight": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "closeButtonBorderRadius": 0,
 "scrollBarVisible": "rollOver",
 "closeButtonBackgroundOpacity": 0.3,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontSize": "1.29vmin",
 "closeButtonPressedIconColor": "#888888",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerHeight": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "closeButtonPaddingTop": 5,
 "headerPaddingBottom": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 0,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowBlurRadius": 6,
 "children": [
  "this.viewer_uid2905D11F_25F3_3B65_41A1_0753D5AD8E6F"
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 0,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "layout": "vertical",
 "headerPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonIconHeight": 20,
 "closeButtonIconLineWidth": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedIconLineWidth": 5,
 "class": "Window",
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconWidth": 20,
 "paddingLeft": 0,
 "headerBackgroundOpacity": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "titlePaddingLeft": 5,
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "titleFontFamily": "Arial"
},
{
 "levels": [
  {
   "url": "media/popup_F23148D2_E2D2_4BD0_41C8_F3710E3AD7CB_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_F23148D2_E2D2_4BD0_41C8_F3710E3AD7CB_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_F23148D2_E2D2_4BD0_41C8_F3710E3AD7CB_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_F23148D2_E2D2_4BD0_41C8_F3710E3AD7CB_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_F23148D2_E2D2_4BD0_41C8_F3710E3AD7CB_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_F2510A96_E371_CE51_41CF_CC5374A5EDE2",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_ECE90554_E372_5AD0_41EB_6E24BA0038D0_0_0.jpg",
   "width": 4175,
   "class": "ImageResourceLevel",
   "height": 2912
  },
  {
   "url": "media/popup_ECE90554_E372_5AD0_41EB_6E24BA0038D0_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2856
  },
  {
   "url": "media/popup_ECE90554_E372_5AD0_41EB_6E24BA0038D0_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1428
  },
  {
   "url": "media/popup_ECE90554_E372_5AD0_41EB_6E24BA0038D0_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 714
  },
  {
   "url": "media/popup_ECE90554_E372_5AD0_41EB_6E24BA0038D0_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 357
  }
 ],
 "id": "ImageResource_F248EA99_E371_CE53_41E1_13ADE668B909",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "autoplay": true,
 "hfov": 17.11,
 "id": "popup_F296B534_E2AF_BA51_41E5_8EA4D4720262",
 "rotationZ": 0,
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "pitch": 6.19,
 "showEasing": "cubic_in",
 "yaw": -33.81,
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "video": {
  "width": 1600,
  "class": "VideoResource",
  "mp4Url": "media/video_F2B61D0E_E2AE_4A31_41B0_3AF36F03124C.mp4",
  "height": 1080
 }
},
{
 "touchControlMode": "drag_rotation",
 "buttonCardboardView": [
  "this.IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "buttonToggleHotspots": [
  "this.IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96"
 ],
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": [
  "this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
 ]
},
{
 "movementMode": "constrained",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerMapPlayer",
 "class": "MapPlayer"
},
{
 "initialPosition": {
  "yaw": 175.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0.06
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_camera"
},
{
 "levels": [
  {
   "url": "media/popup_ED40C9C3_E2D6_4A30_41E4_BFD5219AA002_0_0.jpg",
   "width": 1296,
   "class": "ImageResourceLevel",
   "height": 1193
  },
  {
   "url": "media/popup_ED40C9C3_E2D6_4A30_41E4_BFD5219AA002_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 942
  },
  {
   "url": "media/popup_ED40C9C3_E2D6_4A30_41E4_BFD5219AA002_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 471
  }
 ],
 "id": "ImageResource_F0AD2F75_E2DF_C6D0_41E8_E6AE75E37914",
 "class": "ImageResource"
},
{
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window515"
 },
 "shadowSpread": 1,
 "id": "window_2E5E078F_25F1_6766_41B6_6987AED125B3",
 "closeButtonPaddingLeft": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "horizontalAlign": "center",
 "bodyPaddingRight": 0,
 "overflow": "scroll",
 "minHeight": 20,
 "shadow": true,
 "closeButtonIconColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "modal": true,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingRight": 5,
 "propagateClick": false,
 "paddingRight": 0,
 "closeButtonRollOverIconColor": "#666666",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "closeButtonPaddingBottom": 5,
 "scrollBarColor": "#000000",
 "bodyPaddingLeft": 0,
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "closeButtonBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "titlePaddingRight": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "closeButtonBorderRadius": 0,
 "scrollBarVisible": "rollOver",
 "closeButtonBackgroundOpacity": 0.3,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontSize": "1.29vmin",
 "closeButtonPressedIconColor": "#888888",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerHeight": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "closeButtonPaddingTop": 5,
 "headerPaddingBottom": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 0,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowBlurRadius": 6,
 "children": [
  "this.viewer_uid2901511B_25F3_3B6D_41C0_DC911BABA3DB"
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 0,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "layout": "vertical",
 "headerPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonIconHeight": 20,
 "closeButtonIconLineWidth": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedIconLineWidth": 5,
 "class": "Window",
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconWidth": 20,
 "paddingLeft": 0,
 "headerBackgroundOpacity": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "titlePaddingLeft": 5,
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "titleFontFamily": "Arial"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "exhibition 1",
 "id": "panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76",
 "overlays": [
  "this.overlay_CD579C00_DE39_98CE_41E4_301469956B33",
  "this.overlay_ED8753DC_E2B2_5DD7_41D0_F09B034A885B",
  "this.overlay_EDDCAF50_E2B1_C62F_4195_1BD1062DF29D",
  "this.overlay_ED298206_E2B6_BE33_41D8_572645568520",
  "this.overlay_F2A34274_E2B7_DED0_41D9_F0EE5E58A2D2",
  "this.overlay_ED6537FB_E2B1_C5D0_41BF_A840EC895A78",
  "this.overlay_F3B92F84_E2B2_4630_41E6_C9976116045A",
  "this.overlay_ED31AB55_E2B2_4ED0_41B2_9751D42314DF",
  "this.popup_F282F4DD_E2B2_7BD1_41CA_3977321C02CD",
  "this.popup_ED49A0E4_E2AE_7BF0_41DD_79E5C0BAD2B1",
  "this.popup_ED736FD5_E2AE_45D0_41B0_1D7BE00F3956",
  "this.popup_F2B3976B_E2AE_46F1_41E1_91007B1F7211",
  "this.popup_ED40C9C3_E2D6_4A30_41E4_BFD5219AA002",
  "this.popup_F286EC4B_E2D2_4A30_41EB_446680CBEED3",
  "this.popup_F38C4D12_E2D2_CA50_41E2_855596E27D84",
  "this.overlay_ED5AB4F3_E2D1_BBD0_41D4_3D17F10E1D87",
  "this.popup_ED496840_E2DE_CA30_41C9_7D0ED8B73445"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_t.jpg"
},
{
 "initialPosition": {
  "yaw": 171.75,
  "class": "PanoramaCameraPosition",
  "pitch": -2.99
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 5.76,
 "id": "popup_F3F09FA5_E2D6_C670_41BF_78BE51F697A8",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_F3F09FA5_E2D6_C670_41BF_78BE51F697A8_0_2.jpg",
    "width": 787,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -5.94,
 "showEasing": "cubic_in",
 "yaw": -118.27,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -101.49,
   "yaw": 89.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690"
  },
  {
   "backwardYaw": 91.18,
   "yaw": -92.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7"
  }
 ],
 "label": "1734580547688",
 "id": "panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF",
 "overlays": [
  "this.overlay_FE9D4B4D_F1B8_6F49_41EC_ADACE619EAB9",
  "this.overlay_FE0C6A55_F1B9_E959_41DA_758779C93459",
  "this.overlay_EE611567_F258_1B79_41E6_BF049707F2E0"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_camera"
},
{
 "headerBorderSize": 0,
 "headerBackgroundColorRatios": [
  0.79
 ],
 "data": {
  "name": "Window22103"
 },
 "shadowSpread": 1,
 "id": "window_EDFF54E1_F1B8_3979_41DC_3B3438512BC1",
 "width": 400,
 "veilOpacity": 0.4,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "bodyPaddingRight": 5,
 "overflow": "scroll",
 "minHeight": 20,
 "shadow": true,
 "closeButtonIconColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0
 ],
 "modal": true,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFCC"
 ],
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "veilColorDirection": "horizontal",
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "verticalAlign": "middle",
 "title": "Telefon",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "bodyPaddingLeft": 5,
 "titlePaddingTop": 5,
 "headerBorderColor": "#FFCC00",
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "contentOpaque": false,
 "titlePaddingRight": 5,
 "backgroundColor": [],
 "headerBackgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "closeButtonBorderRadius": 11,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontSize": "1.3vmin",
 "closeButtonPressedIconColor": "#FFFFFF",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerHeight": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowBlurRadius": 6,
 "children": [
  "this.image_uid290C3128_25F3_3BAB_41A3_FF69F08B7FBE_0",
  "this.htmlText_EDFCB4E2_F1B8_397B_41D1_B6D4CC3FF3F8"
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "layout": "vertical",
 "headerPaddingRight": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "class": "Window",
 "closeButtonIconLineWidth": 2,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconWidth": 12,
 "paddingLeft": 0,
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "close": "this.stopGlobalAudio(this.audio_D3907168_F278_1B77_41B7_B2A3113FFB0E)",
 "bodyPaddingBottom": 5,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingLeft": 5,
 "titleFontColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "titleFontFamily": "Times New Roman",
 "bodyBorderColor": "#999999"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -79.39,
   "yaw": 6.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42"
  },
  {
   "backwardYaw": 89.93,
   "yaw": -101.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF"
  }
 ],
 "label": "1734580547674",
 "id": "panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690",
 "overlays": [
  "this.overlay_FED9FBFE_F1B8_2F4A_41E1_96FF3FBC127D",
  "this.overlay_FE2B5686_F1B8_39BB_41C4_C6C512B48078",
  "this.overlay_EEC6158B_F268_1BC9_41E0_22E9721CC87C"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_t.jpg"
},
{
 "levels": [
  {
   "url": "media/popup_ED828E1B_F6B1_185D_41DD_D8AA146D6D69_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_ED828E1B_F6B1_185D_41DD_D8AA146D6D69_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_ED828E1B_F6B1_185D_41DD_D8AA146D6D69_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_ED828E1B_F6B1_185D_41DD_D8AA146D6D69_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_ED828E1B_F6B1_185D_41DD_D8AA146D6D69_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_D7C174B4_F6B1_2851_41E5_72FEDBA0ECAD",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_ED9D3A95_F6D1_183F_41EC_51FA7C4C2065_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_ED9D3A95_F6D1_183F_41EC_51FA7C4C2065_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_ED9D3A95_F6D1_183F_41EC_51FA7C4C2065_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_ED9D3A95_F6D1_183F_41EC_51FA7C4C2065_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_ED9D3A95_F6D1_183F_41EC_51FA7C4C2065_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_D7C3B4B4_F6B1_2851_41DE_7931072562EE",
 "class": "ImageResource"
},
{
 "class": "MediaAudio",
 "audio": {
  "mp3Url": "media/audio_ED7FC5C6_F278_3BBA_41BB_D16E14309B34.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_ED7FC5C6_F278_3BBA_41BB_D16E14309B34.ogg"
 },
 "autoplay": true,
 "id": "audio_ED7FC5C6_F278_3BBA_41BB_D16E14309B34",
 "data": {
  "label": "1962"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 8.76,
 "id": "popup_EF5AA8F7_F6D3_19FE_41E4_F43AC792E155",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_EF5AA8F7_F6D3_19FE_41E4_F43AC792E155_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 14.38,
 "showEasing": "cubic_in",
 "yaw": -30.27,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "levels": [
  {
   "url": "media/popup_F38C4D12_E2D2_CA50_41E2_855596E27D84_0_0.jpg",
   "width": 1780,
   "class": "ImageResourceLevel",
   "height": 2241
  },
  {
   "url": "media/popup_F38C4D12_E2D2_CA50_41E2_855596E27D84_0_1.jpg",
   "width": 1626,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_F38C4D12_E2D2_CA50_41E2_855596E27D84_0_2.jpg",
   "width": 813,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_F38C4D12_E2D2_CA50_41E2_855596E27D84_0_3.jpg",
   "width": 406,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_F0AFFF74_E2DF_C6D0_41D2_F592DC2E6BC1",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 4.27,
 "id": "popup_ED1A1B30_F268_28D7_41EA_E2B24928F3AC",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_ED1A1B30_F268_28D7_41EA_E2B24928F3AC_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.07,
 "showEasing": "cubic_in",
 "yaw": -122.34,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 3.91,
 "id": "popup_F3ADC71C_E351_C650_41D0_7124FB7D1A12",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_F3ADC71C_E351_C650_41D0_7124FB7D1A12_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 742
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 7.49,
 "showEasing": "cubic_in",
 "yaw": -44.49,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 2.83,
 "id": "popup_F3CD6E19_E35E_4650_41E1_2BE6FA029E36",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_F3CD6E19_E35E_4650_41E1_2BE6FA029E36_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 609
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 0.07,
 "showEasing": "cubic_in",
 "yaw": -37.58,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 5.8,
 "id": "popup_ED496840_E2DE_CA30_41C9_7D0ED8B73445",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_ED496840_E2DE_CA30_41C9_7D0ED8B73445_0_2.jpg",
    "width": 935,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -7.81,
 "showEasing": "cubic_in",
 "yaw": -39.35,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "initialPosition": {
  "yaw": 100.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_2BA642A9_25F3_3EAD_419B_2CDBE6D970DA"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 6.24,
 "id": "popup_EC2F459B_F268_1BC9_41EB_D84D850A2E89",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_EC2F459B_F268_1BC9_41EB_D84D850A2E89_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 6.34,
 "showEasing": "cubic_in",
 "yaw": 5.28,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 96.47,
   "yaw": -103.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7"
  },
  {
   "backwardYaw": -162.8,
   "yaw": 71.85,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F"
  }
 ],
 "label": "1734580547780",
 "id": "panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D",
 "overlays": [
  "this.overlay_FE8D17C5_F1B8_27B9_41E8_282AAE702935",
  "this.overlay_FE317685_F1B8_19B9_41D3_B6C1C4D43DC0",
  "this.overlay_EC7BC655_F1B8_F959_41A1_D30B03921970",
  "this.popup_EC2F459B_F268_1BC9_41EB_D84D850A2E89"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_t.jpg"
},
{
 "initialPosition": {
  "yaw": -92.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_283DA206_25F3_3967_41BF_92A924134C16"
},
{
 "levels": [
  {
   "url": "media/popup_EF5AA8F7_F6D3_19FE_41E4_F43AC792E155_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_EF5AA8F7_F6D3_19FE_41E4_F43AC792E155_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_EF5AA8F7_F6D3_19FE_41E4_F43AC792E155_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_EF5AA8F7_F6D3_19FE_41E4_F43AC792E155_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_EF5AA8F7_F6D3_19FE_41E4_F43AC792E155_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_D7C424B2_F6B1_2851_41B6_CC4A1C51C810",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_F3F84194_E376_5A50_41C9_849709CCAEEE_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_F3F84194_E376_5A50_41C9_849709CCAEEE_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_F3F84194_E376_5A50_41C9_849709CCAEEE_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_F3F84194_E376_5A50_41C9_849709CCAEEE_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_F3F84194_E376_5A50_41C9_849709CCAEEE_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_F2441A9B_E371_CE50_41DC_9D0BC9A01227",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -88.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_2BFA525F_25F3_39E5_41BE_298842868CBC"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 7.31,
 "id": "popup_EC09E9CA_F6D1_1827_41D1_143F0E17BB0E",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_EC09E9CA_F6D1_1827_41D1_143F0E17BB0E_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 14.13,
 "showEasing": "cubic_in",
 "yaw": -51.88,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 1.82,
 "id": "popup_F3CCBA3F_E36E_CE50_41D5_FF1C7802CD44",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_F3CCBA3F_E36E_CE50_41D5_FF1C7802CD44_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 609
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.37,
 "showEasing": "cubic_in",
 "yaw": -46.97,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "center ",
 "id": "panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2",
 "overlays": [
  "this.overlay_F37A8675_E37E_46D0_41E1_16A8DEB07C58"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_t.jpg"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 84.15,
   "yaw": -101.74,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448"
  },
  {
   "backwardYaw": -92.2,
   "yaw": 91.18,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF"
  }
 ],
 "label": "1734580547703",
 "id": "panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7",
 "overlays": [
  "this.overlay_FE9F645D_F1B8_3949_41E9_39FA310B96AD",
  "this.overlay_FE0DC026_F1B8_18FB_41E9_5B72EC938DB6",
  "this.overlay_EA54E201_F1B8_18B6_41E0_3F12929E9EB4"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_t.jpg"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "exhibition 6",
 "id": "panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3",
 "overlays": [
  "this.overlay_CAD37B4B_DE4B_BF51_41D1_22885AB5DDEB",
  "this.overlay_F37BA489_E371_DA30_41E8_AEE9AE933761",
  "this.overlay_F3B333E1_E376_5DF0_41E8_E85059780697",
  "this.popup_F3F84194_E376_5A50_41C9_849709CCAEEE",
  "this.popup_F3DDDE69_E377_C6F3_41E7_B997645FE28B"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_camera"
},
{
 "levels": [
  {
   "url": "media/popup_F3DE3B3F_E35E_CE4F_41D5_C7185EF704F2_0_0.jpg",
   "width": 2639,
   "class": "ImageResourceLevel",
   "height": 2811
  },
  {
   "url": "media/popup_F3DE3B3F_E35E_CE4F_41D5_C7185EF704F2_0_1.jpg",
   "width": 1922,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_F3DE3B3F_E35E_CE4F_41D5_C7185EF704F2_0_2.jpg",
   "width": 961,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_F3DE3B3F_E35E_CE4F_41D5_C7185EF704F2_0_3.jpg",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_F24E4A98_E371_CE51_414C_D4BE7F7D91D0",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_EDFA3655_F6D1_283C_41E5_17E39BD870BC_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_EDFA3655_F6D1_283C_41E5_17E39BD870BC_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_EDFA3655_F6D1_283C_41E5_17E39BD870BC_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_EDFA3655_F6D1_283C_41E5_17E39BD870BC_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_EDFA3655_F6D1_283C_41E5_17E39BD870BC_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_D7C2C4B3_F6B1_2857_41EC_988F64564981",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 4.65,
 "id": "popup_ED0FAC78_E2B2_CADF_41B2_4F90E8B37F8F",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_ED0FAC78_E2B2_CADF_41B2_4F90E8B37F8F_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 637
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -8.56,
 "showEasing": "cubic_in",
 "yaw": 87.78,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_camera"
},
{
 "levels": [
  {
   "url": "media/popup_F3ADC71C_E351_C650_41D0_7124FB7D1A12_0_0.jpg",
   "width": 4421,
   "class": "ImageResourceLevel",
   "height": 3205
  },
  {
   "url": "media/popup_F3ADC71C_E351_C650_41D0_7124FB7D1A12_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2969
  },
  {
   "url": "media/popup_F3ADC71C_E351_C650_41D0_7124FB7D1A12_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1484
  },
  {
   "url": "media/popup_F3ADC71C_E351_C650_41D0_7124FB7D1A12_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 742
  },
  {
   "url": "media/popup_F3ADC71C_E351_C650_41D0_7124FB7D1A12_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 371
  }
 ],
 "id": "ImageResource_F24FFA98_E371_CE51_41E8_7B7F5F297697",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "autoplay": true,
 "hfov": 9.45,
 "id": "popup_F24FB207_E2D7_FE30_41A2_2B1D9CEDB56D",
 "rotationZ": 0,
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "pitch": 7.69,
 "showEasing": "cubic_in",
 "yaw": -162.47,
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "video": {
  "width": 720,
  "class": "VideoResource",
  "mp4Url": "media/video_F3CC9223_E2D7_BE77_41D8_CFBA01C3FD95.mp4",
  "height": 1280
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 12.86,
 "id": "popup_F3F84194_E376_5A50_41C9_849709CCAEEE",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_F3F84194_E376_5A50_41C9_849709CCAEEE_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -7.54,
 "showEasing": "cubic_in",
 "yaw": -164.96,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window517"
 },
 "shadowSpread": 1,
 "id": "window_2E435790_25F1_677A_41BF_684E34C6BF26",
 "closeButtonPaddingLeft": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "horizontalAlign": "center",
 "bodyPaddingRight": 0,
 "overflow": "scroll",
 "minHeight": 20,
 "shadow": true,
 "closeButtonIconColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "modal": true,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingRight": 5,
 "propagateClick": false,
 "paddingRight": 0,
 "closeButtonRollOverIconColor": "#666666",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "closeButtonPaddingBottom": 5,
 "scrollBarColor": "#000000",
 "bodyPaddingLeft": 0,
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "closeButtonBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "titlePaddingRight": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "closeButtonBorderRadius": 0,
 "scrollBarVisible": "rollOver",
 "closeButtonBackgroundOpacity": 0.3,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontSize": "1.29vmin",
 "closeButtonPressedIconColor": "#888888",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerHeight": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "closeButtonPaddingTop": 5,
 "headerPaddingBottom": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 0,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowBlurRadius": 6,
 "children": [
  "this.viewer_uid2905911E_25F3_3B67_41BD_4F6AC5635A0A"
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 0,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "layout": "vertical",
 "headerPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonIconHeight": 20,
 "closeButtonIconLineWidth": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedIconLineWidth": 5,
 "class": "Window",
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconWidth": 20,
 "paddingLeft": 0,
 "headerBackgroundOpacity": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "titlePaddingLeft": 5,
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_camera"
},
{
 "levels": [
  {
   "url": "media/popup_F3CCBA3F_E36E_CE50_41D5_FF1C7802CD44_0_0.jpg",
   "width": 2828,
   "class": "ImageResourceLevel",
   "height": 1682
  },
  {
   "url": "media/popup_F3CCBA3F_E36E_CE50_41D5_FF1C7802CD44_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1218
  },
  {
   "url": "media/popup_F3CCBA3F_E36E_CE50_41D5_FF1C7802CD44_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 609
  },
  {
   "url": "media/popup_F3CCBA3F_E36E_CE50_41D5_FF1C7802CD44_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 304
  }
 ],
 "id": "ImageResource_F24A8A9B_E371_CE50_41B8_E4214ED71902",
 "class": "ImageResource"
},
{
 "vfov": 180,
 "label": "exhibition 3",
 "class": "Panorama",
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "id": "panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_t.jpg",
 "hfovMax": 130,
 "hfov": 360
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 7.52,
 "id": "popup_EC24A3B2_F268_3FDB_41E7_0E51F9BA72B3",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_EC24A3B2_F268_3FDB_41E7_0E51F9BA72B3_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 4.08,
 "showEasing": "cubic_in",
 "yaw": -20.73,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_camera"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "entrance ",
 "id": "panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C",
 "overlays": [
  "this.overlay_CD66E758_DDD9_977F_41D7_CCCD6C05F8DA",
  "this.overlay_ECED38DB_E2B2_CBD1_41B7_C304E939FD00",
  "this.popup_EDBBA763_E2B2_46F0_41D9_57A4CDF79B79",
  "this.overlay_EC419C7B_E2B6_4AD1_41D1_E43690CA308C",
  "this.popup_EDE4F976_E2B7_CAD0_41BB_FDE48BC52A98",
  "this.overlay_EDB69798_E2B2_465F_41E0_BCED3EA37444",
  "this.popup_ED0FAC78_E2B2_CADF_41B2_4F90E8B37F8F",
  "this.overlay_ED8A6F39_E2B2_C651_41D0_C536141A31A3",
  "this.overlay_EDB56DD5_E2B1_C5D0_41DD_32A55FDF78DB",
  "this.overlay_EDED3C6A_E2BE_4AF3_41E9_97AD93E50B58",
  "this.popup_F2FDE342_E2BE_BE30_41EA_00EE347C400C",
  "this.popup_EDDE4B48_E2BE_4E3F_41C4_FF686BB8B9B1",
  "this.popup_ED2F5237_E2BE_7E50_41CA_6D8B6A7895B6"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_t.jpg"
},
{
 "items": [
  {
   "media": "this.video_EC586C60_E2B1_CAF0_41E8_A6197DBB8D98",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_28F3912B_25F3_3BAD_41BE_D8F498A2D69C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_28F3912B_25F3_3BAD_41BE_D8F498A2D69C, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_28F3912B_25F3_3BAD_41BE_D8F498A2D69C",
 "class": "PlayList"
},
{
 "height": 3368,
 "thumbnailUrl": "media/photo_EC621859_F268_2956_41DF_1F4707950330_t.jpg",
 "label": "IMG_6728",
 "class": "Photo",
 "duration": 5000,
 "width": 6000,
 "id": "photo_EC621859_F268_2956_41DF_1F4707950330",
 "image": {
  "levels": [
   {
    "url": "media/photo_EC621859_F268_2956_41DF_1F4707950330.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "items": [
  {
   "media": "this.video_F2B61D0E_E2AE_4A31_41B0_3AF36F03124C",
   "start": "this.viewer_uid2905D11F_25F3_3B65_41A1_0753D5AD8E6FVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_28EA813C_25F3_3BAB_41A8_E242553C6F7B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_28EA813C_25F3_3BAB_41A8_E242553C6F7B, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2905D11F_25F3_3B65_41A1_0753D5AD8E6FVideoPlayer)",
   "player": "this.viewer_uid2905D11F_25F3_3B65_41A1_0753D5AD8E6FVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_28EA813C_25F3_3BAB_41A8_E242553C6F7B",
 "class": "PlayList"
},
{
 "levels": [
  {
   "url": "media/popup_EF7B0183_F6D3_281C_41C4_B1E40BF6315E_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_EF7B0183_F6D3_281C_41C4_B1E40BF6315E_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_EF7B0183_F6D3_281C_41C4_B1E40BF6315E_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_EF7B0183_F6D3_281C_41C4_B1E40BF6315E_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_EF7B0183_F6D3_281C_41C4_B1E40BF6315E_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_D63B14AF_F6B1_284F_41EA_A0ECEB2B53E5",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -6.41,
  "class": "PanoramaCameraPosition",
  "pitch": -4.53
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_camera"
},
{
 "levels": [
  {
   "url": "media/popup_EC2F459B_F268_1BC9_41EB_D84D850A2E89_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_EC2F459B_F268_1BC9_41EB_D84D850A2E89_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_EC2F459B_F268_1BC9_41EB_D84D850A2E89_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_EC2F459B_F268_1BC9_41EB_D84D850A2E89_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_EC2F459B_F268_1BC9_41EB_D84D850A2E89_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_D7F397DB_F278_E749_41EC_F8E260870BC0",
 "class": "ImageResource"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "1734580547276",
 "id": "panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856",
 "overlays": [
  "this.overlay_E0A24EB4_F6CF_18FF_41D0_C5F9B8D36460"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_t.jpg"
},
{
 "levels": [
  {
   "url": "media/popup_F2FDE342_E2BE_BE30_41EA_00EE347C400C_0_0.jpg",
   "width": 1778,
   "class": "ImageResourceLevel",
   "height": 2302
  },
  {
   "url": "media/popup_F2FDE342_E2BE_BE30_41EA_00EE347C400C_0_1.jpg",
   "width": 1581,
   "class": "ImageResourceLevel",
   "height": 2047
  },
  {
   "url": "media/popup_F2FDE342_E2BE_BE30_41EA_00EE347C400C_0_2.jpg",
   "width": 790,
   "class": "ImageResourceLevel",
   "height": 1023
  },
  {
   "url": "media/popup_F2FDE342_E2BE_BE30_41EA_00EE347C400C_0_3.jpg",
   "width": 395,
   "class": "ImageResourceLevel",
   "height": 511
  }
 ],
 "id": "ImageResource_F3323177_E2B1_DAD0_41E9_85F9B6371735",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_ED83BD0F_F6D1_3818_41ED_69AC05B8A73E_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_ED83BD0F_F6D1_3818_41ED_69AC05B8A73E_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_ED83BD0F_F6D1_3818_41ED_69AC05B8A73E_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_ED83BD0F_F6D1_3818_41ED_69AC05B8A73E_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_ED83BD0F_F6D1_3818_41ED_69AC05B8A73E_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_D69A54B9_F6D3_287A_41CB_753139F4A064",
 "class": "ImageResource"
},
{
 "items": [
  {
   "media": "this.video_F28AA0B6_E2D2_5A51_41E9_FE10E51DD589",
   "start": "this.viewer_uid2905A11E_25F3_3B67_41BE_85E00F80279BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_28E5013B_25F3_3BAD_41B5_24E4DFBB510F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_28E5013B_25F3_3BAD_41B5_24E4DFBB510F, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2905A11E_25F3_3B67_41BE_85E00F80279BVideoPlayer)",
   "player": "this.viewer_uid2905A11E_25F3_3B67_41BE_85E00F80279BVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_28E5013B_25F3_3BAD_41B5_24E4DFBB510F",
 "class": "PlayList"
},
{
 "headerBorderSize": 0,
 "headerBackgroundColorRatios": [
  0.79
 ],
 "data": {
  "name": "Window22103"
 },
 "shadowSpread": 1,
 "id": "window_EEB29562_F268_1B7B_41E4_4A75C5737ACA",
 "width": 400,
 "veilOpacity": 0.4,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "bodyPaddingRight": 5,
 "overflow": "scroll",
 "minHeight": 20,
 "shadow": true,
 "closeButtonIconColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0
 ],
 "modal": true,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFCC"
 ],
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "veilColorDirection": "horizontal",
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "verticalAlign": "middle",
 "title": "RADIO TANPA WAYAR",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "bodyPaddingLeft": 5,
 "titlePaddingTop": 5,
 "headerBorderColor": "#FFCC00",
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "contentOpaque": false,
 "titlePaddingRight": 5,
 "backgroundColor": [],
 "headerBackgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "closeButtonBorderRadius": 11,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontSize": "1.3vmin",
 "closeButtonPressedIconColor": "#FFFFFF",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerHeight": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowBlurRadius": 6,
 "children": [
  "this.image_uid290B6123_25F3_3B5D_41BE_BE40A68FA07E_0",
  "this.htmlText_EEB79565_F268_1B79_41CF_62747BE6A3D4"
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "layout": "vertical",
 "headerPaddingRight": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "class": "Window",
 "closeButtonIconLineWidth": 2,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconWidth": 12,
 "paddingLeft": 0,
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "close": "this.stopGlobalAudio(this.audio_D2953AE2_F268_E97B_41D7_46ECEAFD5A5C)",
 "bodyPaddingBottom": 5,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingLeft": 5,
 "titleFontColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "titleFontFamily": "Times New Roman",
 "bodyBorderColor": "#999999"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_camera"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "yaw": -90.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_2B9652B4_25F3_3EBB_41AA_9B22FAAC4C7E"
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_F385B56F_E2D2_DAF1_41DD_BFBF184A400C",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_28F2712B_25F3_3BAD_41B2_C23AC24C7AE2",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -108.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_2BB7929E_25F3_3967_4183_CDBACC9BE172"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 4.3,
 "id": "popup_F286EC4B_E2D2_4A30_41EB_446680CBEED3",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_F286EC4B_E2D2_4A30_41EB_446680CBEED3_0_2.jpg",
    "width": 996,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 19.39,
 "showEasing": "cubic_in",
 "yaw": 171.55,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_camera"
},
{
 "levels": [
  {
   "url": "media/popup_EDE4F976_E2B7_CAD0_41BB_FDE48BC52A98_0_0.jpg",
   "width": 2859,
   "class": "ImageResourceLevel",
   "height": 3037
  },
  {
   "url": "media/popup_EDE4F976_E2B7_CAD0_41BB_FDE48BC52A98_0_1.jpg",
   "width": 1927,
   "class": "ImageResourceLevel",
   "height": 2047
  },
  {
   "url": "media/popup_EDE4F976_E2B7_CAD0_41BB_FDE48BC52A98_0_2.jpg",
   "width": 963,
   "class": "ImageResourceLevel",
   "height": 1023
  },
  {
   "url": "media/popup_EDE4F976_E2B7_CAD0_41BB_FDE48BC52A98_0_3.jpg",
   "width": 481,
   "class": "ImageResourceLevel",
   "height": 511
  }
 ],
 "id": "ImageResource_F1BD367E_E2B6_46D3_41DF_093B7D4ED010",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -56.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_281E9233_25F3_39BD_41BF_DC9A7926DFE0"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "autoplay": true,
 "hfov": 19.51,
 "id": "popup_F20C0C06_E2B2_4A31_41D5_3E632A17A66F",
 "rotationZ": 0,
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "pitch": 3.05,
 "showEasing": "cubic_in",
 "yaw": 34.33,
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "video": {
  "width": 2338,
  "class": "VideoResource",
  "mp4Url": "media/video_F2789D06_E2B2_4A30_41E1_5EE5F93F91B4.mp4",
  "height": 1080
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "1734580547251",
 "id": "panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21",
 "overlays": [
  "this.overlay_F8D6A909_F651_66EB_41C2_526AFE5A4BBA"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_t.jpg"
},
{
 "initialPosition": {
  "yaw": -83.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_285111C7_25F3_3AE5_41B4_2C1BA1455320"
},
{
 "class": "MediaAudio",
 "audio": {
  "mp3Url": "media/audio_D36DC254_F278_795E_41E7_6DA0AE89FE5B.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_D36DC254_F278_795E_41E7_6DA0AE89FE5B.ogg"
 },
 "autoplay": true,
 "id": "audio_D36DC254_F278_795E_41E7_6DA0AE89FE5B",
 "data": {
  "label": "1946"
 }
},
{
 "levels": [
  {
   "url": "media/popup_EC1BC794_F6B3_2851_41E0_CF2DCC5701C6_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_EC1BC794_F6B3_2851_41E0_CF2DCC5701C6_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_EC1BC794_F6B3_2851_41E0_CF2DCC5701C6_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_EC1BC794_F6B3_2851_41E0_CF2DCC5701C6_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_EC1BC794_F6B3_2851_41E0_CF2DCC5701C6_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_D63C74AD_F6B1_2873_41E5_695C8B527312",
 "class": "ImageResource"
},
{
 "height": 3368,
 "thumbnailUrl": "media/photo_ED342194_F268_3BDF_41C4_DB462D83E97C_t.jpg",
 "label": "IMG_6722",
 "class": "Photo",
 "duration": 5000,
 "width": 6000,
 "id": "photo_ED342194_F268_3BDF_41C4_DB462D83E97C",
 "image": {
  "levels": [
   {
    "url": "media/photo_ED342194_F268_3BDF_41C4_DB462D83E97C.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 7.48,
 "id": "popup_EC2F2555_F6F7_6804_41DA_540B9BD4AAA7",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_EC2F2555_F6F7_6804_41DA_540B9BD4AAA7_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 6.85,
 "showEasing": "cubic_in",
 "yaw": -54.89,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -14.57,
   "yaw": -73.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448"
  },
  {
   "backwardYaw": -103.76,
   "yaw": 96.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D"
  }
 ],
 "label": "1734580547763",
 "id": "panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7",
 "overlays": [
  "this.overlay_FEFA16B5_F1B8_19D9_41CF_A84E0FB52E57",
  "this.overlay_FE760745_F1B8_18B9_41EA_A485E0DD0AC7",
  "this.overlay_EF867BB8_F1B8_2FD7_41ED_6EF4944034AB",
  "this.popup_EC24A3B2_F268_3FDB_41E7_0E51F9BA72B3"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_t.jpg"
},
{
 "height": 3368,
 "thumbnailUrl": "media/photo_EFDE5BA3_F268_EFF9_41E8_98D770DC0B37_t.jpg",
 "label": "IMG_6730",
 "class": "Photo",
 "duration": 5000,
 "width": 6000,
 "id": "photo_EFDE5BA3_F268_EFF9_41E8_98D770DC0B37",
 "image": {
  "levels": [
   {
    "url": "media/photo_EFDE5BA3_F268_EFF9_41E8_98D770DC0B37.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "height": 3368,
 "thumbnailUrl": "media/photo_EDC44AA1_F268_29F9_41E2_01AB8811F49D_t.jpg",
 "label": "IMG_6742",
 "class": "Photo",
 "duration": 5000,
 "width": 6000,
 "id": "photo_EDC44AA1_F268_29F9_41E2_01AB8811F49D",
 "image": {
  "levels": [
   {
    "url": "media/photo_EDC44AA1_F268_29F9_41E2_01AB8811F49D.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 3.98,
 "id": "popup_EDE4F976_E2B7_CAD0_41BB_FDE48BC52A98",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_EDE4F976_E2B7_CAD0_41BB_FDE48BC52A98_0_2.jpg",
    "width": 963,
    "class": "ImageResourceLevel",
    "height": 1023
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 7.27,
 "showEasing": "cubic_in",
 "yaw": 86.77,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 9.49,
 "id": "popup_EF60B0B7_F6CF_2809_41E8_D917A42A9C52",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_EF60B0B7_F6CF_2809_41E8_D917A42A9C52_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 6.22,
 "showEasing": "cubic_in",
 "yaw": 61.42,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -73.87,
   "yaw": -14.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7"
  },
  {
   "backwardYaw": -101.74,
   "yaw": 84.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7"
  }
 ],
 "label": "1734580547719",
 "id": "panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448",
 "overlays": [
  "this.overlay_E1BF3B9A_F1B8_2FCB_41EA_A1BB22007ECE",
  "this.overlay_FE72BF96_F1B8_67DB_419F_652E7507EDB6",
  "this.overlay_EA3893EF_F1B8_FF49_41E9_01A7E2742A66",
  "this.overlay_EDAF02F2_F1B8_195A_41D0_5A924AEF5223",
  "this.overlay_ED9C1247_F1B8_18B9_41E0_065716D3C741",
  "this.overlay_EE44B405_F258_38BE_41DD_E88AE6C23C0D",
  "this.popup_ED1A1B30_F268_28D7_41EA_E2B24928F3AC"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_t.jpg"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "1734580547327",
 "id": "panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A",
 "overlays": [
  "this.overlay_E2B08974_F6B1_1874_41A5_5757D5018612"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_t.jpg"
},
{
 "headerBorderSize": 0,
 "headerBackgroundColorRatios": [
  0.79
 ],
 "data": {
  "name": "Window22103"
 },
 "shadowSpread": 1,
 "id": "window_EDBA92CE_F1B8_194A_41E8_C06854A9CDCE",
 "width": 400,
 "veilOpacity": 0.4,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "bodyPaddingRight": 5,
 "overflow": "scroll",
 "minHeight": 20,
 "shadow": true,
 "closeButtonIconColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0
 ],
 "modal": true,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFCC"
 ],
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "veilColorDirection": "horizontal",
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "verticalAlign": "middle",
 "title": " Ibu sawat teleprinter automatik",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "bodyPaddingLeft": 5,
 "titlePaddingTop": 5,
 "headerBorderColor": "#FFCC00",
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "contentOpaque": false,
 "titlePaddingRight": 5,
 "backgroundColor": [],
 "headerBackgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "closeButtonBorderRadius": 11,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontSize": "1.3vmin",
 "closeButtonPressedIconColor": "#FFFFFF",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerHeight": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowBlurRadius": 6,
 "children": [
  "this.image_uid290FD126_25F3_3BA7_41A3_2EBB5A91B2E3_0",
  "this.htmlText_EDBAE2D0_F1B8_1956_41E6_C80CF8134763"
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "layout": "vertical",
 "headerPaddingRight": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "class": "Window",
 "closeButtonIconLineWidth": 2,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconWidth": 12,
 "paddingLeft": 0,
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingLeft": 5,
 "titleFontColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "titleFontFamily": "Times New Roman",
 "bodyBorderColor": "#999999"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 8.7,
 "id": "popup_ED83BD0F_F6D1_3818_41ED_69AC05B8A73E",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_ED83BD0F_F6D1_3818_41ED_69AC05B8A73E_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 8.1,
 "showEasing": "cubic_in",
 "yaw": 128.12,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "levels": [
  {
   "url": "media/popup_EC09E9CA_F6D1_1827_41D1_143F0E17BB0E_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_EC09E9CA_F6D1_1827_41D1_143F0E17BB0E_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2299
  },
  {
   "url": "media/popup_EC09E9CA_F6D1_1827_41D1_143F0E17BB0E_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1149
  },
  {
   "url": "media/popup_EC09E9CA_F6D1_1827_41D1_143F0E17BB0E_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 574
  },
  {
   "url": "media/popup_EC09E9CA_F6D1_1827_41D1_143F0E17BB0E_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 287
  }
 ],
 "id": "ImageResource_D638F4B0_F6B1_2851_41D6_2970EC1F98B2",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "autoplay": true,
 "hfov": 4.79,
 "id": "popup_F282F4DD_E2B2_7BD1_41CA_3977321C02CD",
 "rotationZ": 0,
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "pitch": 26.54,
 "showEasing": "cubic_in",
 "yaw": -171.86,
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "video": {
  "width": 1120,
  "class": "VideoResource",
  "mp4Url": "media/video_EC586C60_E2B1_CAF0_41E8_A6197DBB8D98.mp4",
  "height": 864
 }
},
{
 "height": 3368,
 "thumbnailUrl": "media/photo_EDCC6907_F268_28B9_41E2_B4DD71045564_t.jpg",
 "label": "IMG_6735",
 "class": "Photo",
 "duration": 5000,
 "width": 6000,
 "id": "photo_EDCC6907_F268_28B9_41E2_B4DD71045564",
 "image": {
  "levels": [
   {
    "url": "media/photo_EDCC6907_F268_28B9_41E2_B4DD71045564.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "initialPosition": {
  "yaw": 173.17,
  "class": "PanoramaCameraPosition",
  "pitch": -5.5
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_camera"
},
{
 "initialPosition": {
  "yaw": 165.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_2BEA126F_25F3_39A5_41BD_2B9D70FD8C3D"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 8.11,
 "id": "popup_ED5A107C_F6D1_28F4_41B3_19D52DC55AC2",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_ED5A107C_F6D1_28F4_41B3_19D52DC55AC2_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 22.67,
 "showEasing": "cubic_in",
 "yaw": 30.15,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_camera"
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_F385B56F_E2D2_DAF1_41DD_BFBF184A400C",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_28F3E12B_25F3_3BAD_41C1_6C63B23572AC",
 "class": "PlayList"
},
{
 "height": 3368,
 "thumbnailUrl": "media/photo_EDD10CF4_F268_295F_41DB_5BA338D7DF52_t.jpg",
 "label": "IMG_6745",
 "class": "Photo",
 "duration": 5000,
 "width": 6000,
 "id": "photo_EDD10CF4_F268_295F_41DB_5BA338D7DF52",
 "image": {
  "levels": [
   {
    "url": "media/photo_EDD10CF4_F268_295F_41DB_5BA338D7DF52.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "levels": [
  {
   "url": "media/popup_ED496840_E2DE_CA30_41C9_7D0ED8B73445_0_0.jpg",
   "width": 3078,
   "class": "ImageResourceLevel",
   "height": 3368
  },
  {
   "url": "media/popup_ED496840_E2DE_CA30_41C9_7D0ED8B73445_0_1.jpg",
   "width": 1871,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_ED496840_E2DE_CA30_41C9_7D0ED8B73445_0_2.jpg",
   "width": 935,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_ED496840_E2DE_CA30_41C9_7D0ED8B73445_0_3.jpg",
   "width": 467,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_F0ADFF76_E2DF_C6D0_4186_22DCA992E389",
 "class": "ImageResource"
},
{
 "headerBorderSize": 0,
 "headerBackgroundColorRatios": [
  0.79
 ],
 "data": {
  "name": "Window22103"
 },
 "shadowSpread": 1,
 "id": "window_EE3213DA_F258_3F4B_41D3_A52EE20CEEDD",
 "width": 400,
 "veilOpacity": 0.4,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "bodyPaddingRight": 5,
 "overflow": "scroll",
 "minHeight": 20,
 "shadow": true,
 "closeButtonIconColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0
 ],
 "modal": true,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFCC"
 ],
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "veilColorDirection": "horizontal",
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "verticalAlign": "middle",
 "title": "Jabatan Talikom Malaya",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "bodyPaddingLeft": 5,
 "titlePaddingTop": 5,
 "headerBorderColor": "#FFCC00",
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "contentOpaque": false,
 "titlePaddingRight": 5,
 "backgroundColor": [],
 "headerBackgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "closeButtonBorderRadius": 11,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontSize": "1.3vmin",
 "closeButtonPressedIconColor": "#FFFFFF",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerHeight": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "headerPaddingBottom": 10,
 "titleTextDecoration": "none",
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowBlurRadius": 6,
 "children": [
  "this.image_uid290FE127_25F3_3BA5_41C2_5B72944EEE0F_0",
  "this.htmlText_EE3583DF_F258_3F49_41E5_4CA235855F76"
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "layout": "vertical",
 "headerPaddingRight": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonIconHeight": 12,
 "class": "Window",
 "closeButtonIconLineWidth": 2,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconWidth": 12,
 "paddingLeft": 0,
 "bodyBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "gap": 10,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingLeft": 5,
 "titleFontColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "titleFontFamily": "Times New Roman",
 "bodyBorderColor": "#999999"
},
{
 "items": [
  {
   "media": "this.panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_camera"
  },
  {
   "media": "this.panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_camera"
  },
  {
   "media": "this.panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_camera"
  },
  {
   "media": "this.panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_camera"
  },
  {
   "media": "this.panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_camera"
  },
  {
   "media": "this.panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_camera"
  },
  {
   "media": "this.panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_camera"
  },
  {
   "media": "this.panorama_E32C72DF_F6D1_284C_41E0_8A897249F151",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_camera"
  },
  {
   "media": "this.panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_camera"
  },
  {
   "media": "this.panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_camera"
  },
  {
   "media": "this.panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_camera"
  },
  {
   "media": "this.panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_camera"
  },
  {
   "media": "this.panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D7E41501_DDD9_88D1_41DD_DD99910F9348_camera"
  },
  {
   "media": "this.panorama_D7859CF5_DDD9_F930_41D9_E38542F68884",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_camera"
  },
  {
   "media": "this.panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_camera"
  },
  {
   "media": "this.panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_camera"
  },
  {
   "media": "this.panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_camera"
  },
  {
   "media": "this.video_ECDE0E11_E2B2_4651_41E4_359C25D501C8",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_F3CC9223_E2D7_BE77_41D8_CFBA01C3FD95",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_F2789D06_E2B2_4A30_41E1_5EE5F93F91B4",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_F2B61D0E_E2AE_4A31_41B0_3AF36F03124C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_camera"
  },
  {
   "media": "this.panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_camera"
  },
  {
   "media": "this.panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_camera"
  },
  {
   "media": "this.panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_camera"
  },
  {
   "media": "this.panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_camera"
  },
  {
   "media": "this.panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_camera"
  },
  {
   "media": "this.panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_camera"
  },
  {
   "media": "this.panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_camera"
  },
  {
   "media": "this.panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_camera"
  },
  {
   "media": "this.panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "height": 3368,
 "thumbnailUrl": "media/photo_D239397D_F268_2B49_41D4_CA6D3C84115D_t.jpg",
 "label": "IMG_6747",
 "class": "Photo",
 "duration": 5000,
 "width": 6000,
 "id": "photo_D239397D_F268_2B49_41D4_CA6D3C84115D",
 "image": {
  "levels": [
   {
    "url": "media/photo_D239397D_F268_2B49_41D4_CA6D3C84115D.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "initialPosition": {
  "yaw": 4.95,
  "class": "PanoramaCameraPosition",
  "pitch": 6.59
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 7.51,
 "id": "popup_EDFA3655_F6D1_283C_41E5_17E39BD870BC",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_EDFA3655_F6D1_283C_41E5_17E39BD870BC_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.46,
 "showEasing": "cubic_in",
 "yaw": 29.77,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "items": [
  {
   "media": "this.video_F28AA0B6_E2D2_5A51_41E9_FE10E51DD589",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_28F3112B_25F3_3BAD_41BC_CE0E10590DA5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_28F3112B_25F3_3BAD_41BC_CE0E10590DA5, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_28F3112B_25F3_3BAD_41BC_CE0E10590DA5",
 "class": "PlayList"
},
{
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window516"
 },
 "shadowSpread": 1,
 "id": "window_2E40778F_25F1_6766_41AE_EFAC3A3F9CF1",
 "closeButtonPaddingLeft": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "horizontalAlign": "center",
 "bodyPaddingRight": 0,
 "overflow": "scroll",
 "minHeight": 20,
 "shadow": true,
 "closeButtonIconColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "modal": true,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingRight": 5,
 "propagateClick": false,
 "paddingRight": 0,
 "closeButtonRollOverIconColor": "#666666",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "closeButtonPaddingBottom": 5,
 "scrollBarColor": "#000000",
 "bodyPaddingLeft": 0,
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "closeButtonBorderSize": 0,
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "titlePaddingRight": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "closeButtonBorderRadius": 0,
 "scrollBarVisible": "rollOver",
 "closeButtonBackgroundOpacity": 0.3,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontSize": "1.29vmin",
 "closeButtonPressedIconColor": "#888888",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerHeight": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "closeButtonPaddingTop": 5,
 "headerPaddingBottom": 5,
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 0,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowBlurRadius": 6,
 "children": [
  "this.viewer_uid2907C11D_25F3_3B65_41C0_30DC179F0912"
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 0,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "layout": "vertical",
 "headerPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonIconHeight": 20,
 "closeButtonIconLineWidth": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedIconLineWidth": 5,
 "class": "Window",
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconWidth": 20,
 "paddingLeft": 0,
 "headerBackgroundOpacity": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "gap": 10,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "titlePaddingLeft": 5,
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "titleFontFamily": "Arial"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 3.55,
 "id": "popup_F38C4D12_E2D2_CA50_41E2_855596E27D84",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_F38C4D12_E2D2_CA50_41E2_855596E27D84_0_2.jpg",
    "width": 813,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 8.04,
 "showEasing": "cubic_in",
 "yaw": 158.54,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "initialPosition": {
  "yaw": 78.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_28AE318E_25F3_3B67_41B5_F4E4F94D844C"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "1734580547437",
 "id": "panorama_E32C72DF_F6D1_284C_41E0_8A897249F151",
 "overlays": [
  "this.overlay_E1710DB8_F6D7_383C_41E2_A06F51A8CA85",
  "this.overlay_EBAD4264_F6D0_E812_41C0_225E3C2E9420",
  "this.popup_EF5AA8F7_F6D3_19FE_41E4_F43AC792E155",
  "this.overlay_ECCD66E0_F6D3_2813_41D3_F37D35330ADC",
  "this.popup_ED94FB25_F6D3_781C_41E2_642009980C78",
  "this.overlay_EC1934FF_F6D0_E9EC_41CE_99B729A130B5",
  "this.popup_EDFA3655_F6D1_283C_41E5_17E39BD870BC",
  "this.overlay_EC221473_F6D1_28FB_4151_7D8E4153CE94",
  "this.popup_ED9D3A95_F6D1_183F_41EC_51FA7C4C2065",
  "this.overlay_ECA20CA0_F6B1_186B_41E9_58B33C288EA7",
  "this.popup_ED828E1B_F6B1_185D_41DD_D8AA146D6D69"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "hfov": 8.56,
 "id": "popup_EC1BC794_F6B3_2851_41E0_CF2DCC5701C6",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_EC1BC794_F6B3_2851_41E0_CF2DCC5701C6_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 574
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 13.13,
 "showEasing": "cubic_in",
 "yaw": 82.9,
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "popupDistance": 100
},
{
 "initialPosition": {
  "yaw": -173.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_282E621D_25F3_3965_41BA_5D3BC9F080B5"
},
{
 "height": 3368,
 "thumbnailUrl": "media/photo_EDF19A95_F268_29D9_41EE_13680933C320_t.jpg",
 "label": "IMG_6752",
 "class": "Photo",
 "duration": 5000,
 "width": 6000,
 "id": "photo_EDF19A95_F268_29D9_41EE_13680933C320",
 "image": {
  "levels": [
   {
    "url": "media/photo_EDF19A95_F268_29D9_41EE_13680933C320.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "shadow": false,
 "minHeight": 50,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Georgia",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#000000",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "transitionDuration": 500,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "minWidth": 100,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "height": "100%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "class": "ViewerArea",
 "top": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543"
 ],
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "width": 330,
 "layout": "absolute",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "class": "Container",
 "top": "0%",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--- LEFT PANEL 2"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "right": "0%",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "top": "0%",
 "propagateClick": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": 641,
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-- SETTINGS"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "0%",
 "shadow": false,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "visible": false,
 "paddingBottom": 0,
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "0%",
 "shadow": false,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "visible": false,
 "paddingBottom": 0,
 "data": {
  "name": "--LOCATION"
 }
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "shadow": false,
 "minHeight": 0,
 "class": "UIComponent",
 "top": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "visible": false,
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent1618"
 }
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "shadow": false,
 "minHeight": 0,
 "class": "ZoomImage",
 "top": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "scaleMode": "custom",
 "minWidth": 0,
 "visible": false,
 "paddingBottom": 0,
 "data": {
  "name": "ZoomImage1619"
 }
},
{
 "fontFamily": "Arial",
 "layout": "horizontal",
 "data": {
  "name": "CloseButton1620"
 },
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "right": 10,
 "minHeight": 0,
 "shadow": false,
 "iconHeight": 20,
 "borderColor": "#000000",
 "iconColor": "#000000",
 "class": "CloseButton",
 "pressedIconColor": "#888888",
 "top": 10,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "paddingRight": 5,
 "paddingLeft": 5,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "borderRadius": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "label": "",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontStyle": "normal",
 "paddingTop": 5,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "iconLineWidth": 5,
 "minWidth": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "iconBeforeLabel": true,
 "visible": false,
 "iconWidth": 20,
 "paddingBottom": 5,
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowBlurRadius": 6
},
{
 "id": "IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
 "width": 30,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE.png",
 "propagateClick": false,
 "paddingRight": 0,
 "maxHeight": 60,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 30,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE_pressed.png",
 "minWidth": 1,
 "maxWidth": 60,
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton Sound"
 }
},
{
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "propagateClick": true,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "minWidth": 1,
 "maxWidth": 58,
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "id": "IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
 "width": 30,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57.png",
 "propagateClick": false,
 "paddingRight": 0,
 "maxHeight": 60,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 30,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57_pressed.png",
 "minWidth": 1,
 "maxWidth": 60,
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton Fullscreen"
 }
},
{
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "propagateClick": true,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "minWidth": 1,
 "maxWidth": 58,
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A, this.camera_2BC41292_25F3_397F_41BB_B7580D6FCD10); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_08663155_1A47_6657_418F_7E915462CED6",
   "yaw": 87.42,
   "pitch": -20.79,
   "hfov": 12.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FE8733C5_F1B8_1FB9_4196_84DA7BD0BCA9",
 "maps": [
  {
   "yaw": 87.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.79,
   "hfov": 12.92
  }
 ],
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D, this.camera_2BB7929E_25F3_3967_4183_CDBACC9BE172); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_1_HS_1_0.png",
      "width": 306,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.11,
   "yaw": -162.8,
   "hfov": 11.29
  }
 ],
 "id": "overlay_FE737A55_F1B8_2959_41D5_0A45FD6A6910",
 "maps": [
  {
   "yaw": -162.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_1_HS_1_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.11,
   "hfov": 11.29
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_EDFF54E1_F1B8_3979_41DC_3B3438512BC1, null, false); this.playGlobalAudio(this.audio_D3907168_F278_1B77_41B7_B2A3113FFB0E)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_08669156_1A47_6655_41B2_8200F208FB36",
   "yaw": -25.57,
   "pitch": 3.4,
   "hfov": 11.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EDD28506_F1B8_38BB_41AE_5CAD0B4DB852",
 "maps": [
  {
   "yaw": -25.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.4,
   "hfov": 11.4
  }
 ],
 "data": {
  "label": "Info Red 02"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_ED1B3809_F1B8_68C9_41EA_8CEFD727E9C7, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_08676156_1A47_6655_41B7_97550FE658C2",
   "yaw": 22.67,
   "pitch": 3.65,
   "hfov": 11.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ED0D3829_F1B8_68C9_41E2_A6DBDE335563",
 "maps": [
  {
   "yaw": 22.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.65,
   "hfov": 11.4
  }
 ],
 "data": {
  "label": "Info Red 02"
 }
},
{
 "viewerArea": "this.viewer_uid2901511B_25F3_3B6D_41C0_DC911BABA3DB",
 "id": "viewer_uid2901511B_25F3_3B6D_41C0_DC911BABA3DBVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0B81913D_1A47_67D7_41B1_9505FED37E61",
   "yaw": -3.27,
   "pitch": -31.59,
   "hfov": 10.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_E19FCC19_F6D3_3FC3_41DE_83218066278C",
 "maps": [
  {
   "yaw": -3.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.59,
   "hfov": 10.49
  }
 ],
 "data": {
  "label": "Arrow 01 Right"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_EE7949F5_F6F0_F818_41E6_0F9B4E77EEF4, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_ED235376_F6F1_2803_41DA_98DCD97EB52D, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_1_HS_1_0.png",
      "width": 189,
      "class": "ImageResourceLevel",
      "height": 217
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.22,
   "yaw": -100.87,
   "hfov": 8.49
  }
 ],
 "id": "overlay_EE6AA5F4_F6F3_281F_41D4_00A92959147B",
 "maps": [
  {
   "yaw": -100.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.22,
   "hfov": 8.49
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_EC2F2555_F6F7_6804_41DA_540B9BD4AAA7, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_ED22A377_F6F1_2801_41EA_E4F2E2D95D49, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_1_HS_2_0.png",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.85,
   "yaw": -54.89,
   "hfov": 7.48
  }
 ],
 "id": "overlay_EFF3FBF0_F6F1_181A_41DD_D180E04E7F30",
 "maps": [
  {
   "yaw": -54.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.85,
   "hfov": 7.48
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_EC7E660A_F6F7_280D_41B5_B07A7C41EDD5, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_ED239378_F6F1_280F_41CB_5F2E9EADCF3E, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_1_HS_3_0.png",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.97,
   "yaw": -148.09,
   "hfov": 7.48
  }
 ],
 "id": "overlay_EC803E44_F6F7_F805_41E9_FA8A27B5EAB8",
 "maps": [
  {
   "yaw": -148.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.97,
   "hfov": 7.48
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42, this.camera_28981199_25F3_3B6D_4196_C23221C9E125); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_08611158_1A47_665D_41B1_B9093082BB0B",
   "yaw": 123.85,
   "pitch": -20.29,
   "hfov": 12.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FEF41E36_F1B8_68DB_41DC_764E674F947A",
 "maps": [
  {
   "yaw": 123.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.29,
   "hfov": 12.96
  }
 ],
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A, this.camera_288A91A5_25F3_3AA5_41A0_F9BE23D7E614); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_1_HS_1_0.png",
      "width": 306,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.78,
   "yaw": -83.16,
   "hfov": 13.06
  }
 ],
 "id": "overlay_FE03602E_F1B8_18CB_41D6_21BC83133ED7",
 "maps": [
  {
   "yaw": -83.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_1_HS_1_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.78,
   "hfov": 13.06
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_EDFF4DBA_F1B8_2BCB_41D1_A253AF36D112, null, false); this.playGlobalAudio(this.audio_ED7FC5C6_F278_3BBA_41BB_D16E14309B34)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0861D159_1A47_665F_41A3_7413718796F1",
   "yaw": 3.82,
   "pitch": 10.18,
   "hfov": 11.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EDED3DDF_F1B8_2B49_41E7_EF713260502F",
 "maps": [
  {
   "yaw": 3.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.18,
   "hfov": 11.24
  }
 ],
 "data": {
  "label": "Info Red 02"
 }
},
{
 "id": "image_uid290C7129_25F3_3BAD_41AA_AEDF788AFDE0_0",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "url": "media/photo_EDD10CF4_F268_295F_41DB_5BA338D7DF52.JPG",
 "paddingLeft": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "50%",
 "minWidth": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "data": {
  "name": "Image1614"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_ED1AE80A_F1B8_68CB_41CF_EECD30A67621",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "HTMLText",
 "paddingLeft": 10,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "height": "50%",
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\">1930-an-1960-an </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\"> \u2022 Peralatan ujian talian telefon Pejabat Pos British (BPO) ini digunakan terutamanya di pejabat ibu sawat telefon luar bandar Step-by-Step (SXS) bagi memeriksa fungsi talian telefon.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "data": {
  "name": "HTMLText22104"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0B80113C_1A47_67D5_41B1_9D14B5B2F26B",
   "yaw": 93.45,
   "pitch": -24.56,
   "hfov": 13.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E53B11BB_F6B1_6881_41E6_DD50843D7423",
 "maps": [
  {
   "yaw": 93.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.56,
   "hfov": 13.94
  }
 ],
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_08767147_1A47_67B3_416E_AF49DE3D8C84",
   "yaw": 30.52,
   "pitch": -16.57,
   "hfov": 7.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CD381488_DE56_89DE_41DF_B918793406B8",
 "maps": [
  {
   "yaw": 30.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_1_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.57,
   "hfov": 7.45
  }
 ],
 "data": {
  "label": "3"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F3F09FA5_E2D6_C670_41BF_78BE51F697A8, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F6670C8D_E2D2_4A30_41E6_03BD14CF9271, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_1_HS_7_0.png",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.94,
   "yaw": -118.27,
   "hfov": 7.5
  }
 ],
 "id": "overlay_EDACD868_E2D1_CAFF_41E1_6867C2B1CFAE",
 "maps": [
  {
   "yaw": -118.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.94,
   "hfov": 7.5
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_F24FB207_E2D7_FE30_41A2_2B1D9CEDB56D, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, true) } else { this.showPopupMedia(this.window_2E435790_25F1_677A_41BF_684E34C6BF26, this.video_F3CC9223_E2D7_BE77_41D8_CFBA01C3FD95, this.PlayList_28E5C13B_25F3_3BAD_41AB_CDEDEA1EDAD5, '95%', '95%', true, true) }"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_1_HS_8_0.png",
      "width": 211,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.69,
   "yaw": -162.47,
   "hfov": 9.45
  }
 ],
 "id": "overlay_ED44C179_E2D6_BAD0_41CF_2099D40527D6",
 "maps": [
  {
   "yaw": -162.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.69,
   "hfov": 9.45
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_F2E83EE1_E2D2_47F0_41EC_43B2AE12E140, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, true) } else { this.showPopupMedia(this.window_2E42A790_25F1_677A_41BB_1B3581C53F46, this.video_F28AA0B6_E2D2_5A51_41E9_FE10E51DD589, this.PlayList_28E5013B_25F3_3BAD_41B5_24E4DFBB510F, '95%', '95%', true, true) }"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_1_HS_9_0.png",
      "width": 422,
      "class": "ImageResourceLevel",
      "height": 311
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 26.58,
   "yaw": 117.99,
   "hfov": 17.01
  }
 ],
 "id": "overlay_EDA405BD_E2D7_FA50_41DC_5953C550031C",
 "maps": [
  {
   "yaw": 117.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_1_HS_9_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 26.58,
   "hfov": 17.01
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid2904711F_25F3_3B65_41C1_5407BD7581E3",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "shadow": false,
 "minHeight": 50,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressOpacity": 1,
 "transitionDuration": 500,
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "firstTransitionDuration": 0,
 "minWidth": 100,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "height": "100%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea1603"
 }
},
{
 "id": "image_uid290D312A_25F3_3BAF_4166_35F10B5488D4_0",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "url": "media/photo_EDF19A95_F268_29D9_41EE_13680933C320.JPG",
 "paddingLeft": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "33%",
 "minWidth": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "data": {
  "name": "Image1616"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_EDFD2DBB_F1B8_2BC9_4199_054FE49E96E1",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "HTMLText",
 "paddingLeft": 10,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "height": "33%",
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\"><B>1962</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\">Sistem telefon</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\"> \u2022 Sehingga awal tahun tahun 1960-an, semasa panggilan jarak jauh di dalam negara dikendalikan oleh operator. Subscriber trunk dialling (STD) diperkenalkan pada tahun 1962, membolehkan panggilan dibuat tanpa bantuan operator.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\">Perdana menteri ketika itu tun hussein onn membuat panggilan STD pertama antara semananjung malaysia dan sabah dab sarawak. Bersamanya adalah dato\u2019lee maggie (kiri) dan datuk madzim.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\">Kotak agihan seperti ini, yang digunakan untuk mengagihkan talian telefon dengan menyambungkan pasangan wayar selari ke rumah pelanggan , dapat dilihat secara meluas pada tahun 1960-an. </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingBottom": 10,
 "data": {
  "name": "HTMLText22104"
 }
},
{
 "id": "image_uid290D312A_25F3_3BAF_4166_35F10B5488D4_2",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "url": "media/photo_ED23603F_F268_18CA_41E6_D5AC0F01833A.JPG",
 "paddingLeft": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "33%",
 "minWidth": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "data": {
  "name": "Image1617"
 }
},
{
 "id": "image_uid290EF124_25F3_3B5B_41B9_284566AFD1A8_0",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "url": "media/photo_EF6A2290_F268_79D6_41D7_5F688A73A72B.JPG",
 "paddingLeft": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "33%",
 "minWidth": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "data": {
  "name": "Image1606"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_EE50753E_F258_18CB_41E6_04646429C343",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "HTMLText",
 "paddingLeft": 10,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "height": "33%",
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\"><B>1933 </B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\">Pos &amp; Telegraf</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\"> \u2022 Perkhidmatan Pos &amp; Telegraf telah dipertanggungjawabkan untuk mengawal pelbagai peralatan isyarat yang digunakan oleh Kereta Api Tanah Melayu (KTM). Pada tahun 1978, KTM mula mengambil alih perkhidmatan senggaraan peralatan tersebut dan menjelang 1 Januari, 1983, KTM bertanggungjawab penuh terhadap kesemua peralatan di seluruh negara.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "data": {
  "name": "HTMLText22104"
 }
},
{
 "id": "image_uid290EF124_25F3_3B5B_41B9_284566AFD1A8_2",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "url": "media/photo_ED342194_F268_3BDF_41C4_DB462D83E97C.JPG",
 "paddingLeft": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "33%",
 "minWidth": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "data": {
  "name": "Image1607"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690, this.camera_282E621D_25F3_3965_41BA_5D3BC9F080B5); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_087DA14B_1A47_67B3_41B5_62D2A28C9324",
   "yaw": -79.39,
   "pitch": -17.77,
   "hfov": 13.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FE20AAD3_F1B8_6959_41E1_CC71FBB3B9A2",
 "maps": [
  {
   "yaw": -79.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.77,
   "hfov": 13.16
  }
 ],
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D, this.camera_281E9233_25F3_39BD_41BF_DC9A7926DFE0); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_087DC14B_1A47_67B3_4191_8CB4B389D706",
   "yaw": 47.73,
   "pitch": -17.52,
   "hfov": 13.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E18A8B53_F1B8_2F59_41C3_5E39F1732FAA",
 "maps": [
  {
   "yaw": 47.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.52,
   "hfov": 13.18
  }
 ],
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "viewerArea": "this.viewer_uid2905911E_25F3_3B67_41BD_4F6AC5635A0A",
 "id": "viewer_uid2905911E_25F3_3B67_41BD_4F6AC5635A0AVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0B8D913F_1A47_67D3_41A2_19B616C9F5FC",
   "yaw": 0.33,
   "pitch": -30.59,
   "hfov": 14.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EEED6FC3_F6D1_1859_41D5_736C83B05D18",
 "maps": [
  {
   "yaw": 0.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.59,
   "hfov": 14.19
  }
 ],
 "data": {
  "label": "Arrow 02"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_EF60B0B7_F6CF_2809_41E8_D917A42A9C52, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_D69AB4B9_F6D3_287A_41E2_F630907B5BC5, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_1_HS_1_0.png",
      "width": 212,
      "class": "ImageResourceLevel",
      "height": 217
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.22,
   "yaw": 61.42,
   "hfov": 9.49
  }
 ],
 "id": "overlay_E9C8032D_F6CF_6819_41DA_26A298706BC6",
 "maps": [
  {
   "yaw": 61.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.22,
   "hfov": 9.49
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_ED83BD0F_F6D1_3818_41ED_69AC05B8A73E, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_D69A54B9_F6D3_287A_41CB_753139F4A064, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_1_HS_2_0.png",
      "width": 195,
      "class": "ImageResourceLevel",
      "height": 212
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.1,
   "yaw": 128.12,
   "hfov": 8.7
  }
 ],
 "id": "overlay_EC3C6C23_F6D1_7809_41E6_C04A61C3F50C",
 "maps": [
  {
   "yaw": 128.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.1,
   "hfov": 8.7
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_ED5A107C_F6D1_28F4_41B3_19D52DC55AC2, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_D7CFF4B6_F6B1_2851_41E2_2710C5E8C854, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_1_HS_4_0.png",
      "width": 195,
      "class": "ImageResourceLevel",
      "height": 178
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.67,
   "yaw": 30.15,
   "hfov": 8.11
  }
 ],
 "id": "overlay_ED9859AA_F6D1_181C_41EA_9ACC4BE280FE",
 "maps": [
  {
   "yaw": 30.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_1_HS_4_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.67,
   "hfov": 8.11
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "id": "image_uid290F8126_25F3_3BA7_41C2_D2F195707FE7_0",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "url": "media/photo_EFDE5BA3_F268_EFF9_41E8_98D770DC0B37.JPG",
 "paddingLeft": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "33%",
 "minWidth": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "data": {
  "name": "Image1609"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_EA4803CB_F1B8_FF49_41ED_71DB926B96C1",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "HTMLText",
 "paddingLeft": 10,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "height": "33%",
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\"><B>1946</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\">-Teleprinter</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\"> \u2022 Lebih kurang 20 tahun selepas teleprinter diperkenalkan rangkaian teleks telah diperkenalkan di malaysia. Ini membolehkan dokumen bercetak dihantar melalui talian buat pertama kali.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "data": {
  "name": "HTMLText22104"
 }
},
{
 "id": "image_uid290F8126_25F3_3BA7_41C2_D2F195707FE7_2",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "url": "media/photo_ECF8904A_F268_394B_41E8_62E485CD79F1.JPG",
 "paddingLeft": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "33%",
 "minWidth": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "data": {
  "name": "Image1610"
 }
},
{
 "viewerArea": "this.viewer_uid2907C11D_25F3_3B65_41C0_30DC179F0912",
 "id": "viewer_uid2907C11D_25F3_3B65_41C0_30DC179F0912VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0871D149_1A47_67BF_41AA_D1EAB670F107",
   "yaw": -129.25,
   "pitch": -40.89,
   "hfov": 12.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA80AF4D_DE49_9751_41D6_C90BD4896857",
 "maps": [
  {
   "yaw": -129.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_1_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.89,
   "hfov": 12.16
  }
 ],
 "data": {
  "label": "exhibition 6"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F3DE3B3F_E35E_CE4F_41D5_C7185EF704F2, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F24E4A98_E371_CE51_414C_D4BE7F7D91D0, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_1_HS_1_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.53,
   "yaw": -23.46,
   "hfov": 5.28
  }
 ],
 "id": "overlay_F3339881_E352_CA30_41D8_ABEFA1DFB054",
 "maps": [
  {
   "yaw": -23.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.53,
   "hfov": 5.28
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F3ADC71C_E351_C650_41D0_7124FB7D1A12, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F24FFA98_E371_CE51_41E8_7B7F5F297697, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_1_HS_2_0.png",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.49,
   "yaw": -44.49,
   "hfov": 3.91
  }
 ],
 "id": "overlay_F3294F14_E352_C650_41CA_17E7A8EF0E39",
 "maps": [
  {
   "yaw": -44.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_1_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.49,
   "hfov": 3.91
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_ECE90554_E372_5AD0_41EB_6E24BA0038D0, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F248EA99_E371_CE53_41E1_13ADE668B909, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_1_HS_3_0.png",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.49,
   "yaw": -43.33,
   "hfov": 3.85
  }
 ],
 "id": "overlay_F398FE74_E352_46D0_41E0_0FBDCCDA78A8",
 "maps": [
  {
   "yaw": -43.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_1_HS_3_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.49,
   "hfov": 3.85
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F3CFC31D_E35E_7E50_41D6_6941AD7EEA41, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F24A3A99_E371_CE53_4192_2AF7BCA70D9C, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_1_HS_4_0.png",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.27,
   "yaw": -23.31,
   "hfov": 4.11
  }
 ],
 "id": "overlay_F33D34DF_E353_DBD0_41D7_5E3A37D6BD96",
 "maps": [
  {
   "yaw": -23.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.27,
   "hfov": 4.11
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F3CD6E19_E35E_4650_41E1_2BE6FA029E36, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F249AA9A_E371_CE51_41E1_94E12E244119, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_1_HS_5_0.png",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 61
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.07,
   "yaw": -37.58,
   "hfov": 2.83
  }
 ],
 "id": "overlay_F3B71049_E352_DA33_41E2_A9E4AE8694F5",
 "maps": [
  {
   "yaw": -37.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.07,
   "hfov": 2.83
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F3CCBA3F_E36E_CE50_41D5_FF1C7802CD44, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F24A8A9B_E371_CE50_41B8_E4214ED71902, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_1_HS_6_0.png",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 43
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.37,
   "yaw": -46.97,
   "hfov": 1.82
  }
 ],
 "id": "overlay_F210C85C_E352_CAD0_41C5_C111B3FBC62C",
 "maps": [
  {
   "yaw": -46.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.37,
   "hfov": 1.82
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D, this.camera_2832B1F0_25F3_3ABB_41BE_07D7244C5A2F); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0867E157_1A47_6653_41B7_0748EBC1CA9B",
   "yaw": 84.16,
   "pitch": -21.04,
   "hfov": 12.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FEF45635_F1B8_38D9_41EA_94D682F96570",
 "maps": [
  {
   "yaw": 84.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.04,
   "hfov": 12.9
  }
 ],
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F, this.camera_283DA206_25F3_3967_41BF_92A924134C16); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_1_HS_1_0.png",
      "width": 306,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.57,
   "yaw": -74.12,
   "hfov": 12.34
  }
 ],
 "id": "overlay_FE0B213D_F1B8_78C9_41AA_D17E95A5F2DB",
 "maps": [
  {
   "yaw": -74.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_1_HS_1_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.57,
   "hfov": 12.34
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_EDEFE059_F1B8_1949_41D8_8A9D0D337FDE, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0860A158_1A47_665D_41B6_79688486F32F",
   "yaw": 7.09,
   "pitch": 13.95,
   "hfov": 11.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EDDD507E_F1B8_194B_41D3_40EE0A8BAD4E",
 "maps": [
  {
   "yaw": 7.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.95,
   "hfov": 11.08
  }
 ],
 "data": {
  "label": "Info Red 02"
 }
},
{
 "id": "image_uid290E2125_25F3_3BA5_41A8_C1563BBFB105_0",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "url": "media/photo_EC1ADC98_F268_29D7_41AC_9E348891535E.JPG",
 "paddingLeft": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "50%",
 "minWidth": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "data": {
  "name": "Image1608"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_EA6631DB_F1B8_1B49_41DB_A1F06CB1BFC4",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "HTMLText",
 "paddingLeft": 10,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "height": "50%",
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\"><B>1937 </B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\">Buku Panduan Telefon</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\"> \u2022 Buku panduan telefon pertama diterbitkan. Ini merupakan buku panduan telefon sebenar yang diedarkan pada awal tahun 1960-a</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "data": {
  "name": "HTMLText22104"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_08702148_1A47_67BD_41BA_095E6A98E126",
   "yaw": -103.38,
   "pitch": -31.47,
   "hfov": 11.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA910782_DE4F_B7D3_41E6_9DFDDF197ADC",
 "maps": [
  {
   "yaw": -103.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_1_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.47,
   "hfov": 11.57
  }
 ],
 "data": {
  "label": "exhibition 5"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F23148D2_E2D2_4BD0_41C8_F3710E3AD7CB, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F2510A96_E371_CE51_41CF_CC5374A5EDE2, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_1_HS_1_0.png",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.07,
   "yaw": -34.55,
   "hfov": 4.67
  }
 ],
 "id": "overlay_ED318DC3_E2DE_4A30_41E0_DD24036F176F",
 "maps": [
  {
   "yaw": -34.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.07,
   "hfov": 4.67
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_F20C0C06_E2B2_4A31_41D5_3E632A17A66F, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, true) } else { this.showPopupMedia(this.window_2E45A791_25F1_677A_41AC_3FD6F47DD873, this.video_F2789D06_E2B2_4A30_41E1_5EE5F93F91B4, this.PlayList_28E5413B_25F3_3BAD_41C0_CCFC4BFB0CDB, '95%', '95%', true, true) }"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_1_HS_2_0.png",
      "width": 434,
      "class": "ImageResourceLevel",
      "height": 433
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.05,
   "yaw": 34.33,
   "hfov": 19.51
  }
 ],
 "id": "overlay_ED332B44_E2D2_CE32_41DF_6A410FC8F2A0",
 "maps": [
  {
   "yaw": 34.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.05,
   "hfov": 19.51
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_F296B534_E2AF_BA51_41E5_8EA4D4720262, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, true) } else { this.showPopupMedia(this.window_2E44C791_25F1_677A_41AF_71F054319B87, this.video_F2B61D0E_E2AE_4A31_41B0_3AF36F03124C, this.PlayList_28EA813C_25F3_3BAB_41A8_E242553C6F7B, '95%', '95%', true, true) }"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_1_HS_3_0.png",
      "width": 382,
      "class": "ImageResourceLevel",
      "height": 335
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.19,
   "yaw": -33.81,
   "hfov": 17.11
  }
 ],
 "id": "overlay_F2F71DD2_E2AF_C5D1_41E3_F6AE5260C027",
 "maps": [
  {
   "yaw": -33.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_1_HS_3_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.19,
   "hfov": 17.11
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "viewerArea": "this.viewer_uid2904711F_25F3_3B65_41C1_5407BD7581E3",
 "id": "viewer_uid2904711F_25F3_3B65_41C1_5407BD7581E3VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "id": "image_uid290DA129_25F3_3BAD_41C0_708726EBC5DD_0",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "url": "media/photo_D239397D_F268_2B49_41D4_CA6D3C84115D.JPG",
 "paddingLeft": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "50%",
 "minWidth": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "data": {
  "name": "Image1615"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_EDED405A_F1B8_194B_41D5_485480F61780",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "HTMLText",
 "paddingLeft": 10,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "height": "50%",
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\"><B>1950</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\">Kerani Telegraf</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\"> \u2022 Telegram selalunya dihantar oleh lelaki beruniform yang menunggang basikal. Pegawai telegraf akan menghantar mesej dari pejabat pos.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingBottom": 10,
 "data": {
  "name": "HTMLText22104"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0B82813E_1A47_67D5_4184_9CD24E4E2549",
   "yaw": -13.61,
   "pitch": -26.32,
   "hfov": 10.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E15917BC_F6D3_28C3_41C0_C295DE13A3B9",
 "maps": [
  {
   "yaw": -13.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.32,
   "hfov": 10.05
  }
 ],
 "data": {
  "label": "Arrow 02"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_EF7B0183_F6D3_281C_41C4_B1E40BF6315E, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_D63B14AF_F6B1_284F_41EA_A0ECEB2B53E5, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_1_HS_1_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.9,
   "yaw": -108.4,
   "hfov": 8.56
  }
 ],
 "id": "overlay_EC267516_F6D3_6824_41D1_1211AE57D962",
 "maps": [
  {
   "yaw": -108.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.9,
   "hfov": 8.56
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_EC09E9CA_F6D1_1827_41D1_143F0E17BB0E, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_D638F4B0_F6B1_2851_41D6_2970EC1F98B2, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_1_HS_2_0.png",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.13,
   "yaw": -51.88,
   "hfov": 7.31
  }
 ],
 "id": "overlay_EC86BCF6_F6D1_19EE_41DD_E783493B3151",
 "maps": [
  {
   "yaw": -51.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.13,
   "hfov": 7.31
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_ED9E5329_F6B1_E87E_41D4_9796BA8866D9, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_D639B4B1_F6B1_2853_41E7_74001B8FA831, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_1_HS_3_0.png",
      "width": 137,
      "class": "ImageResourceLevel",
      "height": 170
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.24,
   "yaw": 18.06,
   "hfov": 6.01
  }
 ],
 "id": "overlay_EC522A03_F6B1_3832_41ED_C771949F5D39",
 "maps": [
  {
   "yaw": 18.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.24,
   "hfov": 6.01
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_EF92575F_F6B1_28D0_41A3_170B4EAAFE1F, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_D7C694B1_F6B1_2853_41E8_6981F7FCC103, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_1_HS_4_0.png",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 128
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.8,
   "yaw": 22.02,
   "hfov": 5.36
  }
 ],
 "id": "overlay_EC0ECA11_F6B1_1851_41EB_C40CE44EAAE2",
 "maps": [
  {
   "yaw": 22.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.8,
   "hfov": 5.36
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0B80F13D_1A47_67D7_41B2_A2998773B470",
   "yaw": -2.81,
   "pitch": -35.23,
   "hfov": 14.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E32134D9_F6D1_E8A7_41CA_91553CD8792A",
 "maps": [
  {
   "yaw": -2.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.23,
   "hfov": 14.08
  }
 ],
 "data": {
  "label": "Arrow 02"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_1_HS_1_0.png",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.24,
   "yaw": 89.81,
   "hfov": 7.39
  }
 ],
 "id": "overlay_ECD015A4_F6D1_2863_4180_A48A781EBEFC",
 "maps": [
  {
   "yaw": 89.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.24,
   "hfov": 7.39
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_EC1BC794_F6B3_2851_41E0_CF2DCC5701C6, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_D63C74AD_F6B1_2873_41E5_695C8B527312, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_1_HS_2_0.png",
      "width": 195,
      "class": "ImageResourceLevel",
      "height": 189
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.13,
   "yaw": 82.9,
   "hfov": 8.56
  }
 ],
 "id": "overlay_EC81ECCC_F6B3_7830_41CF_C367FACFC9A3",
 "maps": [
  {
   "yaw": 82.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.13,
   "hfov": 8.56
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid2905A11E_25F3_3B67_41BE_85E00F80279B",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "shadow": false,
 "minHeight": 50,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressOpacity": 1,
 "transitionDuration": 500,
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "firstTransitionDuration": 0,
 "minWidth": 100,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "height": "100%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea1602"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid2905D11F_25F3_3B65_41A1_0753D5AD8E6F",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "shadow": false,
 "minHeight": 50,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressOpacity": 1,
 "transitionDuration": 500,
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "firstTransitionDuration": 0,
 "minWidth": 100,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "height": "100%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea1604"
 }
},
{
 "id": "IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
 "width": 30,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3.png",
 "propagateClick": false,
 "paddingRight": 0,
 "maxHeight": 60,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "height": 30,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 60,
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "propagateClick": true,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "height": 58,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "paddingBottom": 0,
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "id": "IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
 "width": 30,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4.png",
 "propagateClick": false,
 "paddingRight": 0,
 "maxHeight": 60,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 30,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4_pressed.png",
 "minWidth": 1,
 "maxWidth": 60,
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton Hs visibility"
 }
},
{
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "propagateClick": true,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "minWidth": 1,
 "maxWidth": 58,
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "id": "IconButton_6658D838_74AF_8B5A_41D7_154D466041BB",
 "width": 34,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_6658D838_74AF_8B5A_41D7_154D466041BB.png",
 "propagateClick": false,
 "paddingRight": 0,
 "maxHeight": 60,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 34,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_6658D838_74AF_8B5A_41D7_154D466041BB_pressed.png",
 "minWidth": 1,
 "maxWidth": 60,
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton Gyroscopic"
 }
},
{
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "propagateClick": true,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "minWidth": 1,
 "maxWidth": 58,
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid2901511B_25F3_3B6D_41C0_DC911BABA3DB",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "shadow": false,
 "minHeight": 50,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressOpacity": 1,
 "transitionDuration": 500,
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "firstTransitionDuration": 0,
 "minWidth": 100,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "height": "100%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea1599"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0874C145_1A47_67B7_418E_664FCD9D68C4",
   "yaw": 98.6,
   "pitch": -20.05,
   "hfov": 9.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CD579C00_DE39_98CE_41E4_301469956B33",
 "maps": [
  {
   "yaw": 98.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_1_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.05,
   "hfov": 9.66
  }
 ],
 "data": {
  "label": "exhibition 2"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_F282F4DD_E2B2_7BD1_41CA_3977321C02CD, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, true) } else { this.showPopupMedia(this.window_2E40778F_25F1_6766_41AE_EFAC3A3F9CF1, this.video_EC586C60_E2B1_CAF0_41E8_A6197DBB8D98, this.PlayList_28E5813B_25F3_3BAD_41B1_ECEACA730C70, '95%', '95%', true, true) }"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_7_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 26.54,
   "yaw": -171.86,
   "hfov": 4.79
  }
 ],
 "id": "overlay_ED8753DC_E2B2_5DD7_41D0_F09B034A885B",
 "maps": [
  {
   "yaw": -171.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 26.54,
   "hfov": 4.79
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_ED49A0E4_E2AE_7BF0_41DD_79E5C0BAD2B1, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F0A28F73_E2DF_C6D0_41D6_6EAA1E7786DD, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_8_0.png",
      "width": 107,
      "class": "ImageResourceLevel",
      "height": 106
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.74,
   "yaw": -155.59,
   "hfov": 4.76
  }
 ],
 "id": "overlay_EDDCAF50_E2B1_C62F_4195_1BD1062DF29D",
 "maps": [
  {
   "yaw": -155.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.74,
   "hfov": 4.76
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_ED736FD5_E2AE_45D0_41B0_1D7BE00F3956, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F0A1CF73_E2DF_C6D0_41D6_4FC2006C9692, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_9_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.84,
   "yaw": -148.84,
   "hfov": 5.48
  }
 ],
 "id": "overlay_ED298206_E2B6_BE33_41D8_572645568520",
 "maps": [
  {
   "yaw": -148.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_9_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.84,
   "hfov": 5.48
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F2B3976B_E2AE_46F1_41E1_91007B1F7211, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F0A0EF74_E2DF_C6D0_41E2_359B3646B8CA, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_10_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.47,
   "yaw": 137.75,
   "hfov": 5.35
  }
 ],
 "id": "overlay_F2A34274_E2B7_DED0_41D9_F0EE5E58A2D2",
 "maps": [
  {
   "yaw": 137.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.47,
   "hfov": 5.35
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F38C4D12_E2D2_CA50_41E2_855596E27D84, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F0AFFF74_E2DF_C6D0_41D2_F592DC2E6BC1, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_11_0.png",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.04,
   "yaw": 158.54,
   "hfov": 4.67
  }
 ],
 "id": "overlay_ED6537FB_E2B1_C5D0_41BF_A840EC895A78",
 "maps": [
  {
   "yaw": 158.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.04,
   "hfov": 4.67
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_ED40C9C3_E2D6_4A30_41E4_BFD5219AA002, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F0AD2F75_E2DF_C6D0_41E8_E6AE75E37914, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_12_0.png",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.77,
   "yaw": 147.11,
   "hfov": 4.7
  }
 ],
 "id": "overlay_F3B92F84_E2B2_4630_41E6_C9976116045A",
 "maps": [
  {
   "yaw": 147.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.77,
   "hfov": 4.7
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F286EC4B_E2D2_4A30_41EB_446680CBEED3, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F0AC5F75_E2DF_C6D0_41E7_4279689D4850, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_13_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.39,
   "yaw": 171.55,
   "hfov": 5.22
  }
 ],
 "id": "overlay_ED31AB55_E2B2_4ED0_41B2_9751D42314DF",
 "maps": [
  {
   "yaw": 171.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_13_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.39,
   "hfov": 5.22
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_ED496840_E2DE_CA30_41C9_7D0ED8B73445, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F0ADFF76_E2DF_C6D0_4186_22DCA992E389, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_14_0.png",
      "width": 149,
      "class": "ImageResourceLevel",
      "height": 142
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.81,
   "yaw": -39.35,
   "hfov": 6.65
  }
 ],
 "id": "overlay_ED5AB4F3_E2D1_BBD0_41D4_3D17F10E1D87",
 "maps": [
  {
   "yaw": -39.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.81,
   "hfov": 6.65
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7, this.camera_2BFA525F_25F3_39E5_41BE_298842868CBC); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0878614F_1A47_67B3_4197_03F1E9C05FA3",
   "yaw": -92.2,
   "pitch": -23.55,
   "hfov": 12.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FE9D4B4D_F1B8_6F49_41EC_ADACE619EAB9",
 "maps": [
  {
   "yaw": -92.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.55,
   "hfov": 12.67
  }
 ],
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690, this.camera_28098249_25F3_39ED_41AB_DF4B1D795A51); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_1_HS_1_0.png",
      "width": 306,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.29,
   "yaw": 89.93,
   "hfov": 12.86
  }
 ],
 "id": "overlay_FE0C6A55_F1B9_E959_41DA_758779C93459",
 "maps": [
  {
   "yaw": 89.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_1_HS_1_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.29,
   "hfov": 12.86
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_EE4B5539_F258_18C9_4192_45A9BBBC0BC3, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0878D150_1A47_67AD_41B7_C8085600ACF0",
   "yaw": -147.66,
   "pitch": 4.65,
   "hfov": 11.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EE611567_F258_1B79_41E6_BF049707F2E0",
 "maps": [
  {
   "yaw": -147.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.65,
   "hfov": 11.38
  }
 ],
 "data": {
  "label": "Info Red 02"
 }
},
{
 "id": "image_uid290C3128_25F3_3BAB_41A3_FF69F08B7FBE_0",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "url": "media/photo_EDC44AA1_F268_29F9_41E2_01AB8811F49D.JPG",
 "paddingLeft": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "50%",
 "minWidth": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "data": {
  "name": "Image1613"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_EDFCB4E2_F1B8_397B_41D1_B6D4CC3FF3F8",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "HTMLText",
 "paddingLeft": 10,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "height": "50%",
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\"><B>1890 - 1930</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\">Telefon</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\"> \u2022 Diperbuat daripada keluli keras setebal 1cm, telefon ini dibuat untuk menahan api, letupan dan tekanan. Digunakkan terutamnya dalam industri tertentu dengan persekitaran berbahaya, ia kawalan dan bertindak sebagai alat komunikasi kecemasan.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "data": {
  "name": "HTMLText22104"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF, this.camera_2B9652B4_25F3_3EBB_41AA_9B22FAAC4C7E); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_087E514C_1A47_67B5_4194_8E3C5F967CE2",
   "yaw": -101.49,
   "pitch": -24.81,
   "hfov": 12.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FED9FBFE_F1B8_2F4A_41E1_96FF3FBC127D",
 "maps": [
  {
   "yaw": -101.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.81,
   "hfov": 12.54
  }
 ],
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42, this.camera_2BA642A9_25F3_3EAD_419B_2CDBE6D970DA); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_1_HS_1_0.png",
      "width": 306,
      "class": "ImageResourceLevel",
      "height": 267
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.03,
   "yaw": 6.52,
   "hfov": 13.05
  }
 ],
 "id": "overlay_FE2B5686_F1B8_39BB_41C4_C6C512B48078",
 "maps": [
  {
   "yaw": 6.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_1_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.03,
   "hfov": 13.05
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_EEB29562_F268_1B7B_41E4_4A75C5737ACA, null, false); this.playGlobalAudio(this.audio_D2953AE2_F268_E97B_41D7_46ECEAFD5A5C)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_087F314C_1A47_67B5_419F_F7BA8C9A0EC9",
   "yaw": -143.14,
   "pitch": -1.12,
   "hfov": 11.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EEC6158B_F268_1BC9_41E0_22E9721CC87C",
 "maps": [
  {
   "yaw": -143.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.12,
   "hfov": 11.42
  }
 ],
 "data": {
  "label": "Info Red 02"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F, this.camera_2840C1D2_25F3_3AFF_41C1_9F0E5891AA67); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_08653154_1A47_6655_41A2_5202E5AB1718",
   "yaw": 71.85,
   "pitch": -26.32,
   "hfov": 12.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FE8D17C5_F1B8_27B9_41E8_282AAE702935",
 "maps": [
  {
   "yaw": 71.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.32,
   "hfov": 12.39
  }
 ],
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7, this.camera_285111C7_25F3_3AE5_41B4_2C1BA1455320); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_1_HS_1_0.png",
      "width": 306,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.94,
   "yaw": -103.76,
   "hfov": 12.3
  }
 ],
 "id": "overlay_FE317685_F1B8_19B9_41D3_B6C1C4D43DC0",
 "maps": [
  {
   "yaw": -103.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_1_HS_1_0_0_map.gif",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.94,
   "hfov": 12.3
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_EC2F459B_F268_1BC9_41EB_D84D850A2E89, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_D7F397DB_F278_E749_41EC_F8E260870BC0, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_1_HS_2_0.png",
      "width": 139,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.34,
   "yaw": 5.28,
   "hfov": 6.24
  }
 ],
 "id": "overlay_EC7BC655_F1B8_F959_41A1_D30B03921970",
 "maps": [
  {
   "yaw": 5.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_1_HS_2_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.34,
   "hfov": 6.24
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 12); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_087CF14B_1A47_67B3_41B8_1BADA3C0743C",
   "yaw": 1.78,
   "pitch": -25.56,
   "hfov": 15.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F37A8675_E37E_46D0_41E1_16A8DEB07C58",
 "maps": [
  {
   "yaw": 1.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_1_HS_8_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.56,
   "hfov": 15.22
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448, this.camera_287461B0_25F3_3ABB_41B2_0A7B474133C6); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0879B150_1A47_67AD_41B3_0D33E300373C",
   "yaw": -101.74,
   "pitch": -18.28,
   "hfov": 13.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FE9F645D_F1B8_3949_41E9_39FA310B96AD",
 "maps": [
  {
   "yaw": -101.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.28,
   "hfov": 13.12
  }
 ],
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF, this.camera_286601BB_25F3_3AAD_41AE_7DFF52119CE7); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_1_HS_1_0.png",
      "width": 306,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.1,
   "yaw": 91.18,
   "hfov": 11.56
  }
 ],
 "id": "overlay_FE0DC026_F1B8_18FB_41E9_5B72EC938DB6",
 "maps": [
  {
   "yaw": 91.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_1_HS_1_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.1,
   "hfov": 11.56
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_EA6391DA_F1B8_1B4B_41B7_75449840F0EC, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_087A0151_1A47_67AF_41B8_EAC48F747E8F",
   "yaw": -155.7,
   "pitch": -4.39,
   "hfov": 11.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EA54E201_F1B8_18B6_41E0_3F12929E9EB4",
 "maps": [
  {
   "yaw": -155.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.39,
   "hfov": 11.38
  }
 ],
 "data": {
  "label": "Info Red 02"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0873F14A_1A47_67BD_4198_3CFC31856671",
   "yaw": 24.75,
   "pitch": -21.54,
   "hfov": 13.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CAD37B4B_DE4B_BF51_41D1_22885AB5DDEB",
 "maps": [
  {
   "yaw": 24.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_1_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.54,
   "hfov": 13.09
  }
 ],
 "data": {
  "label": "center"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F3F84194_E376_5A50_41C9_849709CCAEEE, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F2441A9B_E371_CE50_41DC_9D0BC9A01227, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_1_HS_1_0.png",
      "width": 288,
      "class": "ImageResourceLevel",
      "height": 311
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.54,
   "yaw": -164.96,
   "hfov": 12.86
  }
 ],
 "id": "overlay_F37BA489_E371_DA30_41E8_AEE9AE933761",
 "maps": [
  {
   "yaw": -164.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.54,
   "hfov": 12.86
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F3DDDE69_E377_C6F3_41E7_B997645FE28B, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F2450A9C_E371_CE50_41E4_8B9B63CE3ACA, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_1_HS_2_0.png",
      "width": 124,
      "class": "ImageResourceLevel",
      "height": 113
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.83,
   "yaw": -165.47,
   "hfov": 5.47
  }
 ],
 "id": "overlay_F3B333E1_E376_5DF0_41E8_E85059780697",
 "maps": [
  {
   "yaw": -165.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_1_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.83,
   "hfov": 5.47
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid2905911E_25F3_3B67_41BD_4F6AC5635A0A",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "shadow": false,
 "minHeight": 50,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressOpacity": 1,
 "transitionDuration": 500,
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "firstTransitionDuration": 0,
 "minWidth": 100,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "height": "100%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea1601"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0B8ED140_1A47_67AD_41A3_A47EEF911B2D",
   "yaw": 8.19,
   "pitch": -16.33,
   "hfov": 8.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CD66E758_DDD9_977F_41D7_CCCD6C05F8DA",
 "maps": [
  {
   "yaw": 8.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_1_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.33,
   "hfov": 8.2
  }
 ],
 "data": {
  "label": "exhibition 1"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_EDBBA763_E2B2_46F0_41D9_57A4CDF79B79, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, true) } else { this.showPopupMedia(this.window_2E5E078F_25F1_6766_41B6_6987AED125B3, this.video_ECDE0E11_E2B2_4651_41E4_359C25D501C8, this.PlayList_28E4713B_25F3_3BAD_41BC_D4D8700CB357, '95%', '95%', true, true) }"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_1_HS_5_0.png",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.45,
   "yaw": 94.52,
   "hfov": 5.34
  }
 ],
 "id": "overlay_ECED38DB_E2B2_CBD1_41B7_C304E939FD00",
 "maps": [
  {
   "yaw": 94.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.45,
   "hfov": 5.34
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_EDE4F976_E2B7_CAD0_41BB_FDE48BC52A98, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F1BD367E_E2B6_46D3_41DF_093B7D4ED010, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_1_HS_6_0.png",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.27,
   "yaw": 86.77,
   "hfov": 4.12
  }
 ],
 "id": "overlay_EC419C7B_E2B6_4AD1_41D1_E43690CA308C",
 "maps": [
  {
   "yaw": 86.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.27,
   "hfov": 4.12
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_ED0FAC78_E2B2_CADF_41B2_4F90E8B37F8F, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F34A4492_E2B2_7A50_41E2_09BBAC2A512C, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_1_HS_7_0.png",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 105
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.56,
   "yaw": 87.78,
   "hfov": 4.65
  }
 ],
 "id": "overlay_EDB69798_E2B2_465F_41E0_BCED3EA37444",
 "maps": [
  {
   "yaw": 87.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.56,
   "hfov": 4.65
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F2FDE342_E2BE_BE30_41EA_00EE347C400C, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F3323177_E2B1_DAD0_41E9_85F9B6371735, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_1_HS_8_0.png",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.38,
   "yaw": 59.2,
   "hfov": 3.99
  }
 ],
 "id": "overlay_ED8A6F39_E2B2_C651_41D0_C536141A31A3",
 "maps": [
  {
   "yaw": 59.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.38,
   "hfov": 3.99
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_EDDE4B48_E2BE_4E3F_41C4_FF686BB8B9B1, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F3335177_E2B1_DAD0_41EA_89533A5FD2AB, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_1_HS_9_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.27,
   "yaw": 58.81,
   "hfov": 4.02
  }
 ],
 "id": "overlay_EDB56DD5_E2B1_C5D0_41DD_32A55FDF78DB",
 "maps": [
  {
   "yaw": 58.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_1_HS_9_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.27,
   "hfov": 4.02
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_ED2F5237_E2BE_7E50_41CA_6D8B6A7895B6, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_F3344178_E2B1_DAD0_41D2_EF5C8EBC02FE, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_1_HS_10_0.png",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.37,
   "yaw": 52.88,
   "hfov": 4.69
  }
 ],
 "id": "overlay_EDED3C6A_E2BE_4AF3_41E9_97AD93E50B58",
 "maps": [
  {
   "yaw": 52.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_1_HS_10_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.37,
   "hfov": 4.69
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "viewerArea": "this.viewer_uid2905D11F_25F3_3B65_41A1_0753D5AD8E6F",
 "id": "viewer_uid2905D11F_25F3_3B65_41A1_0753D5AD8E6FVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0B87F13C_1A47_67D5_419D_DAD558A199E5",
   "yaw": 16.08,
   "pitch": -17.4,
   "hfov": 9.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_E0A24EB4_F6CF_18FF_41D0_C5F9B8D36460",
 "maps": [
  {
   "yaw": 16.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.4,
   "hfov": 9.83
  }
 ],
 "data": {
  "label": "Arrow 01 Right"
 }
},
{
 "viewerArea": "this.viewer_uid2905A11E_25F3_3B67_41BE_85E00F80279B",
 "id": "viewer_uid2905A11E_25F3_3B67_41BE_85E00F80279BVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "id": "image_uid290B6123_25F3_3B5D_41BE_BE40A68FA07E_0",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "url": "media/photo_ED45AC79_F268_6956_41DF_94E31F336C47.JPG",
 "paddingLeft": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "50%",
 "minWidth": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "data": {
  "name": "Image1605"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_EEB79565_F268_1B79_41CF_62747BE6A3D4",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "HTMLText",
 "paddingLeft": 10,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "height": "50%",
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\"><B>1926</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\">Stesen radio tanpa wayar</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\"> \u2022 Banjir pada tahun 1926 meningkatkan keperluan kemudahan menyelamat dan operasi sistem kecemasan. Pada masa itu, komunikasi tanpa wayar hanya wujud di stesen pinggir laut dan hanya menyediakan komunikasi dengan kapal-kapal di lautan. Ketika banjir, kuala lipis ditubuhkan, dari hulu ke kuala sungai.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\"> </SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "data": {
  "name": "HTMLText22104"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0B87613B_1A47_67D3_41A2_B1698DC038CF",
   "yaw": -15.66,
   "pitch": -25.81,
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F8D6A909_F651_66EB_41C2_526AFE5A4BBA",
 "maps": [
  {
   "yaw": -15.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_1_HS_0_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.81,
   "hfov": 11.84
  }
 ],
 "data": {
  "label": "Arrow 04a"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D, this.camera_2BD47285_25F3_3965_41A5_950C2550291A); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_08642154_1A47_6655_41A8_A1E7389E35C4",
   "yaw": 96.47,
   "pitch": -36.36,
   "hfov": 11.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FEFA16B5_F1B8_19D9_41CF_A84E0FB52E57",
 "maps": [
  {
   "yaw": 96.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.36,
   "hfov": 11.13
  }
 ],
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448, this.camera_2BEA126F_25F3_39A5_41BD_2B9D70FD8C3D); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_1_HS_1_0.png",
      "width": 306,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.28,
   "yaw": -73.87,
   "hfov": 13.1
  }
 ],
 "id": "overlay_FE760745_F1B8_18B9_41EA_A485E0DD0AC7",
 "maps": [
  {
   "yaw": -73.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_1_HS_1_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.28,
   "hfov": 13.1
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_EC24A3B2_F268_3FDB_41E7_0E51F9BA72B3, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_D7CC47DA_F278_E74B_41BE_8798786B08CB, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_1_HS_2_0.png",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.08,
   "yaw": -20.73,
   "hfov": 7.52
  }
 ],
 "id": "overlay_EF867BB8_F1B8_2FD7_41ED_6EF4944034AB",
 "maps": [
  {
   "yaw": -20.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.08,
   "hfov": 7.52
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7, this.camera_28A3F181_25F3_3B5D_41AF_9CB3103A488A); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_087AD152_1A47_67AD_41B9_DB05F91CEDE3",
   "yaw": -14.57,
   "pitch": -27.07,
   "hfov": 12.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E1BF3B9A_F1B8_2FCB_41EA_A1BB22007ECE",
 "maps": [
  {
   "yaw": -14.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.07,
   "hfov": 12.3
  }
 ],
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7, this.camera_28AE318E_25F3_3B67_41B5_F4E4F94D844C); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_1_HS_1_0.png",
      "width": 306,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.28,
   "yaw": 84.15,
   "hfov": 13.1
  }
 ],
 "id": "overlay_FE72BF96_F1B8_67DB_419F_652E7507EDB6",
 "maps": [
  {
   "yaw": 84.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_1_HS_1_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.28,
   "hfov": 13.1
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_EA4A63CA_F1B8_FF4B_41CF_5B8D692882F4, null, false); this.playGlobalAudio(this.audio_D36DC254_F278_795E_41E7_6DA0AE89FE5B)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_087BA152_1A47_67AD_41A8_0B19D9318D86",
   "yaw": -146.41,
   "pitch": -4.89,
   "hfov": 11.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EA3893EF_F1B8_FF49_41E9_01A7E2742A66",
 "maps": [
  {
   "yaw": -146.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.89,
   "hfov": 11.38
  }
 ],
 "data": {
  "label": "Info Red 02"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_EDBA92CE_F1B8_194A_41E8_C06854A9CDCE, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_08641153_1A47_6653_419C_0FEF63FCD393",
   "yaw": -127.56,
   "pitch": -2.88,
   "hfov": 11.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EDAF02F2_F1B8_195A_41D0_5A924AEF5223",
 "maps": [
  {
   "yaw": -127.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.88,
   "hfov": 11.4
  }
 ],
 "data": {
  "label": "Info Red 02"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_ED1A1B30_F268_28D7_41EA_E2B24928F3AC, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_D7CE17D9_F278_E749_41E5_8E712D6F5FC2, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_1_HS_4_0.png",
      "width": 94,
      "class": "ImageResourceLevel",
      "height": 128
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.07,
   "yaw": -122.34,
   "hfov": 4.27
  }
 ],
 "id": "overlay_ED9C1247_F1B8_18B9_41E0_065716D3C741",
 "maps": [
  {
   "yaw": -122.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.07,
   "hfov": 4.27
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_EE3213DA_F258_3F4B_41D3_A52EE20CEEDD, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_08652153_1A47_6653_41AA_0E65B423234F",
   "yaw": 157.57,
   "pitch": -6.9,
   "hfov": 11.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EE44B405_F258_38BE_41DD_E88AE6C23C0D",
 "maps": [
  {
   "yaw": 157.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.9,
   "hfov": 11.34
  }
 ],
 "data": {
  "label": "Info Red 02"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0B80513D_1A47_67D7_41AA_6B723EA9669F",
   "yaw": -3.48,
   "pitch": -26.06,
   "hfov": 12.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E2B08974_F6B1_1874_41A5_5757D5018612",
 "maps": [
  {
   "yaw": -3.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.06,
   "hfov": 12.04
  }
 ],
 "data": {
  "label": "Arrow 01"
 }
},
{
 "id": "image_uid290FD126_25F3_3BA7_41A3_2EBB5A91B2E3_0",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "url": "media/photo_EDCC6907_F268_28B9_41E2_B4DD71045564.JPG",
 "paddingLeft": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "50%",
 "minWidth": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "data": {
  "name": "Image1611"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_EDBAE2D0_F1B8_1956_41E6_C80CF8134763",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "HTMLText",
 "paddingLeft": 10,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "height": "50%",
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\"> \u2022 Lewat tahun 1960-an, Siemns T100 diperkenalkan. Model ini digunakan secara meluas apabila ibu sawat teleprinter automatik (Ibu Sawat Teleks) diperkenalkan pada tahun 1974.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "data": {
  "name": "HTMLText22104"
 }
},
{
 "id": "image_uid290FE127_25F3_3BA5_41C2_5B72944EEE0F_0",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "url": "media/photo_EC621859_F268_2956_41DF_1F4707950330.JPG",
 "paddingLeft": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "50%",
 "minWidth": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "data": {
  "name": "Image1612"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmlText_EE3583DF_F258_3F49_41E5_4CA235855F76",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "HTMLText",
 "paddingLeft": 10,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "height": "50%",
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\">1946 </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\">Jabatan Talikom Malaya</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:30px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"> \u2022 </SPAN><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\">Jabatan Talikom Malaya mengeluarkan Laporan Tahunan pertama pada hari perasmian.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;\"> </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"> \u2022</SPAN><SPAN STYLE=\"font-size:15px;\"> </SPAN><SPAN STYLE=\"font-size:30px;font-family:'Times New Roman', Times, serif;\">Pada tahun 1948, jabatan ini mula menerbitkan risalah rasmi setiap suku tahun. Risalah berupa majalah, Mercury, dimodelkan semula sebagai Kawat pada tahun 1971, tetapi tidak mendapat sambutan. Majalah tersebut berakhir dengan hanya satu isu pada tahun 1975.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "data": {
  "name": "HTMLText22104"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid2907C11D_25F3_3B65_41C0_30DC179F0912",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "shadow": false,
 "minHeight": 50,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressOpacity": 1,
 "transitionDuration": 500,
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "firstTransitionDuration": 0,
 "minWidth": 100,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "height": "100%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea1600"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0B8C213E_1A47_67D5_41B7_0B3EAF2CE804",
   "yaw": -12.18,
   "pitch": -45.28,
   "hfov": 15.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_E1710DB8_F6D7_383C_41E2_A06F51A8CA85",
 "maps": [
  {
   "yaw": -12.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.28,
   "hfov": 15.56
  }
 ],
 "data": {
  "label": "Arrow 02 Right"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_EF5AA8F7_F6D3_19FE_41E4_F43AC792E155, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_D7C424B2_F6B1_2851_41B6_CC4A1C51C810, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_1_HS_1_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 223
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.38,
   "yaw": -30.27,
   "hfov": 8.76
  }
 ],
 "id": "overlay_EBAD4264_F6D0_E812_41C0_225E3C2E9420",
 "maps": [
  {
   "yaw": -30.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.38,
   "hfov": 8.76
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_ED94FB25_F6D3_781C_41E2_642009980C78, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_D7C5E4B2_F6B1_2851_41EC_0108B52036D2, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_1_HS_2_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 206
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.03,
   "yaw": 19.85,
   "hfov": 8.73
  }
 ],
 "id": "overlay_ECCD66E0_F6D3_2813_41D3_F37D35330ADC",
 "maps": [
  {
   "yaw": 19.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_1_HS_2_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.03,
   "hfov": 8.73
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_EDFA3655_F6D1_283C_41E5_17E39BD870BC, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_D7C2C4B3_F6B1_2857_41EC_988F64564981, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_1_HS_3_0.png",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46,
   "yaw": 29.77,
   "hfov": 7.51
  }
 ],
 "id": "overlay_EC1934FF_F6D0_E9EC_41CE_99B729A130B5",
 "maps": [
  {
   "yaw": 29.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46,
   "hfov": 7.51
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_ED9D3A95_F6D1_183F_41EC_51FA7C4C2065, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_D7C3B4B4_F6B1_2851_41DE_7931072562EE, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_1_HS_4_0.png",
      "width": 195,
      "class": "ImageResourceLevel",
      "height": 217
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.62,
   "yaw": -42.71,
   "hfov": 8.58
  }
 ],
 "id": "overlay_EC221473_F6D1_28FB_4151_7D8E4153CE94",
 "maps": [
  {
   "yaw": -42.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.62,
   "hfov": 8.58
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_ED828E1B_F6B1_185D_41DD_D8AA146D6D69, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingLeft':5}, this.ImageResource_D7C174B4_F6B1_2851_41E5_72FEDBA0ECAD, null, null, null, null, false)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_1_HS_5_0.png",
      "width": 240,
      "class": "ImageResourceLevel",
      "height": 279
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.16,
   "yaw": -106.27,
   "hfov": 10.2
  }
 ],
 "id": "overlay_ECA20CA0_F6B1_186B_41E9_58B33C288EA7",
 "maps": [
  {
   "yaw": -106.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.16,
   "hfov": 10.2
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "width": 66,
 "layout": "absolute",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "class": "Container",
 "top": "0%",
 "paddingLeft": 0,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "- COLLAPSE"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "id": "Container_6396DD92_74B8_852E_41C7_7F2F88EAB543",
 "left": "0%",
 "width": "100%",
 "layout": "absolute",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "class": "Container",
 "top": "0%",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "- EXPANDED"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "overflow": "visible",
 "right": "0%",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "top": "0%",
 "propagateClick": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": 110,
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "button menu sup"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "width": "91.304%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "right": "0%",
 "horizontalAlign": "center",
 "overflow": "scroll",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "bottom": "0%",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "height": "85.959%",
 "contentOpaque": false,
 "gap": 3,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "-button set"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowSpread": 1,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "shadowColor": "#000000",
 "layout": "absolute",
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "right": "15%",
 "minHeight": 1,
 "shadow": true,
 "shadowOpacity": 0.3,
 "class": "Container",
 "overflow": "visible",
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "shadowSpread": 1,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "shadowColor": "#000000",
 "layout": "horizontal",
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "right": "15%",
 "minHeight": 1,
 "shadow": true,
 "shadowOpacity": 0.3,
 "class": "Container",
 "overflow": "scroll",
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "layout": "vertical",
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "right": "15%",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "class": "Container",
 "top": "10%",
 "bottom": "80%",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 }
},
{
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_08663155_1A47_6657_418F_7E915462CED6",
 "colCount": 3
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_1_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_08669156_1A47_6655_41B2_8200F208FB36",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FC9F7911_F1A8_28D9_41E4_A5798FDDCC6F_1_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_08676156_1A47_6655_41B7_97550FE658C2",
 "colCount": 4
},
{
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FAC4D3EE_F671_697E_41E6_94BCAF8EBF41_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_0B81913D_1A47_67D7_41B1_9505FED37E61",
 "colCount": 3
},
{
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_08611158_1A47_665D_41B1_B9093082BB0B",
 "colCount": 3
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FC9C87D0_F1A8_E757_41C4_CA73F436F82D_1_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0861D159_1A47_665F_41A3_7413718796F1",
 "colCount": 4
},
{
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FAAD1DAF_F671_39FF_41CB_22B8097FECE1_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_0B80113C_1A47_67D5_41B1_9D14B5B2F26B",
 "colCount": 3
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D7803D70_DDD9_9B4F_41C5_750BC35AE52D_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_08767147_1A47_67B3_416E_AF49DE3D8C84",
 "colCount": 4
},
{
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_087DA14B_1A47_67B3_41B5_62D2A28C9324",
 "colCount": 3
},
{
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FC8FB533_F1A8_18D9_41C3_44FAA4676B42_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_087DC14B_1A47_67B3_4191_8CB4B389D706",
 "colCount": 3
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3440A39_F6D1_3BD7_41D2_429A470B29FC_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0B8D913F_1A47_67D3_41A2_19B616C9F5FC",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D7E40501_DDD9_88D1_41EB_881E1728B6E2_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0871D149_1A47_67BF_41AA_D1EAB670F107",
 "colCount": 4
},
{
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_0867E157_1A47_6653_41B7_0748EBC1CA9B",
 "colCount": 3
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB31062_F1A8_197A_41E2_0AC094BEB13A_1_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0860A158_1A47_665D_41B6_79688486F32F",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D7859CF5_DDD9_F930_41D9_E38542F68884_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_08702148_1A47_67BD_41BA_095E6A98E126",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E34E1B9C_F6D1_18D3_41A3_ECD3715A8983_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0B82813E_1A47_67D5_4184_9CD24E4E2549",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FAAD1C67_F671_1F6E_41EA_3E13B79631FA_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0B80F13D_1A47_67D7_41B2_A2998773B470",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D7E46588_DDD9_8BDF_41E8_1B6C438A0D76_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0874C145_1A47_67B7_418E_664FCD9D68C4",
 "colCount": 4
},
{
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_0878614F_1A47_67B3_4197_03F1E9C05FA3",
 "colCount": 3
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB31424_F1A8_78FE_41E1_32AD631D1FAF_1_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0878D150_1A47_67AD_41B7_C8085600ACF0",
 "colCount": 4
},
{
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_087E514C_1A47_67B5_4194_8E3C5F967CE2",
 "colCount": 3
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB28CC6_F1A8_69BB_41E9_794BF8D89690_1_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_087F314C_1A47_67B5_419F_F7BA8C9A0EC9",
 "colCount": 4
},
{
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FCB301CE_F1A8_3B4B_41D9_DCCB047AF35D_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_08653154_1A47_6655_41A2_5202E5AB1718",
 "colCount": 3
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D65D9579_DDD9_8B31_41E0_69F8217ACDB2_1_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_087CF14B_1A47_67B3_41B8_1BADA3C0743C",
 "colCount": 4
},
{
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_0879B150_1A47_67AD_41B3_0D33E300373C",
 "colCount": 3
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FC9B0B61_F1A8_6F79_41CE_3F9152C9E7E7_1_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_087A0151_1A47_67AF_41B8_EAC48F747E8F",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D785FC9D_DDD9_99F0_41D8_1A12790A36C3_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0873F14A_1A47_67BD_4198_3CFC31856671",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D7EF9DB6_DDD9_BB33_41DB_05C4AE3A795C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0B8ED140_1A47_67AD_41A3_A47EEF911B2D",
 "colCount": 4
},
{
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FAC5E650_F671_2AA1_41D9_CF0ADB86C856_1_HS_4_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_0B87F13C_1A47_67D5_419D_DAD558A199E5",
 "colCount": 3
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FAC609D3_F671_19A7_41E5_52BF7986BE21_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 510
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_0B87613B_1A47_67D3_41A2_B1698DC038CF",
 "colCount": 4
},
{
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FC989A57_F1A8_2959_41C2_FCD62567CFB7_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_08642154_1A47_6655_41A8_A1E7389E35C4",
 "colCount": 3
},
{
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_087AD152_1A47_67AD_41B9_DB05F91CEDE3",
 "colCount": 3
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_1_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_087BA152_1A47_67AD_41A8_0B19D9318D86",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_1_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_08641153_1A47_6653_419C_0FEF63FCD393",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB3731B_F1A8_18CA_41E3_F5FF833C5448_1_HS_5_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_08652153_1A47_6653_41AA_0E65B423234F",
 "colCount": 4
},
{
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_FACB6508_F671_2EA1_41B5_65567CE8FB7A_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_0B80513D_1A47_67D7_41AA_6B723EA9669F",
 "colCount": 3
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E32C72DF_F6D1_284C_41E0_8A897249F151_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0B8C213E_1A47_67D5_41B7_0B3EAF2CE804",
 "colCount": 4
},
{
 "scrollBarMargin": 2,
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "layout": "absolute",
 "backgroundOpacity": 0.4,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "shadow": false,
 "minHeight": 1,
 "overflow": "scroll",
 "class": "Container",
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "paddingBottom": 0,
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Container black"
 }
},
{
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "width": 44,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "class": "IconButton",
 "top": "40%",
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "propagateClick": true,
 "bottom": "40%",
 "maxHeight": 50,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, true, 0, null, null, false)",
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 50,
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479"
 ],
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "left": "0%",
 "width": 300,
 "layout": "absolute",
 "backgroundOpacity": 0.7,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "shadow": false,
 "minHeight": 1,
 "overflow": "scroll",
 "class": "Container",
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "paddingRight": 40,
 "paddingLeft": 40,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 40,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "paddingBottom": 40,
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Container"
 }
},
{
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "width": 44,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "right": 9,
 "shadow": false,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "class": "IconButton",
 "top": "40%",
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "propagateClick": true,
 "bottom": "40%",
 "maxHeight": 50,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 50,
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "propagateClick": true,
 "paddingRight": 0,
 "maxHeight": 60,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "height": 60,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "minWidth": 1,
 "maxWidth": 60,
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "image button menu"
 }
},
{
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "propagateClick": true,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "click": "this.shareTwitter(window.location.href)",
 "height": 58,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "propagateClick": true,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "click": "this.shareFacebook(window.location.href)",
 "height": 58,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 140,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 }
},
{
 "itemMinHeight": 50,
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "itemBorderRadius": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemVerticalAlign": "top",
 "rollOverItemLabelFontColor": "#04A3E1",
 "backgroundOpacity": 0,
 "width": "100%",
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "shadow": false,
 "itemPaddingLeft": 3,
 "itemOpacity": 1,
 "minHeight": 1,
 "itemMinWidth": 50,
 "propagateClick": false,
 "itemThumbnailOpacity": 1,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "paddingRight": 70,
 "itemPaddingRight": 3,
 "selectedItemLabelFontColor": "#04A3E1",
 "height": "92%",
 "scrollBarColor": "#04A3E1",
 "itemBackgroundColor": [],
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemLabelGap": 7,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "borderSize": 0,
 "itemHeight": 160,
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "rollOverItemThumbnailShadow": true,
 "itemLabelFontSize": 16,
 "itemThumbnailShadow": false,
 "itemThumbnailHeight": 125,
 "selectedItemThumbnailShadow": true,
 "borderRadius": 5,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontColor": "#666666",
 "class": "ThumbnailGrid",
 "itemBackgroundColorDirection": "vertical",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "bottom": -0.2,
 "paddingLeft": 70,
 "itemHorizontalAlign": "center",
 "itemThumbnailWidth": 220,
 "itemBackgroundOpacity": 0,
 "itemWidth": 220,
 "itemMaxWidth": 1000,
 "itemPaddingBottom": 3,
 "gap": 26,
 "itemLabelFontStyle": "italic",
 "paddingTop": 10,
 "itemMaxHeight": 1000,
 "itemLabelHorizontalAlign": "center",
 "paddingBottom": 70,
 "itemMode": "normal",
 "itemThumbnailBorderRadius": 0,
 "scrollBarMargin": 2,
 "data": {
  "name": "ThumbnailList"
 }
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "insetBorder": false,
 "backgroundOpacity": 1,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "WebFrame",
 "backgroundColorRatios": [
  0
 ],
 "url": "https://g.co/kgs/VgWxtN4",
 "paddingRight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "scrollEnabled": true,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "class": "IconButton",
 "propagateClick": false,
 "maxHeight": 60,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "75%",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "borderSize": 0,
 "minWidth": 50,
 "maxWidth": 60,
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "X"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "right": "0%",
 "horizontalAlign": "left",
 "overflow": "scroll",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "top": "25%",
 "bottom": "25%",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "contentOpaque": false,
 "gap": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-Container buttons"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.Container_66588837_74AF_8B56_41CA_E204728E8E6C",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1"
 ],
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "right": "0%",
 "horizontalAlign": "left",
 "overflow": "scroll",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "verticalAlign": "bottom",
 "height": 120,
 "contentOpaque": false,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-Container footer"
 }
},
{
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "right": 20,
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "shadow": false,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "class": "IconButton",
 "top": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "propagateClick": false,
 "maxHeight": 60,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "36.14%",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "minWidth": 50,
 "maxWidth": 60,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 }
},
{
 "iconWidth": 32,
 "layout": "horizontal",
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadow": false,
 "iconHeight": 32,
 "borderRadius": 0,
 "borderColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingRight": 0,
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "mode": "push",
 "fontSize": 18,
 "label": "Tour Information",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false)",
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "backgroundColorDirection": "vertical",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button Tour Info"
 },
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 }
},
{
 "iconWidth": 32,
 "layout": "horizontal",
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadow": false,
 "iconHeight": 32,
 "borderRadius": 0,
 "borderColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingRight": 0,
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "mode": "push",
 "fontSize": 18,
 "label": "Panorama List",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 23,
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "backgroundColorDirection": "vertical",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button Panorama List"
 },
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 }
},
{
 "iconWidth": 32,
 "layout": "horizontal",
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadow": false,
 "iconHeight": 32,
 "pressedLabel": "Location",
 "borderRadius": 0,
 "borderColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingRight": 0,
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "mode": "push",
 "fontSize": 18,
 "label": "Location",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false)",
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "backgroundColorDirection": "vertical",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button Location"
 },
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "width": 40,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "overflow": "visible",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "height": 2,
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "blue line"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_66588837_74AF_8B56_41CA_E204728E8E6C",
 "children": [
  "this.IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
  "this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
  "this.IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
  "this.IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
  "this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB"
 ],
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "width": "100%",
 "horizontalAlign": "left",
 "overflow": "scroll",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": 40,
 "contentOpaque": false,
 "gap": 16,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-Container settings"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "class": "HTMLText",
 "propagateClick": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": 78,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "HTMLText47602"
 }
}],
 "backgroundPreloadEnabled": true,
 "minHeight": 20,
 "class": "Player",
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "buttonToggleFullscreen": [
  "this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "minWidth": 20,
 "height": "100%",
 "defaultVRPointer": "laser",
 "paddingBottom": 0,
 "scripts": {
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getKey": function(key){  return window[key]; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "registerKey": function(key, value){  window[key] = value; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "existsKey": function(key){  return key in window; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; }
 },
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
