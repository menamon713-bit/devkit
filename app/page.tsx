export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
      
      <h1 className="text-4xl font-bold mb-4 text-center">
        🛠️ DevKit
      </h1>
      
      <p className="text-slate-400 text-center mb-8 text-lg">
        أدواتك اليومية كمبرمج في مكان واحد
      </p>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        
        <a href="/json" className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-center transition">
          <div className="text-2xl mb-2">📋</div>
          <div className="font-semibold">JSON</div>
        </a>

        <a href="/base64" className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-center transition">
          <div className="text-2xl mb-2">🔐</div>
          <div className="font-semibold">Base64</div>
        </a>

        <a href="/uuid" className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-center transition">
          <div className="text-2xl mb-2">🆔</div>
          <div className="font-semibold">UUID</div>
        </a>

        <a href="/timestamp" className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-center transition">
          <div className="text-2xl mb-2">⏰</div>
          <div className="font-semibold">Timestamp</div>
        </a>

      </div>

      <p className="text-slate-500 text-sm mt-12">
        Made with ❤️ for Arab Developers
      </p>

<div className="mt-8 flex gap-6 text-slate-500 text-sm">
  <a href="/privacy" className="hover:text-slate-300">سياسة الخصوصية</a>
  <a href="/about" className="hover:text-slate-300">عن الموقع</a>
className="hover:text-slate-300">تواصل معنا</a>
</div>
</div>

    </main>
  );
}
