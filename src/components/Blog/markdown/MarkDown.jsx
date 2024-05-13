import React from 'react'
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
      <SyntaxHighlighter style={{ ...atomDark, backgroundColor: '#f4f4f4', padding: '0.2em', borderRadius: '3px' }} language="javascript" children={String(children).replace(/\n$/, '')} {...props} />
    ),
};  

const MarkDown = ({content}) => {
  return (
    <ReactMarkdown components={renderers}>{content}</ReactMarkdown>
  )
}

export default MarkDown