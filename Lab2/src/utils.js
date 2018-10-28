const xFunction = (r, a) => (t) => r * (a + Math.cos(t)) * Math.cos(t);

const yFunction = (r, b) => (t) => r * (b + Math.cos(t)) * Math.sin(t);

const getCoordinateFunction = (fX, fY) => (r, a, b) => (t) => ({
    x: fX(r, a)(t),
    y: fY(r, b)(t)
});

const movePoint = (centerX, centerY) => (point) => ({
    x: point.x + centerX,
    y: point.y + centerY
});

const getModelDrawer = (context, n, accuracy, r, a, b) => (centerX, centerY) => {
    const f = getCoordinateFunction(xFunction, yFunction)(r, a, b);
    const angleStep = Math.PI * n / accuracy;

    let point = movePoint(centerX, centerY)(f(0));

    context.beginPath();
    context.moveTo(point.x, point.y);

    for (let i = 1; i < accuracy; i++) {
        point = movePoint(centerX, centerY)(f(i * angleStep));
        context.lineTo(point.x, point.y);
    }

    context.stroke();
};