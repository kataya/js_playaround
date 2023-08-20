 
# JavaScript Playground

気になる JavaScript のコードを触ってみたコード集

[src] - コードの格納先
  
## meshcode-popup.html

* [経度緯度から1次～4次のメッシュコードの計算を行い、結果を確認できるサンプルアプリ](https://kataya.github.io/js_playaround/src/meshcode-popup.html)

  本サンプルは、マップ上でクリックした地点の経度、緯度の情報から1次～4次のメッシュコードを計算し、ポップアップに計算結果の1次～4次のメッシュコードを表示します。  
  また、計算結果の確認用に、既存のフィーチャレイヤーから該当の4次メッシュをコードでクエリし、結果をマップ上にグラフィックとテキストのシンボルとして表示と、Web Speech API で喋らせる機能もついています。  

## custom-gl-tiles-tileinfo.html

* [XYZ タイル のLODs(z), Tile Columuns(x), Tile Rows(y) の座標をマップで対話的に確認できるサンプルアプリ](https://kataya.github.io/js_playaround/src/custom-gl-tiles-tileinfo.html)

  WebGL でタイルを表示する実験的な[Tiling support for custom WebGL layer views](https://developers.arcgis.com/javascript/latest/sample-code/custom-gl-tiles/) のサンプルを拡張し、[タイル座標確認ページ](https://maps.gsi.go.jp/development/tileCoordCheck.html#5/35.362/138.731) のようにXYZ タイルの番号や、Web メルカトルと経度緯度でのタイルの四隅の座標を一覧に表示します。また、マップ上でクリックした地点のXYZ タイルの番号や、Web メルカトルと経度緯度での座標をポップアップで表示します。  

  ![custom-gl-tiles-tileinfo](https://github.com/kataya/js_playaround/blob/master/images/app_custom-gl-tiles-tileinfo.gif?raw=true)

  本サンプルは、以下のサンプルやWeb ページの情報を組み合わせて作成したサンプルアプリケーションです。  
  * [Tiling support for custom WebGL layer views](https://developers.arcgis.com/javascript/latest/sample-code/custom-gl-tiles/)  
  Web メルカトルで使われている XYZ タイルの格子をBaseLayerViewGL2D クラスを拡張してWebGL で描画する実験的なサンプル。今回のアプリはこのサンプルをもとに、他の機能を追加して作成しています。
  * [FeatureTable widget with popup interaction](https://developers.arcgis.com/javascript/latest/sample-code/widgets-featuretable-popup-interaction/)  
  FeatureTable widget を使用したテーブル表示のサンプル。今回はUI のスタイル定義 とtableContainer の表示/非表示の切り替え部分を利用しています。
  * [Mercator](https://wiki.openstreetmap.org/wiki/Mercator)  
  このサイトは、Web メルカトルと経度緯度 への変換の計算式が書かれているので、Arcade式を使った計算や他言語での計算の場合に利用可能です。今回のアプリでのWeb メルカトルから経度緯度への変換は ["esri/geometry/support/webMercatorUtils"](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-support-webMercatorUtils.html#xyToLngLat) で変換して、結果をテーブルに出力しています。
  * [Watch for changes]()  
  イベントのリッスンと、プロパティの変更を監視する方法を示したサンプル。今回はプロパティの変更の監視と、マップクリックのイベント等の機能を追加するために参考にしました。
  * [Intro to widgets using BasemapToggle]()  
  BasemapToggle wigdet を使った背景地図の切り替えのサンプル。デフォルトの"satellite" と"地理院タイル(標準地図)" の切り替え操作の機能を追加するために参考にしました。
  * [Slippy map tilenames](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames)  
  このサイトは、/z/x/y タイルのタイル番号や経度緯度の各種言語での計算式が掲載されています。

  
## js331_drawinfo_v2.html, js414_drawinfo_v2.html, js22_drawinfo_v2.html

* [ArcGIS API for JavaScript 3.x 系でFeuatuerLayer の描画パフォーマンス表示](https://kataya.github.io/js_playaround/src/js331_drawinfo_v2.html)

  ArcGIS API for JavaScript 3.31 で、FeuatuerLayer の描画パフォーマンスを表示するサンプルアプリ。


* [ArcGIS API for JavaScript 4.x 系でFeuatuerLayer の描画パフォーマンス表示 - API 4.14](https://kataya.github.io/js_playaround/src/js414_drawinfo_v2.html)

  ArcGIS API for JavaScript 4.14 で、FeuatuerLayer の描画パフォーマンスを表示するサンプルアプリ。

  ※ 4.x 系は現在主軸の開発APIで、バージョンアップごとにパフォーマンス改善にも注力されている。4.13 -> 4.14でも GPUやWebGLのパフォーマンスが[改善](https://developers.arcgis.com/javascript/latest/guide/release-notes/)。


* [ArcGIS API for JavaScript 4.x 系でFeuatuerLayer の描画パフォーマンス表示 - API 4.22](https://kataya.github.io/js_playaround/src/js422_drawinfo_v2.html)

  ArcGIS API for JavaScript 4.22 までのバージョンアップの過程で、更にパフォーマンス改善。

  
  ![js422_drawinfo_v2](https://github.com/kataya/js_playaround/blob/branch-image/images/app_js4x_drawinfo.png?raw=true)
  

## UsePortalBasemaps.html, UsePortalBasemaps_en.html

* [日本語表記のベクタータイルのベースマップとギャラリーを利用するサンプルアプリ](https://kataya.github.io/js_playaround/src/UsePortalBasemaps.html)

* [英語表記のベクタータイルのベースマップとギャラリーを利用するサンプルアプリ](https://kataya.github.io/js_playaround/src/UsePortalBasemaps_en.html)
  
  ArcGIS API for JavaScript 4.x で、日本語表記/英語表記のベクター タイルベースマップとベースマップギャラリーを利用する２つのサンプルアプリ。

  ![UsePortalBasemaps_en](https://github.com/kataya/js_playaround/blob/branch-image/images/app_UsePortalBasemaps_en.png?raw=true)
  
## CutsomBasemapGallery.html
  
* [地理院タイル等もベースマップギャラリーから利用するサンプルアプリ](https://kataya.github.io/js_playaround/src/CutsomBasemapGallery.html)

  ArcGIS API for JavaScript 4.x で、Custom BasemapGallery として、地理院タイル等もベースマップギャラリーで利用するサンプルアプリ。


## SwipeWSMapSatellite.html
  
* [World Street Map の Roads と Buildings を ベースマップを切り替えながら、スワイプや透過を変更して利用するサンプルアプリ](https://kataya.github.io/js_playaround/src/SwipeWSMapSatellite.html)

  ArcGIS API for JavaScript 4.x で、ベクタータイルの利点を活用し、World Street Map の Roads と Buildings のみのスタイルを利用し、Satellite や地理院タイルとスワイプして確認できるサンプルアプリ。


## SwipeGSIStdVectorMap.html
  
* [地理院地図Vector風の標準地図 を ベースマップを切り替えながら、スワイプや透過を変更して利用するサンプルアプリ](https://kataya.github.io/js_playaround/src/SwipeGSIStdVectorMap.html)

  ArcGIS API for JavaScript 4.18 から Expression式　などAPIで非対応だったベクタータイルのスタイルに対応したため、地理院地図Vectorの標準地図 と、Satellite や地理院タイルとスワイプして確認できるサンプルアプリ。遊びでレイヤーの透過率を1%ずつ変更して、アハ体験ができる機能も追加してみました。
  ![SwipeGSIStdVectorMap](https://github.com/kataya/js_playaround/blob/branch-image/images/app_SwipeGSIStdVectorMap.png?raw=true)

## TmsTile.html

* [レイヤーを拡張して「Tile Map Service」のサービスを表示](https://community.esri.com/t5/arcgis-%E9%96%8B%E7%99%BA%E8%80%85%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3-documents/%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC%E3%82%92%E6%8B%A1%E5%BC%B5%E3%81%97%E3%81%A6-tile-map-service-%E3%81%AE%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%92%E8%A1%A8%E7%A4%BA/ta-p/915294) のソースコード
  
  サンプルとして、今昔マップ on the Web のTile Map Service を表示。

## worker-example.html, worker-buffer_v403.html, worker-buffer_v425.html
  
  * [API リファレンスにある最も簡単なworker を使ったアプリ](https://kataya.github.io/js_playaround/src/worker-example.html), [worker を使ったAPI Version 4.25 へ書き換えしたバッファー作成アプリ](https://kataya.github.io/js_playaround/src/worker-buffer_v425.html)  
  "esri/core/workers" (Web Worker) を利用してバックグラウンドのスレッドでの処理を最初にやってみたもの。[workers の API リファレンス](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-workers.html) や、Esri スペインの[2017年のweb-worker のデモアプリ](https://github.com/esri-es/conferencia-usuarios/tree/cb2aa513b4a6c77254a223778508de8238239b7e/2017/subiendo-nivel/demos/web-workers) をAPI Version 4.25 で動作するように改良した。
  

## layers-feature-Collection.html
  
  * [client-side graphics から FeatureLayer を作成・更新するサンプルアプリ](https://kataya.github.io/js_playaround/src/layers-feature-Collection.html)  
  API Version 4.11 からはGeoJSONLayer が追加されたので、GeoJSON を簡単にレイヤーとして追加することができますが、API Version 4.6 のときの「Create a FeatureLayer with client-side graphics」のサンプルをもとに、地震の観測情報を、FeatureLayer のsource を入替によって更新を実現しているサンプルです。API Version も 4.25 へ更新してあります。  
  また、2023/02/09 にgraphics の作成処理を"esri/core/workers" (Web Worker) を利用してバックグラウンドのスレッドで行うように改良しました。  

## table-text-draw-speak.html
  
  * [テーブルでクリックしたセルの値を、グラフィックとして文字の描画 と Web Speech API で喋らせるアプリ](https://kataya.github.io/js_playaround/src/table-text-draw-speak.html)  
  マウス操作時の選択したセルの列によって、英語と日本語を喋り分けます。※このアプリでは地図は特に意味ありません。


## js3x_4x_mixmap.html

* [js3x_4x_mixmap](https://kataya.github.io/js_playaround/src/js3x_4x_mixmap.html)

  ArcGIS API for JavaScript 4.x と 3.x の両方のライブラリを Map と Scene の連携

  以下の blog の動画内のコードを拡張:

  http://odoe.net/blog/void-your-arcgis-api-for-javascript-warranty/


## BLTOXY.html, XYTOBL.html

* [BLTOXY](https://kataya.github.io/js_playaround/src/BLTOXY.html) 
  
  国土地理院時報 2011 No.121 の「Gauss-Krüger 投影における経緯度座標及び平面直角座標相互間の座標換算についてのより簡明な計算方法」の４．１ 経緯度⇒直角座標換算プログラム例 をもとに作成
  
  
* [XYTOBL](https://kataya.github.io/js_playaround/src/XYTOBL.html)
  
  国土地理院時報 2011 No.121 の「Gauss-Krüger 投影における経緯度座標及び平面直角座標相互間の座標換算についてのより簡明な計算方法」の４．２ 直角座標⇒経緯度換算プログラム例 をもとに作成
