function drawSky()
{

    //yellow
    var gradientD = ctx.createLinearGradient(w/2, 0, w/2, h * startC);
    gradientD.addColorStop(0, "rgba(255,82,68,0)");
    gradientD.addColorStop(1, colorD);
    ctx.fillStyle = gradientD;
    ctx.fillRect(0, 0, w, h);

    //red
    var gradientC = ctx.createLinearGradient(w/2, h * startD, w/2, h * startB-50);
    gradientC.addColorStop(0, "rgba(254,211,106,0)");
    gradientC.addColorStop(1, colorC);
    ctx.fillStyle = gradientC;
    ctx.fillRect(0, 0, w, h);
}
    
function drawSea()
{
    //mountains
    drawNewB(frameCount, speedB);

    for(let x = 0; x < w; x++ )
    {
        //B
        ctx.beginPath();
        ctx.strokeStyle = colorB;
        ctx.lineWidth = "2";
        ctx.moveTo(x, setB[x]);
        ctx.lineTo(x, h);
        ctx.stroke();
    }

    //sea
    ctx.fillStyle = colorA;
    ctx.fillRect(0, h * startA, w, h);
}




function drawStartingMap()
{
    for(let x = 0; x < w; x++ )
    {
        setD.push(h * startD);
        setC.push(h * startC);
        setB.push(h * startB);
        setA.push(h * startA);
    }

    //draw mountains at beginning
    for(let x = 0; x < w; x++)
    { drawNewB(x,speedB); }

}

//land
function drawNewB(thisFrame, shiftRate)
{
    setB.shift();
    if(thisFrame % shiftRate == 0)
    {
        //determine what the next line will be
        let rand = Math.random();
        //if(rand <= 0.1 && setB[setB.length-1] + 1 <= h * startA+6) { setB.push(setB[setB.length-1] + 2); }
        if(rand <= 0.5 && setB[setB.length-1] + 1 <= h * startA+6) { setB.push(setB[setB.length-1] + 1); }
        else if(setB[setB.length-1]-1 >= (startB * h) - 20) { setB.push(setB[setB.length-1] - 1); }
        else { setB.push(setB[setB.length-1]); }
    }
    else { setB.push(setB[setB.length-1]); }
}