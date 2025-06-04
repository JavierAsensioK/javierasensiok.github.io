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
      description: "Built a mobile <b>Web AR</b> application for an exhibition at the Nakanoshima Museum of Art in Osaka using <b>Javascript and A-Frame/three.js</b>. I was responsible for everything other than the character assets, including:</br></br> - Designing the <b>asset conversion and optimization pipeline</b> and coordinating with the 3DCG team in order to prepare the assets for the browser based AR application. </br> - Developing the marker-based AR application using <b>8th Wall and Javascript</b> <br> - Implementing the shaders to achieve the desired visual effects for the character model in AR. </br> - Creating the base for the <b>lipsync, clothes and hair animations using Unity</b> </br> - Creating some of the special effects using both <b>Blender and A-frame</b> <br> - Creating the <b>UI and UX</b> for the application, including background logic that used <b>GPS</b> data to only allow users at the museum to watch the AR part.",
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
      description: "Proof of concept for Meta Quest application that lets you jump into a manga page in VR. <br> I was responsible for everything other than the models and textures, including the <b>Unreal Engine project VR setup, blueprint scripting</b>, and development of multiple <b>character and full-screen shaders to give it the manga look</b>. Since the manga used was Naruto and the Meta Quest 3 has hand tracking capabilities, I also implemented <b>recognition of sequences of hand signs</b> that appear in the manga to increase immersion for fans of the series.",
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
      description: "Jeanne D'Arc is a virtual camera tool for <b>Unreal Engine 5</b> that allows anyone to use their phone or the controllers of a VR headset as a camera in virtual space. It has been used by multiple Japanese anime studios in anime production. <br> I was responsible for the development of multiple of its features using both <b>C++ and Unreal Blueprints</b>, as well as their respective <b>UIs</b>: <br><br> - <b>Target tracking and framing system</b> based on screen-space zones with an offset control. <br> - Client side of the <b>user authentication and session management</b> system. The system required user login and authentication using Google/X, <b>communicating with a Firebase REST API</b> in order to allow use of some of the tool's features. <br> - Other functionalities for the virtual camera, such as a circular handle used to control roll rotation.",
      media: [
        `<video controls class="portrait" style="border-radius:8px;">
          <source src="assets/media/camera/jeannedarc_target_framing.mp4" type="video/mp4" />
        </video>`,
        `<img src="assets/media/camera/jeanne_camera.png" alt="Sakura Miku character model in a motion capture pose, standing in a digital workspace with interface elements visible, neutral expression, technical and creative environment" style="width:100%;margin-top:1rem;border-radius:8px;" />`
      ]
    },
    4: {
      title: "Red light, green light vs AI",
      description: "<b>Unity</b> multiplayer game in which participants play against an AI that <b>detects their movement using real time data from beacons and sensors</b>. </br> I implemented everything related to the beacons and sensors, including their configuration and communication with the <b>Unity</b> application running on a Windows PC. </br> </br> The game was made for groups of up to 6 players. Each player wore a vest with their beacon inside, and the beacon sent <b>acceleration data via Bluetooth Low Energy (BLE)</b> packages. </br> During development I found out that Unity for Windows cannot natively receive BLE data, so I implemented a <b>custom python script</b> that run together with the Unity application and received the packets from the beacons, decoded them and then sent their data to Unity using a local socket connection. </br> </br> I implemented the <b>algorithm that used the beacons' accelerometer data to calculate how much each of the players was moving</b>. The result was used to determine how fast should the AI speak, and if it caught the players moving. In addition to the beacons, a <b>laser sensor</b> was also placed at the goal to the detect if the players reached the goal before they were caught by the AI. This sensor <b>sent information to Unity via an Ethernet cable</b>. </br> </br> Other than the movement detection, I also created all of the <b>visual effects for the story introduction</b> that played before every game's start. I used downloaded 3D models of multiple buildings and a character, modified them in <b>Blender</b>, then used a <b>wireframe shader and post-processing effects</b> to achieve a futuristic AI look. ",
      media: [
        `<video controls class="portrait" style="border-radius:8px;">
          <source src="assets/media/aidaruma/darumaai_video_short.mp4" />
        </video>`,
        `<img src="assets/media/aidaruma/beacons.jpg" alt="Sakura Miku character model in a motion capture pose, standing in a digital workspace with interface elements visible, neutral expression, technical and creative environment" style="width:100%;margin-top:1rem;border-radius:8px;" />`,
        `<video controls class="portrait" style="border-radius:8px;">
          <source src="assets/media/aidaruma/darumaai_intro_short.mp4" type="video/mp4" />
        </video>`
      ]
    },
    5: {
      title: "OTAKU Lovely Densetsu〜 -√EDEN Music Video",
      description: "Collaboration music video for Hanabie's OTAKU Lovely Densetsu〜. As Technical Director, I was in charge of: </br></br> - Implementing in <b>UE5's Movie Render Queue</b> the different render settings necessary for <b>rendering multiple layers</b> to be used in later compositing, such as depth and object IDs. </br> - Implementation of <b>editor tools</b> to make it easier to modify the different scenes </br> - Set up of the <b>lighting, materials and some of the visual effects</b> of the different scenes that appear in the video.",
      media: [
        `<video controls class="portrait" style="border-radius:8px;">
          <source src="assets/media/eden/edenshort.mp4" type="video/mp4" />
        </video>`,
        `<img src="assets/media/eden/depth.png" alt="" style="width:100%;margin-top:1rem;border-radius:8px;" />`,
        `<img src="assets/media/eden/id.png" alt="" style="width:100%;margin-top:1rem;border-radius:8px;" />`,
        `<img src="assets/media/eden/fight.png" alt="" style="width:100%;margin-top:1rem;border-radius:8px;" />`,
        `<img src="assets/media/eden/horror.png" alt="" style="width:100%;margin-top:1rem;border-radius:8px;" />`,
        `<img src="assets/media/eden/desert.png" alt="" style="width:100%;margin-top:1rem;border-radius:8px;" />`,
      ]
    },
    6: {
      title: "αU Metaverse",
      description: "Metaverse service where users can enjoy a variety of communities and events within the virtual cities of Shibuya and Osaka. <br> I was responsible for the development in Unity of gameplay systems and shaders, such as: <br><br> - <b>Interaction system</b> for objects. Objects light up when the player is close to them, and become interactable when the player taps them, allowing them to sit on chairs, turn on lamps, etc. <br> - <b>Multiplayer functionality for VR characters using Photon</b> <br> - Implementing <b>enemy behavior AI</b> for a zombie minigame. I used the Behavior Designer plugin based on <b>Behavior Trees</b>, making zombies decide what to do next based on conditions such as their cone of vision. <br> - Lighting of ingame scenes using <b>light probes and lightmaps</b> in order to <b>optimize for mobile performance.</b> <br> - <b>Navigation meshes</b> of ingame scenes <br> - Creation of many <b>shaders, materials and other effects</b>, such as the water shader for a river, or a system to make the player character transparent with a <b>dithering shader when too close to the camera.</b>",
      media: [
        `<video controls class="portrait" style="border-radius:8px;">
          <source src="assets/media/metaverse/live_short.mp4" type="video/mp4" />
        </video>`,
        `<video controls class="portrait" style="border-radius:8px;">
          <source src="assets/media/metaverse/dither.mp4" type="video/mp4" />
        </video>`,
        `<img src="assets/media/metaverse/karaoke.webp" alt="Sakura Miku character model in a motion capture pose, standing in a digital workspace with interface elements visible, neutral expression, technical and creative environment" style="width:100%;margin-top:1rem;border-radius:8px;" />`
      ]
    },
    7: {
      title: "Houdini physically based water simulations",
      description: "Physically based water effects in Houdini for an unnanounced anime project. <br> I worked with particle fluids tools to create multiple <b>water effects animations</b>, such as tentacles made of water, which were exported as <b>Alembic</b> files.",
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