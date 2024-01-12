draw = function() {
    //background color
    background(89, 155, 255);
    
    //sea floor
    noStroke();
    fill(0, 255, 60);
    rect(0, 350, 400, 100);
    
    //bubbles
    strokeWeight(2);
    stroke(62, 62, 189);
    fill(0, 221, 255);
    ellipse(185, random(0,196), 20, 20);
    ellipse(377, random(0,251), 20, 20);
    ellipse(289, random(0, 50), 20, 20);
    
    
    var drawFish = function(X,Y,bodyLength,bodyHeight,bodyColor,eyeSize, tailColor,tailHeight,tailWidth) {
    
            noStroke();
            fill(bodyColor);
            // body
            ellipse(X, Y, bodyLength, bodyHeight);
            // tail
            fill(tailColor);
            triangle(X-bodyLength/2, Y,
            X-bodyLength/2-tailWidth, Y-tailHeight,
            X-bodyLength/2-tailWidth, Y+tailHeight    );
            // eye
            fill(33, 33, 33);
            ellipse(X+bodyLength/4, Y, eyeSize, eyeSize);
        };
//Averies Fish!!
drawFish (131, 197, 100, 101, color(255, 255, 0), 33, color(255, 242, 0),77,60);
drawFish (297, 243, 144, 200, color(186, 63, 186), 11,color(122, 10, 122),29, 28);
drawFish (231, 59, 107, 75, color(12, 232, 34), 22,color (66, 189, 76), 33,33);
};
