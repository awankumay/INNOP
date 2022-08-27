var wms_layers = [];

var format_KalimantanTimur_0 = new ol.format.GeoJSON();
var features_KalimantanTimur_0 = format_KalimantanTimur_0.readFeatures(json_KalimantanTimur_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KalimantanTimur_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KalimantanTimur_0.addFeatures(features_KalimantanTimur_0);
var lyr_KalimantanTimur_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KalimantanTimur_0, 
                style: style_KalimantanTimur_0,
                interactive: true,
    title: 'KalimantanTimur<br />\
    <img src="styles/legend/KalimantanTimur_0_0.png" /> 1<br />\
    <img src="styles/legend/KalimantanTimur_0_1.png" /> 3<br />\
    <img src="styles/legend/KalimantanTimur_0_2.png" /> 4<br />\
    <img src="styles/legend/KalimantanTimur_0_3.png" /> 5<br />\
    <img src="styles/legend/KalimantanTimur_0_4.png" /> 6<br />'
        });
var format_Shorea_1 = new ol.format.GeoJSON();
var features_Shorea_1 = format_Shorea_1.readFeatures(json_Shorea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shorea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shorea_1.addFeatures(features_Shorea_1);
var lyr_Shorea_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Shorea_1, 
                style: style_Shorea_1,
                interactive: true,
                title: '<img src="styles/legend/Shorea_1.png" /> Shorea'
            });

lyr_KalimantanTimur_0.setVisible(true);lyr_Shorea_1.setVisible(true);
var layersList = [lyr_KalimantanTimur_0,lyr_Shorea_1];
lyr_KalimantanTimur_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KABUPATEN': 'KABUPATEN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Shorea_1.set('fieldAliases', {'FID_Shorea': 'FID_Shorea', 'NO': 'NO', 'Spieces': 'Spieces', 'Lat': 'Lat', 'Lon': 'Lon', 'FID_BATASK': 'FID_BATASK', 'OBJECTID': 'OBJECTID', 'KABUPATEN': 'KABUPATEN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'FID_KALTIM': 'FID_KALTIM', 'objectid_1': 'objectid_1', 'objectid_2': 'objectid_2', 'kode_prov': 'kode_prov', 'nama_das': 'nama_das', 'luas_ha': 'luas_ha', 'kel_m': 'kel_m', 'prioritas_': 'prioritas_', 'kd_tematik': 'kd_tematik', 'kd_region': 'kd_region', 'kd_lintas': 'kd_lintas', 'kd_das': 'kd_das', 'wil_kerja': 'wil_kerja', 'kd_urutdas': 'kd_urutdas', 'globalid': 'globalid', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'st_area__1': 'st_area__1', 'st_length1': 'st_length1', 'FID_tanaha': 'FID_tanaha', 'SNUM': 'SNUM', 'FAOSOIL': 'FAOSOIL', 'DOMSOI': 'DOMSOI', 'PHASE1': 'PHASE1', 'PHASE2': 'PHASE2', 'MISCLU1': 'MISCLU1', 'MISCLU2': 'MISCLU2', 'PERMAFROST': 'PERMAFROST', 'CNTCODE': 'CNTCODE', 'CNTNAME': 'CNTNAME', 'SQKM': 'SQKM', 'COUNTRY': 'COUNTRY', 'FID_geolog': 'FID_geolog', 'SYMBOLS': 'SYMBOLS', 'NM_LEMBAR': 'NM_LEMBAR', 'NO_LEMBAR': 'NO_LEMBAR', 'PROJECT': 'PROJECT', 'NAME': 'NAME', 'FORMATION': 'FORMATION', 'CLASS_LITH': 'CLASS_LITH', 'T_CLASS_EN': 'T_CLASS_EN', 'B_CLASS_EN': 'B_CLASS_EN', 'DESCRIP1': 'DESCRIP1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'FID_Curah_': 'FID_Curah_', 'gridcode': 'gridcode', 'Keterangan': 'Keterangan', 'FID_Dissol': 'FID_Dissol', 'gridcode_1': 'gridcode_1', 'KETERANG_1': 'KETERANG_1', });
lyr_KalimantanTimur_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'KABUPATEN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Shorea_1.set('fieldImages', {'FID_Shorea': '', 'NO': '', 'Spieces': '', 'Lat': '', 'Lon': '', 'FID_BATASK': '', 'OBJECTID': '', 'KABUPATEN': '', 'Shape_Leng': '', 'Shape_Area': '', 'FID_KALTIM': '', 'objectid_1': '', 'objectid_2': '', 'kode_prov': '', 'nama_das': '', 'luas_ha': '', 'kel_m': '', 'prioritas_': '', 'kd_tematik': '', 'kd_region': '', 'kd_lintas': '', 'kd_das': '', 'wil_kerja': '', 'kd_urutdas': '', 'globalid': '', 'st_area_sh': '', 'st_length_': '', 'st_area__1': '', 'st_length1': '', 'FID_tanaha': '', 'SNUM': '', 'FAOSOIL': '', 'DOMSOI': '', 'PHASE1': '', 'PHASE2': '', 'MISCLU1': '', 'MISCLU2': '', 'PERMAFROST': '', 'CNTCODE': '', 'CNTNAME': '', 'SQKM': '', 'COUNTRY': '', 'FID_geolog': '', 'SYMBOLS': '', 'NM_LEMBAR': '', 'NO_LEMBAR': '', 'PROJECT': '', 'NAME': '', 'FORMATION': '', 'CLASS_LITH': '', 'T_CLASS_EN': '', 'B_CLASS_EN': '', 'DESCRIP1': '', 'Shape_Le_1': '', 'Shape_Ar_1': '', 'FID_Curah_': '', 'gridcode': '', 'Keterangan': '', 'FID_Dissol': '', 'gridcode_1': '', 'KETERANG_1': '', });
lyr_KalimantanTimur_0.set('fieldLabels', {'OBJECTID': 'inline label', 'KABUPATEN': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_Shorea_1.set('fieldLabels', {'FID_Shorea': 'inline label', 'NO': 'inline label', 'Spieces': 'inline label', 'Lat': 'inline label', 'Lon': 'inline label', 'FID_BATASK': 'inline label', 'OBJECTID': 'inline label', 'KABUPATEN': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'FID_KALTIM': 'inline label', 'objectid_1': 'inline label', 'objectid_2': 'inline label', 'kode_prov': 'inline label', 'nama_das': 'inline label', 'luas_ha': 'inline label', 'kel_m': 'inline label', 'prioritas_': 'inline label', 'kd_tematik': 'inline label', 'kd_region': 'inline label', 'kd_lintas': 'inline label', 'kd_das': 'inline label', 'wil_kerja': 'inline label', 'kd_urutdas': 'inline label', 'globalid': 'inline label', 'st_area_sh': 'inline label', 'st_length_': 'inline label', 'st_area__1': 'inline label', 'st_length1': 'inline label', 'FID_tanaha': 'inline label', 'SNUM': 'inline label', 'FAOSOIL': 'inline label', 'DOMSOI': 'inline label', 'PHASE1': 'inline label', 'PHASE2': 'inline label', 'MISCLU1': 'inline label', 'MISCLU2': 'inline label', 'PERMAFROST': 'inline label', 'CNTCODE': 'inline label', 'CNTNAME': 'inline label', 'SQKM': 'inline label', 'COUNTRY': 'inline label', 'FID_geolog': 'inline label', 'SYMBOLS': 'inline label', 'NM_LEMBAR': 'inline label', 'NO_LEMBAR': 'inline label', 'PROJECT': 'inline label', 'NAME': 'inline label', 'FORMATION': 'inline label', 'CLASS_LITH': 'inline label', 'T_CLASS_EN': 'inline label', 'B_CLASS_EN': 'inline label', 'DESCRIP1': 'inline label', 'Shape_Le_1': 'inline label', 'Shape_Ar_1': 'inline label', 'FID_Curah_': 'inline label', 'gridcode': 'inline label', 'Keterangan': 'inline label', 'FID_Dissol': 'inline label', 'gridcode_1': 'inline label', 'KETERANG_1': 'inline label', });
lyr_Shorea_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});