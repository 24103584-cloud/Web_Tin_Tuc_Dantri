/**
 * Hàm crawler dữ liệu bài viết từ URL Dân trí
 */
async function crawlArticle(url) {
  try {
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);
    
    if (!response.ok) throw new Error("Không thể kết nối máy chủ Proxy.");

    const data = await response.json();
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.contents, "text/html");

    const idMatch = url.match(/-(\d+)\.htm/);
    const id = idMatch ? `dtri-${idMatch[1]}` : `dtri-${Date.now()}`;

    const title = doc.querySelector("h1.title-page")?.textContent.trim() 
               || doc.querySelector("meta[property='og:title']")?.getAttribute("content") 
               || "Tiêu đề bài viết";

    const slug = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

    const excerpt = doc.querySelector("h2.singular-sapo")?.textContent.trim() 
                 || doc.querySelector("meta[property='og:description']")?.getAttribute("content") 
                 || "";

    const contentEl = doc.querySelector(".singular-content");
    let content = "";
    let thumbnail = "";

    if (contentEl) {
      contentEl.querySelectorAll(".related-news, script, iframe, .author-info").forEach(el => el.remove());
      content = contentEl.innerText.trim();
      const firstImg = contentEl.querySelector("img");
      if (firstImg) thumbnail = firstImg.getAttribute("data-src") || firstImg.getAttribute("src") || "";
    }

    if (!thumbnail) {
      thumbnail = doc.querySelector("meta[property='og:image']")?.getAttribute("content") || "";
    }

    const author = doc.querySelector(".author-name")?.textContent.trim() 
                || doc.querySelector(".singular-author")?.textContent.trim() 
                || "Theo Dân Trí";

    const category = doc.querySelector(".breadcrumbs li:nth-child(2) a")?.textContent.trim() 
                  || doc.querySelector("meta[property='article:section']")?.getAttribute("content") 
                  || "Thời sự";

    const publishedAt = doc.querySelector(".author-time")?.textContent.trim() 
                     || new Date().toLocaleString("vi-VN");

    return {
      id, title, slug, excerpt, content, thumbnail, author, category, publishedAt,
      source: "dantri.com.vn",
      url
    };
  } catch (error) {
    console.error("Crawler Error:", error);
    throw error;
  }
}
