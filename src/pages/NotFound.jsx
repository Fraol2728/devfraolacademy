import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center bg-background text-foreground px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="text-sm text-muted-foreground">404</p>
        <h1 className="text-4xl font-bold mt-2">Page not found</h1>
        <p className="text-muted-foreground mt-3">The page you requested does not exist.</p>
        <Link
          to="/"
          className="inline-flex mt-6 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
