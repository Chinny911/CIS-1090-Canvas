import { makeNoise3D } from "fast-simplex-noise";
import { hsl, gray } from "../color.js";

let n = makeNoise3D();

/**
 * I call this shade function once for every pixel in the image, and 
 * set the color equal to whatever you return.
 * 
 * I call it 30 times a second so you can animate things
 * 
 * @param x - The x position in the image, from 0 (left) to 1 (right)
 * @param y - The y position in the image, from 0 (top) to 1 (bottom)
 * @param t - The time passed, in seconds
 * @returns The RGB color to display at the x,y location at time t
 */
function shade(x, y, t) {
    //❓❓ Question 2
    //❓❓ Question 3
    //❓❓ Question 4
    //fliping color of the background with the sun 
    return [1, 1, Math.sin(t) + 1.5]

}

/**
 * I call this draw function 30 times per second.
 * @param ctx - The 2d drawing context
 * @param t -The time in seconds
 */
function draw(ctx, t) {
    //See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    //creates cloud's shape and color 
    ctx.beginPath();
    ctx.arc(50, 50, 30, 0, 2 * Math.PI);
    ctx.arc(80, 45, 20, 0, 2 * Math.PI);
    ctx.arc(20, 60, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();

//width of house
ctx.lineWidth = 5;

// Walls of house
ctx.strokeRect(76, 160, 100, 90);


// Door of the house and color
ctx.fillRect(100, 187, 52, 60);
ctx.fillStyle = 'grey';
ctx.fill();

// Roof of the house and color
ctx.beginPath();
ctx.moveTo(55, 160);
ctx.lineTo(130, 90);
ctx.lineTo(200, 160);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = 'grey'
ctx.fill();

//sun shape, color, and animation
ctx.beginPath();
ctx.lineWidth = 2;
ctx.arc(225, 30, 30, 0, 10 * Math.sin(t));
ctx.arc(225, 30, 30, 0, 2 * Math.PI, 20 + 10 * Math.cos(t));
ctx.stroke();
ctx.fillStyle = 'yellow';
ctx.fill();

 
}


export default { name: "Sunny day flip", shade, draw }

