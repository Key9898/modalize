import { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Copy, Check } from 'lucide-react';
import { useDemoStore } from '../store/useDemoStore';

type SupportedLanguage = 'tsx' | 'jsx' | 'bash' | 'css' | 'json' | 'typescript' | 'javascript';

interface CodeBlockProps {
  code: string;
  language?: SupportedLanguage;
  filename?: string;
}

export function CodeBlock({ code, language = 'tsx', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const { theme } = useDemoStore();

  const prismTheme = theme === 'light' ? themes.oneLight : themes.oneDark;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-white/5 mt-4">
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-800/80 border-b border-white/5">
        <span className="text-xs text-white/40 font-mono">
          {filename ?? language}
        </span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/80 transition-colors py-1 px-2 rounded-md hover:bg-white/5"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-success" />
              <span className="text-success">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <Highlight theme={prismTheme} code={code.trim()} language={language}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            style={{ ...style, margin: 0, borderRadius: 0 }}
            className="p-5 overflow-x-auto text-sm leading-relaxed"
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
