function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    let origoX = 0;
    let origoY = canvas.height * .5;

    let peakX = canvas.clientWidth;
    let peakY = 0;

    

    for (i = 0; i < canvas.width; i++) {

        if (origoX % 4 === 0) {

            peakX = 0;
            peakY = 0;

        } else if (origoX % 4 === 1) {

            peakX = canvas.width;
            peakY = 0;

        } else if (origoX % 4 === 2) {

            peakX = 0;
            peakY = canvas.height;

        } else if (origoX % 4 === 3) {

            peakX = canvas.width;
            peakY = canvas.height;

        }

        context.beginPath();

        context.moveTo(origoX,origoY);
        context.lineTo(peakX,peakY);
        context.strokeStyle = 'rgba(0,0,255,.5)';
        context.stroke();

        origoX += 1;
        
        
    }

    

}

window.addEventListener("load", pageLoaded);