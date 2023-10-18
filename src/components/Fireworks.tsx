import React, { useEffect } from 'react';
import { tsParticles } from 'tsparticles';

const Fireworks = () => {
  useEffect(() => {
    tsParticles.load('fireworks-container', {
+      fpsLimit: 60,
+      particles: {
+        number: {
+          value: 0,
+        },
+        color: {
+          value: "#ff0000",
+        },
+        shape: {
+          type: "circle",
+        },
+      },
+      interactivity: {
+        events: {
+          onClick: {
+            enable: true,
+            mode: "repulse",
+          },
+        },
+        modes: {
+          repulse: {
+            distance: 200,
+            duration: 0.4,
+          },
+        },
+      },
+      detectRetina: true,
    });
  }, []);

  return <div id="fireworks-container" />;
};

export default Fireworks;
        move: {
          enable: true,
          speed: 5,
        },
        split: {
          value: 3,
        },
      },
    });
  }, []);

  return <div id="fireworks-container" />;
};

export default Fireworks;
