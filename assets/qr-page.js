// menu URL = this folder (or ?url=... to override)
  const url = new URL("./", location.href).href; // always this site — no outside links
  const q = qrcode(0, "H"); q.addData(url); q.make();
  const n = q.getModuleCount(), m = 2, size = n + m * 2;
  let path = "";
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++)
    if (q.isDark(r, c)) path += `M${c + m} ${r + m}h1v1h-1z`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" shape-rendering="crispEdges"><rect width="${size}" height="${size}" fill="#FFF8EA"/><path d="${path}" fill="#43211A"/></svg>`;
  document.getElementById("qr").innerHTML = svg + '<div class="mid"><img src="assets/img/cup-dino.png" alt=""></div>';
  document.getElementById("url").textContent = url;
  document.getElementById("dl").href = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
document.getElementById("printBtn").addEventListener("click", () => print());
