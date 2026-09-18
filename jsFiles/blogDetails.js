function slugify(text) {
    return text.toLowerCase().trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
}

const params = new URLSearchParams(window.location.search);
const slug = params.get("title");

fetch("https://opensheet.elk.sh/18qqmRSW7wCL0nvER4sQkkl391qQpT9_sEIqOs45XeLE/Blogs")
    .then(res => res.json())
    .then(data => {
        const item = data.find(n => slugify(n.title) === slug);

        if (item) {
            document.getElementById("blogDetail").innerHTML = `
            <button onclick="window.close()">← Back To Home</button>
            <div class="blogDetailCardContent">
                <div class="blogDetailCardImage" style="background-image: url('${item.image}');"></div>
                <div class="blogDetailCardInfo">
                    <h1>${item.title}</h1>
                    <div class="blogDetailCardInfoDateAndLocation"><span>${item.date}</span> • <span>${item.location}</span></div>
                    <p>${item.content}</p>
                </div>
            </div>
      `;
        } else {
            document.getElementById("blogDetail").innerHTML = `<p>News item not found.</p>`;
        }
    });
