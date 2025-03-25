function loadParticles(target, config) {
  particlesJS(target, config);
}

// Common Particle Settings for Both Sections
const commonParticles = {
  number: {
    value: 180, // Slight balance between 150 and 200
    density: {
      enable: false,
      value_area: 1000
    }
  },
  color: {
    value: ["#39FF14", "#00FFFF", "#FF00FF", "#D0D0D0", "#003366"] // Balanced colors
  },
  shape: {
    type: "circle",
    stroke: { width: 0, color: "#000000" },
    polygon: { nb_sides: 5 }
  },
  opacity: {
    value: 0.6,
    random: true, // Randomized opacity for flickering effect
    anim: {
      enable: true, // Soft flickering effect
      speed: 0.5,
      opacity_min: 0.2,
      sync: false
    }
  },
  size: {
    value: 2.5,
    random: true,
    anim: {
      enable: true,
      speed: 3, // Subtle size changes over time
      size_min: 0.5,
      sync: false
    }
  },
  line_linked: {
    enable: false
  },
  move: {
    enable: true,
    speed: 0.6, // Slightly increased for a natural drift effect
    direction: "none",
    random: true,
    straight: false,
    out_mode: "out",
    bounce: false,
    attract: {
      enable: true,
      rotateX: 1000,
      rotateY: 1000
    }
  }
};

// Hero Section (Interactivity Enabled)
const heroConfig = {
  particles: { ...commonParticles },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" }, // Interactive particles in hero
      onclick: { enable: false, mode: "bubble" },
      resize: true
    },
    modes: {
      grab: {
        distance: 120,
        line_linked: { opacity: 1 }
      },
      bubble: {
        distance: 400,
        size: 8,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      attract: {
        distance: 200,
        duration: 3,
        speed: 4,
        rotateX: 1200,
        rotateY: 1200
      },
      repulse: {
        distance: 150,
        duration: 0.4
      }
    }
  },
  retina_detect: true
};

// Main Page (No Interactivity)
const containerConfig = {
  particles: { ...commonParticles },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true
};

// Load particles on both sections
document.addEventListener("DOMContentLoaded", function () {
  loadParticles("particles-js", heroConfig);      // Hero section particles
  loadParticles("particles-main", containerConfig); // Main page particles
});