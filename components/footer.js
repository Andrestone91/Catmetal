function addFooter(ele) {
  const footerEl = document.createElement("div");
  footerEl.innerHTML = `
    <div class="footer">
            
    <img class="img__footer" src="./assets/Catmetal.jfif" alt="" />
     <div class="texto">
        <p class="title">Copyright 2022 - CATMETAL</p>
    
        </div>
  </div>
    `
  ele.appendChild(footerEl)
}