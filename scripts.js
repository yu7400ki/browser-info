const getBrowserInfo = () => {
  const userAgent = navigator.userAgent;
  const browserName = navigator.appName;
  const browserCodeName = navigator.appCodeName;
  const browserVersion = navigator.appVersion;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const browserHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  const info = {
    userAgent,
    browserName,
    browserCodeName,
    browserVersion,
    screenWidth,
    screenHeight,
    browserWidth,
    browserHeight,
  };

  const table = document.querySelector("#browser-info");
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  const rows = Object.entries(info);

  rows.forEach(([property, value]) => {
    const row = tbody.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.textContent = property;
    cell2.textContent = value;
  });

  table.appendChild(tbody);
};

const refreshButton = document.querySelector("#refresh");
refreshButton.addEventListener("click", getBrowserInfo);

window.addEventListener("load", getBrowserInfo);
window.addEventListener("resize", getBrowserInfo);
dispatchEvent(new Event("load"));
