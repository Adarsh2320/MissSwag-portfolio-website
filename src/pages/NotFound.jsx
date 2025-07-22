import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-black text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl"
      >
        <h1 className="text-6xl font-bold text-green-400 mb-4">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-2">
          Page Not Found
        </p>
        <p className="text-gray-400 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black bg-green-400 rounded-full shadow-md hover:shadow-green-500/30 transition duration-200"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </motion.div>
    </section>
  );
}
