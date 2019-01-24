import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export interface CustomControlsOptions {
    track?: string;
    artist?: string;
    cover?: string;
    isPlaying?: boolean;
    dismissable?: boolean;
    hasPrev?: boolean;
    hasNext?: boolean;
    hasSkipForward?: boolean;
    hasSkipBackward?: boolean;
    skipForwardInterval?: number;
    skipBackwardInterval?: number;
    hasScrubbing?: boolean;
    hasClose?: boolean;
    album?: string;
    duration?: number;
    elapsed?: number;
    ticker?: string;
    playIcon?: string;
    pauseIcon?: string;
    prevIcon?: string;
    nextIcon?: string;
    closeIcon?: string;
    notificationIcon?: string;
}
/**
 * @name Custom Controls
 * @description
 * Custom controls for Cordova applications.
 * Display a 'media' notification with play/pause, previous, next buttons, allowing the user to control the play.
 * Handle also headset event (plug, unplug, headset button).
 *
 * @usage
 * ```typescript
 * import { CustomControls } from '@ionic-native/custom-controls/ngx';
 *
 * constructor(private customControls: CustomControls) { }
 *
 * ...
 *
 * this.customControls.create({
 *   track       : 'Time is Running Out',        // optional, default : ''
 *   artist      : 'Muse',                       // optional, default : ''
 *   cover       : 'albums/absolution.jpg',      // optional, default : nothing
 *   // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
 *   //           or a remote url ('http://...', 'https://...', 'ftp://...')
 *   isPlaying   : true,                         // optional, default : true
 *   dismissable : true,                         // optional, default : false
 *
 *   // hide previous/next/close buttons:
 *   hasPrev   : false,      // show previous button, optional, default: true
 *   hasNext   : false,      // show next button, optional, default: true
 *   hasClose  : true,       // show close button, optional, default: false
 *
 * // iOS only, optional
 *   album       : 'Absolution',     // optional, default: ''
 *   duration : 60, // optional, default: 0
 *   elapsed : 10, // optional, default: 0
 *   hasSkipForward : true,  // show skip forward button, optional, default: false
 *   hasSkipBackward : true, // show skip backward button, optional, default: false
 *   skipForwardInterval: 15, // display number for skip forward, optional, default: 0
 *   skipBackwardInterval: 15, // display number for skip backward, optional, default: 0
 *   hasScrubbing: false, // enable scrubbing from control center and lockscreen progress bar, optional
 *
 *   // Android only, optional
 *   // text displayed in the status bar when the notification (and the ticker) are updated, optional
 *   ticker    : 'Now playing "Time is Running Out"',
 *   // All icons default to their built-in android equivalents
 *   playIcon: 'media_play',
 *   pauseIcon: 'media_pause',
 *   prevIcon: 'media_prev',
 *   nextIcon: 'media_next',
 *   closeIcon: 'media_close',
 *   notificationIcon: 'notification'
 *  });
 *
 *  this.customControls.subscribe().subscribe(action => {
 *
 *    function events(action) {
 *      const message = JSON.parse(action).message;
 *      	switch(message) {
 *      		case 'custom-controls-next':
 *      			// Do something
 *      			break;
 *      		case 'custom-controls-previous':
 *      			// Do something
 *      			break;
 *      		case 'custom-controls-pause':
 *      			// Do something
 *      			break;
 *      		case 'custom-controls-play':
 *      			// Do something
 *      			break;
 *      		case 'custom-controls-destroy':
 *      			// Do something
 *      			break;
 *
 *          // External controls (iOS only)
 *          case 'custom-controls-toggle-play-pause' :
 *      			// Do something
 *      			break;
 *          case 'custom-controls-seek-to':
 *            const seekToInSeconds = JSON.parse(action).position;
 *            this.customControls.updateElapsed({
 *              elapsed: seekToInSeconds,
 *              isPlaying: true
 *            });
 *            // Do something
 *            break;
 *          case 'custom-controls-skip-forward':
 *            // Do something
 *            break;
 *          case 'custom-controls-skip-backward':
 *            // Do something
 *            break;
 *
 *      		// Headset events (Android only)
 *      		// All media button events are listed below
 *      		case 'custom-controls-media-button' :
 *      			// Do something
 *      			break;
 *      		case 'custom-controls-headset-unplugged':
 *      			// Do something
 *      			break;
 *      		case 'custom-controls-headset-plugged':
 *      			// Do something
 *      			break;
 *      		default:
 *      			break;
 *      	}
 *      }
 *
 *  this.customControls.listen(); // activates the observable above
 *
 *  this.customControls.updateIsPlaying(true);
 *
 *
 * ```
 * @interfaces
 * CustomControlsOptions
 */
export declare class CustomControls extends IonicNativePlugin {
    /**
     * Create the media controls
     * @param options {CustomControlsOptions}
     * @returns {Promise<any>}
     */
    create(options: CustomControlsOptions): Promise<any>;
    /**
     * Destroy the media controller
     * @returns {Promise<any>}
     */
    destroy(): Promise<any>;
    /**
     * Subscribe to the events of the media controller
     * @returns {Observable<any>}
     */
    subscribe(): Observable<any>;
    /**
     * Start listening for events, this enables the Observable from the subscribe method
     */
    listen(): void;
    /**
     * Toggle play/pause:
     * @param isPlaying {boolean}
     */
    updateIsPlaying(isPlaying: boolean): void;
    /**
     * Update elapsed time, optionally toggle play/pause:
     * @param args {Object}
     */
    updateElapsed(args: {
        elapsed: string;
        isPlaying: boolean;
    }): void;
    /**
     * Toggle dismissable:
     * @param dismissable {boolean}
     */
    updateDismissable(dismissable: boolean): void;
}
