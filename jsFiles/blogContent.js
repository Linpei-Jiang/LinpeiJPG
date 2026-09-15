fetch("https://opensheet.elk.sh/18qqmRSW7wCL0nvER4sQkkl391qQpT9_sEIqOs45XeLE/Blogs")
    .then(res => res.json())
    .then(data => {
        const sorted = data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
        const latestThree = sorted.slice(0, 4);

        const grid = document.querySelector(".blogContentGrid");

        latestThree.forEach(item => {
            const slug = slugify(item.title);
            const card = document.createElement("a");
            card.href = `otherHTML/blogDetail.html?title=${slug}`;
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
    });

function slugify(text) {
    return text.toLowerCase().trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
}