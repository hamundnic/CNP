

export class SchoolCamera{
isopenVideo=true;
 constraints = window['constraints'] = {audio: true, video: true};
constructor(){

    
 navigator['getUserMedia'] = navigator['getUserMedia'] || 
    
 navigator['webkitGetUserMedia'] || navigator['webkitGetUserMedia'];

}
handleSuccess(stream) {
    const video = document.querySelector('video');
    const videoTracks = stream.getVideoTracks();
    console.log('Got stream with constraints:', this.constraints);
    console.log(`Using video device: ${videoTracks[0].label}`);
    window['stream'] = stream; // make variable available to browser console
    video.srcObject = stream;
    }
    
    
    handleError(error) {
    if (error.name === 'ConstraintNotSatisfiedError') {
    const v = this.constraints.video;
    this.errorMsg(`The resolution ${v['width']['exact']}x${v['heigth']['exact']} px is not supported by your device.`, error);
    } else if (error.name === 'PermissionDeniedError') {
    this.errorMsg('Permissions have not been granted to use your camera and ' +
    'microphone, you need to allow the page access to your devices in ' +
    'order for the demo to work.', error);
    }
    this.errorMsg(`getUserMedia error: ${error.name}`, error);
    }
    errorMsg(msg, error) {
    const errorElement = document.querySelector('#errorMsg');
    errorElement.innerHTML += `<p>${msg}</p>`;
    if (typeof error !== 'undefined') {
    console.error(error);
    }
    }
    
    async  init(e) {
    try {
    const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
    this.handleSuccess(stream);
    e.target.disabled = true;
    } catch (e) {
    this.handleError(e);
    }
    }
    
   


}