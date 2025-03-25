// function loadParticles(target, config) {
//   particlesJS(target, config);
// }

// // Hero Section Settings
// const heroConfig = {
//   particles: {
//     number: {
//       value: 150,
//       density: {
//         enable: false,
//         value_area: 1000
//       }
//     },
//     color: { value: "#39ff14" },
//     shape: {
//       type: "circle",
//       stroke: { width: 0, color: "#000000" },
//       polygon: { nb_sides: 5 },
//     },
//     opacity: {
//       value: 0.5,
//       random: false,
//       anim: {
//         enable: false,
//         speed: 1,
//         opacity_min: 0.1,
//         sync: false
//       }
//     },
//     size: {
//       value: 2,
//       random: true,
//       anim: {
//         enable: false,
//         speed: 40,
//         size_min: 0.1,
//         sync: false
//       }
//     },
//     line_linked: {
//       enable: false,
//       distance: 90,
//       color: "#ffffff",
//       opacity: 0.4,
//       width: 1
//     },
//     move: {
//       enable: true,
//       speed: .5,
//       direction: "none",
//       random: true,
//       straight: false,
//       out_mode: "out",
//       bounce: false,
//       attract: {
//         enable: true,
//         rotateX: 800,
//         rotateY: 800
//       }
//     }
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: { enable: true, mode: "grab" },
//       onclick: { enable: false, mode: "bubble" },
//       resize: true
//     },
//     modes: {
//       grab: {
//         distance: 100,
//         line_linked: { opacity: 1 }
//       },
//       bubble: {
//         distance: 400,
//         size: 10,
//         duration: 2,
//         opacity: 8,
//         speed: 3
//       },
//       attract: {
//         distance: 200, // Distance within which particles are affected
//         duration: 3, // Duration of the attraction animation
//         speed: 5, // Speed of the attraction
//         rotateX: 1000, // Strength of the attraction in the X direction
//         rotateY: 1000 // Strength of the attraction in the Y direction
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4
//       },
//       push: { particles_nb: 4 },
//       remove: { particles_nb: 2 }
//     }
//   },
//   retina_detect: true
// };

// // Settings for Rest of the Page (No Interactivity, No Lines)
// const containerConfig = {
//   particles: {
//     number: {
//       value: 200,
//       density: {
//         enable: false,
//         value_area: 1000
//       }
//     },
//     color: { value: "#39ff14" },
//     shape: {
//       type: "circle",
//       stroke: { width: 0, color: "#000000" },
//       polygon: { nb_sides: 5 },
//       image: { src: "img/github.svg", width: 100, height: 100 }
//     },
//     opacity: {
//       value: 0.5,
//       random: false,
//       anim: {
//         enable: false,
//         speed: 1,
//         opacity_min: 0.1,
//         sync: false
//       }
//     },
//     size: {
//       value: 2,
//       random: true,
//       anim: {
//         enable: false,
//         speed: 40,
//         size_min: 0.1,
//         sync: false
//       }
//     },
//     line_linked: {
//       enable: false
//     },
//     move: {
//       enable: true,
//       speed: .5,
//       direction: "none",
//       random: true,
//       straight: false,
//       out_mode: "out",
//       bounce: false,
//       attract: {
//         enable: true,
//         rotateX: 868.0624057955,
//         rotateY: 868.0624057955
//       }
//     }
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//         onhover: { enable: false },  // Disable hover effects
//         onclick: { enable: false },  // Disable click effects
//         resize: true
//     }
//   },
//   retina_detect: true
// };

// // Load particles on both sections
// document.addEventListener("DOMContentLoaded", function () {
//   loadParticles("particles-js", heroConfig);      // Hero section particles
//   loadParticles("particles-main", containerConfig); // Main page particles
// });

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
