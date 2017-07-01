(function() {
      function AlbumCtrl(Fixtures) {
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);

 })();

 function AlbumCtrl() {
 	this.albumData = Fixtures.getAlbum();
 }