/*
define([
    "esri/config",
    "esri/core/promiseUtils",
    "esri/geometry/geometryEngine",
    "esri/geometry/Extent",
    "esri/geometry/Polygon"
  ],
  function(esriConfig, promiseUtils, geometryEngine, Extent, Polygon) {
    class MyWorker {
      magic({ extent }, { proxy }){
        proxy.connection.invoke("progress", "starting");
        const area = Polygon.fromExtent(Extent.fromJSON(extent));
        proxy.connection.invoke("progress", "polygon created");
        const centroid = area.centroid;
        const buffers = [];
        proxy.connection.invoke("progress", "starting buffer creation");
        for (let i = 100; i <= 100000; i = i + 100){
          const ptBuff = geometryEngine.geodesicBuffer(centroid, i, "feet");
          const data = ptBuff.toJSON();
          buffers.push(data);
  
        }
        proxy.connection.invoke("progress", "creation done");
        return promiseUtils.resolve({ data: buffers });
      }
    }
  
    return MyWorker;
  });
*/
define([
  "esri/config",
  "esri/core/promiseUtils",
  "esri/geometry/geometryEngine",
  "esri/geometry/Extent",
  "esri/geometry/Polygon",
  "esri/geometry/Point",
  "esri/request"
], function(esriConfig, promiseUtils, geometryEngine, Extent, Polygon, Point, esriRequest) {
    return {
        // this function can be invoked from the main thread
        // 引数の間違い: function(number) -> function(numbers)
        getMaxNumber: function(numbers) {
            return Math.max.apply(null, numbers);
        }
        ,// もう一つfunction を追加
        getSum: function(numbers) {
            let sum = 0;
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            return sum;
        }
        ,// 書き換えしたmagic function
        magic: function( {extent} ) { //引数の{}忘れずに!
            const area = Polygon.fromExtent(Extent.fromJSON(extent));
            const centroid = area.centroid;
            const buffers = [];
            for (let i = 100; i <= 100000; i = i + 100){
                const ptBuff = geometryEngine.geodesicBuffer(centroid, i, "feet");
                const data = ptBuff.toJSON();
                buffers.push(data);
            }
            return buffers;
        }


    };
});
