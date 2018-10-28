const calculateRadius = (a) => a * Math.sqrt(3) / 3;

const degToRad = (degrees) => degrees * Math.PI / 180;

const getChristDrawer = (context) => (centerX, centerY, radius, angle) => {
    context.beginPath();

    // Horizontal line:
    context.moveTo(centerX - radius * Math.cos(angle), centerY - radius * Math.sin(angle));
    context.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
    // Vertical line:
    context.moveTo(centerX - radius * Math.cos(Math.PI / 2 + angle), centerY - radius * Math.sin(Math.PI / 2 + angle));
    context.lineTo(centerX + radius * Math.cos(Math.PI / 2 + angle), centerY + radius * Math.sin(Math.PI / 2 + angle));

    context.stroke();
};
