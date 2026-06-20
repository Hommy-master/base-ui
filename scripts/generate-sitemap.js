const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// 网站基础URL
const baseUrl = 'https://jcaigc.cn';

// 更简单可靠的方法提取路由配置
function extractRoutesFromTsFile() {
  try {
    // 读取TypeScript文件内容
    const tsFilePath = path.join(__dirname, '../src/routes/const.tsx');
    const tsContent = fs.readFileSync(tsFilePath, 'utf8');
    
    // 使用简化的正则表达式分别提取每个路由对象的path和href属性
    const routes = [];
    const routeRegex = /{[^}]+}/g;
    const matches = tsContent.match(routeRegex);
    
    if (matches) {
      matches.forEach(match => {
        // 提取path属性
        const pathMatch = match.match(/path:\s*['"]([^'"]+)['"]/);
        // 提取href属性
        const hrefMatch = match.match(/href:\s*['"]([^'"]+)['"]/);
        
        if (pathMatch) {
          const route = {
            path: pathMatch[1]
          };
          if (hrefMatch) {
            route.href = hrefMatch[1];
          }
          routes.push(route);
        }
      });
    }
    
    // 过滤掉可能的非路由对象和重复项
    const uniqueRoutes = [];
    const pathSet = new Set();
    
    routes.forEach(route => {
      if (route.path && !pathSet.has(route.path)) {
        pathSet.add(route.path);
        uniqueRoutes.push(route);
      }
    });
    
    // 确保至少有一些路由配置
    if (uniqueRoutes.length > 0) {
      console.log(`成功从TypeScript文件提取了 ${uniqueRoutes.length} 个路由配置`);
      return uniqueRoutes;
    }
    
    throw new Error('未找到有效的路由配置');
  } catch (error) {
    console.error('从TypeScript文件提取路由配置失败:', error);
    // 返回默认路由配置作为后备
    return [
      { path: '/home' },
      { path: '/workflow' },
      { path: '/recharge' },
      { path: '/jcaigc-doc', href: 'https://jcaigc-doc.feishu.cn/wiki/FlYEwlKusiC6lZkjLcocqZ0LnKe' },
      { path: '/user-info' },
      { path: '/upload' },
      { path: '/balance-log' },
    ];
  }
}

// 生成sitemap函数
async function generateSitemap() {
  try {
    // 提取路由配置
    const routesConfig = extractRoutesFromTsFile();
    
    const sitemapStream = new SitemapStream({
      hostname: baseUrl,
    });

    // 添加首页
    sitemapStream.write({
      url: '/',
      changefreq: 'daily',
      priority: 1.0,
    });

    // 从路由配置添加页面
    routesConfig.forEach((route) => {
      // 跳过外部链接和没有路径的路由
      if (!route.href && route.path) {
        // 跳过包含动态参数的路由，如 /workflow/bot/:id
        if (!route.path.includes(':')) {
          sitemapStream.write({
            url: route.path,
            changefreq: route.path === '/home' || route.path === '/workflow' ? 'daily' : 'weekly',
            priority: getPriorityByPath(route.path),
          });
        }
      }
    });

    // 添加外部文档链接
    const docRoute = routesConfig.find((route) => route.href);
    if (docRoute && docRoute.href) {
      sitemapStream.write({
        url: docRoute.href,
        changefreq: 'monthly',
        priority: 0.8,
      });
    }

    // 结束流
    sitemapStream.end();

    // 转换为字符串
    const sitemap = await streamToPromise(sitemapStream);
    const sitemapContent = sitemap.toString();

    // 写入public目录（用于构建）
    const publicSitemapPath = path.join(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(publicSitemapPath, sitemapContent);
    console.log(`Sitemap generated successfully at ${publicSitemapPath}`);

    // 同时写入项目根目录（保持与现有结构一致）
    const rootSitemapPath = path.join(__dirname, '../sitemap.xml');
    fs.writeFileSync(rootSitemapPath, sitemapContent);
    console.log(`Sitemap also copied to ${rootSitemapPath}`);

  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

// 根据路径获取优先级
function getPriorityByPath(path) {
  const priorities = {
    '/home': 0.9,
    '/workflow': 0.8,
    '/recharge': 0.7,
    '/user-info': 0.6,
    '/upload': 0.5,
    '/balance-log': 0.5,
  };
  return priorities[path] || 0.5;
}

// 执行生成
generateSitemap();
