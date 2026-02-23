import { useEffect, useMemo, useState } from "react";

function renderTypedTokens(tokens, visibleChars) {
  let remaining = visibleChars;

  return tokens.map((token, index) => {
    if (remaining <= 0) {
      return null;
    }

    const slice = token.text.slice(0, remaining);
    remaining -= slice.length;

    return (
      <span key={`${token.text}-${index}`} className={token.className}>
        {slice}
      </span>
    );
  });
}

export const Typewriter = ({ lines, typingSpeed = 24, pauseMs = 1400 }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const charTotal = useMemo(
    () => lines[lineIndex].reduce((total, token) => total + token.text.length, 0),
    [lineIndex, lines]
  );

  useEffect(() => {
    if (charCount < charTotal) {
      const timer = window.setTimeout(() => setCharCount((prev) => prev + 1), typingSpeed);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setLineIndex((prev) => (prev + 1) % lines.length);
      setCharCount(0);
    }, pauseMs);

    return () => window.clearTimeout(timer);
  }, [charCount, charTotal, lines.length, pauseMs, typingSpeed]);

  return (
    <div className="font-mono text-left text-sm md:text-base leading-relaxed">
      <div>
        {renderTypedTokens(lines[lineIndex], charCount)}
        <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-primary align-middle" />
      </div>
    </div>
  );
};
