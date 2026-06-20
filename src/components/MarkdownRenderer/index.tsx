import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'; // 使用较亮的主题
import copy from 'clipboard-copy';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math'; // 支持数学公式
import rehypeKatex from 'rehype-katex'; // 渲染数学公式
import 'katex/dist/katex.min.css'; // KaTeX样式

import './index.css';
import { message } from 'antd';

const MarkdownRenderer = ({ content }: { content: string }) => {
  const handleCopy = (code: string) => {
    copy(code);
    message.success('已复制');
  };

  // 自定义较亮的代码块样式
  const customStyle = {
    ...tomorrow,
    'pre[class*="language-"]': {
      ...tomorrow['pre[class*="language-"]'],
      backgroundColor: '#f8f8f8', // 更亮的背景色
    },
    'code[class*="language-"]': {
      ...tomorrow['code[class*="language-"]'],
      backgroundColor: 'transparent',
    },
  };

  return (
    <div className="markdown-container">
      {/* 实际显示的内容 */}
      <ReactMarkdown
        remarkPlugins={[
          remarkGfm, // GitHub Flavored Markdown
          remarkMath, // 数学公式支持
        ]}
        rehypePlugins={[
          rehypeKatex, // 数学公式渲染
        ]}
        components={{
          // @ts-ignore 代码块的展示
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');

            return !inline && match ? (
              <div className="code-block-wrapper">
                <div className="code-block-header">
                  <span>{match[1]}</span>
                  <button
                    onClick={() => handleCopy(String(children))}
                    className="code-block-header_copy"
                  >
                    复制{' '}
                  </button>
                </div>
                <SyntaxHighlighter
                  //@ts-ignore
                  style={customStyle} // 使用自定义较亮的样式
                  language={match[1]}
                  PreTag="div"
                  customStyle={{
                    margin: 0,
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={`${className} code-block-code`} {...props}>
                {children}
              </code>
            );
          },
          // 图片的展示
          img({ node, ...props }) {
            return (
              <img
                {...props}
                style={{
                  maxWidth: '100%',
                  borderRadius: '4px',
                  margin: '16px 0',
                }}
                alt=""
              />
            );
          },
          // 表格的展示
          table({ node, ...props }) {
            return (
              <div className="table-container">
                <table {...props} />
              </div>
            );
          },
          // 区块的展示
          blockquote({ node, ...props }) {
            return <blockquote {...props} className="blockquote" />;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
