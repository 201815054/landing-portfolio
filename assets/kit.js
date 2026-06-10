/* Toss-style usability: on mobile, surface the page's primary action as a
   sticky bottom bar so the next step is always one thumb-tap away. */
(function () {
  function build() {
    if (document.querySelector(".mobile-cta")) return;
    var cta =
      document.querySelector("[data-cta]") ||
      document.querySelector(".hero .btn-primary") ||
      document.querySelector(".hero-cta .btn-primary");
    if (!cta) return;
    var bar = document.createElement("div");
    bar.className = "mobile-cta";
    var b = document.createElement("a");
    b.className = "btn btn-primary btn-lg";
    b.href = cta.getAttribute("href") || "#";
    b.textContent = cta.textContent.replace(/[→]/g, "").trim();
    bar.appendChild(b);
    document.body.appendChild(bar);
  }
  if (document.readyState !== "loading") build();
  else document.addEventListener("DOMContentLoaded", build);
})();
