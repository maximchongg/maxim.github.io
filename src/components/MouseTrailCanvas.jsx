import { useEffect, useRef } from 'react';

function Node() {
  this.x = 0;
  this.y = 0;
  this.vy = 0;
  this.vx = 0;
}

function Oscillator(config) {
  this.init(config || {});
}

Oscillator.prototype = {
  init: function (config) {
    this.phase = config.phase || 0;
    this.offset = config.offset || 0;
    this.frequency = config.frequency || 0.001;
    this.amplitude = config.amplitude || 1;
    this.value = 0;
  },
  update: function () {
    this.phase += this.frequency;
    this.value = this.offset + Math.sin(this.phase) * this.amplitude;
    return this.value;
  },
  getValue: function () {
    return this.value;
  },
};

function Line(config) {
  this.init(config || {});
}

Line.prototype = {
  init: function (config) {
    this.spring = config.spring + 0.1 * Math.random() - 0.05;
    this.friction = config.settings.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    this.pos = config.pos;
    this.settings = config.settings;
    
    for (let i = 0; i < this.settings.size; i++) {
      const node = new Node();
      node.x = this.pos.x;
      node.y = this.pos.y;
      this.nodes.push(node);
    }
  },
  update: function () {
    let spring = this.spring;
    let node = this.nodes[0];
    
    node.vx += (this.pos.x - node.x) * spring;
    node.vy += (this.pos.y - node.y) * spring;
    
    for (let i = 0; i < this.nodes.length; i++) {
      node = this.nodes[i];
      
      if (i > 0) {
        const prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * this.settings.dampening;
        node.vy += prev.vy * this.settings.dampening;
      }
      
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= this.settings.tension;
    }
  },
  draw: function (ctx) {
    let x = this.nodes[0].x;
    let y = this.nodes[0].y;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    
    for (let i = 1; i < this.nodes.length - 2; i++) {
      const node = this.nodes[i];
      const next = this.nodes[i + 1];
      x = 0.5 * (node.x + next.x);
      y = 0.5 * (node.y + next.y);
      ctx.quadraticCurveTo(node.x, node.y, x, y);
    }
    
    const last = this.nodes[this.nodes.length - 2];
    const end = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(last.x, last.y, end.x, end.y);
    ctx.stroke();
    ctx.closePath();
  },
};

export function MouseTrailCanvas() {
  const canvasRef = useRef(null);
  const linesRef = useRef([]);
  const posRef = useRef({ x: 0, y: 0 });
  const oscillatorRef = useRef(null);
  const runningRef = useRef(true);
  const frameRef = useRef(null);

  const settings = {
    friction: 0.5,
    trails: 20,
    size: 50,
    dampening: 0.025,
    tension: 0.99,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Initialize oscillator for color
    oscillatorRef.current = new Oscillator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    // Initialize lines
    const initLines = () => {
      linesRef.current = [];
      for (let i = 0; i < settings.trails; i++) {
        linesRef.current.push(
          new Line({
            spring: 0.45 + (i / settings.trails) * 0.025,
            pos: posRef.current,
            settings: settings,
          })
        );
      }
    };

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Handle mouse/touch move
    const handleMove = (e) => {
      if (e.touches) {
        posRef.current.x = e.touches[0].pageX;
        posRef.current.y = e.touches[0].pageY;
      } else {
        posRef.current.x = e.clientX;
        posRef.current.y = e.clientY;
      }
    };

    // Render loop
    const render = () => {
      if (!runningRef.current) return;

      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = `hsla(${Math.round(oscillatorRef.current.update())}, 100%, 50%, 0.25)`;
      ctx.lineWidth = 1;

      for (let i = 0; i < settings.trails; i++) {
        const line = linesRef.current[i];
        line.update();
        line.draw(ctx);
      }

      frameRef.current = requestAnimationFrame(render);
    };

    // Initialize
    resizeCanvas();
    initLines();

    // Event listeners
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchstart', handleMove);

    // Start render loop
    render();

    // Cleanup
    return () => {
      runningRef.current = false;
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchstart', handleMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        mixBlendMode: 'screen',
      }}
    />
  );
}

export default MouseTrailCanvas;
