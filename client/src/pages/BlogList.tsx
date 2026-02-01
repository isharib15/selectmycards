import { motion } from "framer-motion";
import { Link } from "wouter";
import { blogPosts } from "../data/blogPosts";
import { Calendar, User, ArrowLeft } from "lucide-react";

export default function BlogList() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sapphire_light hover:text-white transition-colors mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl sm:text-6xl font-display font-bold text-white mb-16 text-center">
          Financial Insights
        </h1>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {post.author}
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 group-hover:text-sapphire_light transition-colors">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <Link 
                href={`/blog/${post.id}`}
                className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
              >
                Read Full Article <ArrowLeft className="rotate-180" size={18} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
