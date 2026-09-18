fetch("https://opensheet.elk.sh/18qqmRSW7wCL0nvER4sQkkl391qQpT9_sEIqOs45XeLE/Blogs")
    .then(res => res.json())
    .then(data => {
        // Sort newest → oldest
        const sorted = data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

        renderPage(sorted, currentPage);
        renderPagination(sorted);
    });

const itemsPerPage = 10;
let currentPage = 1;

function renderPage(data, page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = data.slice(start, end);

    const grid = document.querySelector(".blogContentGrid");
    grid.innerHTML = "";

    paginatedItems.forEach(item => {
            const slug = slugify(item.title);
            const card = document.createElement("a");
            card.href = `otherHTML/blogDetails.html?title=${slug}`;
            card.target = "_blank";
            card.className = "blogCard";

            card.innerHTML = `
                <div class="blogCardImage" style="background-image: url('${item.image}');"></div>
                <div class="blogCardInfo">
                    <p class="blogCardInfoTitle">${item.title}</p>
                    <div class="blogCardInfoDateAndType">
                        <span class="blogCardInfoDate">${item.date}</span>
                        <span class="blogCardInfoType">${item.type}</span>
                    </div>
                </div>
        `;
            grid.appendChild(card);
        });
}

function renderPagination(data) {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const pagination = document.querySelector(".pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.className = (i === currentPage) ? "active" : "";
        btn.addEventListener("click", () => {
            currentPage = i;
            renderPage(data, currentPage);
            renderPagination(data);
        });
        pagination.appendChild(btn);
    }
}


function slugify(text) {
    return text.toLowerCase().trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
}