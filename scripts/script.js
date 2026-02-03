function render(data = coffees) {
    const grid = document.getElementById('coffee-list');
    const countDisplay = document.getElementById('filter-result-count');
    
    // 更新顯示數量：只有在篩選狀態（數量少於全部）時才顯示
    if (countDisplay) {
        if (data.length < coffees.length) {
            countDisplay.textContent = `共有 ${data.length} 項符合條件的品項`;
            countDisplay.style.display = 'block';
        } else {
            // 顯示全部時隱藏文字
            countDisplay.textContent = '';
            countDisplay.style.display = 'none';
        }
    }

    grid.innerHTML = data.map(c => `
        <div class="coffee-card">
            <div class="id-sidebar">${c.id}</div>
            <div class="content-body">
                <div class="title-row">
                    <span class="coffee-name">${c.name}</span>
                    ${c.new ? '<span class="new-tag">NEW</span>' : ''}
                </div>
                <div class="flavor-notes">${c.note}</div>
                <div class="tag-group">
                    <span class="tag">${c.process}</span>
                    <span class="tag">${c.roast}</span>
                </div>
                <div class="price-footer">
                    <div class="price-item">原豆半磅 <b class="${c.bean ? '' : 'sold-out'}">${c.bean ? '$' + c.bean : '售完'}</b></div>
                    <div class="price-item">濾掛(10包/盒) <b class="${c.drip ? '' : 'sold-out'}">${c.drip ? '$' + c.drip : '售完'}</b></div>
                </div>
            </div>
        </div>
    `).join('');
}

// 點擊事件監聽保持不變
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        const type = e.target.getAttribute('data-type');
        const value = e.target.getAttribute('data-value');

        if (type === 'all') {
            render(coffees);
        } else {
            const filtered = coffees.filter(item => item[type].includes(value));
            render(filtered);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => render());
