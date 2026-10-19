// KHỞI TẠO DỮ LIỆU BAN ĐẦU TỪ FILE JSON VÀO LOCALSTORAGE
async function initData() {
  try {
    // 1. Kiểm tra và nạp danh sách Bài Viết từ posts.json
    if (!localStorage.getItem("news_posts") || JSON.parse(localStorage.getItem("news_posts")).length === 0) {
      const responsePosts = await fetch("./posts.json");
      if (!responsePosts.ok) {
        throw new Error("Không thể nạp file posts.json");
      }
      const postsData = await responsePosts.json();
      localStorage.setItem("news_posts", JSON.stringify(postsData));
    }

    // 2. Kiểm tra và nạp Chuyên Mục từ categories.json
    if (!localStorage.getItem("news_categories")) {
      const responseCat = await fetch("./categories.json");
      if (responseCat.ok) {
        const catData = await responseCat.json();
        localStorage.setItem("news_categories", JSON.stringify(catData.menu));
      }
    }
  } catch (error) {
    console.error("Lỗi khi nạp dữ liệu ban đầu:", error);
  } finally {
    // Render giao diện sau khi hoàn tất kiểm tra/nạp dữ liệu
    renderNavbar();
    if (document.getElementById("top-featured-container")) {
      filterByCategory('all');
    }
  }
}

// KHỞI TẠO NAVBAR ĐỘNG
function renderNavbar() {
  const navContainer = document.getElementById("navbar-menu");
  if (!navContainer) return;

  // Lấy dữ liệu danh mục từ LocalStorage hoặc dữ liệu dự phòng
  const categories = JSON.parse(localStorage.getItem("news_categories")) || [
    { id: "home", title: "Trang chủ" },
    { id: "latest", title: "Mới nhất" },
    { id: "thoi-su", title: "Thời sự", children: [{ title: "Chính trị" }, { title: "Giao thông" }, { title: "Môi trường" }] },
    { id: "the-gioi", title: "Thế giới", children: [{ title: "Quân sự" }, { title: "Phân tích - Bình luận" }] },
    { id: "bat-dong-san", title: "Bất động sản" },
    { id: "doi-song", title: "Đời sống" }
  ];

  navContainer.innerHTML = categories.map(cat => {
    if (cat.children && cat.children.length > 0) {
      return `
        <li class="nav-item">
          <a href="#" class="nav-link" onclick="filterByCategory('${cat.title}')">${cat.title} <i class="fa-solid fa-chevron-down" style="font-size: 0.7rem;"></i></a>
          <ul class="dropdown-menu">
            ${cat.children.map(sub => `<li><a href="#" onclick="filterByCategory('${sub.title \vert{}\vert{} sub}')">${sub.title || sub}</a></li>`).join('')}
          </ul>
        </li>
      `;
    }
    return `
      <li class="nav-item">
        <a href="#" class="nav-link" onclick="filterByCategory('${cat.id === 'home' || cat.id === 'latest' ? 'all' : cat.title}')">${cat.title}</a>
      </li>
    `;
  }).join('');
}

// HIỂN THỊ DANH SÁCH BÀI VIẾT THEO CHUYÊN MỤC (SẮP XẾP MỚI -> CŨ)
function filterByCategory(categoryName) {
  const allPosts = JSON.parse(localStorage.getItem("news_posts")) || [];
  
  let filtered = [];
  if (categoryName === 'all' || categoryName === 'Trang chủ' || categoryName === 'Mới nhất') {
    filtered = [...allPosts];
    const titleEl = document.getElementById("category-title");
    if (titleEl) titleEl.textContent = "Tin Mới Nhất";
  } else {
    filtered = allPosts.filter(p => p.category && p.category.toLowerCase().includes(categoryName.toLowerCase()));
    const titleEl = document.getElementById("category-title");
    if (titleEl) titleEl.textContent = `Chuyên mục: ${categoryName}`;
  }

  // Sắp xếp thời gian giảm dần (Mới -> Cũ)
  filtered.sort((a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0));

  renderPostsLayout(filtered);
  showSection('category-view');
}

// RENDER LAYOUT BÀI VIẾT (1 FEATURED TRÁI + 2 PHẢI + DANH SÁCH DỌC)
function renderPostsLayout(posts) {
  const topContainer = document.getElementById("top-featured-container");
  const remainContainer = document.getElementById("remaining-posts-container");

  if (!topContainer || !remainContainer) return;

  if (!posts || posts.length === 0) {
    topContainer.innerHTML = "<p style='padding: 20px;'>Chưa có bài viết nào trong chuyên mục này.</p>";
    remainContainer.innerHTML = "";
    return;
  }

  // 1. TOP SECTION (3 Bài đầu tiên)
  const top3 = posts.slice(0, 3);
  const featured = top3[0];
  const secondary = top3.slice(1, 3);

  let topHtml = `
    <!-- Bài viết lớn bên trái -->
    <div class="featured-post" onclick="viewDetail('${featured.id}')">
      <img src="${featured.thumbnail || 'https://via.placeholder.com/600x340'}" alt="${featured.title}">
      <div class="featured-content">
        <h3 class="featured-title">${featured.title}</h3>
        <p class="featured-excerpt">${featured.excerpt || ''}</p>
      </div>
    </div>
  `;

  if (secondary.length > 0) {
    topHtml += `
      <!-- 2 bài viết nhỏ bên phải -->
      <div class="secondary-posts">
        ${secondary.map(post => `
          <div class="secondary-card" onclick="viewDetail('${post.id}')">
            <img src="${post.thumbnail \vert{}\vert{} 'https://via.placeholder.com/300x140'}" alt="${post.title}">
            <div class="card-body">
              <h4>${post.title}</h4>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  topContainer.innerHTML = topHtml;

  // 2. DANH SÁCH DỌC CÁC BÀI VIẾT CÒN LẠI
  const remaining = posts.slice(3);
  remainContainer.innerHTML = remaining.map(post => `
    <div class="list-item-card" onclick="viewDetail('${post.id}')">
      <img src="${post.thumbnail || 'https://via.placeholder.com/240x150'}" alt="${post.title}">
      <div class="list-item-body">
        <h4 class="list-item-title">${post.title}</h4>
        <div class="list-item-meta">
          <span><i class="fa-regular fa-clock"></i> ${post.publishedAt || ''}</span> | 
          <span><i class="fa-solid fa-folder"></i> ${post.category || 'Tin tức'}</span>
        </div>
        <p class="list-item-excerpt">${post.excerpt || ''}</p>
      </div>
    </div>
  `).join('');
}

// XEM CHI TIẾT BÀI VIẾT
function viewDetail(postId) {
  const allPosts = JSON.parse(localStorage.getItem("news_posts")) || [];
  const post = allPosts.find(p => p.id === postId);

  if (!post) return;

  const detailContainer = document.getElementById("article-detail-content");
  if (!detailContainer) return;

  detailContainer.innerHTML = `
    <h1 class="article-title">${post.title}</h1>
    <div class="article-meta">
      <span><i class="fa-solid fa-folder"></i> Chuyên mục: <strong>${post.category || 'Tin tức'}</strong></span> | 
      <span><i class="fa-regular fa-clock"></i> Đăng lúc: ${post.publishedAt || ''}</span> | 
      <span><i class="fa-solid fa-globe"></i> Nguồn: ${post.source || 'dantri.com.vn'}</span>
    </div>
    <p class="article-excerpt">${post.excerpt || ''}</p>
    ${post.thumbnail ? `<img src="${post.thumbnail}" class="article-main-img" alt="${post.title}">` : ''}
    <div class="article-body-text">${post.content || ''}</div>
    <div class="article-author">Tác giả: ${post.author || 'Theo Dân Trí'}</div>
  `;

  showSection('detail-view');
}

// CHUYỂN ĐỔI CHẾ ĐỘ HIỂN THỊ
function showSection(sectionId) {
  document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add("active");
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack() {
  showSection('category-view');
}

// KHỞI CHẠY TRANG
document.addEventListener("DOMContentLoaded", () => {
  initData();
});
