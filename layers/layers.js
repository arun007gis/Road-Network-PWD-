ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Road_Start_EndNodes_1 = new ol.format.GeoJSON();
var features_Road_Start_EndNodes_1 = format_Road_Start_EndNodes_1.readFeatures(json_Road_Start_EndNodes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_Start_EndNodes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_Start_EndNodes_1.addFeatures(features_Road_Start_EndNodes_1);cluster_Road_Start_EndNodes_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Road_Start_EndNodes_1
});
var lyr_Road_Start_EndNodes_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Road_Start_EndNodes_1, 
                style: style_Road_Start_EndNodes_1,
                popuplayertitle: "Road_Start_End Nodes",
                interactive: true,
                title: '<img src="styles/legend/Road_Start_EndNodes_1.png" /> Road_Start_End Nodes'
            });
var format_PWDRoadListforNSVSurvey_2 = new ol.format.GeoJSON();
var features_PWDRoadListforNSVSurvey_2 = format_PWDRoadListforNSVSurvey_2.readFeatures(json_PWDRoadListforNSVSurvey_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PWDRoadListforNSVSurvey_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PWDRoadListforNSVSurvey_2.addFeatures(features_PWDRoadListforNSVSurvey_2);
var lyr_PWDRoadListforNSVSurvey_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PWDRoadListforNSVSurvey_2, 
                style: style_PWDRoadListforNSVSurvey_2,
                popuplayertitle: "PWD Road List for NSV Survey",
                interactive: true,
    title: 'PWD Road List for NSV Survey<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_0.png" /> Amaravila - Ottashekaramangalam Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_1.png" /> Amarvila-Karakkonam Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_2.png" /> Arattukuzhi-Amboori-Neyyardam Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_3.png" /> Attingal-Venjaramoode Road(SH47)<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_4.png" /> Balaramapuram-Kattakkada Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_5.png" /> Balaramapuram-Vizhinjam Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_6.png" /> Cheruvarakkonam Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_7.png" /> Kattakada-Kottor Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_8.png" /> Kilimanoor-Alamcode Road(SH46)<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_9.png" /> Kovalam First Approach Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_10.png" /> Kovalam Second Approach Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_11.png" /> Kundamankadavu Mandapathinkadavu Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_12.png" /> Nagaroor-Kallambalam Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_13.png" /> Nedumangad-Vembayam Road(SH47)<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_14.png" /> Nedumangadu Town Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_15.png" /> Nedumangadu-Shorlacode Road(SH03)<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_16.png" /> Pallipuram-Vembayam Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_17.png" /> Parashala-Panachamoodu Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_18.png" /> Parassala-Kollengode Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_19.png" /> Paripaly-Madathara Road(SH64)<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_20.png" /> Perumkidavila-Kunnathukal Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_21.png" /> Poojapura-Kundamankadavu Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_22.png" /> Poovar-Sankurutty Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_23.png" /> Poovar-Vizhinjam Raod<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_24.png" /> Thiruvananthapuram-Thenmala Road(SH02)<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_25.png" /> Thriuvananthapuram-Ponmudi Road(SH-45)<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_26.png" /> Trivandrum-Neyyardam Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_27.png" /> Trivandrum-Vizhinjam Road 1<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_28.png" /> Trivandrum-Vizhinjam Road 2<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_29.png" /> Trivandrum-Vizhinjam Road 3<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_30.png" /> Trivandrum-Vizhinjam Road 4<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_31.png" /> Vamanapuram-Chittar Road<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_32.png" /> Varkala-Paripally Road(SH64)<br />\
    <img src="styles/legend/PWDRoadListforNSVSurvey_2_33.png" /> <br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_Road_Start_EndNodes_1.setVisible(true);lyr_PWDRoadListforNSVSurvey_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Road_Start_EndNodes_1,lyr_PWDRoadListforNSVSurvey_2];
lyr_Road_Start_EndNodes_1.set('fieldAliases', {'Name': 'Name', 'Code': 'Code', 'Northing': 'Northing', 'Easting': 'Easting', 'Elevation': 'Elevation', 'Fid': 'Fid', 'Road_Name': 'Road_Name', 'Node_Type': 'Node_Type', 'Locatn_Nam': 'Locatn_Nam', 'CoomonNode': 'CoomonNode', });
lyr_PWDRoadListforNSVSurvey_2.set('fieldAliases', {'Road_Name': 'Road_Name', 'Road_Type': 'Road_Type', 'Road_Num': 'Road_Num', 'Rd_Str_Loc': 'Rd_Str_Loc', 'Rd_End_Loc': 'Rd_End_Loc', 'Fid': 'Fid', 'Dig_Length': 'Dig_Length', 'layer': 'layer', 'path': 'path', 'Dig_L_km': 'Dig_L_km', });
lyr_Road_Start_EndNodes_1.set('fieldImages', {'Name': 'TextEdit', 'Code': 'TextEdit', 'Northing': 'TextEdit', 'Easting': 'TextEdit', 'Elevation': 'TextEdit', 'Fid': 'TextEdit', 'Road_Name': 'TextEdit', 'Node_Type': 'TextEdit', 'Locatn_Nam': 'TextEdit', 'CoomonNode': 'TextEdit', });
lyr_PWDRoadListforNSVSurvey_2.set('fieldImages', {'Road_Name': 'TextEdit', 'Road_Type': 'TextEdit', 'Road_Num': 'TextEdit', 'Rd_Str_Loc': 'TextEdit', 'Rd_End_Loc': 'TextEdit', 'Fid': 'TextEdit', 'Dig_Length': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Dig_L_km': '', });
lyr_Road_Start_EndNodes_1.set('fieldLabels', {'Name': 'hidden field', 'Code': 'hidden field', 'Northing': 'hidden field', 'Easting': 'hidden field', 'Elevation': 'header label - visible with data', 'Fid': 'hidden field', 'Road_Name': 'inline label - visible with data', 'Node_Type': 'inline label - visible with data', 'Locatn_Nam': 'inline label - visible with data', 'CoomonNode': 'inline label - visible with data', });
lyr_PWDRoadListforNSVSurvey_2.set('fieldLabels', {'Road_Name': 'inline label - visible with data', 'Road_Type': 'inline label - visible with data', 'Road_Num': 'inline label - visible with data', 'Rd_Str_Loc': 'hidden field', 'Rd_End_Loc': 'hidden field', 'Fid': 'hidden field', 'Dig_Length': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Dig_L_km': 'inline label - visible with data', });
lyr_PWDRoadListforNSVSurvey_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});