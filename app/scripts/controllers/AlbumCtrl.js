(function() {
     function AlbumCtrl() {
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();

 function AlbumCtrl() {
 	this.albumData = angular.copy(album.Picasso);
 }