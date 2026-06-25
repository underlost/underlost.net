import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // Use full version

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  const particlesOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#b6b2b2",
        },
      },
      opacity: {
        value: {
          min: 0.1,
          max: 0.5,
        },
        random: false,
        animation: {
          enable: true,
          speed: .5,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: {
          min: 1,
          max: 8,
        },
        random: true,
        animation: {
          enable: true,
          speed: 2.18,
          minimumValue: 0.1,
          sync: true,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#c8c8c8",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce",
        },
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detectOn: "canvas",
      events: {
        onHover: {
          enable: false,
          mode: "repulse",
        },
        onClick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          links: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
      },
    },
    detectRetina: true,
  };



  useEffect(() => {
    const initializeEngine = async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadFull(engine); // Initialize engine with slim
        });
        setInit(true);
      } catch (error) {
        console.error("Failed to initialize particles engine:", error);
      }
    };

    initializeEngine();
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 -z-1"
          options={particlesOptions}
        />
      )}
    </>
  );
};

export default ParticlesBackground;
