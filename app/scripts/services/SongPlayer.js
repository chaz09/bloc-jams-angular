(function() {

        var SongPlayer = {};

        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        };

        /**
    var currentAlbum = Fixtures.getAlbum();
 * @desc hold current song number
 * @param {Object} song
 * @returns {Number}
 */
        SongPlayer.currentSong = null;
        /**
         * @desc Current playback time (in seconds) of currently playing song
         * @type {Number}
         */
        SongPlayer.currentTime = null;

        /**
         * @desc Buzz object audio file
         * @type {Object}
         */
        var currentBuzzObject = null;

        /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */


        SongPlayer.volume = function(song) {
            if (currentBuzzObject) {
                SongPlayer.setVolume()
            }
         };




        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                    SongPlayer.currentTime = currentBuzzObject.getTime();
                });
            });



            SongPlayer.currentSong = song;
        };



        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (currentSong !== song) {
                setSong(song);
                currentBuzzObject.play();
                song.playing = true;
            } else if (currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            }
        };
        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;


            SongPlayer.previous = function() {
                var currentSongIndex = getSongIndex(SongPlayer.currentSong);
                currentSongIndex--;

                if (currentSongIndex < 0) {
                    currentBuzzObject.stop();
                    SongPlayer.currentSong.playing = null;
                } else {
                    var song = currentAlbum.songs[currentSongIndex];
                    setSong(song);
                    playSong(song);
                }
            };
        };

        SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;

            if (currentSongIndex > 0) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };


        /**
         * @function playSong
         * @desc plays current Buzz object if property of song object is true
         * @param {Object} song
         */
        var playSong = function(song) {
            if (song.playing = true) {
                currentBuzzObject.play();

                return SongPlayer;
            }
        };


        var stopSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }


            /**
             * @function setCurrentTime
             * @desc Set current time (in seconds) of currently playing song
             * @param {Number} time
             */
            SongPlayer.setCurrentTime = function(time) {
                if (currentBuzzObject) {
                    currentBuzzObject.setTime(time);
                }
           




            angular
                .module('blocJams')
                .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);

})();
    onchange is an event handler. it executes some JavaScript code or function when its value has been modified

