document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('click', function() {
    const projectId = this.getAttribute('data-project');
    showModal(projectId);
  });
});

document.getElementById('modal-close').onclick = closeModal;
document.getElementById('modal').onclick = function(e) {
  if (e.target === this) closeModal();
};

function showModal(id) {
  const modal = document.getElementById('modal');
  const content = document.getElementById('modal-content');
  // Project details with multiple media
  ////<img src="assets/thumb2.jpg" alt="Project 5 Thumbnail" />
  /*
  <video autoplay loop muted playsinline>
    <source src="assets/video1.mp4" type="video/mp4" />
  </video>
  */
  
  const projectDetails = {
    1: {
      title: "Daigo no Sakura: Sakura Miku AR",
      description: "Built a mobile Web AR application for an exhibition at the Nakanoshima Museum of Art in Osaka using Javascript and A-Frame/three.js. Coordinated with the 3DCG team and designed the asset conversion and optimization pipeline order to make the assets made in Autodesk Maya usable in the browser based application.",
      media: [
        `<video controls class="portrait" style="border-radius:8px;">
          <source src="assets/media/sakura/sakuramiku_phone_test.mp4" type="video/mp4" />
        </video>`,
        `<img src="assets/media/sakura/sakura_motioncapture.png" alt="Sakura Miku character model in a motion capture pose, standing in a digital workspace with interface elements visible, neutral expression, technical and creative environment" style="width:100%;margin-top:1rem;border-radius:8px;" />`,
        `<img src="assets/media/sakura/sakura_unity.png" alt="Sakura Miku character model in a motion capture pose, standing in a digital workspace with interface elements visible, neutral expression, technical and creative environment" style="width:100%;margin-top:1rem;border-radius:8px;" />`
      ]
    },
    2: {
      title: "Immersive Manga VR Application POC",
      description: "Proof of concept for Meta Quest application that lets you jump into a manga page in VR. <br> I was responsible for everything other than the models and textures, including the Unreal Engine project VR setup, blueprint scripting, and development of multiple character and full-screen shaders to give it the manga look. Since the manga used was Naruto and the Meta Quest 3 has hand tracking capabilities, I also implemented recognition of multiple hand signs that appear in the manga to increase immersion.",
      media: [
        `<video controls class="portrait" style="border-radius:8px;">
          <source src="assets/media/manga/manga_jump_mode.mp4" type="video/mp4" />
        </video>`,
        `<video controls class="portrait" style="border-radius:8px;">
          <source src="assets/media/manga/manga_window_mode.mp4" type="video/mp4" />
        </video>`
      ]
    },
    3: {
      title: "Jeanne D'Arc: Virtual Camera Tool for Unreal Engine",
      description: "Jeanne D'Arc is a virtual camera tool for Unreal Engine 5 that allows anyone to use their phone or the controllers of a VR headset as a camera in virtual space. It has been used by multiple Japanese anime studios in anime production. <br> I was responsible for the development of multiple of its features using both C++ and Unreal Blueprints: <br><br> - Target tracking and framing based on screen-space zones with an offset control system. <br> - Client side of the user authentication and session management system. The system required user login and authentication using Google/X, communicating with a Firebase REST API in order to allow use of some of the tool's features.",
      media: [
        `<video controls class="portrait" style="border-radius:8px;">
          <source src="assets/media/camera/jeannedarc_target_framing.mp4" type="video/mp4" />
        </video>`,
        `<img src="assets/media/camera/jeanne_camera.png" alt="Sakura Miku character model in a motion capture pose, standing in a digital workspace with interface elements visible, neutral expression, technical and creative environment" style="width:100%;margin-top:1rem;border-radius:8px;" />`
      ]
    },
    4: {
      title: "Red light, green light vs AI",
      description: "Multiplayer game in which participants play against an AI that detects their movement using beacons and sensors",
      media: [
        `<video controls class="portrait" style="border-radius:8px;">
          <source src="assets/media/aidaruma/darumaai_video_short.mp4" />
        </video>`,
        `<video controls class="portrait" style="border-radius:8px;">
          <source src="assets/media/aidaruma/darumaai_intro_short.mp4" type="video/mp4" />
        </video>`
      ]
    },
    5: {
      title: "OTAKU Lovely Densetsu〜 -√EDEN Music Video",
      description: "Jeanne D'Arc is a virtual camera tool for Unreal Engine 5 that allows anyone to use their phone or the controllers of a VR headset as a camera in virtual space. It has been used by multiple Japanese anime studios in anime production. <br> I was responsible for the development of multiple of its features using both C++ and Unreal Blueprints: <br><br> - Target tracking and framing based on screen-space zones with an offset control system. <br> - Client side of the user authentication and session management system. The system required user login and authentication using Google/X, communicating with a Firebase REST API in order to allow use of some of the tool's features.",
      media: [
        `<video controls class="portrait" style="border-radius:8px;">
          <source src="assets/media/camera/jeannedarc_target_framing.mp4" type="video/mp4" />
        </video>`,
        `<img src="assets/media/camera/jeanne_camera.png" alt="Sakura Miku character model in a motion capture pose, standing in a digital workspace with interface elements visible, neutral expression, technical and creative environment" style="width:100%;margin-top:1rem;border-radius:8px;" />`
      ]
    },
    6: {
      title: "αU Metaverse",
      description: "Metaverse service where users can enjoy a variety of communities and events within the virtual cities of Shibuya and Osaka.",
      media: [
        `<video controls class="portrait" style="border-radius:8px;">
          <source src="assets/media/metaverse/live_short.mp4" type="video/mp4" />
        </video>`,
        `<img src="assets/media/metaverse/karaoke.webp" alt="Sakura Miku character model in a motion capture pose, standing in a digital workspace with interface elements visible, neutral expression, technical and creative environment" style="width:100%;margin-top:1rem;border-radius:8px;" />`
      ]
    },
    7: {
      title: "Houdini physically based water simulations",
      description: "Physically based water effects in Houdini for an unnanounced anime project.",
      media: [
        `<video controls class="portrait" style="border-radius:8px;">
          <source src="assets/media/houdinianime/water_threetentacles.mp4" />
        </video>`,
        `<video controls class="portrait" style="border-radius:8px;">
          <source src="assets/media/houdinianime/tentacle_curves.mp4" type="video/mp4" />
        </video>`
      ]
    },
  };

  const project = projectDetails[id];
  if (!project) {
    content.innerHTML = `<span class="close" id="modal-close">&times;</span>No details.`;
    modal.style.display = 'flex';
    document.getElementById('modal-close').onclick = closeModal;
    return;
  }

  // Render modal content with all media
  content.innerHTML = `
    <span class="close" id="modal-close">&times;</span>
    <div class="modal-info">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
    </div>
    <div class="modal-gallery">
      ${project.media.join('')}
    </div>
  `;
  modal.style.display = 'flex';
  document.getElementById('modal-close').onclick = closeModal;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}