document.addEventListener("DOMContentLoaded", function() {
  // Check if the referrer includes the specified URL pattern
  const referrerPattern = "goobismoobis.github.io/RFA/cabinetannouncements";

  if (document.referrer.includes(referrerPattern)) {
    sessionStorage.setItem("cameFromCabinetAnnouncements", "true");
  }

  if (sessionStorage.getItem("cameFromCabinetAnnouncements") === "true") {
    // Create a new <div> container
    const newContainer = document.createElement("div");
    newContainer.className = "announcement-container";

    // Create the <a> link inside the new container
    const redirectLink = document.createElement("a");
    redirectLink.href = "https://goobismoobis.github.io/RFA/cabinetannouncements";
    redirectLink.innerText = "Return to Cabinet Announcements";

    newContainer.appendChild(redirectLink);

    // Find the first <div class="container">
    const firstContainer = document.querySelector("div.container");

    // Insert the new container outside the "container" divs
    if (firstContainer) {
      firstContainer.parentNode.insertBefore(newContainer, firstContainer.nextSibling);
    }
  }
});