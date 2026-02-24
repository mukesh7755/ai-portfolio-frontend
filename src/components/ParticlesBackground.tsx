import React from "react";
import Particles from "@tsparticles/react";

const ParticlesBackground: React.FC = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: "#0b0f19",
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: "#00f5ff",
          },
          links: {
            enable: true,
            distance: 150,
            color: "#00f5ff",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: 2,
          },
        },
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBackground;
