"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  /** Match brand surface; canvas paints over this. */
  clearColor?: string;
  className?: string;
}

/**
 * Animated bronze-toned WebGL shader.
 *
 * Adapted from a chromatic-aberration wave shader. Three corrections vs the
 * source:
 *  1. Canvas is `absolute`, scoped to its parent (Hero), not `fixed` over the
 *     whole page.
 *  2. Output is recolored to a single warm-bronze hue (with a faint warm
 *     aberration) so it reads as the brand, not generic RGB synthwave.
 *  3. Animation pauses when the canvas leaves the viewport (IntersectionObserver)
 *     and is disabled entirely under `prefers-reduced-motion`.
 */
export function WebGLShader({ clearColor = "#0a0705", className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    // Bronze wave shader. Channel ratios r:g:b ≈ 1.0 : 0.55 : 0.22 map to
    // OKLCH ~(56% 0.07 70) — the brand accent hue. Aberration is reduced
    // (chromaScale 0.4) so it doesn't read as RGB synthwave.
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        float d = length(p) * distortion;
        float chromaScale = 0.4;

        float rx = p.x * (1.0 + d * chromaScale);
        float gx = p.x;
        float bx = p.x * (1.0 - d * chromaScale);

        float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);

        // Tone-map to warm bronze. Multipliers tuned to brand hue ~70 OKLCH.
        float fr = r * 1.00;
        float fg = g * 0.55;
        float fb = b * 0.22;

        gl_FragColor = vec4(fr, fg, fb, 1.0);
      }
    `;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(new THREE.Color(clearColor));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1);

    const uniforms = {
      resolution: { value: [canvas.clientWidth, canvas.clientHeight] },
      time: { value: 0.0 },
      xScale: { value: 1.0 },
      yScale: { value: 0.5 },
      distortion: { value: 0.05 },
    };

    const positions = new Float32Array([
      -1, -1, 0, 1, -1, 0, -1, 1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0,
    ]);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.RawShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      uniforms.resolution.value = [w, h];
    };
    resize();

    let animationId: number | null = null;
    let inView = true;

    const renderFrame = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      uniforms.time.value += 0.01;
      renderFrame();
      animationId = requestAnimationFrame(animate);
    };

    if (reduce) {
      // Static single frame, no animation loop.
      renderFrame();
    } else {
      animate();
    }

    // Pause when canvas leaves viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (reduce) return;
        if (inView && animationId === null) {
          animate();
        } else if (!inView && animationId !== null) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    window.addEventListener("resize", resize);

    return () => {
      if (animationId !== null) cancelAnimationFrame(animationId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [clearColor]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className ?? "absolute inset-0 w-full h-full block"}
    />
  );
}
