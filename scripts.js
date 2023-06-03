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
  table.innerHTML = "";
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const headerRow = thead.insertRow();
  const headerCell1 = document.createElement("th");
  headerCell1.textContent = "Property";
  headerRow.appendChild(headerCell1);

  const headerCell2 = document.createElement("th");
  headerCell2.textContent = "Value";
  headerRow.appendChild(headerCell2);

  const rows = Object.entries(info);

  rows.forEach(([property, value]) => {
    const row = tbody.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.textContent = property;
    cell2.textContent = value;
  });

  table.appendChild(thead);
  table.appendChild(tbody);
};

window.addEventListener("load", getBrowserInfo);
window.addEventListener("resize", getBrowserInfo);
