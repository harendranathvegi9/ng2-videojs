import {Component, ElementRef, OnInit, OnDestroy} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
    
    <video id="example_video_1" class="video-js vjs-default-skin"
        controls preload="auto" width="640" height="264"
        poster="http://video-js.zencoder.com/oceans-clip.png"
        data-setup='{"example_option":true}'>
        <source src="http://video-js.zencoder.com/oceans-clip.mp4" type="video/mp4" />
        <source src="http://video-js.zencoder.com/oceans-clip.webm" type="video/webm" />
        <source src="http://video-js.zencoder.com/oceans-clip.ogv" type="video/ogg" />
        <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
    </video>
    
    `
})
export class AppComponent implements OnInit, OnDestroy {

    private _elementRef: ElementRef
    private videoJSplayer : VideoJSPlayer

    constructor(elementRef: ElementRef) {
        this._elementRef = elementRef
    }

    ngOnInit() {
        console.log('Init - Component initialized')

        this.videoJSplayer = videojs(document.getElementById('example_video_1'), {}, function() {
            // This is functionally the same as the previous example.
        });
    }

    ngOnDestroy() {
        console.log('Deinit - Destroyed Component')
        this.videoJSplayer.dispose()
    }
}