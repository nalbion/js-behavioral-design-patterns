const handler = require('../task');

test('draw a car', () => {

    // handler({ method: 'POST', url: 'https://example.com/api/size?x=30&y=30' });
    handler({ method: 'POST', url: 'https://example.com/api/move?direction=absolute&x=10&y=50' });
    handler({ method: 'PATCH', url: 'https://example.com/api/pen?color=black' });

    // front
    handler({ method: 'POST', url: 'https://example.com/api/move?direction=reverse&amount=10' });
    handler({ method: 'POST', url: 'https://example.com/api/turn?direction=anti-clockwise&amount=90' });
    // bonnet
    handler({ method: 'POST', url: 'https://example.com/api/move?direction=forward&amount=10' });
    handler({ method: 'POST', url: 'https://example.com/api/turn?direction=anti-clockwise&amount=45' });
    // windscreen
    handler({ method: 'POST', url: 'https://example.com/api/move?direction=forward&amount=10' });
    handler({ method: 'POST', url: 'https://example.com/api/turn?direction=clockwise&amount=45' });
    // roof
    handler({ method: 'POST', url: 'https://example.com/api/move?direction=forward&amount=10' });
    handler({ method: 'POST', url: 'https://example.com/api/turn?direction=clockwise&amount=45' });
    // hatch
    handler({ method: 'POST', url: 'https://example.com/api/move?direction=forward&amount=10' });
    handler({ method: 'POST', url: 'https://example.com/api/turn?direction=clockwise&amount=45' });
    // tail
    handler({ method: 'POST', url: 'https://example.com/api/move?direction=forward&amount=10' });
    handler({ method: 'POST', url: 'https://example.com/api/turn?direction=clockwise&amount=90' });
    // bottom
    handler({ method: 'POST', url: 'https://example.com/api/move?direction=absolute&x=10&y=50' });

    const svgResponse = handler({ method: 'GET', url: 'https://example.com/api/svg' });

    console.info(`document.body.innerHTML=\`${svgResponse.body}\``);
})