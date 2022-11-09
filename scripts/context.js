"user strcit"

/** 
 @type {CanvasRenderingContext2D}
 */
let context

setupcotext();

export default context

function setupcotext(){
    let canvas=document.querySelector('canvas')
    canvas.width=window.innerWidth;
    canvas.heigth=window.innerHeight;
    context=canvas.getContext('2d');
}