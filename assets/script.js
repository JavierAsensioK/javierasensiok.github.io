const projectDetails = {
  project1: `
    <h2>Project 1</h2>
    <p>Description for Project 1 goes here.</p>
    <img src="assets/thumb1.jpg" style="width:100%;border-radius:6px;" />
    <video controls style="width:100%;margin-top:1rem;">
      <source src="assets/video1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `,
  project2: `
    <h2>Project 2</h2>
    <p>Description for Project 2 goes here.</p>
    <img src="assets/thumb2.jpg" style="width:100%;border-radius:6px;" />
  `
};

function openModal(projectKey) {
  document.getElementById("modal-body").innerHTML = projectDetails[projectKey];
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
