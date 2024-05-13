import React from 'react';
import '../single-post/SinglePost.css';
import { formatTime } from '../../../utils/utils';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

const renderers = {
  code: CodeBlock,
  inlineCode: ({ node, inline, className, children, ...props }) => (
    <code className={className} {...props}>
      {children}
    </code>
  ),
};

const SinglePost = ({ post }) => {
  return (
    <div className='single-post-card'>
      <div className='image-container'>
        <img src={process.env.PUBLIC_URL + '/assets/post-image.jpg'} alt='post-image' />
      </div>
      <div className='post-content'>
        <div className='author-info'>
          <ul>
            <li>AUTHOR</li>
            <p>{post.users.username}</p>
          </ul>
          <ul>
            <li>PUBLISH DATE</li>
            <small>{formatTime(post.timestamp)}</small>
          </ul>
        </div>
        <h1>{post.title}</h1>
        <ReactMarkdown components={renderers}>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default SinglePost;
