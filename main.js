// Dữ liệu bài viết mặc định dự phòng (Fallback)
const defaultPostsData = [
  {
    "id": "dtri-20260928122246655",
    "title": "Hà Nội tính cơ chế bồi thường đất đặc biệt cho 7 dự án đường sắt",
    "slug": "ha-noi-tinh-co-che-boi-thuong-dat-dac-biet-cho-7-du-an-duong-sat",
    "excerpt": "Hà Nội đang xem xét cơ chế bồi thường, hỗ trợ và tái định cư đặc biệt để triển khai 7 dự án đường sắt quan trọng.",
    "content": "<p>Hà Nội đang nghiên cứu và đề xuất cơ chế bồi thường, hỗ trợ và tái định cư đặc biệt nhằm tháo gỡ khó khăn trong công tác giải phóng mặt bằng cho 7 dự án đường sắt trọng điểm. Đây là nhóm dự án hạ tầng giao thông có vai trò quan trọng trong việc phát triển mạng lưới vận tải công cộng và giảm ùn tắc đô thị.</p>",
    "author": "Văn Hưng",
    "category": "Bất động sản",
    "publishedAt": "2026-09-28 12:22",
    "source": "dantri.com.vn",
    "url": "https://dantri.com.vn/bat-dong-san/ha-noi-tinh-co-che-boi-thuong-dat-dac-biet-cho-7-du-an-duong-sat-20260928122246655.htm",
    "image": "https://picsum.photos/id/1018/600/400"
  },
  {
    "id": "dtri-20260928111022334",
    "title": "Dự án cao tốc Bắc - Nam tăng tốc hoàn thành các hạng mục cuối",
    "slug": "du-an-cao-toc-bac-nam-tang-toc-hoan-thanh",
    "excerpt": "Các nhà thầu đang tập trung nhân lực và máy móc thi công xuyên đêm để kịp tiến độ thông xe toàn tuyến.",
    "content": "<p>Trên công trường thi công tuyến cao tốc Bắc - Nam, hàng trăm cán bộ, công nhân vẫn đang tích cực làm việc khẩn trương để hoàn thành những km đường cuối cùng đúng kế hoạch đề ra.</p>",
    "author": "Trần Hải",
    "category": "Giao thông",
    "publishedAt": "2026-09-28 11:10",
    "source": "dantri.com.vn",
    "url": "https://dantri.com.vn/thoi-su/giao-thong.htm",
    "image": "https://picsum.photos/id/1024/600/400"
  },
  {
    "id": "dtri-20260928091511223",
    "title": "Hội nghị thượng đỉnh biến đổi khí hậu bàn giải pháp năng lượng xanh",
    "slug": "hoi-nghi-thuong-dinh-bien-doi-khi-hau",
    "excerpt": "Đại diện hơn 100 quốc gia cam kết cắt giảm khí thải và chuyển đổi sang năng lượng tái tạo.",
    "content": "<p>Lãnh đạo các quốc gia đã thống nhất kế hoạch hành động khắc phục hậu quả biến đổi khí hậu Toàn cầu trong 10 năm tới.</p>",
    "author": "Nguyễn Bình",
    "category": "Thế giới",
    "publishedAt": "2026-09-28 09:15",
    "source": "dantri.com.vn",
    "url": "https://dantri.com.vn/the-gioi.htm",
    "image": "https://picsum.photos/id/1035/600/400"
  },
  {
    "id": "dtri-20260928080011999",
    "title": "Đề xuất quy định mới về phân loại rác thải tại nguồn ở các đô thị lớn",
    "slug": "de-xuat-quy-dinh-moi-ve-phan-loai-rac-thai",
    "excerpt": "Bộ Tài nguyên và Môi trường vừa đưa ra dự thảo hướng dẫn chi tiết về phân loại rác sinh hoạt.",
    "content": "<p>Việc phân loại rác tại nguồn sẽ được áp dụng bắt buộc tại các đô thị lớn từ cuối năm nay nhằm giảm thiểu ô nhiễm môi trường.</p>",
    "author": "Lê Minh",
    "category": "Môi trường",
    "publishedAt": "2026-09-28 08:00",
    "source": "dantri.com.vn",
    "url": "https://dantri.com.vn/thoi-su/moi-truong.htm",
    "image": "https://picsum.photos/id/1043/600/400"
  },
  {
    "id": "dtri-20260927214500111",
    "title": "Triển khai dịch vụ công trực tuyến giúp người dân tiết kiệm thời gian",
    "slug": "trien-khai-dich-vu-cong-truc-tuyen",
    "excerpt": "Số lượng hồ sơ xử lý trực tuyến đạt mốc kỷ lục trong 9 tháng đầu năm.",
    "content": "<p>Nhờ chuyển đổi số mạnh mẽ, các thủ tục hành chính đã được đơn giản hóa tối đa cho người dân và doanh nghiệp.</p>",
    "author": "Hoàng Nam",
    "category": "Chính trị",
    "publishedAt": "2026-09-27 21:45",
    "source": "dantri.com.vn",
    "url": "https://dantri.com.vn/thoi-su/chinh-tri.htm",
    "image": "https://picsum.photos/id/1050/600/400"
  }
];

// Khởi tạo dữ liệu
async function initData() {
  if (!localStorage.getItem('categories')) {
    try {
      const res = await fetch('categories.json');
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('categories', JSON.stringify(data));
      }
    } catch (e) {
      console.error("Lỗi nạp categories.json", e);
    }
  }

  // Nạp dữ liệu bài viết vào LocalStorage
  const existingPosts = localStorage.getItem('posts');
  if (!existingPosts || JSON.parse(existingPosts).length === 0) {
    try {
      const res = await fetch('posts.json');
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('posts', JSON.stringify(data));
      } else {
        localStorage.setItem('posts', JSON.stringify(defaultPostsData));
      }
    } catch (e) {
      localStorage.setItem('posts', JSON.stringify(defaultPostsData));
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
  if (footerCatContainer) footerCatContainer.innerHTML = '';

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

    if (item.type === 'category' && footerCatContainer) {
      footerCatContainer.innerHTML += `<li><a onclick="loadCategory('${item.id}')">${item.title}</a></li>`;
    }
  });
}

// Lấy danh sách bài viết từ LocalStorage (fallback dữ liệu mặc định)
function getPosts() {
  const posts = JSON.parse(localStorage.getItem('posts'));
  if (!posts || posts.length === 0) {
    localStorage.setItem('posts', JSON.stringify(defaultPostsData));
    return defaultPostsData;
  }
  return posts;
}

// Hiển thị danh sách bài viết theo chuyên mục
function loadCategory(catId) {
  const posts = getPosts();
  let filteredPosts = posts;

  if (catId !== 'home' && catId !== 'latest' && catId !== 'dt360') {
    const filterKey = catId.replace('-', ' ').toLowerCase();
    filteredPosts = posts.filter(p => {
      const pCat = (p.category || '').toLowerCase();
      return pCat.includes(filterKey) || filterKey.includes(pCat);
    });
  }

  const container = document.getElementById('app-content');

  if (!filteredPosts || filteredPosts.length === 0) {
    // Nếu chuyên mục cụ thể chưa có bài, hiển thị tất cả bài viết thay vì để trống
    filteredPosts = posts;
  }

  const top3 = filteredPosts.slice(0, 3);
  const remaining = filteredPosts.slice(3);

  let html = `<h2 class="section-title">Tin tức</h2>`;

  // Layout Top 3
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

  // Layout danh sách bài viết còn lại
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
