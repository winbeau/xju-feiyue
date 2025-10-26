---
hide:
  - toc
---

<style>
* {
margin: 0;
padding: 0;
         box-sizing: border-box;
}

:root {
    --primary-color: var(--md-primary-fg-color, #2962ff);
    --secondary-color: var(--md-accent-fg-color, #26a69a);
    --accent-color: color-mix(in srgb, var(--md-accent-fg-color, #ff7043) 80%, white);
    --text-color: var(--md-default-fg-color, #1f2933);
    --card-bg: var(--md-surface, #ffffff);
    --light-bg: var(--md-default-bg-color, #f6f7f9);
    --border-color: color-mix(in srgb, var(--text-color) 10%, transparent);
    --shadow: 0 8px 18px rgba(15, 23, 42, 0.06);
    --hover-shadow: 0 10px 24px rgba(15, 23, 42, 0.1);
    --hover-bg: color-mix(in srgb, var(--primary-color) 12%, transparent);
}

/* MkDocs Material 适配：移除 body 全局样式，使用主题默认样式 */
.md-content {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
}

h1 {
    display: none;
}

.section {
background: var(--card-bg);
            border-radius: 16px;
padding: 28px;
         margin-bottom: 30px;
         border: 1px solid var(--border-color);
         box-shadow: var(--shadow);
transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.section:hover {
transform: translateY(-4px);
        box-shadow: var(--hover-shadow);
}

.section h2 {
color: var(--primary-color);
       margin-bottom: 18px;
       border-bottom: 2px solid color-mix(in srgb, var(--primary-color) 35%, transparent);
       padding-bottom: 8px;
       font-size: 1.75rem;
}

.section h3 {
color: color-mix(in srgb, var(--secondary-color) 80%, var(--text-color));
margin: 20px 0 15px 0;
        font-size: 1.4rem;
}

.grid-2 {
display: grid;
         grid-template-columns: 1fr 1fr;
gap: 20px;
margin: 20px 0;
}

.grid-3 {
display: grid;
         grid-template-columns: repeat(3, 1fr);
gap: 20px;
margin: 20px 0;
}

.card {
background: var(--light-bg);
padding: 20px;
         border-radius: 12px;
         border: 1px solid var(--border-color);
         box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
         border-left: 4px solid color-mix(in srgb, var(--primary-color) 75%, transparent);
}

.card.accent {
    border-left-color: var(--accent-color);
}

.card.success {
    border-left-color: var(--secondary-color);
}

.timeline {
position: relative;
          padding-left: 30px;
}

.timeline::before {
content: '';
position: absolute;
left: 15px;
top: 0;
bottom: 0;
width: 2px;
background: var(--primary-color);
}

.timeline-item {
position: relative;
          margin-bottom: 30px;
}

.timeline-item::before {
content: '';
position: absolute;
left: -23px;
top: 5px;
width: 12px;
height: 12px;
        border-radius: 50%;
background: var(--primary-color);
border: 3px solid white;
}

.timeline-date {
    font-weight: bold;
color: var(--primary-color);
       margin-bottom: 5px;
}

.vocab-grid {
display: grid;
         grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 15px;
margin: 20px 0;
}

.vocab-item {
background: var(--light-bg);
padding: 15px;
         border-radius: 8px;
         border-left: 3px solid var(--secondary-color);
}

.vocab-term {
    font-weight: bold;
color: var(--primary-color);
       margin-bottom: 5px;
}

.school-list {
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 15px;
margin: 20px 0;
}

.school-card {
    width: 100%;
background: var(--light-bg);
padding: 22px;
border-radius: 14px;
border: 1px solid var(--border-color);
box-shadow: 0 6px 16px rgba(15, 23, 42, 0.05);
transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.school-card:hover {
    border-color: color-mix(in srgb, var(--primary-color) 45%, transparent);
transform: translateY(-4px);
    box-shadow: var(--hover-shadow);
    background: color-mix(in srgb, var(--primary-color) 6%, var(--light-bg));
}

.school-card.dream {
    border-color: color-mix(in srgb, var(--accent-color) 65%, transparent);
}

.school-card.offer {
    border-color: color-mix(in srgb, var(--secondary-color) 65%, transparent);
}

.school-card.waiting {
    border-color: color-mix(in srgb, #fdcb6e 65%, transparent);
}

.school-card.rejected {
    border-color: color-mix(in srgb, #636e72 55%, transparent);
}

.status-badge {
display: inline-block;
padding: 4px 12px;
         border-radius: 20px;
         font-size: 0.8rem;
         font-weight: bold;
         margin-bottom: 10px;
}

.status-dream {
background: #e74c3c;
color: white;
}

.status-offer {
background: var(--secondary-color);
color: white;
}

.status-waiting {
background: #fdcb6e;
color: #2d3436;
}

.status-rejected {
background: #636e72;
color: white;
}

.progress-bar {
background: color-mix(in srgb, var(--primary-color) 8%, transparent);
            border-radius: 10px;
height: 20px;
margin: 10px 0;
overflow: hidden;
}

.progress-fill {
height: 100%;
background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
            border-radius: 10px;
transition: width 0.5s ease;
}

.info-source {
display: flex;
         flex-wrap: wrap;
gap: 15px;
margin: 20px 0;
}

.source-item {
flex: 1;
          min-width: 200px;
background: var(--light-bg);
padding: 15px;
         border-radius: 8px;
         text-align: center;
         text-decoration: none;
color: var(--text-color);
        border: 1px solid var(--border-color);
transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}

.source-item:hover {
background: color-mix(in srgb, var(--primary-color) 10%, var(--light-bg));
color: var(--text-color);
transform: translateY(-3px);
    border-color: color-mix(in srgb, var(--primary-color) 45%, transparent);
    box-shadow: var(--hover-shadow);
}

.highlight {
background: color-mix(in srgb, var(--primary-color) 18%, transparent);
padding: 2px 6px;
         border-radius: 4px;
         font-weight: bold;
color: var(--primary-color);
}

.advice-grid {
display: grid;
         grid-template-columns: repeat(2, minmax(0, 1fr));
gap: 20px;
margin: 20px 0;
}

.advice-card {
background: var(--light-bg);
padding: 20px;
         border-radius: 12px;
         border: 1px solid var(--border-color);
         box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
         text-align: center;
         transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.advice-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--hover-shadow);
    border-color: color-mix(in srgb, var(--primary-color) 35%, transparent);
}

.advice-card.success {
    border-left: 4px solid var(--secondary-color);
    text-align: left;
}

.advice-card.accent {
    border-left: 4px solid var(--accent-color);
    text-align: left;
}

.advice-icon {
    font-size: 2rem;
    margin-bottom: 10px;
color: var(--primary-color);
}

@media (max-width: 768px) {

    .grid-2,
        .grid-3 {
            grid-template-columns: 1fr;
        }

    .vocab-grid,
        .school-list,
        .advice-grid {
            grid-template-columns: 1fr;
        }

    header h1 {
        font-size: 2rem;
    }
}

.clickable-title {
cursor: pointer;
transition: all 0.3s ease;
position: relative;
          padding-right: 30px;
}

.clickable-title:hover {
color: var(--accent-color);
}

.clickable-title::after {
content: '📖';
position: absolute;
right: 0;
top: 50%;
transform: translateY(-50%);
           font-size: 1.2rem;
transition: transform 0.3s ease;
}

.clickable-title.expanded::after {
content: '📕';
transform: translateY(-50%) rotate(180deg);
}

.original-text {
background: color-mix(in srgb, var(--primary-color) 8%, var(--light-bg));
            border-left: 4px solid color-mix(in srgb, var(--primary-color) 55%, transparent);
padding: 15px;
         border-radius: 8px;
margin: 15px 0;
transition: all 0.3s ease;
}

.highlight-info {
background: color-mix(in srgb, var(--secondary-color) 12%, var(--light-bg));
border: 1px solid color-mix(in srgb, var(--secondary-color) 35%, transparent);
        border-radius: 8px;
padding: 12px;
margin: 15px 0;
}

.future-prediction {
background: #d1ecf1;
border: 1px solid #bee5eb;
        border-radius: 8px;
padding: 12px;
margin: 15px 0;
}

.highlight-info {
background: #fff3cd;
border: 1px solid #ffeaa7;
        border-radius: 8px;
padding: 8px 12px;
margin: 8px 0;
        font-size: 0.9rem;
}

.image-placeholder {
background: #f8f9fa;
border: 2px dashed #dee2e6;
        border-radius: 8px;
padding: 20px;
         text-align: center;
color: #6c757d;
}

/* 新增学校卡片样式 */
.school-header {
display: flex;
         justify-content: space-between;
         align-items: flex-start;
         margin-bottom: 10px;
}

.school-icons {
display: flex;
gap: 5px;
}

.school-icons .icon {
    font-size: 1.2rem;
}

.school-major {
color: #666;
       font-size: 0.9rem;
margin: 5px 0;
}

.school-status {
display: flex;
gap: 8px;
margin: 10px 0;
        flex-wrap: wrap;
}

.status-tag {
padding: 2px 8px;
         border-radius: 12px;
         font-size: 0.75rem;
         font-weight: bold;
}

.status-tag.success {
background: #d4edda;
color: #155724;
border: 1px solid #c3e6cb;
}

.status-tag.warning {
background: #fff3cd;
color: #856404;
border: 1px solid #ffeaa7;
}

.school-summary {
margin: 10px 0;
}

.progress-indicator {
    margin-top: 10px;
}

.progress-indicator span {
    font-size: 0.8rem;
color: #666;
display: block;
         text-align: center;
         margin-top: 5px;
}

.school-details {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #e9ecef;
}

.detail-section {
    margin-bottom: 15px;
}

.detail-section h4 {
color: var(--primary-color);
       margin-bottom: 8px;
       font-size: 0.9rem;
}

.detail-section ul {
    padding-left: 20px;
margin: 5px 0;
}

.detail-section li {
    margin-bottom: 3px;
    font-size: 0.85rem;
}

.tag-list {
display: flex;
         flex-wrap: wrap;
gap: 5px;
}

.tag {
padding: 2px 8px;
background: #e9ecef;
            border-radius: 12px;
            font-size: 0.7rem;
color: #495057;
border: 1px solid #dee2e6;
}

.toggle-details {
width: 100%;
padding: 8px 12px;
background: var(--primary-color);
color: white;
border: none;
        border-radius: 6px;
cursor: pointer;
        font-size: 0.85rem;
transition: all 0.3s ease;
            margin-top: 10px;
}

.toggle-details:hover {
background: #2980b9;
transform: translateY(-2px);
}

.toggle-details.expanded {
background: var(--accent-color);
}

/* 学校卡片展开状态样式 */
.school-card.expanded {
    border-width: 3px;
transform: scale(1.02);
           box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.school-card.expanded .toggle-details::before {
content: '📕 ';
}

/* 动画效果 */
.school-details {
    max-height: 0;
overflow: hidden;
transition: max-height 0.5s ease, opacity 0.3s ease;
opacity: 0;
         margin-top: 0;
         padding-top: 0;
         border-top: none;
}

.school-card.expanded .school-details {
    max-height: 1000px;
opacity: 1;
         margin-top: 15px;
         padding-top: 15px;
         border-top: 1px solid #e9ecef;
}

/* 确保收起时完全隐藏 */
.school-card:not(.expanded) .school-details {
display: none;
}


/* 响应式设计优化 */
@media (max-width: 768px) {
    .school-header {
        flex-direction: column;
        align-items: flex-start;
gap: 10px;
    }

    .school-icons {
        align-self: flex-end;
    }

    .school-status {
gap: 5px;
    }

    .status-tag {
        font-size: 0.7rem;
padding: 1px 6px;
    }

    .detail-section h4 {
        font-size: 0.85rem;
    }

    .detail-section li {
        font-size: 0.8rem;
    }
}

/* 右侧导航栏样式 */
.sidebar {
position: fixed;
right: 20px;
top: 50%;
transform: translateY(-50%);
background: var(--card-bg);
            border-radius: 15px;
padding: 20px;
         box-shadow: var(--shadow);
         z-index: 1000;
         min-width: 200px;
}

.nav-list {
    list-style: none;
}

.nav-item {
    margin-bottom: 12px;
padding: 10px 15px 14px;
         border-radius: 10px;
cursor: pointer;
position: relative;
         transition: color 0.3s ease, transform 0.3s ease;
}

.nav-item:hover {
color: var(--primary-color);
transform: translateX(4px);
}

.nav-item.active {
color: var(--primary-color);
}

.nav-item a {
    text-decoration: none;
color: inherit;
display: block;
         font-weight: 500;
}

.nav-item::after {
content: '';
position: absolute;
left: 18px;
right: 18px;
bottom: 6px;
height: 4px;
border-radius: 999px;
background: transparent;
transform: scaleX(0);
transform-origin: center;
transition: transform 0.3s ease, background 0.3s ease;
}

.nav-item:hover::after {
background: color-mix(in srgb, var(--primary-color) 45%, transparent);
transform: scaleX(1);
}

.nav-item.active::after {
background: var(--primary-color);
transform: scaleX(1);
}

/* 调整主内容区域布局 - 为右侧导航栏留出空间 */
.container {
    max-width: 1200px;
margin: 0 auto;
padding: 0 240px 20px 20px;
         /* 为右侧侧边栏留出空间 */
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .sidebar {
position: relative;
right: auto;
top: auto;
transform: none;
           margin-bottom: 30px;
width: 100%;
       min-width: auto;
    }

    .container {
padding: 0 20px 20px 20px;
    }
}

@media (max-width: 768px) {
    .sidebar {
display: none;
         /* 移动端隐藏右侧导航栏 */
    }

    .container {
padding: 0 20px 20px 20px;
    }
}
</style>

<script>
    // 导航栏功能
    document.addEventListener('DOMContentLoaded', function () {
        const navItems = document.querySelectorAll('.nav-item');
        const sections = document.querySelectorAll('.section');

        // 平滑滚动
        navItems.forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.querySelector('a').getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // 滚动时更新活跃状态
        function updateActiveNav() {
            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                const link = item.querySelector('a');
                if (link.getAttribute('href').substring(1) === currentSection) {
                    item.classList.add('active');
                }
            });
        }

        // 监听滚动事件
        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav(); // 初始化
    });


    // 添加简单的动画效果
    document.addEventListener('DOMContentLoaded', function () {
        const sections = document.querySelectorAll('.section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });

        // 进度条动画
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    });

    // 点击标题显示原文功能
    document.addEventListener('DOMContentLoaded', function () {
        const clickableTitles = document.querySelectorAll('.clickable-title');

        clickableTitles.forEach(title => {
            title.addEventListener('click', function () {
                const originalText = this.nextElementSibling;
                const isExpanded = originalText.style.display === 'block';

                if (isExpanded) {
                    originalText.style.display = 'none';
                    this.classList.remove('expanded');
                } else {
                    originalText.style.display = 'block';
                    this.classList.add('expanded');
                }
            });
        });
    });

    // 学校卡片详情展开/收起功能
    document.addEventListener('DOMContentLoaded', function () {
        const toggleButtons = document.querySelectorAll('.toggle-details');

        toggleButtons.forEach(button => {
            button.addEventListener('click', function () {
                const card = this.closest('.school-card');
                const details = card.querySelector('.school-details');
                const isExpanded = card.classList.contains('expanded');

                if (isExpanded) {
                    // 收起详情 - 先设置动画，然后隐藏
                    details.style.maxHeight = '0';
                    details.style.opacity = '0';
                    details.style.marginTop = '0';
                    details.style.paddingTop = '0';
                    details.style.borderTop = 'none';

                    // 等待动画完成后移除expanded类
                    setTimeout(() => {
                        card.classList.remove('expanded');
                        this.textContent = '📖 查看详情';
                        details.style.display = 'none';
                    }, 300); // 与CSS过渡时间匹配
                } else {
                    // 展开详情
                    details.style.display = 'block';
                    card.classList.add('expanded');
                    this.textContent = '📕 收起详情';

                    // 触发重排，然后开始动画
                    setTimeout(() => {
                        details.style.maxHeight = '1000px';
                        details.style.opacity = '1';
                        details.style.marginTop = '15px';
                        details.style.paddingTop = '15px';
                        details.style.borderTop = '1px solid #e9ecef';
                    }, 10);
                }
            });
        });

        // 学校卡片hover效果增强
        const schoolCards = document.querySelectorAll('.school-card');
        schoolCards.forEach(card => {
            card.addEventListener('mouseenter', function () {
                if (!this.classList.contains('expanded')) {
                    this.style.transform = 'translateY(-5px) scale(1.02)';
                }
            });

            card.addEventListener('mouseleave', function () {
                if (!this.classList.contains('expanded')) {
                    this.style.transform = 'translateY(0) scale(1)';
                }
            });
        });
    });


</script>

<div class="container">
    <!-- 右侧导航栏 -->
    <nav class="sidebar">
        <ul class="nav-list">
            <li class="nav-item active">
                <a href="#process">📋 保研流程概览</a>
            </li>
            <li class="nav-item">
                <a href="#vocabulary">📚 保研黑话词汇表</a>
            </li>
            <li class="nav-item">
                <a href="#personal">👤 个人信息</a>
            </li>
            <li class="nav-item">
                <a href="#experience">🎯 入面经历</a>
            </li>
            <li class="nav-item">
                <a href="#advice">💡 经验与建议</a>
            </li>
            <li class="nav-item">
                <a href="#channels">🔗 信息渠道</a>
            </li>
            <li class="nav-item">
                <a href="#summary">🎓 总结</a>
            </li>
        </ul>
    </nav>

    <!-- 保研流程部分 -->
    <section class="section" id="process">
        <h2 class="clickable-title" data-original-text="📋 保研流程概览">📋 保研流程概览（点击Card标题可查看详细信息，下同）</h2>
        <div class="original-text" style="display: none;">
            <p>推荐+接收：推荐指获得校内推荐名额（大前提），接收是指参与外校考核并得到拟录取承诺，最终在系统上确认拟录取。emm应该说推荐只是大门，进门了后面的部分才是正式保研的过程？推荐和接收没有任何联系。</p>
            <p><strong>推荐：</strong>综合成绩=加权平均成绩(75%)+科研竞赛(15%)+学生工作、社会服务(5%)+个人奖项(5%)</p>
            <p>听说评分机制要改革了，可能不会计算省级比赛加分，国家级才能加了？（存疑）</p>
            <p><strong>接收：</strong>今年相对往年有很大的改动。</p>
            <p>政策原因，夏令营只开了一半，且不明说是否给拟录取名额；预推免全都在提前，并且入营的bar大幅提高，在向夏令营的bar靠近。</p>
            <p>以往保研是在9月28日，今年：</p>
            <ul>
                <li>9月22日 9:00 填报复试通知（三个平行志愿，可以一个一个分开提交，提交后48h内无法更改）</li>
                <li>9月23日 高校发送复试通知</li>
                <li>9月25日 9:00 高校发送拟录取通知（学生不可查看是否收到拟录取）</li>
                <li>9月25日14:00学生可查看拟录取通知并确认。</li>
            </ul>
            <p>明年可能又会有改动，系统可能会提前到7月份？（存疑）</p>
        </div>
        <div class="grid-2">
            <div class="card">
                <h3>推荐环节</h3>
                <p>获得校内推荐名额（大前提）</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 100%"></div>
                </div>
                <p><strong>综合成绩构成：</strong></p>
                <ul>
                    <li>加权平均成绩: 75%</li>
                    <li>科研竞赛: 15%</li>
                    <li>学生工作、社会服务: 5%</li>
                    <li>个人奖项: 5%</li>
                </ul>
                <div class="highlight-info">
                    <p><strong>⚠️ 重要变化：</strong>评分机制可能改革，省级比赛加分可能取消，仅国家级比赛加分（存疑）</p>
                </div>
            </div>
            <div class="card">
                <h3>接收环节（保研的过程通常都是指这个）</h3>
                <p>参与外校考核并得到拟录取承诺</p>
                <div class="highlight-info">
                    <p><strong>📅 今年重大变化：</strong></p>
                    <ul>
                        <li>夏令营只开一半，不明说是否给拟录取</li>
                        <li>预推免提前，入营门槛大幅提高</li>
                        <li>系统时间提前到9月22日</li>
                    </ul>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-date">7月或更早-9月</div>
                        <p>套磁/夏令营/预推免，得到目标院校/导师拟录取承诺（简称拿offer）</p>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">9月22日 9:00</div>
                        <p>填报复试通知（三个平行志愿，可分开提交，提交后48h内无法更改）</p>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">9月23日</div>
                        <p>高校发送复试通知</p>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">9月25日 9:00</div>
                        <p>高校发送拟录取通知（学生不可查看）</p>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">9月25日 14:00</div>
                        <p>学生可查看拟录取通知并确认</p>
                    </div>
                </div>
                <div class="future-prediction">
                    <p><strong>🔮 明年预测：</strong>系统可能提前到7月份？（存疑）</p>
                </div>
            </div>
        </div>
    </section>


    <!-- 词汇表部分 -->
    <section class="section" id="vocabulary">
        <h2 class="clickable-title" data-original-text="📚 保研黑话词汇表">📚 保研黑话词汇表</h2>
        <div class="original-text" style="display: none;">
            <h2>词汇</h2>
            <ul>
                <li><strong>rk</strong>：rank，绩点/均分排名，通常指的是教务能够开出的<strong>绩点证明，而非综测</strong>。</li>
                <li><strong>bg</strong>：background，背景，狭义仅指本科院校+rk，广义指本人的科研竞赛pub等等。</li>
                <li><strong>bar</strong>：门槛，指某个院校入营/入预推免卡bg的要求。</li>
                <li><strong>title</strong>：院校名气/等级，如tp，华五，C9，中九等。<br>
                    这里提一嘴，title方面tp独一档，华五一档，其余泛中九里上下几名<strong>并无明显差异</strong>不要为了某些野榜吵架，此时院校等级带来的优势<strong>远小于</strong>地理位置与研究方向。<strong>个人认为</strong>tp到华五的差距远大于华五到中九的差距，有些时候华五的title也不能作为<strong>决定性因素</strong>，这点会在后文进行详细说明。
                </li>
                <li><strong>强/弱com</strong>：committee，强com代表<strong>学院话语权大，导师无权捞人</strong>，代表学校有南大、浙软等；弱com代表<strong>导师话语权大，导师敲定要你后学院一般不卡</strong>，极其适合<strong>套磁</strong>，代表有南开、中科大等以及绝大多数院校直博。
                </li>
                <li><strong>套磁</strong>：torch，指<strong>联系导师</strong>，主要有<strong>提前面试，捞入营，直博</strong>三种情况，对于弱com院校<strong>极其重要</strong>，但在今年的大环境下<strong>不管哪种都建议套磁</strong>。
                </li>
                <li><strong>青椒</strong>：一些大学青年教师最自己的称呼。这种导师<strong>通常想要出成果，有能力亲自辅导科研</strong>，能够出成果但可能会<strong>相对push</strong>。
                </li>
                <li><strong>oq</strong>：overqualified，指bg远超院校等级，即使优营也不会来，所以学校直接拒绝入营。例如清华报中九夏令营。</li>
                <li><strong>pub</strong>：publication，论文。常见有CCF-A/B/C（中国计算机协会的论文等级，代表有A类的ICML，NIPS，CVPR，<a
                        href="https://zhida.zhihu.com/search?content_id=248589864&content_type=Article&match_order=1&q=TPAMI&zhida_source=entity">TPAMI</a>，B类的ECCV等），SCI一二三四区，EI会议等。
                </li>
                <li><strong>wl</strong>：waiting
                    list，等候列表，指并未拿到优营的候补，优营起飞后候补补上，对于<strong>大多数院校</strong>wl靠前基本等于offer。</li>
                <li><strong>海王</strong>：对于学生指的是手握很多offer不释放，928当天才鸽掉的行为，<strong>这是一种极为不好的行为</strong>；对于院校指的是超发入营/优营的院校，最后可能会造成<strong>鸽掉优营</strong>的情况。
                </li>
                <li><strong>928</strong>：推免系统常于9月28日开放，届时院校将会下发拟录取通知，于10月20关闭。虽然大多数offer都会在928下发，但后面存在着很长的空档期，捡漏机会大大有二八定理，的在人手里，所以928之前没offer的小伙伴也不要太过担心哦，都会上岸的！
                </li>
            </ul>

            <p>下面两张图是我找经验贴抄黑话的时候看到顺便cv过来的，这种有特别多的版本，能对学校有大概的区分，但是区分度没想象的那么大，好组好导师的重要性大部分时候都比学校title大得多！</p>

            <p>要说区分度，比较大的我个人观点就是：清北-华五-非政策9。对于中次末9之间，很多时候有个9的title过初筛门槛就够了，后面还是要看个人实力的，这时候好组好导师才是发力点，比如东北大学NLP可以薄纱很多中九了。
            </p>

        </div>

        <div class="vocab-grid">
            <div class="vocab-item">
                <div class="vocab-term">rk (rank)</div>
                <p>绩点/均分排名，通常指的是教务能够开出的<strong>绩点证明，而非综测</strong></p>
            </div>
            <div class="vocab-item">
                <div class="vocab-term">bg (background)</div>
                <p>背景，狭义仅指本科院校+rk，广义指本人的科研竞赛pub等等</p>
            </div>
            <div class="vocab-item">
                <div class="vocab-term">bar</div>
                <p>门槛，指某个院校入营/入预推免卡bg的要求</p>
            </div>
            <div class="vocab-item">
                <div class="vocab-term">title</div>
                <p>院校名气/等级，如tp，华五，C9，中九等</p>
                <div class="highlight-info">
                    <p><strong>💡 重要观点：</strong>tp独一档，华五一档，中九间差异不大。好组好导师 > 学校title</p>
                </div>
            </div>
            <div class="vocab-item">
                <div class="vocab-term">强/弱com</div>
                <p>强com代表<strong>学院话语权大，导师无权捞人</strong>（如南大、浙软）；弱com代表<strong>导师话语权大</strong>（如南开、中科大及多数直博）</p>
            </div>
            <div class="vocab-item">
                <div class="vocab-term">套磁 (torch)</div>
                <p>联系导师，主要有<strong>提前面试，捞入营，直博</strong>三种情况，对弱com院校<strong>极其重要</strong>，今年<strong>建议都套磁</strong>
                </p>
            </div>
            <div class="vocab-item">
                <div class="vocab-term">青椒</div>
                <p>青年教师，<strong>亲自辅导科研，出成果但可能push</strong></p>
            </div>
            <div class="vocab-item">
                <div class="vocab-term">oq (overqualified)</div>
                <p>bg远超院校等级，即使优营也不会来，学校直接拒绝入营（如清华报中九）</p>
            </div>
            <div class="vocab-item">
                <div class="vocab-term">pub (publication)</div>
                <p>论文，包括CCF-A/B/C（ICML、NIPS、CVPR、TPAMI等）、SCI分区、EI会议等</p>
            </div>
            <div class="vocab-item">
                <div class="vocab-term">wl (waiting list)</div>
                <p>等候列表，对于<strong>大多数院校</strong>wl靠前基本等于offer</p>
            </div>
            <div class="vocab-item">
                <div class="vocab-term">海王</div>
                <p>学生：手握多offer不释放，928当天鸽掉（<strong>极不好</strong>）；院校：超发入营/优营</p>
            </div>
        </div>

        <div class="card accent" style="margin-top: 20px;">
            <div class="vocab-term">夏令营/预推免/九推/十推</div>
            <p>以前暑假开的叫夏令营（提前-提前批），开学前后开的叫预推免（提前批），全国推免系统开启后就是九推/十推（正式批），一般<strong>夏令营拿保底，预推免冲梦校，九推/十推给0
                    offer鼠鼠捡漏机会</strong>。</p>
            <p>但今年政策有变，<strong>夏令营和预推免有融合趋势</strong>，然后大部分人没法通过夏令营拿到保底，慌了，开始海投（同时报名很多院校），导致预推免bar大幅提高（院校入面名额是固定的，但是收到的简历多了非常多），弱bg（主要指低绩点）的边缘人鼠鼠很难入面，尤其是强com。
            </p>
            <p>弱bg鼠鼠可以通过提前套磁弱com院校的老师，从而预防被卡，早点套，越晚越难套到，等到报名预推免的时候，老师名额满了，这时候套就比较晚了。</p>
            <p>明年大概率政策还会继续大改。</p>
        </div>

        <!-- 院校等级说明卡片 -->
        <div class="card accent" style="margin-top: 20px;">
            <h3>🏫 院校等级区分度</h3>
            <p><strong>个人观点：</strong>清北-华五-非政策9</p>
            <p>对于中次末9之间，很多时候硕士有个985的title过初筛门槛就够了，后面还是要看个人实力。</p>
            <p><span class="highlight">好组好导师的重要性大部分时候都比学校title大得多！</span></p>
            <p>例如：东北大学NLP组可以薄纱很多中九，华南理工在广东地域内“广横走”</p>
        </div>

        <!-- 图片占位区域 -->
        <div class="card accent" style="margin-top: 20px;">
            <p>
                <strong>📊 院校等级参考图（注：这种有特别多的版本，能对学校有大概的区分，但是区分度没想象的那么大，具体如上面我的观点）</strong>
            </p>
        </div>

        <div class="image-placeholder"
            style="margin-top: 20px; text-align: center; padding: 20px; background: #f8f9fa; border-radius: 8px;">
            <img src="https://pic3.zhimg.com/v2-5d96ab7becf8b7b33c801cb764f09b30_1440w.jpg" alt="院校等级参考图"
                width="100%" />
            <p style="font-size: 0.9rem; color: #666;">注：这种有特别多的版本，能对学校有大概的区分，但是区分度没想象的那么大</p>
        </div>
    </section>

    <!-- 个人信息部分 -->
    <section class="section" id="personal">
        <h2 class="clickable-title" data-original-text="👤 个人信息">👤 个人信息</h2>
        <div class="original-text" style="display: none;">
            <p>绩点: 3.78（18/126）</p>
            <p>综合成绩：75.74（系10/126，院保39排30）</p>
            <p>综合成绩的具体分数和计算方式院内全部保密不说，这里是全国推免系统上看到的，给保研边缘人们一个参考，估分建议往低了估，真实分数感觉比预估分数低很多</p>
            <p><strong>其他一些bg：</strong></p>
            <ul>
                <li>ILETS 5.5、CET4 479，CET6 414没过（六级非常重要！很多学校或多或少都会卡）</li>
                <li>一些ICPC/CCPC奖（对拿名额很有帮助，夏令营/预推免/陶瓷过程中我应该有四五次因为XCPC受到优待了，很多老师都会跟我提一嘴，有的还蛮有兴趣地跟我聊起acm了，虽然被其他方面的一些东西卡掉了呃呃呃）
                </li>
                <li>两段科研经历（没成果。但是简历有东西写，好联系对口方向的老师；面试时有天可聊，可以让你免受408八股文的折磨。我用扩散模型的经历和很多老师建立了联系，虽然又是被其他方面的一些东西out了呃呃呃）
                </li>
                <li>一些学生工作，个人荣誉（额，屁用没有）</li>
            </ul>
        </div>
        <div class="grid-2">
            <div class="card">
                <h3>学术成绩</h3>
                <p><strong>绩点:</strong> 3.78 (18/126)</p>
                <p><strong>综合成绩:</strong> 75.74 (系10/126，院保39排30)</p>
                <div class="highlight-info">
                    <p><strong>💡 重要提醒：</strong>综合成绩计算方式院内保密，真实分数比预估低很多，估分建议往低了估</p>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 85%"></div>
                </div>
            </div>
            <div class="card">
                <h3>语言能力</h3>
                <p><strong>IELTS:</strong> 5.5</p>
                <p><strong>CET4:</strong> 479</p>
                <p><strong>CET6:</strong> 414 (未过)</p>
                <div class="highlight-info">
                    <p><strong>⚠️ 六级非常重要！</strong>很多学校或多或少都会卡六级成绩</p>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 60%"></div>
                </div>
            </div>
        </div>
        <div class="grid-3">
            <div class="card success">
                <h4>竞赛经历</h4>
                <p><strong>ICPC/CCPC奖项</strong></p>
                <p>对拿推荐资格很有帮助，且在保研过程中多次受到优待</p>
                <div class="highlight-info">
                    <p>很多老师对ACM竞赛感兴趣，多次因此获得优待</p>
                </div>
            </div>
            <div class="card">
                <h4>科研经历</h4>
                <p><strong>两段科研经历</strong>（无成果）</p>
                <p>扩散模型相关工作</p>
                <div class="highlight-info">
                    <p>简历有内容可写，便于联系对口方向老师</p>
                    <p>面试时有话题可聊，避免408八股文折磨</p>
                </div>
            </div>
            <div class="card accent">
                <h4>其他</h4>
                <p><strong>学生工作、个人荣誉</strong></p>
                <p>在保研过程中作用有限</p>
                <div class="highlight-info">
                    <p>对保研帮助不大</p>
                </div>
            </div>
        </div>

        <!-- 个人经验总结 -->
        <div class="card" style="margin-top: 20px;">
            <h3>📝 个人经验总结</h3>
            <ul>
                <li><strong>竞赛优势：</strong>ACM类竞赛在保研过程中多次带来优待</li>
                <li><strong>科研价值：</strong>即使无成果，科研经历也能丰富简历、提供面试话题</li>
                <li><strong>语言短板：</strong>六级未过成为重要限制因素</li>
                <li><strong>成绩参考：</strong>综合成绩估分要保守，真实分数往往低于预期</li>
            </ul>
        </div>
    </section>


    <!-- 入面经历部分 -->
    <section class="section" id="experience">
        <h2 class="clickable-title" data-original-text="🎯 入面经历">🎯 入面经历</h2>
        <div class="original-text" style="display: none;">
            <h2>入面</h2>

            <h3>南开大学-cmm组-计算机专硕（梦校、梦组、果然只能是梦）</h3>
            <p>CV顶组，全是近万引/万引佬（导师学术水平很大程度上和Google
                Scholar引用量成正比，不过也看领域，冷门领域引用量一般都会比热门领域少）。一般有三轮考核，第一轮去年是代码复现，今年是选研究方向、读paper；第二轮去年是C++代码复现，今年是Jittor代码复现；第三轮有长跑、ACM赛制、项目复现解读。
            </p>
            <p>一般来说前两轮过了之后，有老师对你有意向就会双选了，如果双选完，第三轮主要是了解性质；没双选的话可以通过第三轮和老师线下双选（想要cmm亲自带好像需要等到第三轮线下接触？）。</p>
            <p>风评一直是非常好的（从各种方面来说都是，六边形战士），往年也从不鸽人（会作出不鸽人承诺）。但是今年听说鸽了人？后面了解鸽的人好像是靠bg直接套小导双选的，没有参与过考核，不知道和这个是否有关。</p>

            <h3>吉林大学-计算机院-计算机学硕</h3>
            <p>zy老师，风评非常好，之前有xju的学生去他那然后后面成果和去向都很好，放实习（对于就业向的人来说，实习非常重要！按优先级来说是对口A会>实习>不对口A会>>学校title）。</p>
            <p>考核有机试、笔试、面试，机试稍微打过acm的完全能半小时内ak，笔试比机试难但是大家都难，面试不是特别压力，问的问题都比较友好，不过面试我还跟老师产生分歧了呃呃呃，不过没啥影响。</p>
            <p>xju的想去点击就送了反正是，然后它最大的优势就是放实习（最早甚至可以研一暑假还是研二上开始放来着，超爽），有实习就业完全不用担心的。</p>

            <h3>北京理工大学-珠海校区-计算机学硕</h3>
            <p>较冷门方向弱导，不是很push，但是不放实习，可以说没有优点了。title优点的话就是北理本部的计算机学硕外校没机会，本校爷占坑占完了，而这个可以拿到北理的学硕，学校代码和毕业证是没有任何区别的，可以理解为可招本科生version的异地研究生院，有中9title+081200代码。
            </p>
            <p>其实不是很划算的，因为不管是就业还是考公选调，title都不是决定性因素，选调末9title+081200代码是一样的档次；就业末9title+好导/实习远大于纯中9title。</p>

            <h3>国防科技大学-计算机院-计算机学硕</h3>
            <p>因为感觉有学上，然后当时all in cmm中也不太想去，所以第一批没去，到了九月中旬0
                offer(严格意义上来说不是，但是只能去2，当时哪怕考研也实在不想去2，所以不在考虑范围内，其实现在又有点想去了呃呃呃)慌了，赶快报了下第二批。</p>
            <p>有体检+政审+面试，体检和政审合格就行；面试有点离谱，面试官除了知道你的名字不知道你的任何信息（没有简历、没有ppt，就是直接进门聊天），评分全靠跟你聊天，有点难受。</p>
            <p>总的来说还是很和蔼的，不压力，聊的挺顺利，但是面试后半段不小心说激动了爆了句"我操"出来那一刻我非常崩溃，讲的太投入了顺嘴爆粗口给面前穿jun装的面试官了，平时还是得管住自己的嘴巴woc。</p>
            <p>然后交材料的时候跟某个计算机不知道学硕还是专硕的学长聊了几句，他说计算机好像偏硬件和系统？偏软件的话好像得报软工？但是我不是很了解哈。</p>

            <h3>北京邮电大学-人工智能学院-智能科学与技术学博（直博）and 北京通用人工智能研究院</h3>
            <p>北邮是弱com，考公选调是2title，互联网领域认可度是中9title，超级想去啊。</p>
            <p>其实我套的时候黄花菜都凉了，全都没名额了，这个名额还是有老师被鸽了，因为对我某段工作感兴趣，看我想科研然后把我推荐过去的。</p>
            <p>bupt这边的老师之前跟我聊天聊的很有意思，聊他认识的acmer，聊jittor框架，聊我做过的diffusion工作，我说一两句话他就跟我说上了一大堆他的见解和看法，也给我讨论了很多前景上的问题，给了我很多建议，就是那种像同辈一样的，聊的很舒服很开心hhh。
            </p>
            <p>有北京通研院的导师（具身智能六千引年轻强导）被鸽了，他说可以给我推荐过去，但是他推荐过去之后，能不能进得靠我自己，他也不好插手人家的招生，然后说了方向有些不匹配，是做具身智能的。</p>
            <p>果然，联系北京通研院后，大寄。前面介绍bg和acm的时候起码还会稍微和气地跟我聊两句，直到介绍到我的两段科研经历，跟我直说这段经历讲快点，不想听了，woc这么不耐烦，我裂开。自我介绍完跟我说"我们是做具身智能的，你了解过具身智能吗"，灵魂拷问，我裂开了。
            </p>

            <h3>南京理工大学-计软智学院-计算机学硕</h3>
            <p>cmm组（准确来说是nku）卡cet6，当时我本来以为cet6应该没问题了吧，然后寄，没过（三战雅思六级，三败，成败犬了），当时双选的导师给了njust的联培机会，就是让我到某个njust的九千引导名下，然后去nku跟着他做科研，最后发njust的毕业证（所以我得参加njust面试拿到接收名额先，然后他给我联系他认识的那个njust导师挂我当弟子），这个选项简单来说就是2title+保底有1A成果。
            </p>
            <p>emm，面试过程感觉没必要说了，末2面njust真挺简单的，一直在跟我说"一定要好好考虑我们这，我们这多好多好，来这你能享受到njust最好的资源"，2title我真的还是泰难接受了，对中9泰向往呃呃呃。不过其实现在想来其实也不错QAQ。
            </p>

            <h3>湖南大学-忘了啥院-计ç­¦硕、重庆大学-忘了啥院-计算机学硕、电子科技大学-基础院-计算机专硕、四川大学-网安院-网安学硕、天津大学-智算学部-计算机专硕、东北大学-忘了啥院-计算机学硕</h3>
            <p>因为冲突|太穷惹|实在不想去最后没去的，不夺说了。</p>

            <h3>去的六个情况是</h3>
            <ol>
                <li>nku（已双选，半个offer，结果被卡六级了）</li>
                <li>&lt;志æ»¤营没去，去了全给offer，夏令营优先，预推免得吃夏令营吃剩下的，最后还是被鸽穿了来着，也就是去了就有）</li>
                <li>&lt;志愿2&gt;bit（候补前列，因为bitzh必被鸽的所以前列也和offer差不多了，但是没想到还是保守了，跟jlu一样被鸽穿了，去了就有）</li>
                <li>&lt;志愿3&gt;nudt（候补，第一批预推免没去，第一批优先来着，好像说第一批鸽的人多就开第二批不ç开，最后还是开了，0 offer的我遂报名）</li>
                <li>bupt（寄，如前面所说，我裂开了）</li>
                <li>njust（offer，如前面所说，oq。还是有点想去的，没去的学校就会想去，去了的学校就会去魅QAQ）</li>
            </ol>
        </div>

        <div class="school-list">
            <div class="school-card dream" data-school="nankai">
                <div class="school-header">
                    <div class="status-badge status-dream">梦校</div>
                    <div class="school-icons">
                        <span class="icon">🎯</span>
                        <span class="icon">🔥</span>
                    </div>
                </div>
                <h3>南开大学-cmm组</h3>
                <p class="school-major">计算机专硕</p>
                <div class="school-status">
                    <span class="status-tag success">已双选</span>
                    <span class="status-tag warning">被卡六级</span>
                </div>
                <div class="school-summary">
                    <p>CV顶组，三轮考核，风评极好</p>
                    <div class="progress-indicator">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 90%"></div>
                        </div>
                        <span>90% 匹配度</span>
                    </div>
                </div>
                <div class="school-details" style="display: none;">
                    <div class="detail-section">
                        <h4>📋 考核过程</h4>
                        <ul>
                            <li><strong>第一轮：</strong>选研究方向、读 paper</li>
                            <li><strong>第二轮：</strong>Jittor 代码复现</li>
                            <li><strong>第三轮：</strong>长跑、ACM 赛制、项目复现解读</li>
                        </ul>
                    </div>
                    <div class="detail-section">
                        <h4>💡 心得体会</h4>
                        <p>CV 顶组，全是近万引/万引佬，风评一直非常好（堪称六边形战士），往年从不鸽人。</p>
                        <p><strong>遗憾：</strong>已双选但最终被六级要求卡住。</p>
                    </div>
                    <div class="detail-section">
                        <h4>🏷️ 标签</h4>
                        <div class="tag-list">
                            <span class="tag">CV 顶组</span>
                            <span class="tag">强 com</span>
                            <span class="tag">三轮考核</span>
                            <span class="tag">六级要求</span>
                        </div>
                    </div>
                </div>
                <button class="toggle-details">📖 查看详情</button>
            </div>

            <div class="school-card offer" data-school="jilin">
                <div class="school-header">
                    <div class="status-badge status-offer">候补前列</div>
                    <div class="school-icons">
                        <span class="icon">💼</span>
                        <span class="icon">🚀</span>
                    </div>
                </div>
                <h3>吉林大学</h3>
                <p class="school-major">计算机学硕</p>
                <div class="school-status">
                    <span class="status-tag">候补</span>
                    <span class="status-tag success">去了就有</span>
                </div>
                <div class="school-summary">
                    <p>放实习，就业友好，风评非常好</p>
                    <div class="progress-indicator">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 85%"></div>
                        </div>
                        <span>85% 匹配度</span>
                    </div>
                </div>
                <div class="school-details" style="display: none;">
                    <div class="detail-section">
                        <h4>📋 考核过程</h4>
                        <ul>
                            <li><strong>机试：</strong>稍微打过 ACM 的半小时内即可 AK</li>
                            <li><strong>笔试：</strong>整体更难但大家都难</li>
                            <li><strong>面试：</strong>氛围友好，问题不压人</li>
                        </ul>
                    </div>
                    <div class="detail-section">
                        <h4>💡 心得体会</h4>
                        <p>zy 老师风评很棒，并且愿意放实习——对就业向同学极其关键。最早甚至可在研一暑假或研二上开始实习。</p>
                        <p><strong>优势：</strong>实习资源稳定，就业压力小。</p>
                    </div>
                    <div class="detail-section">
                        <h4>🏷️ 标签</h4>
                        <div class="tag-list">
                            <span class="tag">放实习</span>
                            <span class="tag">就业友好</span>
                            <span class="tag">弱 com</span>
                            <span class="tag">候补前列</span>
                        </div>
                    </div>
                </div>
                <button class="toggle-details">📖 查看详情</button>
            </div>

            <div class="school-card offer" data-school="bitzh">
                <div class="school-header">
                    <div class="status-badge status-offer">候补前列</div>
                    <div class="school-icons">
                        <span class="icon">🏛️</span>
                        <span class="icon">🎓</span>
                    </div>
                </div>
                <h3>北京理工大学-珠海</h3>
                <p class="school-major">计算机学硕</p>
                <div class="school-status">
                    <span class="status-tag">候补前列</span>
                    <span class="status-tag">中 9 title</span>
                </div>
                <div class="school-summary">
                    <p>中 9 title + 081200 代码，方向相对冷门</p>
                    <div class="progress-indicator">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 70%"></div>
                        </div>
                        <span>70% 匹配度</span>
                    </div>
                </div>
                <div class="school-details" style="display: none;">
                    <div class="detail-section">
                        <h4>📋 学校特点</h4>
                        <ul>
                            <li><strong>导师：</strong>较冷门方向弱导，不太 push</li>
                            <li><strong>实习：</strong>不放实习</li>
                            <li><strong>学位：</strong>与北理本部计算机学硕毕业证一致</li>
                        </ul>
                    </div>
                    <div class="detail-section">
                        <h4>💡 心得体会</h4>
                        <p>可视作可招本科生版本的异地研究生院，拿到的是北理计算机学硕名义。</p>
                        <p><strong>权衡：</strong>单纯 title 不如好导师或实习机会。</p>
                    </div>
                    <div class="detail-section">
                        <h4>🏷️ 标签</h4>
                        <div class="tag-list">
                            <span class="tag">中 9 title</span>
                            <span class="tag">081200 代码</span>
                            <span class="tag">不放实习</span>
                            <span class="tag">弱导</span>
                        </div>
                    </div>
                </div>
                <button class="toggle-details">📖 查看详情</button>
            </div>

            <div class="school-card waiting" data-school="nudt">
                <div class="school-header">
                    <div class="status-badge status-waiting">候补</div>
                    <div class="school-icons">
                        <span class="icon">🛡️</span>
                        <span class="icon">⚡</span>
                    </div>
                </div>
                <h3>国防科技大学</h3>
                <p class="school-major">计算机学硕</p>
                <div class="school-status">
                    <span class="status-tag">第二批候补</span>
                    <span class="status-tag">体检政审</span>
                </div>
                <div class="school-summary">
                    <p>体检+政审+面试，偏硬件与系统方向</p>
                    <div class="progress-indicator">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 65%"></div>
                        </div>
                        <span>65% 匹配度</span>
                    </div>
                </div>
                <div class="school-details" style="display: none;">
                    <div class="detail-section">
                        <h4>📋 考核过程</h4>
                        <ul>
                            <li><strong>体检：</strong>合格即可</li>
                            <li><strong>政审：</strong>合格即可</li>
                            <li><strong>面试：</strong>无简历/PPT，完全靠聊天打分</li>
                        </ul>
                    </div>
                    <div class="detail-section">
                        <h4>💡 心得体会</h4>
                        <p>面试氛围和蔼，但最后聊嗨了脱口而出“我操”，当场尴尬。</p>
                        <p><strong>方向：</strong>偏硬件和系统，软件方向可能需转报软工。</p>
                    </div>
                    <div class="detail-section">
                        <h4>🏷️ 标签</h4>
                        <div class="tag-list">
                            <span class="tag">体检政审</span>
                            <span class="tag">偏硬件</span>
                            <span class="tag">第二批</span>
                            <span class="tag">聊天面试</span>
                        </div>
                    </div>
                </div>
                <button class="toggle-details">📖 查看详情</button>
            </div>

            <div class="school-card rejected" data-school="bupt">
                <div class="school-header">
                    <div class="status-badge status-rejected">未入</div>
                    <div class="school-icons">
                        <span class="icon">🤖</span>
                        <span class="icon">💔</span>
                    </div>
                </div>
                <h3>北京通用人工智能研究院</h3>
                <p class="school-major">智能科学与技术学博（直博）</p>
                <div class="school-status">
                    <span class="status-tag warning">方向不匹配</span>
                    <span class="status-tag">具身智能</span>
                </div>
                <div class="school-summary">
                    <p>具身智能方向，最终未能匹配</p>
                    <div class="progress-indicator">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 40%"></div>
                        </div>
                        <span>40% 匹配度</span>
                    </div>
                </div>
                <div class="school-details" style="display: none;">
                    <div class="detail-section">
                        <h4>📋 经历过程</h4>
                        <ul>
                            <li><strong>套磁：</strong>老师因对项目感兴趣主动联系</li>
                            <li><strong>推荐：</strong>转荐至具身智能强导</li>
                            <li><strong>结果：</strong>方向不匹配，大寄</li>
                        </ul>
                    </div>
                    <div class="detail-section">
                        <h4>💡 心得体会</h4>
                        <p>北邮老师聊天氛围极好，讨论 ACM、Jittor、Diffusion 等话题。</p>
                        <p><strong>遗憾：</strong>通研院老师在科研经历阶段直接让“快讲”，体验欠佳。</p>
                    </div>
                    <div class="detail-section">
                        <h4>🏷️ 标签</h4>
                        <div class="tag-list">
                            <span class="tag">直博</span>
                            <span class="tag">具身智能</span>
                            <span class="tag">方向不匹配</span>
                            <span class="tag">弱 com</span>
                        </div>
                    </div>
                </div>
                <button class="toggle-details">📖 查看详情</button>
            </div>

            <div class="school-card offer" data-school="njust">
                <div class="school-header">
                    <div class="status-badge status-offer">Offer</div>
                    <div class="school-icons">
                        <span class="icon">🔗</span>
                        <span class="icon">📚</span>
                    </div>
                </div>
                <h3>南京理工大学</h3>
                <p class="school-major">计算机学硕</p>
                <div class="school-status">
                    <span class="status-tag">Offer</span>
                    <span class="status-tag warning">保底选项</span>
                </div>
                <div class="school-summary">
                    <p>2 title + 保底 1A 成果，nku 联培机会</p>
                    <div class="progress-indicator">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 75%"></div>
                        </div>
                        <span>75% 匹配度</span>
                    </div>
                </div>
                <div class="school-details" style="display: none;">
                    <div class="detail-section">
                        <h4>📋 项目特点</h4>
                        <ul>
                            <li><strong>联培：</strong>进入 njust 九千引导师名下，在 nku 做科研</li>
                            <li><strong>毕业证：</strong>最终发放 njust 毕业证</li>
                            <li><strong>成果：</strong>保底 1 篇 A 类成果</li>
                        </ul>
                    </div>
                    <div class="detail-section">
                        <h4>💡 心得体会</h4>
                        <p>面试过程轻松，老师全程劝留；联培路径虽然是 2 title，但资源给得足。</p>
                        <p><strong>犹豫点：</strong>对 2 title 接受度较低，最终没有选择。</p>
                    </div>
                    <div class="detail-section">
                        <h4>🏷️ 标签</h4>
                        <div class="tag-list">
                            <span class="tag">联培</span>
                            <span class="tag">2 title</span>
                            <span class="tag">保底 1A</span>
                            <span class="tag">保底选项</span>
                        </div>
                    </div>
                </div>
                <button class="toggle-details">📖 查看详情</button>
            </div>
        </div>
    </section>

  <!-- 经验建议部分 -->
    <section class="section" id="advice">
        <h2 class="clickable-title" data-original-text="💡 经验与建议">💡 经验与建议</h2>
        <div class="original-text" style="display: none;">
            <p><strong>再谈推荐：</strong>如果是保研边缘人，提提绩点（绩点排名对于所有人来说，都是越高越好，通用货币这是），然后打比赛、申大创、申软著，想办法提高综合成绩。</p>
            <p>其实，从往届来看，能打ACM打到最后的基本上100%的人都可以保研的。（单从综合成绩来看，要是挂科、四级、GPA前30%之类的硬性要求没达到那真没办法了，达到了硬性要求的话，和别人争名额基本上不会说争不过）
            </p>
            <p><strong>再谈接收：</strong>确定能保了之后，绩点能提还得提，然后尽量要整段科研经历。</p>
            <p>可以找学校里的导师，也可以网看有没有啥组招科研实习生的，像小红书上就总是有招科研实习生的帖子。</p>
            <p>没出成果也有东西可以写简历，然后可以防老师问408，对于方向对口的老师，这段科研经历也能产生特攻效果。出成果了那基本上稳了，论文傍身，去陶瓷老师会非常顺利。</p>
            <p>想要流畅入面，得高绩点+过六级。科研 > 绩点 >> 竞赛，acm除外。对于部分院校或老师，acm有特攻属性，               <p>然后4月份左右，准备pdf简历、ppt自我介绍、套磁信这些，去找弱com的院校陶瓷老师，能和弱com的老师达成双选那就成功一大半了。</p>
            <p>9月10日前后我真的是海投了几十个学校（0
                offer急死我了），结果想去的那些学校一个没入，从到浙、交、复、科，到中山、华东师范、华南理工，反正基本上所有学校都投了，想着通过海量来捡到一两个想去的ï½没让我入，我bg太差了。
            </p>
            <p>投的时候尽量投专硕！学硕竞争大且有很多本校爷，我已经踩坑了，投的基本上都是学硕，别学我！</p>
            <p>还有我不想去的学校都没让我入，简直了，太噩梦了woc，像中南、山大、大连理工，甚至西电这种都没让我入，进西电系统直接看到红色的拒绝入面，哈哈哈哈哈哈我真的，气笑了。</p>
            <p>总的来说，bcom，像我这种低rk边缘人或者没过六级这种，强com很难进（今年入面难度更是翻倍了，辣鸡背景直接不配入场，关上了大门）</p>
            <p>所以bg差的，一定要很早的去套弱com！早到4月套都不为过（如果老师没回，可以隔一个月或半个月再发一次，确保他看到了，毕竟人家一天可能收到几百封邮件），越早套越好，真到9月预推免的时候套，早被别人套完了。像西电就是弱com，老师è´¨生源那也拒你。
            </p>
            <p>然后就我而言，前面我每封套磁信都亲自结合老师的研究方向写，回复率很高；9月10日左右来着，0
                offer的我开始用脚本狂发上百封（这时候是统一模板，没法讲老师的研究方向了），回复率低的离谱。我不知道是诚意的问题，还是因为套的太晚没名额了导致的，你们自己评判吧。</p>
        </div>
        <div class="advice-grid">
            <div class="advice-card">
                <div class="advice-icon">📈</div>
                <h3>绩点提升</h3>
                <p>保研边缘人|绩点是通用货币，越高越好</p>
                <div class="highlight-info">
                    <p>能打ACM到最后的基本100%可保研</p>
                </div>
            </div>
            <div class="advice-card">
                <div class="advice-icon">🔬</div>
                <h3>科研经历</h3>
                <p>尽早积累科研经历，即使没有成果也有帮助</p>
                <div class="highlight-info">
                    <p>可找校内导师或网上科研实习</p>
                </div>
            </div>
            <div class="advice-card">
                <div class="advice-icon">🏆</div>
                <h3>竞赛优势</h3>
                <p>ACM 等竞赛有特攻属性，对部分院校/老师有吸引力</p>
                <div class="highlight-info">
                    <p>如北航等院校特别看重 ACM</p>
                </div>
            </div>
            <div class="advice-card">
                <div class="advice-icon">📧</div>
                <h3>套磁策略</h3>
                <p>bg 差的要尽早套弱 com 院校，4 月套都不为过</p>
                <div class="highlight-info">
                    <p>个性化套磁信回复率远高于模板</p>
                </div>
            </div>
            <div class="advice-card">
                <div class="advice-icon">🎯</div>
                <h3>目标选择</h3>
                <p>bg 好的适合强 com，bg 差的适合弱 com</p>
                <div class="highlight-info">
                    <p>尽量投专硕，学硕竞争大</p>
                </div>
            </div>
            <div class="advice-card">
                <div class="advice-icon">📝</div>
                <h3>六级重要性</h3>
                <p>很多学校会卡六级，一定要尽早通过</p>
                <div class="highlight-info">
                    <p>未过六级会严重限制选择</p>
                </div>
            </div>
        </div>

        <div class="advice-grid advice-background-grid">
            <div class="advice-card success">
                <div class="advice-icon">🎓</div>
                <h3>背景好的学生</h3>
                <p><strong>高 rk 就是最大的底气，稳步推进常规流程。</strong></p>
                <div class="highlight-info">
                    <p><strong>策略：</strong>主攻强 com 院校，正常参加夏令营/预推免即可。</p>
                </div>
            </div>
            <div class="advice-card accent">
                <div class="advice-icon">⚠️</div>
                <h3>背景弱的学生</h3>
                <p><strong>想翻盘要尽早行动，别等到九月才出手。</strong></p>
                <div class="highlight-info">
                    <p><strong>策略：</strong>聚焦弱 com，4 月开始就去套磁并持续跟进。</p>
                </div>
            </div>
        </div>

        <!-- 个人惨痛经历 -->
        <div class="card accent" style="margin-top: 20px;">
            <h3>😭 个人惨痛经历</h3>
            <ul>
                <li><strong>海投失败：</strong>十所目标院校，0 入面，只能向下寻找。强 com 被卡低 rk 和未过六级，弱 com 被卡没联系老师。</li>
                <li><strong>学硕踩坑：</strong>投的基本都是学硕，竞争激烈且本校生多。</li>
                <li><strong>背景限制：</strong>低 rk + 未过六级，强 com 院校基本无望。</li>
                <li><strong>套磁教训：</strong>弱 com 越早套磁越好，晚了就没名额。个性化套磁回复率高，模板批量套磁回复率极低。</li>
            </ul>
        </div>

        <!-- 关键要点 -->
        <div class="card" style="margin-top: 20px;">
            <h3>🎯 关键要点</h3>
            <p><span class="highlight">科研 &gt; 绩点 &gt;&gt; 竞赛（ACM 除外）</span></p>
            <p><span class="highlight">高绩点 + 过六级</span> = 流畅入面</p>
            <p><span class="highlight">bg 差的尽早套弱 com</span>，不要等到 9 月</p>
            <p><span class="highlight">套磁信要个性</span>，结合老师研究方向</p>
            <p><span class="highlight">尽量投专硕</span>，学硕竞争大且本校生多</p>
            <p><span class="highlight">4 月准备材料</span>：PDF 简历、PPT 自我介绍、套磁信</p>
        </div>

    </section>


    <!-- 信息渠道部分 -->
    <section class="section" id="channels">
        <h2 class="clickable-title" data-original-text="🔗 信息渠道">🔗 信息渠道</h2>
        <div class="original-text" style="display: none;">
            <ul>
                <li><strong>绿群（QQ 943826679）：</strong>伟大的开源社群，信息集中且互助氛围强。</li>
                <li><strong>知乎：</strong>经验贴质量高，能找到相似 bg 的案例。</li>
                <li><strong>小红书：</strong>信息量大但杂乱，需自行甄别。</li>
                <li><strong>CS 保研 DDL：</strong>绿群维护的夏令营/预推免日程，查询便捷但覆盖不全。</li>
                <li><strong>保研信息网：</strong>院校开营信息较全，适合导出后本地筛选。</li>
            </ul>
        </div>
        <div class="info-source">
            <a href="https://zhuanlan.zhihu.com/p/722088790" class="source-item" target="_blank">
                <h3>知乎</h3>
                <p>详细的上岸经验贴</p>
                <div class="highlight-info">
                    <p>锁定相似 bg，参考价值高</p>
                </div>
            </a>
            <a href="https://www.xiaohongshu.com" class="source-item" target="_blank">
                <h3>小红书</h3>
                <p>海量实时信息</p>
                <div class="highlight-info">
                    <p>信息杂乱但覆盖面广</p>
                </div>
            </a>
            <a href="https://ddl.csbaoyan.top/" class="source-item" target="_blank">
                <h3>CS 保研 DDL</h3>
                <p>夏令营/预推免日程</p>
                <div class="highlight-info">
                    <p>快速查看，但可能遗漏部分院校</p>
                </div>
            </a>
            <a href="http://pc.baoyanwang.com.cn/articles?category=%E4%BF%9D%E7%A0%94%E4%BF%A1%E6%81%AF" class="source-item" target="_blank">
                <h3>保研信息网</h3>
                <p>院校开营汇总</p>
                <div class="highlight-info">
                    <p>信息全但筛选麻烦，建议导出处理</p>
                </div>
            </a>
            <a href="https://github.com/CS-BAOYAN" class="source-item" target="_blank">
                <h3>绿群（QQ 943826679）</h3>
                <p>强互助开源社区</p>
                <div class="highlight-info">
                    <p>及时分享消息，便于对接学长学姐</p>
                </div>
            </a>
        </div>

        <div class="card" style="margin-top: 20px;">
            <h3>💡 渠道使用建议</h3>
            <div class="grid-2">
                <div class="card">
                    <h4>信息收集策略</h4>
                    <ul>
                        <li><strong>知乎：</strong>锁定相似背景的经验贴</li>
                        <li><strong>小红书：</strong>关注实时动态与求助帖</li>
                        <li><strong>绿群：</strong>参与讨论、获取一手消息</li>
                        <li><strong>DDL 网站：</strong>快速确认关键时间点</li>
                    </ul>
                </div>
                <div class="card">
                    <h4>注意事项</h4>
                    <ul>
                        <li>多渠道交叉验证，避免单一信息源</li>
                        <li>留意信息发布时间，防止过期消息误导</li>
                        <li>理性参考他人经历，结合自身情况判断</li>
                        <li>对重点信息做本地记录，方便随时查阅</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="card accent" style="margin-top: 20px;">
            <h3>🔍 信息筛选技巧</h3>
            <ul>
                <li><strong>保研信息网：</strong>适合导出后用表格筛选关键信息。</li>
                <li><strong>CS 保研 DDL：</strong>用来兜底确认时间，需配合其他渠道。</li>
                <li><strong>小红书：</strong>重点关注高互动帖，谨慎对待情绪化内容。</li>
                <li><strong>知乎：</strong>留意作者背景，与自身情况匹配度越高越有参考价值。</li>
            </ul>
        </div>
    </section>


    <!-- 总结部分 -->
    <section class="section" id="summary">
        <h2>🎓 总结</h2>
        <div class="card">
            <h3>个人感悟</h3>
            <p>保研过程只有亲历才知道压力有多大。今年节奏多变，大家都在海投，预推免初筛门槛抬升，边缘人几乎没有翻盘机会；面试冲突也让人不敢放弃保底去搏更好的院校。</p>
            <p>唯一觉得有希望的华五浙软，结果第一步就被六级刷掉，中 9 也没能进，至今仍是最大的遗憾。</p>
        </div>
        <div class="card">
            <h3>结语</h3>
            <p><strong>bg 太差 + 踩坑太多，这篇主要想给学弟学妹们一些帮助（也算反面教材），祝大家明年都能顺利上岸，华五多多！</strong></p>
            <p>QQ：249117（欢迎来交流）。</p>
            <p>欢迎关注<strong>算法与竞赛协会（705195065）、ACM 算法协会（1035790232）和软件开发实验室（可在 705195065 了解）</strong>。</p>
        </div>
    </section>
</div>
