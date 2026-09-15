const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

fetch("https://opensheet.elk.sh/18qqmRSW7wCL0nvER4sQkkl391qQpT9_sEIqOs45XeLE/Featured%20Work")
    .then(res => res.json())
    .then(data => {
        const sorted = data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

        const categories = ["websites", "photography", "videos", "graphicDesign"];
        categories.forEach(type => {
            const grid = document.querySelector(`#${type.replace(/\s+/g, "")}`);
            const filtered = sorted.filter(item => item.type === type).slice(0, 3); // limit per category

            filtered.forEach(item => {
                const card = document.createElement("div");
                card.innerHTML = `
                  <div class="featuredWorkCard">
                    <div class="featuredWorkCardImage" style="background-image: url('${item.image}');"></div>
                    
                    <div class="featuredWordCardInfo">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                  </div>
        `;
                grid.appendChild(card);
            });
        });
    });


