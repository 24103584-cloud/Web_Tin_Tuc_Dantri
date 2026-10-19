// DỮ LIỆU MẪU MẶC ĐỊNH (10+ bài viết thuộc các chuyên mục)
const initialPosts = [
  {
    id: "dtri-20260928122246655",
    title: "Hà Nội tính cơ chế bồi thường đất đặc biệt cho 7 dự án đường sắt",
    slug: "ha-noi-tinh-co-che-boi-thuong-dat-dac-biet-cho-7-du-an-duong-sat",
    excerpt: "Hà Nội đang xem xét cơ chế bồi thường, hỗ trợ và tái định cư đặc biệt để triển khai 7 dự án đường sắt quan trọng trên địa bàn thành phố.",
    content: "Hà Nội đang nghiên cứu và đề xuất cơ chế bồi thường, hỗ trợ và tái định cư đặc biệt nhằm tháo gỡ khó khăn trong công tác giải phóng mặt bằng cho 7 dự án đường sắt trọng điểm. Đây là nhóm dự án hạ tầng giao thông có vai trò quan trọng trong việc phát triển mạng lưới vận tải công cộng và giảm ùn tắc đô thị. Thành phố nhấn mạnh việc cần cơ chế linh hoạt để đẩy nhanh tiến độ triển khai, đảm bảo quyền lợi cho người dân bị ảnh hưởng và đồng thời đáp ứng yêu cầu phát triển hạ tầng chiến lược.",
    thumbnail: "https://cdnphoto.dantri.com.vn/d_y7Oa3p4_xK8e2m/2026/09/28/duong-sat-1.jpg",
    author: "Văn Hưng",
    category: "Bất động sản",
    publishedAt: "2026-09-28 12:22",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/bat-dong-san/ha-noi-tinh-co-che-boi-thuong-dat-dac-biet-cho-7-du-an-duong-sat-20260928122246655.htm"
  },
  {
    id: "dtri-002",
    title: "Thiếu gia Ấn Độ quyết cưới cô gái Việt Nam vì hành động không ngờ",
    slug: "thieu-gia-an-do-quyet-cuoi-co-gai-viet-nam",
    excerpt: "Yêu cô gái Việt, Abhishek (đến từ Ấn Độ) vấp phải sự phản đối từ gia đình vì khác biệt văn hóa, khoảng cách địa lý. Anh và bạn gái tìm nhiều cách thuyết phục.",
    content: "Chuyện tình vượt mọi rào cản địa lý và văn hóa giữa Abhishek và cô gái Việt Nam đã đem lại kết thúc có hậu bằng một đám cưới đầm ấm. Cả hai cùng trải qua nhiều thử thách để nhận được sự chúc phúc từ hai phía gia đình.",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600",
    author: "Phương Liên",
    category: "Đời sống",
    publishedAt: "2026-09-28 10:15",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/doi-song/thieu-gia-an-do.htm"
  },
  {
    id: "dtri-003",
    title: "Cô gái Việt tiết lộ cảnh chưa từng thấy giữa Bangkok ngập lụt diện rộng",
    slug: "co-gai-viet-tiet-lo-canh-bangkok-ngap-lut",
    excerpt: "Trận mưa lớn khiến nhiều tuyến phố tại Bangkok rơi vào tình trạng ngập sâu, ảnh hưởng lớn đến đời sống sinh hoạt của người dân.",
    content: "Các trận mưa xối xả kéo dài liên tục khiến hạ tầng thoát nước của Bangkok bị quá tải, gây ngập cục bộ tại nhiều đại lộ lớn.",
    thumbnail: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600",
    author: "Minh Nhân",
    category: "Thế giới",
    publishedAt: "2026-09-28 09:30",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/the-gioi/bangkok-ngap-lut.htm"
  },
  {
    id: "dtri-004",
    title: "Ông bố ở Bắc Ninh khóc như mưa tiễn con gái về nhà chồng chỉ cách 6km",
    slug: "ong-bo-bac-ninh-khoc-tien-con-gai",
    excerpt: "Khoảnh khắc người bố lưu luyến tiễn con gái trong ngày trọng đại khiến nhiều cư dân mạng không khỏi xúc động.",
    content: "Dù nhà chồng con gái chỉ cách nhà đẻ 6km, người bố vẫn không gượng nổi nước mắt khi phải chia tay con gái nhỏ.",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600",
    author: "Thùy Linh",
    category: "Đời sống",
    publishedAt: "2026-09-28 08:20",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/doi-song/ong-bo-bac-ninh.htm"
  },
  {
    id: "dtri-005",
    title: "Cô gái Việt trồng rau, làm vườn 100m2 trên đất Mỹ để đỡ nhớ nhà",
    slug: "co-gai-viet-trong-rau-tren-dat-my",
    excerpt: "Để vơi đi nỗi nhớ quê hương, chị Trinh đã cải tạo mảnh đất trống xung quanh nhà thành khu vườn xanh mát trồng đủ loại rau Việt.",
    content: "Mảnh vườn 100m2 tràn ngập rau muống, hái mồng mồng, bầu bí giữa lòng nước Mỹ giúp gia đình luôn có bữa ăn đậm chất quê nhà.",
    thumbnail: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600",
    author: "Hải Yến",
    category: "Đời sống",
    publishedAt: "2026-09-27 18:40",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/doi-song/lam-vuon-tren-dat-my.htm"
  },
  {
    id: "dtri-006",
    title: "28 năm đi bộ vòng quanh thế giới, nhà thám hiểm Anh còn thử thách cuối",
    slug: "28-nam-di-bo-vong-quanh-the-gioi",
    excerpt: "Sau hành trình 50.000km, nhà thám hiểm Karl Bushby đang chuẩn bị chinh phục thử thách cuối cùng.",
    content: "Hành trình đi bộ bền bỉ qua hàng chục quốc gia sắp kết thúc sau gần ba thập kỷ kiên trì đuổi theo ước mơ.",
    thumbnail: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600",
    author: "Thành Đạt",
    category: "Thế giới",
    publishedAt: "2026-09-27 15:10",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/the-gioi/di-bo-vong-quanh-the-gioi.htm"
  },
  {
    id: "dtri-007",
    title: "Nữ sinh viên đứng đợi cả tiếng dưới mưa, để lại thư xin lỗi vì làm trầy xe",
    slug: "nu-sinh-vien-dung-doi-duoi-mua-xin-loi",
    excerpt: "Hành động tử tế của hai nữ sinh viên tại Huế khiến chủ xe ô tô vô cùng cảm động và quyết định không bắt đền.",
    content: "Lỡ va quẹt làm xước xe ô tô, thay vì bỏ đi, hai bạn sinh viên đã kiên trì đứng chờ chủ xe trong mưa để xin lỗi và đền bù.",
    thumbnail: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600",
    author: "Văn Nam",
    category: "Thời sự",
    publishedAt: "2026-09-27 11:00",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/thoi-su/nu-sinh-vien-trai-long.htm"
  }
];

// KHỞI TẠO DỮ LIỆU LOCALSTORAGE
function initData() {
  if (!localStorage.getItem("news_posts")) {
    localStorage.setItem("news_posts", JSON.stringify(initialPosts));
  }
}

// KHỞI TẠO NAVBAR
function renderNavbar() {
  const categories = [
    { id: "home", title: "Trang chủ" },
    { id: "latest", title: "Mới nhất" },
    { id: "thoi-su", title: "Thời sự", children: ["Chính trị", "Giao thông", "Môi trường"] },
    { id: "the-gioi", title: "Thế giới", children: ["Quân sự", "Phân tích"] },
    { id: "bat-dong-san", title: "Bất động sản" },
    { id: "doi-song", title: "Đời sống" }
  ];

  const navContainer = document.getElementById("navbar-menu");
  if (!navContainer) return;

  navContainer.innerHTML = categories.map(cat => {
    if (cat.children) {
      return `
        <li class="nav-item">
          <a href="#" class="nav-link" onclick="filterByCategory('${cat.title}')">${cat.title} <i class="fa-solid fa-chevron-down" style="font-size: 0.7rem;"></i></a>
          <ul class="dropdown-menu">
            ${cat.children.map(sub => `<li><a href="#" onclick="filterByCategory('${sub}')">${sub}</a></li>`).join('')}
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
  
  // Lọc bài viết
  let filtered = [];
  if (categoryName === 'all' || categoryName === 'Trang chủ' || categoryName === 'Mới nhất') {
    filtered = [...allPosts];
    document.getElementById("category-title").textContent = "Tin Mới Nhất";
  } else {
    filtered = allPosts.filter(p => p.category.toLowerCase().includes(categoryName.toLowerCase()));
    document.getElementById("category-title").textContent = `Chuyên mục: ${categoryName}`;
  }

  // Sắp xếp thời gian giảm dần (Mới -> Cũ)
  filtered.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  renderPostsLayout(filtered);
  showSection('category-view');
}

// RENDER LAYOUT BÀI VIẾT (1 FEATURED TRÁI + 2 PHẢI + DANH SÁCH DỌC)
function renderPostsLayout(posts) {
  const topContainer = document.getElementById("top-featured-container");
  const remainContainer = document.getElementById("remaining-posts-container");

  if (!posts || posts.length === 0) {
    topContainer.innerHTML = "<p>Chưa có bài viết nào trong chuyên mục này.</p>";
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
        <p class="featured-excerpt">${featured.excerpt}</p>
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
          <span><i class="fa-regular fa-clock"></i> ${post.publishedAt}</span> | 
          <span><i class="fa-solid fa-folder"></i> ${post.category}</span>
        </div>
        <p class="list-item-excerpt">${post.excerpt}</p>
      </div>
    </div>
  `).join('');
}

// XEM CHI TIẾT BÀI VIẾT[cite: 1]
function viewDetail(postId) {
  const allPosts = JSON.parse(localStorage.getItem("news_posts")) || [];
  const post = allPosts.find(p => p.id === postId);

  if (!post) return;

  const detailContainer = document.getElementById("article-detail-content");
  detailContainer.innerHTML = `
    <h1 class="article-title">${post.title}</h1>
    <div class="article-meta">
      <span><i class="fa-solid fa-folder"></i> Chuyên mục: <strong>${post.category}</strong></span> | 
      <span><i class="fa-regular fa-clock"></i> Đăng lúc: ${post.publishedAt}</span> | 
      <span><i class="fa-solid fa-globe"></i> Nguồn: ${post.source}</span>
    </div>
    <p class="article-excerpt">${post.excerpt}</p>
    ${post.thumbnail ? `<img src="${post.thumbnail}" class="article-main-img" alt="${post.title}">` : ''}
    <div class="article-body-text">${post.content}</div>
    <div class="article-author">Tác giả: ${post.author || 'Theo Dân Trí'}</div>
  `;

  showSection('detail-view');
}

// CHUYỂN ĐỔI CHẾ ĐỘ HIỂN THỊ
function showSection(sectionId) {
  document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack() {
  showSection('category-view');
}

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  initData();
  renderNavbar();
  if (document.getElementById("top-featured-container")) {
    filterByCategory('all');
  }
});
