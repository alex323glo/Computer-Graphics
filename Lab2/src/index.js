const simpleContext = document.getElementById('simple').getContext('2d');
const ornamentContext = document.getElementById('ornament').getContext('2d');
const muarContext = document.getElementById('muar').getContext('2d');

const params = {
    width: 1000,
    centerX: 300,
    centerY: 300,

    accuracy: 10000,
    R: 100,
    N: 100,

    A: 1,
    B: 1,

    R1: 100,
    N1: 300,

    R2: 150,
    N2: 200,
};

const drawSimple = (simpleDrawer, centerX, centerY) => simpleDrawer(centerX, centerY);

const drawOrnament = (ornamentDrawer, centerX, centerY) => (n, r) => {
    const angleStep = Math.PI * 2 / n;
    for (let i = 0; i < n; i++) {
        ornamentDrawer(
            centerX + r * Math.cos(angleStep * i),
            centerY + r * Math.sin(angleStep * i)
        );
    }
};

const drawMuar = (muarDrawer, centerX, centerY) => (r, l, n1) => {
    const scale = Math.PI * 3 / n1;
    const step = l / n1;
    for (let i = 0; i < n1; i++) {
        muarDrawer(
            centerX + i * step,
            centerY + r * Math.cos(scale * i)
        );
    }
};


const simpleDrawer =    getModelDrawer(simpleContext, params.N, params.accuracy, params.R, params.A, params.B);
const ornamentDrawer =  getModelDrawer(ornamentContext, params.N, params.accuracy, params.R, params.A, params.B);
const muarDrawer =      getModelDrawer(muarContext, params.N, params.accuracy, params.R, params.A, params.B);

drawSimple(simpleDrawer, params.centerX, params.centerY);
drawOrnament(ornamentDrawer, params.centerX, params.centerY)(params.N, params.R1);
drawMuar(muarDrawer, params.centerX, params.centerY)(params.R2, params.width, params.N2);