import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { blogPosts } from "../data/blogPosts";
import { ArrowLeft, Calendar, User } from "lucide-react";
import NotFound from "./not-found";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const post = blogPosts.find((p) => p.id === params?.id);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sapphire_light hover:text-white transition-colors mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              {post.author}
            </div>
          </div>
        </header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert prose-lg max-w-none bg-white/5 p-8 sm:p-12 rounded-3xl border border-white/10 backdrop-blur-sm"
        >
          <div 
            className="text-gray-300 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </motion.div>
      </article>
    </div>
  );
}
