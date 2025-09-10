import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function AnimatedBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    // facultatif, juste pour debug

  }, []);

  return (
      <Particles
        className="absolute inset-0 w-full h-full"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          particles: {
            number: { value: 30,density: { enable: true, area: 800 } },
            color: { value: "#000000" },
            shape: { type: "circle" },
            opacity: {
              value: 0.2,
              random: { enable: true, minimumValue: 0.05 },
              animation: { enable: true, speed: 0.1, minimumValue: 0.05, }
            },
            size: { value: { min: 80, max: 150 }, random: true },
            move: {
              enable: true,
              speed: 0.4,
              direction: "top",
              random: true,
              straight: false,
              outModes: { default: "out" },
            },
            blur: { enable: true, value: 20 } // effet de flou pour la fumée
          },
          interactivity: {
            events: { 
                onHover: { 
                    enable: true, 
                    mode: "repulse" 
                }, 
                onClick: { 
                    enable: false 
                } 
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                }
              }
          },
          detectRetina: true,
          background: { color: "#4B0000" },
        }}
      />
  );
}
