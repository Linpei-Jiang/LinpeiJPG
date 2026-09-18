fetch("https://opensheet.elk.sh/18qqmRSW7wCL0nvER4sQkkl391qQpT9_sEIqOs45XeLE/Portfolio%20Short%20Cinematic")
    .then(res => res.json())
    .then(data => {
        // Sort newest → oldest
        const sorted = data.sort((a, b) => Date.parse(b.webUploadTime) - Date.parse(a.webUploadTime));

        renderPage(sorted, currentPage);
        renderPagination(sorted);
    });

const itemsPerPage = 5;
let currentPage = 1;

function renderPage(data, page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = data.slice(start, end);

    const grid = document.querySelector(".portfolioGrid");
    grid.innerHTML = "";

    paginatedItems.forEach(item => {
        const card = document.createElement("a");
        card.className = "portfolioCard";

        card.innerHTML = `
            <div class="portfolioImage" style="background-image: url('${item.photoImage}');"></div>
            <div class="portfolioContent">
                <h2 class="portfolioTitle">${item.photoTitle}</h2>
                <p class="portfolioDescription">${item.photoDescription}</p>
            </div>
            <div class="portfolioExtraInfo">
                <span class="portfolioSkills">${item.photoType}</span>
                <span class="portfolioTime">${item.photoTime}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}