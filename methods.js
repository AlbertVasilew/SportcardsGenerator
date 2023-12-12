// methods.js
const setRating = (ctx, color, value) => {
    ctx.font = 'bold 35px Arial';
    ctx.fillStyle = color;
    ctx.fillText(value, 90, 115);
};

const setPosition = (ctx, color, value) => {
    ctx.font = '30px Arial';
    ctx.fillStyle = color;
    ctx.fillText(value, 90, 150);
};
