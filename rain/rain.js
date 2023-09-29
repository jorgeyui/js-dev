window.addEventListener("load", ()=> {
    var image = document.getElementById("background");
    var engine = new RainyDay({
        image: image,
        blur:10,
        opacity: 1,
        gravityAngle: Math.PI / 2,
        gravityAngleVariance: 0,
    });
    engine.rain([
        [1, 2, 8000]
    ]);
    engine.rain([
        [3, 3, 0.88],
        [5, 5, 0.9],
        [6, 2, 1]
    ], 100);
    image.crossOrigin = "anonymous";
    image.src ="https://a.cdn-hotels.com/gdcs/production142/d1399/f8f4ac45-1083-49d2-8cfa-1bf5939bc3ac.jpg";
});


