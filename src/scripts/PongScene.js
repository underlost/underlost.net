import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export function initPongScene(target = ".webgl", cfg = {}) {
  const BG_COLOR = cfg.color1 ?? 0xffbcaa;
  const FG_COLOR = cfg.color2 ?? 0x4645d1;
  const BLOOM_LAYER = 1;

  // ——— Setup scene, camera, renderer ——————————————————————————————
  const canvas =
    typeof target === "string" ? document.querySelector(target) : target;
  if (!canvas) throw new Error("initPongScene: canvas not found");

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(BG_COLOR);

  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.set(0, 2, 10);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setClearColor(BG_COLOR);
  renderer.outputEncoding = THREE.sRGBEncoding;

  // ——— Composer + selective bloom setup —————————————————————————
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.0, // strength: 1 = faint glow
    0.75, // radius: how far it spreads
    0.0 // threshold: blooms everything above black
  );
  bloomPass.renderToScreen = true; // ← so the composer actually draws it
  composer.addPass(bloomPass);

  // ——— handle resize ——————————————————————————————————————
  function resize() {
    const w = canvas.parentElement?.clientWidth || 300;
    const h = canvas.parentElement?.clientHeight || 300;
    renderer.setSize(w, h);
    composer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener("resize", resize);
  resize();

  // ——— prep for selective-bloom hack ——————————————————————————
  const darkMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const savedMaterials = {};
  function darkenNonBloom(obj) {
    if (obj.isMesh && !obj.layers.test(camera.layers)) {
      savedMaterials[obj.uuid] = obj.material;
      obj.material = darkMat;
    }
  }
  function restoreMaterial(obj) {
    if (savedMaterials[obj.uuid]) {
      obj.material = savedMaterials[obj.uuid];
      delete savedMaterials[obj.uuid];
    }
  }

  // ——— game objects ————————————————————————————————————————
  const basicMat = new THREE.MeshBasicMaterial({ color: FG_COLOR });

  const paddleGeo = new THREE.BoxGeometry(0.5, 2.5, 0.5);
  const ballGeo = new THREE.SphereGeometry(0.3, 48, 48);
  const leftPaddle = new THREE.Mesh(paddleGeo, basicMat);
  const rightPaddle = new THREE.Mesh(paddleGeo, basicMat);
  const ball = new THREE.Mesh(ballGeo, basicMat);

  leftPaddle.position.x = -8;
  rightPaddle.position.x = 8;
  leftPaddle.layers.enable(BLOOM_LAYER);
  rightPaddle.layers.enable(BLOOM_LAYER);
  ball.layers.enable(BLOOM_LAYER);
  scene.add(leftPaddle, rightPaddle, ball);

  // Tron-style wireframe floor
  const floorGeo = new THREE.PlaneGeometry(20, 10, 20, 10);
  const floorMat = new THREE.MeshBasicMaterial({
    color: FG_COLOR,
    wireframe: true,
    transparent: true,
    opacity: 1.0,
  });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.5;
  floor.layers.enable(BLOOM_LAYER);
  scene.add(floor);

  // simple lighting (does not affect MeshBasicMaterial, but keeps scene balanced)
  const rectLight = new THREE.RectAreaLight(0xffffff, 3, 20, 10);
  rectLight.position.set(0, 5, 5);
  rectLight.lookAt(0, 0, 0);
  scene.add(rectLight);
  scene.add(new THREE.AmbientLight(0xffffff, 0.3));

  // ——— game logic ————————————————————————————————————————
  const PADDLE_LIMIT = 5,
    BALL_RADIUS = 0.3,
    WALL_Y = 5,
    WALL_X = 9;
  const vel = new THREE.Vector2(0.12, 0.12);
  function resetBall() {
    ball.position.set(0, 0, 0);
    vel.set(
      (Math.random() < 0.5 ? -1 : 1) * 0.12,
      (Math.random() * 0.1 + 0.07) * (Math.random() < 0.5 ? -1 : 1)
    );
  }
  resetBall();

  class PaddleAI {
    constructor(mesh, side) {
      this.mesh = mesh;
      this.side = side;
      this.nextDecision = 0;
      this.targetY = 0;
    }
    decide(t) {
      if (t < this.nextDecision) return;
      this.nextDecision = t + 0.14 + Math.random() * 0.12;
      const incoming = vel.x * this.side > 0;
      this.targetY = incoming
        ? THREE.MathUtils.clamp(
            ball.position.y + (Math.random() - 0.5) * 0.8,
            -PADDLE_LIMIT,
            PADDLE_LIMIT
          )
        : 0;
    }
    update(dt) {
      const diff = this.targetY - this.mesh.position.y;
      const step = 6 * dt;
      this.mesh.position.y += THREE.MathUtils.clamp(diff, -step, step);
      this.mesh.position.y = THREE.MathUtils.clamp(
        this.mesh.position.y,
        -PADDLE_LIMIT,
        PADDLE_LIMIT
      );
    }
  }
  const leftAI = new PaddleAI(leftPaddle, -1);
  const rightAI = new PaddleAI(rightPaddle, 1);
  const clock = new THREE.Clock();

  function animate() {
    const dt = clock.getDelta();
    const t = clock.elapsedTime;

    // ball movement + wall collisions
    ball.position.x += vel.x;
    ball.position.y += vel.y;
    if (
      ball.position.y + BALL_RADIUS > WALL_Y ||
      ball.position.y - BALL_RADIUS < -WALL_Y
    ) {
      vel.y *= -1;
    }
    if (ball.position.y - BALL_RADIUS < floor.position.y + 0.01) {
      ball.position.y = floor.position.y + BALL_RADIUS;
      vel.y *= -1;
    }

    // paddle collisions
    const hit = (p) =>
      Math.abs(ball.position.x - p.mesh.position.x) < BALL_RADIUS + 0.25 &&
      Math.abs(ball.position.y - p.mesh.position.y) < BALL_RADIUS + 1.25;
    if (hit(leftAI)) {
      vel.x = Math.abs(vel.x);
      vel.y += ((ball.position.y - leftAI.mesh.position.y) / 1.25) * 0.05;
    }
    if (hit(rightAI)) {
      vel.x = -Math.abs(vel.x);
      vel.y += ((ball.position.y - rightAI.mesh.position.y) / 1.25) * 0.05;
    }
    if (
      ball.position.x + BALL_RADIUS > WALL_X ||
      ball.position.x - BALL_RADIUS < -WALL_X
    ) {
      resetBall();
    }

    // AI movement
    leftAI.decide(t);
    leftAI.update(dt);
    rightAI.decide(t);
    rightAI.update(dt);

    // ——— selective-bloom render —————————————————————
    scene.traverse(darkenNonBloom);
    camera.layers.set(BLOOM_LAYER);
    composer.render(); // now actually draws the glow
    scene.traverse(restoreMaterial);

    // ——— composite normal scene on top —————————
    camera.layers.set(0);
    renderer.render(scene, camera);

    requestAnimationFrame(animate);
  }

  animate();

  return () => {
    window.removeEventListener("resize", resize);
    renderer.dispose();
  };
}
