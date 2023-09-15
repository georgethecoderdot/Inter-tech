document
  .getElementById("flex-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("mobile-navigation").classList.add("hidden");
    document.getElementById("close").classList.add("hidden");
    document.getElementById("open").classList.remove("hidden");
    location.href = this.href;
  });

document
  .getElementById("tech-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("mobile-navigation").classList.add("hidden");
    document.getElementById("close").classList.add("hidden");
    document.getElementById("open").classList.remove("hidden");
    location.href = this.href;
  });

document
  .getElementById("quality-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("mobile-navigation").classList.add("hidden");
    document.getElementById("close").classList.add("hidden");
    document.getElementById("open").classList.remove("hidden");
    location.href = this.href;
  });

document.getElementById("env-link").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("mobile-navigation").classList.add("hidden");
  document.getElementById("close").classList.add("hidden");
  document.getElementById("open").classList.remove("hidden");
  location.href = this.href;
});

document.getElementById("ip-link").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("mobile-navigation").classList.add("hidden");
  document.getElementById("close").classList.add("hidden");
  document.getElementById("open").classList.remove("hidden");
  location.href = this.href;
});
