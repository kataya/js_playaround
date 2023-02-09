// Help リソース
// https://developers.arcgis.com/javascript/latest/api-reference/esri-core-workers.html
define([], () => {
//define([], function(){
//define(["esri/core/promiseUtils"], function(promiseUtils){
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
    };
});
