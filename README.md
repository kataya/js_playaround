 
# JavaScript Playground

気になる JavaScript のコードを触ってみたコード集

[src] - コードの格納先

## custom-gl-tiles-tileinfo.html

* [Web メルカトル のタイル情報 (LODs , Tile Rows, Tile Columuns, タイルの四隅の座標) をマップと対話的に確認できるサンプルアプリ](https://kataya.github.io/js_playaround/src/custom-gl-tiles-tileinfo.html)

  XYZ タイルの格子をBaseLayerViewGL2D クラスを拡張してWebGL で描画する[実験的なサンプル](https://developers.arcgis.com/javascript/latest/sample-code/custom-gl-tiles/) を拡張し、タイル情報（id, level, row, column, xmin, ymin, xmax, ymax）の情報をテーブルで表示します。
  Web メルカトルのxmin, ymin, xmax, ymax に対応した経度と緯度も一緒に表示します。また、マップ上でクリックした地点のWeb メルカトルのXY座標と、変換した経度と緯度の情報をポップアップ表示します。
  
  ![custom-gl-tiles-tileinfo](https://github.com/kataya/js_playaround/blob/branch-image/images/app_custom-gl-tiles-tileinfo.png?raw=true)
  
  
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
