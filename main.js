// Khởi tạo dữ liệu vào LocalStorage từ tệp JSON nếu chưa có
async function initData() {
  if (!localStorage.getItem('categories')) {
    try {
      const res = await fetch('categories.json');
      const data = await res.json();
      localStorage.setItem('categories', JSON.stringify(data));
    } catch (e) {
      console.error("Lỗi nạp categories.json", e);
    }
  }

  if (!localStorage.getItem('posts')) {
    try {
      const res = await fetch('posts.json');
      const data = await res.json();
      localStorage.setItem('posts', JSON.stringify(data));
    } catch (e) {
      console.error("Lỗi nạp posts.json", e);
    }
  }

  renderNav();
  loadCategory('home');
}

// Render Menu Navbar
function renderNav() {
  const categoriesData = JSON.parse(localStorage.getItem('categories'));
  const navContainer = document.getElementById('main-nav');
  const footerCatContainer = document.getElementById('footer-categories');

  if (!categoriesData || !categoriesData.menu) return;

  navContainer.innerHTML = '';
  footerCatContainer.innerHTML = '';

  categoriesData.menu.forEach(item => {
    const li = document.createElement('li');
    li.className = 'nav-item';

    let html = `<a class="nav-link" onclick="loadCategory('${item.id}')">${item.title}</a>`;

    if (item.children && item.children.length > 0) {
      html += `<ul class="dropdown">`;
      item.children.forEach(child => {
        html += `<li><a onclick="loadCategory('${child.id}')">${child.title}</a></li>`;
      });
      html += `</ul>`;
    }

    li.innerHTML = html;
    navContainer.appendChild(li);

    if (item.type === 'category') {
      footerCatContainer.innerHTML += `<li><a onclick="loadCategory('${item.id}')">${item.title}</a></li>`;
    }
  });
}

// Lấy danh sách bài viết từ LocalStorage
function getPosts() {
  return JSON.parse(localStorage.getItem('posts')) || [];
}

// Hiển thị danh sách bài viết theo chuyên mục
function loadCategory(catId) {
  const posts = getPosts();
  let filteredPosts = posts;

  if (catId !== 'home' && catId !== 'latest') {
    filteredPosts = posts.filter(p =>
      p.category.toLowerCase().includes(catId.replace('-', ' '))
    );
  }

  const container = document.getElementById('app-content');

  if (filteredPosts.length === 0) {
    container.innerHTML = `<p style="padding: 20px 0;">Không có bài viết nào thuộc chuyên mục này.</p>`;
    return;
  }

  const top3 = filteredPosts.slice(0, 3);
  const remaining = filteredPosts.slice(3);

  let html = `<h2 class="section-title">Tin tức</h2>`;

  // Layout Top Section
  if (top3.length > 0) {
    html += `<div class="top-section">`;

    const feat = top3[0];
    html += `
      <div class="featured-post">
        <img src="${feat.image}" alt="${feat.title}">
        <h2 onclick="showPostDetail('${feat.id}')">${feat.title}</h2>
        <p>${feat.excerpt}</p>
      </div>
    `;

    html += `<div class="right-posts">`;
    for (let i = 1; i < top3.length; i++) {
      const item = top3[i];
      html += `
        <div class="small-post">
          <img src="${item.image}" alt="${item.title}">
          <h3 onclick="showPostDetail('${item.id}')">${item.title}</h3>
        </div>
      `;
    }
    html += `</div></div>`;
  }

  // Layout Vertical List
  if (remaining.length > 0) {
    html += `<div class="post-list">`;
    remaining.forEach(item => {
      html += `
        <div class="post-item">
          <img src="${item.image}" alt="${item.title}">
          <div class="post-content">
            <h3 onclick="showPostDetail('${item.id}')">${item.title}</h3>
            <p>${item.excerpt}</p>
            <div class="post-meta">${item.publishedAt} | Tác giả: ${item.author}</div>
          </div>
        </div>
      `;
    });
    html += `</div>`;
  }

  container.innerHTML = html;
}

// Hiển thị chi tiết bài viết
function showPostDetail(postId) {
  const posts = getPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  const container = document.getElementById('app-content');
  container.innerHTML = `
    <div class="article-detail">
      <h1>${post.title}</h1>
      <div class="article-meta">
        Chuyên mục: <strong>${post.category}</strong> | 
        Đăng ngày: ${post.publishedAt} | 
        Tác giả: <strong>${post.author}</strong>
      </div>
      <div class="article-excerpt">${post.excerpt}</div>
      <div class="article-body">${post.content}</div>
    </div>
  `;
}

window.onload = initData;
