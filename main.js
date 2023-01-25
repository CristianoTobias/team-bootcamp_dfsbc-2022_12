document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.querySelector("#name");
  const usernameElement = document.querySelector("#username");
  const avatarElement = document.querySelector("#avatar");
  const reposElement = document.querySelector('#repos');
  const followersElement = document.querySelector('#followers');
  const followingElement = document.querySelector('#following');
  const linkElement = document.querySelector('#link');
  const nameElementYasmin = document.querySelector("#name-yasmin");
  const usernameElementYasmin = document.querySelector("#username-yasmin");
  const avatarElementYasmin = document.querySelector("#avatar-yasmin");
  const reposElementYasmin = document.querySelector('#repos-yasmin');
  const followersElementYasmin = document.querySelector('#followers-yasmin');
  const followingElementYasmin = document.querySelector('#following-yasmin');
  const linkElementYasmin = document.querySelector('#link-yasmin');
  const nameElementNaldo = document.querySelector("#name-naldo");
  const usernameElementNaldo = document.querySelector("#username-naldo");
  const avatarElementNaldo = document.querySelector("#avatar-naldo");
  const reposElementNaldo = document.querySelector('#repos-naldo');
  const followersElementNaldo = document.querySelector('#followers-naldo');
  const followingElementNaldo = document.querySelector('#following-naldo');
  const linkElementNaldo = document.querySelector('#link-naldo');
  const nameElementRenan = document.querySelector("#name-renan");
  const usernameElementRenan = document.querySelector("#username-renan");
  const avatarElementRenan = document.querySelector("#avatar-renan");
  const reposElementRenan = document.querySelector('#repos-renan');
  const followersElementRenan = document.querySelector('#followers-renan');
  const followingElementRenan = document.querySelector('#following-renan');
  const linkElementRenan = document.querySelector('#link-renan');
  fetch("https://api.github.com/users/CristianoTobias")
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      nameElement.innerText = json.name;
      usernameElement.innerText = json.login;
      // avatarElement.src = json.avatar_url;
      reposElement.innerText = json.public_repos;
      followersElement.innerText = json.followers;
      followingElement.innerText = json.following;
      linkElement.href = json.html_url;
    })

    fetch("https://api.github.com/users/hi-myn")
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      nameElementYasmin.innerText = json.name;
      usernameElementYasmin.innerText = json.login;
      // avatarElementYasmin.src = json.avatar_url;
      reposElementYasmin.innerText = json.public_repos;
      followersElementYasmin.innerText = json.followers;
      followingElementYasmin.innerText = json.following;
      linkElementYasmin.href = json.html_url;
    })
    
    fetch("https://api.github.com/users/francinaldodeandrade")
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      nameElementNaldo.innerText = json.name;
      usernameElementNaldo.innerText = json.login;
      // avatarElementNaldo.src = json.avatar_url;
      reposElementNaldo.innerText = json.public_repos;
      followersElementNaldo.innerText = json.followers;
      followingElementNaldo.innerText = json.following;
      linkElementNaldo.href = json.html_url;
    })

    fetch("https://api.github.com/users/RenanGalkowicz")
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      nameElementRenan.innerText = json.name;
      usernameElementRenan.innerText = json.login;
      // avatarElementRenan.src = json.avatar_url;
      reposElementRenan.innerText = json.public_repos;
      followersElementRenan.innerText = json.followers;
      followingElementRenan.innerText = json.following;
      linkElementRenan.href = json.html_url;
    })
    
    
    
});
