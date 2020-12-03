if (typeof registerPaint !== 'undefined') {
  class AvatarPolygon {
    static get inputProperties() {
      return [
        '--avatar-sides',
        '--avatar-angle'
      ]
    }

    paint(ctx, geom, properties) {
      const numSides = parseInt(properties.get('--avatar-sides')) || 12;
      const rotate = parseInt(properties.get('--avatar-angle')) || 0;

      const center = {
        x: geom.width / 2,
        y: geom.height / 2
      };
      const radius = Math.min(geom.width, geom.height) / 2;

      ctx.translate(geom.width / 2, geom.height / 2);
      ctx.rotate(rotate * Math.PI / 180);
      ctx.translate(-geom.width / 2, -geom.height / 2);

      ctx.beginPath();

      let xPos = center.x + radius * Math.cos(2 * Math.PI * 0 / numSides);
      let yPos = center.y + radius * Math.sin(2 * Math.PI * 0 / numSides);
      ctx.moveTo(xPos,yPos);

      for (let i = 1; i <= numSides; i++) {
        xPos = center.x + radius * Math.cos(2 * Math.PI * i / numSides);
        yPos = center.y + radius * Math.sin(2 * Math.PI * i / numSides);
        ctx.lineTo(xPos,yPos);
      }

      ctx.closePath();

      // fill
      ctx.fillStyle = 'black';
      ctx.fill();
    }
  }

  registerPaint('avatar-polygon', AvatarPolygon);
}