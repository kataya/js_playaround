// Help リソース
// https://developers.arcgis.com/javascript/latest/api-reference/esri-core-workers.html
define([
    "esri/geometry/Point",
    "esri/Graphic"
], (Point, Graphic) => {
    return {
        //funcname1: ( {param} ) =>{},
        //funcname2: ( {param} ) =>{}
        getEarthquakeGraphics: ( {geoJson} ) => { //引数の{}忘れないように!
            
            const graphicsArray = [];
            geoJson.features.forEach((function(feature, i){
                const pointGraphic = new Graphic({
                    geometry: new Point({
                        x: feature.geometry.coordinates[0],
                        y: feature.geometry.coordinates[1],
                        z: feature.geometry.coordinates[2] // Zはdepthを設定
                    }),
                    // select only the attributes you care about
                    attributes: {
                        ObjectID: i,
                        title: feature.properties.title,
                        type: feature.properties.type,
                        place: feature.properties.place,
                        depth: feature.geometry.coordinates[2] + " km",
                        time: feature.properties.time,
                        mag: feature.properties.mag,
                        mmi: feature.properties.mmi,
                        felt: feature.properties.felt,
                        sig: feature.properties.sig,
                        url: feature.properties.url
                    }
                });
                graphicsArray.push(pointGraphic.toJSON()); // worker で返却するにはJSON にする
            }));
            
            return graphicsArray;
        }
    };
});

