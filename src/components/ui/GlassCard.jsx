export const GlassCard = ({ className = "", children }) => (
  <div
    className={`rounded-2xl border border-white/20 bg-white/10 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5 ${className}`}
  >
    {children}
  </div>
);
