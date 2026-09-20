var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_P_1 = new ol.format.GeoJSON();
var features_P_1 = format_P_1.readFeatures(json_P_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P_1.addFeatures(features_P_1);
var lyr_P_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P_1, 
                style: style_P_1,
                popuplayertitle: 'P',
                interactive: true,
    title: 'P<br />\
    <img src="styles/legend/P_1_0.png" /> Empire Bay<br />\
    <img src="styles/legend/P_1_1.png" /> Warmberal Beach<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_P_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_P_1];
lyr_P_1.set('fieldAliases', {'fid': 'fid', 'Photo_Path': 'Photo_Path', 'Location': 'Location', 'Description': 'Description', });
lyr_P_1.set('fieldImages', {'fid': 'TextEdit', 'Photo_Path': 'ExternalResource', 'Location': 'Range', 'Description': 'TextEdit', });
lyr_P_1.set('fieldLabels', {'fid': 'inline label - always visible', 'Photo_Path': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Description': 'inline label - visible with data', });
lyr_P_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});