import { useEffect, useRef } from 'react';
import { getLoginStore } from './store';
import LoginModal from '~/components/LoginModal';

import './index.css';
import LoginMask from '~/components/LoginMask';
import { useSEO } from '~/hooks/useSEO';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const LoginPage = () => {
  useSEO({
    title: '登录｜简创AIGC',
    description: '登录简创AIGC账户，享受AI视频创作平台的所有功能和服务。',
    keywords: '登录, 简创AIGC, AI视频创作, 账户',
    author: '逗赛科技',
    robots: 'noindex, nofollow',
    ogTitle: '登录｜简创AIGC',
    ogDescription: '登录简创AIGC账户，享受AI视频创作平台的所有功能和服务。',
    ogUrl: 'https://jcaigc.cn/login',
    twitterCard: 'summary',
    twitterTitle: '登录｜简创AIGC',
    twitterDescription: '登录简创AIGC账户，享受AI视频创作平台的所有功能和服务。',
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // 确保canvas元素存在

    const ctx = canvas.getContext('2d');
    if (!ctx) return; // 确保获取到2D上下文

    // 设置canvas尺寸
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 创建粒子
    const createParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(
        Math.floor((window.innerWidth * window.innerHeight) / 5000),
        100
      );

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(66, 165, 245, ${Math.random() * 0.5 + 0.2})`,
        });
      }
    };

    createParticles();

    // 动画循环
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 绘制背景网格
      ctx.strokeStyle = 'rgba(66, 165, 245, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 40;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // 更新和绘制粒子
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // 边界检查
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // 绘制粒子
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    getLoginStore().isLogin = true;
    return () => {
      getLoginStore().isLogin = false;
    };
  }, []);
  return (
    <div className="login-page relative">
      <LoginMask />
      <div className="gradient-overlay"></div>
      <div className="waves"></div>
      <div className="waves"></div>
      {/* 动态背景 */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <LoginModal />
    </div>
  );
};

export default LoginPage;
