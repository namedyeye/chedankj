'use strict';

function toArray(collection) {
  if (!collection) return [];
  return typeof collection.toArray === 'function' ? collection.toArray() : Array.from(collection);
}

function toDate(value) {
  if (!value) return null;
  if (typeof value.toDate === 'function') return value.toDate();
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function stripIndex(path) {
  return String(path || '').replace(/index\.html$/i, '').replace(/^\/+/, '');
}

const EXCLUDED_PATHS = new Set([
  '',
  'about/',
  'categories/',
  'config-issues/',
  'docs/',
  'examples/',
  'groups/',
  'help/',
  'quickstart/',
  'quickstart/codex/',
  'site/',
  'tags/',
  'tutorials/'
]);

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function stripHtml(value) {
  return String(value || '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function truncate(value, length) {
  const text = stripHtml(value);
  if (text.length <= length) return text;
  return `${text.slice(0, length).replace(/\s+\S*$/, '')}...`;
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getUrl(hexo, item) {
  const root = hexo.config.root || '/';
  const path = stripIndex(item.path || '');
  const normalizedRoot = root.endsWith('/') ? root : `${root}/`;
  return `${normalizedRoot}${path}`.replace(/\/{2,}/g, '/');
}

function getLabel(item, type) {
  if (item.home_label) return item.home_label;
  const path = stripIndex(item.path || '');
  if (type === 'post') return '博客';
  if (path.startsWith('quickstart/')) return '快速上手';
  if (path.startsWith('docs/')) return '文档';
  if (path.startsWith('tutorials/')) return '技巧';
  if (path.startsWith('config-issues/')) return '配置问题';
  if (path.startsWith('examples/')) return '案例';
  return '文章';
}

function getExcerpt(item) {
  return truncate(
    item.home_excerpt || item.description || item.excerpt || item.more || item.content || '',
    72
  );
}

function isExplicitFalse(value) {
  return value === false || value === 'false';
}

function isExplicitTrue(value) {
  return value === true || value === 'true';
}

function isLatestCandidate(item, type) {
  if (!item || !item.title || !item.date) return false;
  if (isExplicitFalse(item.home_latest)) return false;
  if (isExplicitTrue(item.home_latest)) return true;
  if (type === 'post') return true;
  return !EXCLUDED_PATHS.has(stripIndex(item.path));
}

hexo.extend.tag.register('latest_articles', function latestArticles(args) {
  const limit = Math.max(parseInt(args[0], 10) || 2, 1);
  const currentPath = stripIndex(this && this.path);
  const posts = toArray(hexo.locals.get('posts')).map(item => ({ item, type: 'post' }));
  const pages = toArray(hexo.locals.get('pages')).map(item => ({ item, type: 'page' }));

  const latest = posts
    .concat(pages)
    .filter(({ item, type }) => stripIndex(item.path) !== currentPath && isLatestCandidate(item, type))
    .map(({ item, type }) => {
      const date = toDate(item.date);
      return date ? { item, type, date } : null;
    })
    .filter(Boolean)
    .sort((a, b) => {
      const byDate = b.date.getTime() - a.date.getTime();
      if (byDate !== 0) return byDate;
      return stripIndex(a.item.path).localeCompare(stripIndex(b.item.path));
    })
    .slice(0, limit);

  if (!latest.length) {
    return '<p class="home-latest-empty">暂无最新文章。</p>';
  }

  return [
    '<div class="home-latest-grid">',
    ...latest.map(({ item, type, date }) => {
      const classes = 'home-latest-card';
      const badge = '<span class="home-latest-card__badge" hidden aria-hidden="true">最新</span>';
      return [
        `<a class="${classes}" data-published="${escapeHtml(date.toISOString())}" href="${escapeHtml(getUrl(hexo, item))}">`,
        badge,
        `<span class="home-latest-card__label">${escapeHtml(getLabel(item, type))}</span>`,
        `<span class="home-latest-card__date">${formatDate(date)}</span>`,
        `<span class="home-latest-card__title">${escapeHtml(item.title)}</span>`,
        `<p>${escapeHtml(getExcerpt(item))}</p>`,
        '<strong><i class="fa-solid fa-arrow-right" aria-hidden="true"></i> 阅读文章</strong>',
        '</a>'
      ].join('');
    }),
    '</div>'
  ].join('');
});
