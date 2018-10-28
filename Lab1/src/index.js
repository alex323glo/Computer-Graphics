const simpleContext     = document.getElementById('simple').getContext('2d');
const ornamentContext   = document.getElementById('ornament').getContext('2d');
const muarContext       = document.getElementById('muar').getContext('2d');

const params = {
    width: 1000,
    centerX: 300,
    centerY: 300,
    A: 350,
    R: 200,
    R1: 100,
    N: 100,
    N1: 300
};

const drawSimple = (simpleDrawer, centerX, centerY, radius, angle) => {
    simpleDrawer(centerX, centerY, radius, angle);
    // simpleDrawer(centerX - radius / 2, centerY - radius / 2, radius / Math.sqrt(2), Math.PI / 4);
    // simpleDrawer(centerX + radius / 2, centerY - radius / 2, radius / Math.sqrt(2), Math.PI / 4);
    // simpleDrawer(centerX + radius / 2, centerY + radius / 2, radius / Math.sqrt(2), Math.PI / 4);
    // simpleDrawer(centerX - radius / 2, centerY + radius / 2, radius / Math.sqrt(2), Math.PI / 4);
};

const drawOrnament = (ornamentDrawer, centerX, centerY, radius1) => (n, radius) => {
    const angleStep = Math.PI * 2 / n;
    for (let i = 0; i < n; i++) {
        drawSimple(
            ornamentDrawer,
            centerX + radius * Math.cos(angleStep * i),
            centerX + radius * Math.sin(angleStep * i),
            radius1,
            angleStep * i * (-1)
        );
    }
};

const drawMuar = (muarDrawer, centerX, centerY, radius) => (l, n) => {
    const angleStep = 3 * Math.PI / n;
    const step = l / n;
    for (let i = 0; i < n; i++) {
        muarDrawer(
            centerX + step * i,
            centerY + radius * Math.sin(i * angleStep),
            radius,
            angleStep * i
        );
    }
};

params.R = calculateRadius(params.A);

const simpleChristDrawer = getChristDrawer(simpleContext);
drawSimple(simpleChristDrawer, params.centerX, params.centerY, params.R, 0);

const ornamentChristDrawer = getChristDrawer(ornamentContext);
drawOrnament(ornamentChristDrawer, params.centerX, params.centerY, params.R)(params.N, params.R1);

const muarChristDrawer = getChristDrawer(muarContext);
// drawMuar(muarChristDrawer, params.centerY - 150, params.centerY + 200, params.R)(params.width, params.N1);
drawMuar(muarChristDrawer, params.centerY - 150, params.centerY + 200, params.R)(params.width, params.N1);