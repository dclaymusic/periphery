// function drawClouds()
// {
//     ctx.beginPath();
//     ctx.arc(300, 200, randomInt(10)+2, 0, 2 * Math.PI);
//     ctx.fillStyle = "rgba(254,211,106,0.5)"; // top sky yellow
//     ctx.fill();
// }

// function drawNewClouds()
// {


// }

function drawSurfaceDust()
{
    ctx.fillStyle = "rgba(254,211,106,0.5)"; // top sky yellow
    for (let i = 20; i--;) { 
        ctx.beginPath();
        ctx.arc(randomInt(width), randomInt(height), randomInt(10), 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}

function randomInt(max)
{
    let rand_val = Math.floor(Math.random() * Math.floor(max + 1))
    return rand_val;
}
