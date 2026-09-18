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