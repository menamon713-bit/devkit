export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-3xl mx-auto">
        
        <a href="/" className="text-slate-400 hover:text-white mb-6 inline-block">
          ← رجوع
        </a>

        <h1 className="text-3xl font-bold mb-6">📬 تواصل معنا</h1>

        <p className="text-slate-300 mb-8 leading-relaxed">
          عندك سؤال، اقتراح، أو عايز أداة معينة؟ 
          يسعدنا نسمع منك! تواصل معنا من خلال أي وسيلة تحت:
        </p>

        <div className="space-y-4">
          
          {/* Email */}
          <a
            href="mailto:krevenkreven18@gmail.com"
            className="flex items-center gap-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl p-4 transition"
          >
            <div className="text-3xl">📧</div>
            <div>
              <div className="font-semibold text-white">الإيميل</div>
              <div className="text-slate-400 text-sm">krevenkreven18@gmail.com</div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/201554416094"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl p-4 transition"
          >
            <div className="text-3xl">💬</div>
            <div>
              <div className="font-semibold text-white">واتساب</div>
              <div className="text-slate-400 text-sm">+20 155 441 6094</div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/menamon713-bit/devkit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl p-4 transition"
          >
            <div className="text-3xl">💻</div>
            <div>
              <div className="font-semibold text-white">GitHub</div>
              <div className="text-slate-400 text-sm">menamon713-bit/devkit</div>
            </div>
          </a>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} DevKit - جميع الحقوق محفوظة
        </div>

      </div>
    </main>
  );
}
