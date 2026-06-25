import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const HOLD_DURATION = 2.2;
const MORPH_DURATION = 0.8;
const CYCLE_DURATION = HOLD_DURATION + MORPH_DURATION;
const CLICK_DRAG_THRESHOLD = 6;
const CLICK_MORPH_NUDGE = 0.04;
const TARGET_TRIANGLE_COUNT = 1024;
const BACKGROUND_COLOR_A = 0xF15A22;
const BACKGROUND_COLOR_B = 0x0a0e27;
const BACKGROUND_COLOR_C = 0x40e0d0;
const BACKGROUND_COLOR_D = 0xf15a22;
const BACKGROUND_COLOR_E = 0x0a0e27;
const BACKGROUND_COLOR_F = 0x40e0d0;

const LiquidGradientBackground = () => {
  const meshRef = useRef();
  const shaderRef = useRef();
  const planeTargetRef = useRef(new THREE.Vector3(0, 0, -8));
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uColor1: { value: new THREE.Color(BACKGROUND_COLOR_A) },
      uColor2: { value: new THREE.Color(BACKGROUND_COLOR_B) },
      uColor3: { value: new THREE.Color(BACKGROUND_COLOR_C) },
      uColor4: { value: new THREE.Color(BACKGROUND_COLOR_D) },
      uColor5: { value: new THREE.Color(BACKGROUND_COLOR_E) },
      uColor6: { value: new THREE.Color(BACKGROUND_COLOR_F) },
      uBaseColor: { value: new THREE.Color(0x0a0e27) },
      uSpeed: { value: 1.2 },
      uIntensity: { value: 0.8 },
      uGrainIntensity: { value: 0.018 },
      uGradientSize: { value: 1 },
      uGradientCount: { value: 6.0 },
      uColor1Weight: { value: 1.0 },
      uColor2Weight: { value: 1.0 },
    }),
    []
  );

  useFrame(({ camera, clock, size, viewport }) => {
    if (!shaderRef.current) {
      return;
    }

    shaderRef.current.uniforms.uTime.value = clock.elapsedTime;
    shaderRef.current.uniforms.uResolution.value.set(size.width, size.height);

    if (meshRef.current) {
      const planeBounds = viewport.getCurrentViewport(
        camera,
        planeTargetRef.current,
        size
      );
      meshRef.current.scale.set(
        planeBounds.width * 1.18,
        planeBounds.height * 1.18,
        1
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, planeTargetRef.current.z]}
      renderOrder={-10}
      frustumCulled={false}
      scale={[20, 20, 1]}
    >
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        ref={shaderRef}
        attach="material"
        depthTest={false}
        depthWrite={false}
        toneMapped={false}
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;

          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          uniform vec3 uColor3;
          uniform vec3 uColor4;
          uniform vec3 uColor5;
          uniform vec3 uColor6;
          uniform vec3 uBaseColor;
          uniform float uSpeed;
          uniform float uIntensity;
          uniform float uGrainIntensity;
          uniform float uGradientSize;
          uniform float uGradientCount;
          uniform float uColor1Weight;
          uniform float uColor2Weight;
          varying vec2 vUv;

          float grain(vec2 uv, float time) {
            vec2 grainUv = uv * uResolution * 0.5;
            float value = fract(
              sin(dot(grainUv + time, vec2(12.9898, 78.233))) * 43758.5453
            );
            return value * 2.0 - 1.0;
          }

          vec2 rotate2D(vec2 p, float angle) {
            float s = sin(angle);
            float c = cos(angle);
            return mat2(c, -s, s, c) * p;
          }

          vec3 getGradientColor(vec2 uv, float time) {
            float radius = uGradientSize;

            vec2 center1 = vec2(
              0.5 + sin(time * uSpeed * 0.4) * 0.4,
              0.5 + cos(time * uSpeed * 0.5) * 0.4
            );
            vec2 center2 = vec2(
              0.5 + cos(time * uSpeed * 0.6) * 0.5,
              0.5 + sin(time * uSpeed * 0.45) * 0.5
            );
            vec2 center3 = vec2(
              0.5 + sin(time * uSpeed * 0.35) * 0.45,
              0.5 + cos(time * uSpeed * 0.55) * 0.45
            );
            vec2 center4 = vec2(
              0.5 + cos(time * uSpeed * 0.5) * 0.4,
              0.5 + sin(time * uSpeed * 0.4) * 0.4
            );
            vec2 center5 = vec2(
              0.5 + sin(time * uSpeed * 0.7) * 0.35,
              0.5 + cos(time * uSpeed * 0.6) * 0.35
            );
            vec2 center6 = vec2(
              0.5 + cos(time * uSpeed * 0.45) * 0.5,
              0.5 + sin(time * uSpeed * 0.65) * 0.5
            );
            vec2 center7 = vec2(
              0.5 + sin(time * uSpeed * 0.55) * 0.38,
              0.5 + cos(time * uSpeed * 0.48) * 0.42
            );
            vec2 center8 = vec2(
              0.5 + cos(time * uSpeed * 0.65) * 0.36,
              0.5 + sin(time * uSpeed * 0.52) * 0.44
            );
            vec2 center9 = vec2(
              0.5 + sin(time * uSpeed * 0.42) * 0.41,
              0.5 + cos(time * uSpeed * 0.58) * 0.39
            );
            vec2 center10 = vec2(
              0.5 + cos(time * uSpeed * 0.48) * 0.37,
              0.5 + sin(time * uSpeed * 0.62) * 0.43
            );
            vec2 center11 = vec2(
              0.5 + sin(time * uSpeed * 0.68) * 0.33,
              0.5 + cos(time * uSpeed * 0.44) * 0.46
            );
            vec2 center12 = vec2(
              0.5 + cos(time * uSpeed * 0.38) * 0.39,
              0.5 + sin(time * uSpeed * 0.56) * 0.41
            );

            float influence1 = 1.0 - smoothstep(0.0, radius, length(uv - center1));
            float influence2 = 1.0 - smoothstep(0.0, radius, length(uv - center2));
            float influence3 = 1.0 - smoothstep(0.0, radius, length(uv - center3));
            float influence4 = 1.0 - smoothstep(0.0, radius, length(uv - center4));
            float influence5 = 1.0 - smoothstep(0.0, radius, length(uv - center5));
            float influence6 = 1.0 - smoothstep(0.0, radius, length(uv - center6));
            float influence7 = 1.0 - smoothstep(0.0, radius, length(uv - center7));
            float influence8 = 1.0 - smoothstep(0.0, radius, length(uv - center8));
            float influence9 = 1.0 - smoothstep(0.0, radius, length(uv - center9));
            float influence10 = 1.0 - smoothstep(0.0, radius, length(uv - center10));
            float influence11 = 1.0 - smoothstep(0.0, radius, length(uv - center11));
            float influence12 = 1.0 - smoothstep(0.0, radius, length(uv - center12));

            vec2 rotatedUv1 = rotate2D(uv - 0.5, time * uSpeed * 0.15) + 0.5;
            vec2 rotatedUv2 = rotate2D(uv - 0.5, -time * uSpeed * 0.12) + 0.5;
            float radialInfluence1 = 1.0 - smoothstep(0.0, 0.8, length(rotatedUv1 - 0.5));
            float radialInfluence2 = 1.0 - smoothstep(0.0, 0.8, length(rotatedUv2 - 0.5));

            vec3 color = vec3(0.0);
            color += uColor1 * influence1 * (0.55 + 0.45 * sin(time * uSpeed)) * uColor1Weight;
            color += uColor2 * influence2 * (0.55 + 0.45 * cos(time * uSpeed * 1.2)) * uColor2Weight;
            color += uColor3 * influence3 * (0.55 + 0.45 * sin(time * uSpeed * 0.8)) * uColor1Weight;
            color += uColor4 * influence4 * (0.55 + 0.45 * cos(time * uSpeed * 1.3)) * uColor2Weight;
            color += uColor5 * influence5 * (0.55 + 0.45 * sin(time * uSpeed * 1.1)) * uColor1Weight;
            color += uColor6 * influence6 * (0.55 + 0.45 * cos(time * uSpeed * 0.9)) * uColor2Weight;

            if (uGradientCount > 6.0) {
              color += uColor1 * influence7 * (0.55 + 0.45 * sin(time * uSpeed * 1.4)) * uColor1Weight;
              color += uColor2 * influence8 * (0.55 + 0.45 * cos(time * uSpeed * 1.5)) * uColor2Weight;
              color += uColor3 * influence9 * (0.55 + 0.45 * sin(time * uSpeed * 1.6)) * uColor1Weight;
              color += uColor4 * influence10 * (0.55 + 0.45 * cos(time * uSpeed * 1.7)) * uColor2Weight;
            }

            if (uGradientCount > 10.0) {
              color += uColor5 * influence11 * (0.55 + 0.45 * sin(time * uSpeed * 1.8)) * uColor1Weight;
              color += uColor6 * influence12 * (0.55 + 0.45 * cos(time * uSpeed * 1.9)) * uColor2Weight;
            }

            color += mix(uColor1, uColor3, radialInfluence1) * 0.45 * uColor1Weight;
            color += mix(uColor2, uColor4, radialInfluence2) * 0.4 * uColor2Weight;

            color = clamp(color, vec3(0.0), vec3(1.0)) * uIntensity;
            float luminance = dot(color, vec3(0.299, 0.587, 0.114));
            color = mix(vec3(luminance), color, 1.22);
            color = pow(color, vec3(0.95));

            float brightness = length(color);
            float mixFactor = clamp(brightness * 1.05, 0.42, 1.0);
            color = mix(uBaseColor, color, mixFactor);

            if (length(color) > 1.0) {
              color /= length(color);
            }

            return color;
          }

          void main() {
            vec2 uv = vUv;
            vec2 offset = uv - 0.5;
            float dist = length(offset);
            float ripple = sin(dist * 18.0 - uTime * 2.8) * 0.012;
            float wave = cos((offset.x - offset.y) * 10.0 + uTime * 1.9) * 0.01;
            uv += normalize(offset + 0.0001) * ripple;
            uv += vec2(wave, -wave) * 0.6;

            vec3 color = getGradientColor(uv, uTime);
            color += grain(uv, uTime * 0.5) * uGrainIntensity;

            float timeShift = uTime * 0.5;
            color.r += sin(timeShift) * 0.012;
            color.g += cos(timeShift * 1.4) * 0.012;
            color.b += sin(timeShift * 1.2) * 0.012;

            float brightness = length(color);
            float mixFactor = clamp(brightness * 1.05, 0.4, 1.0);
            color = mix(uBaseColor, color, mixFactor);
            color = clamp(color, vec3(0.0), vec3(1.0));

            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  );
};

const tmpEdgeA = new THREE.Vector3();
const tmpEdgeB = new THREE.Vector3();
const tmpCross = new THREE.Vector3();
const tmpCentroid = new THREE.Vector3();
const tmpDirection = new THREE.Vector3();
const tmpTangent = new THREE.Vector3();
const tmpBitangent = new THREE.Vector3();
const tmpRelative = new THREE.Vector3();

const createTriangle = (a, b, c) => [a.clone(), b.clone(), c.clone()];

const getTriangleCentroid = (triangle) =>
  triangle[0].clone().add(triangle[1]).add(triangle[2]).multiplyScalar(1 / 3);

const getTriangleArea = (triangle) => {
  tmpEdgeA.subVectors(triangle[1], triangle[0]);
  tmpEdgeB.subVectors(triangle[2], triangle[0]);
  return tmpCross.crossVectors(tmpEdgeA, tmpEdgeB).length() * 0.5;
};

const orientTriangleOutward = (triangle) => {
  const centroid = getTriangleCentroid(triangle);
  tmpEdgeA.subVectors(triangle[1], triangle[0]);
  tmpEdgeB.subVectors(triangle[2], triangle[0]);
  const normal = tmpCross.crossVectors(tmpEdgeA, tmpEdgeB);

  if (normal.dot(centroid) < 0) {
    return [triangle[0], triangle[2], triangle[1]];
  }

  return triangle;
};

const canonicalizeTriangle = (triangle) => {
  const oriented = orientTriangleOutward(triangle);
  const centroid = tmpCentroid
    .copy(oriented[0])
    .add(oriented[1])
    .add(oriented[2])
    .multiplyScalar(1 / 3);
  const direction = tmpDirection.copy(centroid).normalize();

  if (Math.abs(direction.y) < 0.95) {
    tmpTangent.set(0, 1, 0).cross(direction).normalize();
  } else {
    tmpTangent.set(1, 0, 0).cross(direction).normalize();
  }

  tmpBitangent.crossVectors(direction, tmpTangent).normalize();

  const vertices = oriented.map((vertex, index) => {
    tmpRelative.copy(vertex).sub(centroid);

    return {
      angle: Math.atan2(
        tmpRelative.dot(tmpBitangent),
        tmpRelative.dot(tmpTangent)
      ),
      index,
      vertex,
    };
  });

  let startIndex = 0;

  for (let i = 1; i < vertices.length; i += 1) {
    if (vertices[i].angle < vertices[startIndex].angle) {
      startIndex = i;
    }
  }

  return [
    vertices[startIndex].vertex.clone(),
    vertices[(startIndex + 1) % 3].vertex.clone(),
    vertices[(startIndex + 2) % 3].vertex.clone(),
  ];
};

const splitTriangle = (triangle) => {
  const [a, b, c] = triangle;
  const ab = a.distanceToSquared(b);
  const bc = b.distanceToSquared(c);
  const ca = c.distanceToSquared(a);

  if (ab >= bc && ab >= ca) {
    const midpoint = a.clone().add(b).multiplyScalar(0.5);
    return [
      canonicalizeTriangle(createTriangle(a, midpoint, c)),
      canonicalizeTriangle(createTriangle(midpoint, b, c)),
    ];
  }

  if (bc >= ab && bc >= ca) {
    const midpoint = b.clone().add(c).multiplyScalar(0.5);
    return [
      canonicalizeTriangle(createTriangle(a, b, midpoint)),
      canonicalizeTriangle(createTriangle(a, midpoint, c)),
    ];
  }

  const midpoint = c.clone().add(a).multiplyScalar(0.5);

  return [
    canonicalizeTriangle(createTriangle(a, b, midpoint)),
    canonicalizeTriangle(createTriangle(midpoint, b, c)),
  ];
};

const refineTriangles = (triangles, targetCount) => {
  const refined = triangles.map((triangle) => canonicalizeTriangle(triangle));

  while (refined.length < targetCount) {
    let largestIndex = 0;
    let largestArea = getTriangleArea(refined[0]);

    for (let index = 1; index < refined.length; index += 1) {
      const area = getTriangleArea(refined[index]);

      if (area > largestArea) {
        largestArea = area;
        largestIndex = index;
      }
    }

    const [largestTriangle] = refined.splice(largestIndex, 1);
    refined.push(...splitTriangle(largestTriangle));
  }

  return refined;
};

const sortTriangles = (triangles) =>
  [...triangles].sort((triangleA, triangleB) => {
    const centroidA = getTriangleCentroid(triangleA).normalize();
    const centroidB = getTriangleCentroid(triangleB).normalize();
    const latitudeA = Math.atan2(
      centroidA.y,
      Math.sqrt(centroidA.x * centroidA.x + centroidA.z * centroidA.z)
    );
    const latitudeB = Math.atan2(
      centroidB.y,
      Math.sqrt(centroidB.x * centroidB.x + centroidB.z * centroidB.z)
    );

    if (latitudeA !== latitudeB) {
      return latitudeB - latitudeA;
    }

    const longitudeA = Math.atan2(centroidA.z, centroidA.x);
    const longitudeB = Math.atan2(centroidB.z, centroidB.x);

    if (longitudeA !== longitudeB) {
      return longitudeA - longitudeB;
    }

    return getTriangleArea(triangleB) - getTriangleArea(triangleA);
  });

const geometryToTriangleList = (geometry) => {
  const workingGeometry = geometry.index ? geometry.toNonIndexed() : geometry.clone();
  const positions = workingGeometry.getAttribute("position");
  const triangles = [];

  for (let index = 0; index < positions.count; index += 3) {
    const a = new THREE.Vector3().fromBufferAttribute(positions, index);
    const b = new THREE.Vector3().fromBufferAttribute(positions, index + 1);
    const c = new THREE.Vector3().fromBufferAttribute(positions, index + 2);
    triangles.push(createTriangle(a, b, c));
  }

  workingGeometry.dispose();
  geometry.dispose();

  return triangles;
};

const packTriangles = (triangles) => {
  const data = new Float32Array(triangles.length * 9);

  triangles.forEach((triangle, triangleIndex) => {
    triangle.forEach((vertex, vertexIndex) => {
      const offset = triangleIndex * 9 + vertexIndex * 3;
      data[offset] = vertex.x;
      data[offset + 1] = vertex.y;
      data[offset + 2] = vertex.z;
    });
  });

  return data;
};

const prepareShape = (geometry) =>
  packTriangles(sortTriangles(refineTriangles(geometryToTriangleList(geometry), TARGET_TRIANGLE_COUNT)));

const cubeSideLength = 2 / Math.sqrt(3);

const SHAPES = [
  {
    name: "tetrahedron",
    positions: prepareShape(new THREE.TetrahedronGeometry(1, 0)),
  },
  {
    name: "cube",
    positions: prepareShape(
      new THREE.BoxGeometry(cubeSideLength, cubeSideLength, cubeSideLength)
    ),
  },
  {
    name: "octahedron",
    positions: prepareShape(new THREE.OctahedronGeometry(1, 0)),
  },
  {
    name: "dodecahedron",
    positions: prepareShape(new THREE.DodecahedronGeometry(1, 0)),
  },
  {
    name: "icosahedron",
    positions: prepareShape(new THREE.IcosahedronGeometry(1, 0)),
  },
];

const INITIAL_POSITIONS = new Float32Array(SHAPES[0].positions);

const EnhancedMetalShaderMaterial = () => {
  const shaderRef = useRef();

  useFrame(({ clock }) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  return (
    <shaderMaterial
      ref={shaderRef}
      attach="material"
      uniforms={{
        uTime: { value: 0 },
        uBaseColor: { value: new THREE.Color(0xf1f5f7) },
        uShadowColor: { value: new THREE.Color(0xcad3db) },
        uSkyReflection: { value: new THREE.Color(0xf6fbff) },
        uWarmReflection: { value: new THREE.Color(0xf0e7dc) },
        uGroundReflection: { value: new THREE.Color(0x8e98a3) },
        uColorA: { value: new THREE.Color(BACKGROUND_COLOR_A) },
        uColorB: { value: new THREE.Color(BACKGROUND_COLOR_B) },
        uColorC: { value: new THREE.Color(BACKGROUND_COLOR_C) },
        uColorD: { value: new THREE.Color(BACKGROUND_COLOR_D) },
        uColorE: { value: new THREE.Color(BACKGROUND_COLOR_E) },
        uKeyLightColor: { value: new THREE.Color(0xffffff) },
        uFillLightColor: { value: new THREE.Color(0xdbe7f0) },
        uRimLightColor: { value: new THREE.Color(0xffffff) },
        uKeyLightDirection: {
          value: new THREE.Vector3(1.2, 1.35, 1.65).normalize(),
        },
        uFillLightDirection: {
          value: new THREE.Vector3(-1.35, 0.7, 1.15).normalize(),
        },
        uRimLightDirection: {
          value: new THREE.Vector3(-0.8, 0.95, -1.25).normalize(),
        },
      }}
      vertexShader={`
        varying vec3 vNormal;
        varying vec3 vWorldPos;

        void main() {
          vNormal = normalize(normalMatrix * normal);
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `}
      fragmentShader={`
        varying vec3 vNormal;
        varying vec3 vWorldPos;

        uniform float uTime;
        uniform vec3 uBaseColor;
        uniform vec3 uShadowColor;
        uniform vec3 uSkyReflection;
        uniform vec3 uWarmReflection;
        uniform vec3 uGroundReflection;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform vec3 uColorC;
        uniform vec3 uColorD;
        uniform vec3 uColorE;
        uniform vec3 uKeyLightColor;
        uniform vec3 uFillLightColor;
        uniform vec3 uRimLightColor;
        uniform vec3 uKeyLightDirection;
        uniform vec3 uFillLightDirection;
        uniform vec3 uRimLightDirection;

        float hash(vec3 p) {
          return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453123);
        }

        float noise(vec3 p) {
          vec3 i = floor(p);
          vec3 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);

          return mix(
            mix(
              mix(hash(i + vec3(0.0, 0.0, 0.0)), hash(i + vec3(1.0, 0.0, 0.0)), f.x),
              mix(hash(i + vec3(0.0, 1.0, 0.0)), hash(i + vec3(1.0, 1.0, 0.0)), f.x),
              f.y
            ),
            mix(
              mix(hash(i + vec3(0.0, 0.0, 1.0)), hash(i + vec3(1.0, 0.0, 1.0)), f.x),
              mix(hash(i + vec3(0.0, 1.0, 1.0)), hash(i + vec3(1.0, 1.0, 1.0)), f.x),
              f.y
            ),
            f.z
          );
        }

        vec3 samplePalette(float t) {
          if (t < 0.2) {
            return mix(uColorA, uColorB, t / 0.2);
          }
          if (t < 0.4) {
            return mix(uColorB, uColorC, (t - 0.2) / 0.2);
          }
          if (t < 0.6) {
            return mix(uColorC, uColorD, (t - 0.4) / 0.2);
          }
          if (t < 0.8) {
            return mix(uColorD, uColorE, (t - 0.6) / 0.2);
          }
          return mix(uColorE, uColorA, (t - 0.8) / 0.2);
        }

        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(cameraPosition - vWorldPos);
          vec3 reflectionDir = reflect(-viewDir, normal);
          vec3 reflectionSample = normalize(reflectionDir + normal * 0.35);

          float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.2);
          float edgeGlow = 1.0 - max(dot(normal, viewDir), 0.0);
          float skyMix = smoothstep(-0.28, 0.92, reflectionDir.y);
          float warmBand = smoothstep(-0.42, 0.12, reflectionDir.y) * (1.0 - smoothstep(0.12, 0.58, reflectionDir.y));
          vec3 envColor = mix(uGroundReflection, uWarmReflection, warmBand);
          envColor = mix(envColor, uSkyReflection, skyMix);

          float backgroundNoise = noise(reflectionSample * 4.8 + vec3(uTime * 0.16));
          float backgroundBlend = fract(backgroundNoise * 0.8 + uTime * 0.03);
          vec3 backgroundReflection = samplePalette(backgroundBlend);
          vec3 facetReflection = samplePalette(
            fract(smoothstep(-0.25, 0.85, reflectionSample.x * 0.7 + reflectionSample.y * 0.9) + uTime * 0.02)
          );
          float shimmerSweep = 0.5 + 0.5 * sin(
            reflectionSample.y * 12.0 +
            reflectionSample.x * 8.0 +
            reflectionSample.z * 5.0 +
            uTime * 1.85
          );
          float shimmerBand = smoothstep(0.62, 0.99, shimmerSweep);
          backgroundReflection = mix(backgroundReflection, facetReflection, 0.35 + shimmerBand * 0.2);
          backgroundReflection += samplePalette(fract(1.0 - backgroundBlend + 0.18)) * shimmerBand * 0.34;
          float backgroundStrength = 0.42 + fresnel * 0.34 + edgeGlow * 0.2 + shimmerBand * 0.18;
          envColor = mix(envColor * 0.55, backgroundReflection, min(backgroundStrength, 0.92));

          float stripHighlightA = pow(max(dot(reflectionDir, normalize(vec3(0.14, 0.99, 0.06))), 0.0), 20.0);
          float stripHighlightB = pow(max(dot(reflectionDir, normalize(vec3(-0.72, 0.52, 0.46))), 0.0), 42.0);
          envColor += uSkyReflection * stripHighlightA * 0.18;
          envColor += uKeyLightColor * stripHighlightB * 0.24;

          vec3 keyDir = normalize(uKeyLightDirection);
          vec3 fillDir = normalize(uFillLightDirection);
          vec3 rimDir = normalize(uRimLightDirection);
          vec3 keyHalf = normalize(keyDir + viewDir);
          vec3 fillHalf = normalize(fillDir + viewDir);
          vec3 rimHalf = normalize(rimDir + viewDir);

          float keyDiffuse = max(dot(normal, keyDir), 0.0);
          float fillDiffuse = max(dot(normal, fillDir), 0.0);
          float rimDiffuse = max(dot(normal, rimDir), 0.0);

          float keySpec = pow(max(dot(normal, keyHalf), 0.0), 90.0);
          float fillSpec = pow(max(dot(normal, fillHalf), 0.0), 40.0);
          float rimSpec = pow(max(dot(normal, rimHalf), 0.0), 68.0);

          float diffuseMix = clamp(
            0.58 + keyDiffuse * 0.24 + fillDiffuse * 0.18 + rimDiffuse * 0.08,
            0.0,
            1.0
          );
          vec3 shadedBase = mix(uShadowColor, uBaseColor, diffuseMix);
          float innerGlow = pow(1.0 - max(dot(normal, keyDir), 0.0), 2.4);
          vec3 glassBody = shadedBase;
          glassBody += uSkyReflection * edgeGlow * 0.08;
          glassBody += uFillLightColor * innerGlow * 0.04;
          glassBody += backgroundReflection * (0.11 + fresnel * 0.12 + shimmerBand * 0.08);

          vec3 glassSurface = mix(glassBody, envColor, 0.54 + fresnel * 0.28 + shimmerBand * 0.12);
          vec3 specular = uKeyLightColor * keySpec * 0.9;
          specular += uFillLightColor * fillSpec * 0.18;
          specular += uRimLightColor * rimSpec * (0.20 + rimDiffuse * 0.28);

          vec3 rimGlow = mix(uRimLightColor, backgroundReflection, 0.45) * fresnel * 0.18;
          vec3 finalColor = glassSurface + specular + rimGlow;
          finalColor = min(finalColor, vec3(1.0));

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `}
    />
  );
};

const MorphingPlatonicSolid = () => {
  const meshRef = useRef();
  const geometryRef = useRef();
  const interactionRef = useRef({ x: 0, y: 0 });
  const clockElapsedRef = useRef(0);
  const morphTimeOffsetRef = useRef(0);
  const dragRef = useRef({
    active: false,
    currentX: 0,
    currentY: 0,
    hasMoved: false,
    lastX: 0,
    lastY: 0,
    startX: 0,
    startY: 0,
    targetX: 0,
    targetY: 0,
  });
  const morphStateRef = useRef({
    shapeIndex: -1,
    nextShapeIndex: -1,
    morphProgress: -1,
  });

  useEffect(() => {
    const geometry = geometryRef.current;

    if (!geometry) {
      return undefined;
    }

    const positionAttribute = geometry.getAttribute("position");
    positionAttribute.setUsage(THREE.DynamicDrawUsage);
    geometry.computeVertexNormals();

    return () => {
      geometry.dispose();
    };
  }, []);

  const advanceShapeCycle = () => {
    const totalCycleDuration = SHAPES.length * CYCLE_DURATION;
    const effectiveElapsed = clockElapsedRef.current + morphTimeOffsetRef.current;
    const cycleTime = THREE.MathUtils.euclideanModulo(
      effectiveElapsed,
      totalCycleDuration
    );
    const localTime = cycleTime % CYCLE_DURATION;

    let targetLocalTime = null;

    if (localTime < HOLD_DURATION) {
      targetLocalTime = HOLD_DURATION + CLICK_MORPH_NUDGE;
    } else if (localTime < CYCLE_DURATION - CLICK_MORPH_NUDGE) {
      targetLocalTime = CYCLE_DURATION - CLICK_MORPH_NUDGE;
    }

    if (targetLocalTime === null) {
      return;
    }

    morphTimeOffsetRef.current += targetLocalTime - localTime;
    morphStateRef.current.morphProgress = -1;
  };

  useFrame(({ clock, mouse }) => {
    if (!meshRef.current || !geometryRef.current) {
      return;
    }

    clockElapsedRef.current = clock.elapsedTime;
    const elapsed = clock.elapsedTime + morphTimeOffsetRef.current;
    const cycleTime = elapsed % (SHAPES.length * CYCLE_DURATION);
    const shapeIndex = Math.floor(cycleTime / CYCLE_DURATION);
    const nextShapeIndex = (shapeIndex + 1) % SHAPES.length;
    const localTime = cycleTime % CYCLE_DURATION;
    const morphProgress =
      localTime <= HOLD_DURATION
        ? 0
        : THREE.MathUtils.smoothstep(
            (localTime - HOLD_DURATION) / MORPH_DURATION,
            0,
            1
          );

    const currentPositions = SHAPES[shapeIndex].positions;
    const nextPositions = SHAPES[nextShapeIndex].positions;
    const positionAttribute = geometryRef.current.getAttribute("position");
    const shouldUpdateGeometry =
      morphStateRef.current.shapeIndex !== shapeIndex ||
      morphStateRef.current.nextShapeIndex !== nextShapeIndex ||
      Math.abs(morphStateRef.current.morphProgress - morphProgress) > 0.001;

    if (shouldUpdateGeometry) {
      const { array } = positionAttribute;

      for (let index = 0; index < array.length; index += 1) {
        array[index] = THREE.MathUtils.lerp(
          currentPositions[index],
          nextPositions[index],
          morphProgress
        );
      }

      positionAttribute.needsUpdate = true;
      geometryRef.current.computeVertexNormals();
      geometryRef.current.getAttribute("normal").needsUpdate = true;
      morphStateRef.current.shapeIndex = shapeIndex;
      morphStateRef.current.nextShapeIndex = nextShapeIndex;
      morphStateRef.current.morphProgress = morphProgress;
    }

    interactionRef.current.x +=
      (mouse.y * 2.5 - interactionRef.current.x) * 0.05;
    interactionRef.current.y +=
      (mouse.x * 2.5 - interactionRef.current.y) * 0.05;
    dragRef.current.currentX +=
      (dragRef.current.targetX - dragRef.current.currentX) * 0.16;
    dragRef.current.currentY +=
      (dragRef.current.targetY - dragRef.current.currentY) * 0.16;

    meshRef.current.rotation.x =
      elapsed * 0.22 + interactionRef.current.x + dragRef.current.currentX;
    meshRef.current.rotation.y =
      elapsed * 0.34 + interactionRef.current.y + dragRef.current.currentY;
    meshRef.current.rotation.z = elapsed * 0.12;
  });

  return (
    <mesh
      ref={meshRef}
      scale={0.64}
      onPointerDown={(event) => {
        dragRef.current.active = true;
        dragRef.current.hasMoved = false;
        dragRef.current.lastX = event.clientX;
        dragRef.current.lastY = event.clientY;
        dragRef.current.startX = event.clientX;
        dragRef.current.startY = event.clientY;
        event.stopPropagation();
      }}
      onPointerMove={(event) => {
        if (!dragRef.current.active) {
          return;
        }

        const deltaX = event.clientX - dragRef.current.lastX;
        const deltaY = event.clientY - dragRef.current.lastY;
        const dragDistance = Math.hypot(
          event.clientX - dragRef.current.startX,
          event.clientY - dragRef.current.startY
        );

        if (dragDistance > CLICK_DRAG_THRESHOLD) {
          dragRef.current.hasMoved = true;
        }
        dragRef.current.targetY += deltaX * 0.008;
        dragRef.current.targetX += deltaY * 0.008;
        dragRef.current.targetX = THREE.MathUtils.clamp(
          dragRef.current.targetX,
          -1.3,
          1.3
        );
        dragRef.current.lastX = event.clientX;
        dragRef.current.lastY = event.clientY;
        event.stopPropagation();
      }}
      onPointerUp={(event) => {
        if (!dragRef.current.hasMoved) {
          advanceShapeCycle();
        }
        dragRef.current.active = false;
        event.stopPropagation();
      }}
      onPointerLeave={() => {
        dragRef.current.active = false;
      }}
      onPointerCancel={() => {
        dragRef.current.active = false;
      }}
    >
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          args={[INITIAL_POSITIONS, 3]}
          count={INITIAL_POSITIONS.length / 3}
        />
      </bufferGeometry>
      <EnhancedMetalShaderMaterial />
    </mesh>
  );
};

const FloatingIcosahedron = () => {
  return (
    <div className="relative z-0 h-dvh max-h-dvh w-full overflow-hidden overscroll-none touch-none bg-[#0a0e27]">
      <Canvas
        className="scene-canvas"
        camera={{ position: [0, 0, 4.5], fov: 42 }}
        dpr={[1, 1.5]}
        frameloop="always"
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
          stencil: false,
        }}
      >
        <LiquidGradientBackground />
        <MorphingPlatonicSolid />
      </Canvas>
    </div>
  );
};

export default FloatingIcosahedron;
