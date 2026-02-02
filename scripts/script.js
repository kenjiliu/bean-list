
function render() {
    const grid = document.getElementById('coffee-list');
    grid.innerHTML = coffees.map(c => `
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

document.addEventListener('DOMContentLoaded', render);

