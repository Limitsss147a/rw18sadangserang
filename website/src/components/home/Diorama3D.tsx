"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Diorama3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 460;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(14, 12, 16);
    camera.lookAt(0, 1.5, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff6e5, 1.4);
    dirLight.position.set(15, 25, 10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 50;
    const d = 12;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0x70a5e8, 0.6);
    fillLight.position.set(-15, 10, -10);
    scene.add(fillLight);

    // World Group
    const world = new THREE.Group();
    scene.add(world);

    // Island Platform
    const baseGeo = new THREE.CylinderGeometry(8.5, 8, 1.6, 32);
    const baseMat = new THREE.MeshLambertMaterial({ color: 0x2e7d32 }); // Lush green grass
    const island = new THREE.Mesh(baseGeo, baseMat);
    island.position.y = -0.8;
    island.receiveShadow = true;
    world.add(island);

    // Earth foundation underneath
    const earthGeo = new THREE.CylinderGeometry(8, 7.2, 1.8, 32);
    const earthMat = new THREE.MeshLambertMaterial({ color: 0x4a3525 }); // Rich soil
    const earth = new THREE.Mesh(earthGeo, earthMat);
    earth.position.y = -2.5;
    earth.receiveShadow = true;
    world.add(earth);

    // Pedestrian Stone Paths
    const pathMat = new THREE.MeshLambertMaterial({ color: 0xdfd7cd });
    const pathCurve = new THREE.BoxGeometry(1.2, 0.1, 11);
    const mainPath = new THREE.Mesh(pathCurve, pathMat);
    mainPath.position.set(0, 0.05, 0);
    mainPath.rotation.y = Math.PI * 0.15;
    mainPath.receiveShadow = true;
    world.add(mainPath);

    // --- FACILITY 1: TAMAN DAHLIA ---
    const parkGroup = new THREE.Group();
    parkGroup.position.set(-3.5, 0, 3.2);

    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x6d4c41 });
    const leafMat = new THREE.MeshLambertMaterial({ color: 0x43a047 });
    const brightLeafMat = new THREE.MeshLambertMaterial({ color: 0x66bb6a });

    for (let i = 0; i < 3; i++) {
      const tree = new THREE.Group();
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 1.8, 8), trunkMat);
      trunk.position.y = 0.9;
      trunk.castShadow = true;
      tree.add(trunk);

      const foliage1 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.1), leafMat);
      foliage1.position.y = 2.1;
      foliage1.castShadow = true;
      tree.add(foliage1);

      const foliage2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.8), brightLeafMat);
      foliage2.position.set(0.3, 2.7, 0.1);
      foliage2.castShadow = true;
      tree.add(foliage2);

      const angle = (i * Math.PI * 2) / 3;
      tree.position.set(Math.cos(angle) * 1.8, 0, Math.sin(angle) * 1.8);
      tree.scale.setScalar(0.75 + (i * 0.15));
      parkGroup.add(tree);
    }

    // Dahlia flower bushes
    const flowerColors = [0xe91e63, 0xff4081, 0xffeb3b, 0xab47bc];
    for (let i = 0; i < 8; i++) {
      const bush = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 8), leafMat);
      const ang = (i / 8) * Math.PI * 2;
      bush.position.set(Math.cos(ang) * 2.8, 0.3, Math.sin(ang) * 2.5);
      parkGroup.add(bush);

      const bloom = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.2),
        new THREE.MeshLambertMaterial({ color: flowerColors[i % flowerColors.length] })
      );
      bloom.position.set(bush.position.x, 0.65, bush.position.z);
      parkGroup.add(bloom);
    }

    // Park bench
    const benchWood = new THREE.MeshLambertMaterial({ color: 0x8d6e63 });
    const bench = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.3, 0.4), benchWood);
    bench.position.set(0, 0.25, 0);
    bench.castShadow = true;
    parkGroup.add(bench);

    world.add(parkGroup);

    // --- FACILITY 2: RUMAH MAGGOT BSF ---
    const maggotGroup = new THREE.Group();
    maggotGroup.position.set(3.8, 0, -2.5);

    const shedMat = new THREE.MeshLambertMaterial({ color: 0x37474f });
    const shedRoofMat = new THREE.MeshLambertMaterial({ color: 0x1976d2 });
    const shedMeshMat = new THREE.MeshLambertMaterial({ color: 0x81c784, transparent: true, opacity: 0.85 });

    const shed = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.2, 2.8), shedMat);
    shed.position.y = 1.1;
    shed.castShadow = true;
    shed.receiveShadow = true;
    maggotGroup.add(shed);

    const vent = new THREE.Mesh(new THREE.BoxGeometry(3.62, 1.0, 1.8), shedMeshMat);
    vent.position.set(0, 1.2, 0);
    maggotGroup.add(vent);

    const roofGeo = new THREE.BoxGeometry(4.2, 0.25, 3.4);
    const roof = new THREE.Mesh(roofGeo, shedRoofMat);
    roof.position.set(0, 2.35, 0);
    roof.rotation.z = -0.08;
    roof.castShadow = true;
    maggotGroup.add(roof);

    const trayMat = new THREE.MeshLambertMaterial({ color: 0x2e7d32 });
    for (let t = 0; t < 3; t++) {
      const tray = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.25, 0.8), trayMat);
      tray.position.set(-0.6, 0.35 + t * 0.45, 1.6);
      tray.castShadow = true;
      maggotGroup.add(tray);
    }

    const greenBin = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.25, 0.8, 12),
      new THREE.MeshLambertMaterial({ color: 0x1b5e20 })
    );
    greenBin.position.set(1.4, 0.4, 1.8);
    greenBin.castShadow = true;
    maggotGroup.add(greenBin);

    world.add(maggotGroup);

    // --- FACILITY 3: BURUAN SAE ---
    const buruanGroup = new THREE.Group();
    buruanGroup.position.set(-2.8, 0, -3.4);

    const planterMat = new THREE.MeshLambertMaterial({ color: 0x5d4037 });
    const cropMat1 = new THREE.MeshLambertMaterial({ color: 0x7cb342 });
    const cropMat2 = new THREE.MeshLambertMaterial({ color: 0xc0ca33 });

    for (let r = 0; r < 2; r++) {
      const planter = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.4, 0.9), planterMat);
      planter.position.set(0, 0.2, r * 1.3 - 0.65);
      planter.castShadow = true;
      planter.receiveShadow = true;
      buruanGroup.add(planter);

      for (let c = 0; c < 5; c++) {
        const veg = new THREE.Mesh(new THREE.DodecahedronGeometry(0.22), (c + r) % 2 === 0 ? cropMat1 : cropMat2);
        veg.position.set(-0.85 + c * 0.42, 0.48, r * 1.3 - 0.65);
        veg.castShadow = true;
        buruanGroup.add(veg);
      }
    }

    // Round Aquaponics Pond
    const pondRimMat = new THREE.MeshLambertMaterial({ color: 0x0277bd });
    const pondWaterMat = new THREE.MeshLambertMaterial({ color: 0x26c6da });

    const pondCylinder = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.7, 24), pondRimMat);
    pondCylinder.position.set(2.4, 0.35, 0.2);
    pondCylinder.castShadow = true;
    buruanGroup.add(pondCylinder);

    const waterSurface = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.05, 24), pondWaterMat);
    waterSurface.position.set(2.4, 0.68, 0.2);
    buruanGroup.add(waterSurface);

    world.add(buruanGroup);

    // --- FACILITY 4: BATA TERAWANG ACCENT ---
    const terawangGroup = new THREE.Group();
    terawangGroup.position.set(3.2, 0, 3.0);
    const brickMat = new THREE.MeshLambertMaterial({ color: 0xd84315 });
    for (let bx = 0; bx < 3; bx++) {
      for (let by = 0; by < 3; by++) {
        const brick = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.35, 0.3), brickMat);
        brick.position.set((bx - 1) * 0.7, 0.25 + by * 0.4, 0);
        brick.castShadow = true;
        terawangGroup.add(brick);
      }
    }
    world.add(terawangGroup);

    // --- PARTICLES ---
    const particleCount = 40;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 14;
      posArray[i + 1] = Math.random() * 5 + 0.5;
      posArray[i + 2] = (Math.random() - 0.5) * 14;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.2,
      color: 0x81c784,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    world.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 0.6;
      mouseY = y * 0.4;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      world.rotation.y = elapsedTime * 0.12 + mouseX;
      world.rotation.x = mouseY * 0.3;

      waterSurface.scale.set(
        1 + Math.sin(elapsedTime * 2.5) * 0.02,
        1,
        1 + Math.sin(elapsedTime * 2.5) * 0.02
      );

      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 1; i < particleCount * 3; i += 3) {
        positions[i] += Math.sin(elapsedTime + i) * 0.003;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-b from-blue-50/60 to-emerald-50/60 p-2 shadow-2xl border border-white/80">
      {/* 3D Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-[420px] sm:h-[460px] rounded-3xl bg-gradient-to-b from-blue-50/50 to-emerald-50/50 shadow-inner relative overflow-hidden"
      >
        {!isClient && (
          <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
            Memuat Diorama 3D...
          </div>
        )}
      </div>

      {/* Floating Badges */}
      <div className="absolute top-5 left-5 z-20 flex flex-col gap-2 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#0f355c] font-semibold text-xs shadow-md border border-white/70">
          <span>🕹️</span>
          <span>Putar &amp; Eksplorasi 3D</span>
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-900/85 backdrop-blur-md text-emerald-100 font-semibold text-xs shadow-md">
          <span>🌱</span>
          <span>Siklus Nol Residu Organik</span>
        </span>
      </div>

      {/* Bottom Floating Info Pill */}
      <div className="absolute bottom-5 left-5 right-5 z-20 pointer-events-none">
        <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-white/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold">
              🌿
            </div>
            <div>
              <p className="text-sm text-slate-900 font-bold leading-tight">
                Miniatur Ekosistem Terpadu
              </p>
              <p className="text-xs text-slate-500 leading-tight">
                💡 Terintegrasi BSF × Buruan SAE × Dahlia
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-900 text-xs font-bold">
            Coblong Juara
          </span>
        </div>
      </div>
    </div>
  );
}
