const CANVAS_DESKTOP = {
  particles: {
    number: {
      value: 80,
      density:
        {
          enable: true,
          value_area: 800
        }
    },
    color: {
      value: '#f9f9f9'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#f9f9f9'
      },
      polygon: {
        nb_sides: 3
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 0,
      random: false,
      anim: {
        enable: false,
        speed: 114.50288693448967,
        size_min: 38.97970619046456,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 256.54592973848366,
      color: '#f9f9f9',
      opacity: 0.1843923869995351,
      width: 0
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: 'bottom',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'repulse'
      },
      onclick: {
        enable: false,
        mode: 'push'
      },
      resize: false
    },
    modes: {
      grab: {
        distance: 0,
        line_linked: {
          opacity: 0
        }
      },
      bubble: {
        distance: 0,
        size: 0,
        duration: 0,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 0,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 0
      }
    }
  },
  retina_detect: true
}

const CANVAS_MOBILE = {
  particles: {
    number: {
      value: 25,
      density: {
        enable: false,
        value_area: 800
      }
    },
    color: {
      value: "#333"
    },
    shape: {
      type: "edge",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 50,
        height: 50
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 1,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5
        }
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}

export default { CANVAS_DESKTOP, CANVAS_MOBILE }