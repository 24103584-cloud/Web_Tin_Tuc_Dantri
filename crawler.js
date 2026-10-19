async function crawlArticle(url) {
  try {
    const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);
    
    if (!response.ok) {
      throw new Error("Không thể tải nội dung từ đường dẫn này.");
    }
    
    const htmlText = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');

    const idMatch = url.match(/-(\d+)\.htm/);
    const id = idMatch ? `dtri-${idMatch[1]}` : `dtri-${Date.now()}`;

    const titleEl = doc.querySelector('h1.title-page, h1.e-magazine__title, h1');
    const title = titleEl ? titleEl.innerText.trim() : '';

    const urlParts = url.split('/');
    const lastPart = urlParts[urlParts.length - 1];
    const slug = lastPart.replace(/\.htm$/, '').replace(/^.*?-/, '');

    const excerptEl = doc.querySelector('h2.singular-sapo, h2.sapo');
    const excerpt = excerptEl ? excerptEl.innerText.trim() : '';

    const contentEl = doc.querySelector('.singular-content, .e-magazine__body');
    const content = contentEl ? contentEl.innerHTML.trim() : '';

    const authorEl = doc.querySelector('.author-name, .article-author, .singular-author');
    const author = authorEl ? authorEl.innerText.trim() : 'Tổng hợp';

    const categoryEl = doc.querySelector('.breadcrumbs li:nth-child(2) a, .ul-breadcrumb li:nth-child(2) a');
    const category = categoryEl ? categoryEl.innerText.trim() : 'Thời sự';

    const timeEl = doc.querySelector('.author-time, .singular-time');
    const publishedAt = timeEl ? timeEl.innerText.trim() : new Date().toISOString();

    const source = 'dantri.com.vn';

    const imgEl = doc.querySelector('.singular-content img, .e-magazine__body img');
    const image = imgEl ? imgEl.getAttribute('src') : 'https://picsum.photos/600/400';

    return {
      id,
      title,
      slug,
      excerpt,
      content,
      author,
      category,
      publishedAt,
      source,
      url,
      image
    };
  } catch (error) {
    console.error("Lỗi crawler:", error);
    throw error;
  }
}

async function handleCrawlAndSave() {
  const urlInput = document.getElementById('article-url').value.trim();
  const resultArea = document.getElementById('result-area');

  if (!urlInput) {
    alert("Vui lòng nhập đường dẫn bài viết Dân trí!");
    return;
  }

  resultArea.innerHTML = '<p style="color: #008837; font-weight: bold;">Đang cào dữ liệu từ Dân trí, vui lòng chờ...</p>';

  try {
    const articleData = await crawlArticle(urlInput);
    let existingPosts = JSON.parse(localStorage.getItem('posts')) || [];

    const index = existingPosts.findIndex(p => p.id === articleData.id);
    if (index !== -1) {
      existingPosts[index] = articleData;
    } else {
      existingPosts.unshift(articleData);
    }

    localStorage.setItem('posts', JSON.stringify(existingPosts));

    resultArea.innerHTML = `
      <div class="success-box">
        <h3 style="color: #2e7d32; margin-bottom: 10px;">Cào và lưu bài viết thành công!</h3>
        <p>Bài viết đã được chèn vào LocalStorage. Bạn có thể quay lại <a href="index.html" style="color: #008837; font-weight: bold;">Trang chủ</a> để kiểm tra.</p>
        <h4 style="margin-top: 15px; margin-bottom: 5px;">Dữ liệu JSON chuẩn hóa:</h4>
        <pre>${JSON.stringify(articleData, null, 2)}</pre>
      </div>
    `;
  } catch (err) {
    resultArea.innerHTML = `<p style="color: red; font-weight: bold;">Lỗi: ${err.message}</p>`;
  }
}
```<ElicitationsGroup>
  <Elicitation context="The user might need additional assistance regarding Git issues, Canvas submissions, or code execution.">
    <Option ID="1">
      <Content>Hướng dẫn kiểm tra bài nộp sau khi đăng tải toàn bộ file lên GitHub thành công</Content>
    </Option>
    <Option ID="2">
      <Content>Hướng dẫn cài đặt Extension Live Server trong VS Code để xem thử trang web</Content>
    </Option>
  </Elicitation>
</ElicitationsGroup>
