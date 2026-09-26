export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-3xl mx-auto">
        
        <a href="/" className="text-slate-400 hover:text-white mb-6 inline-block">
          ← رجوع
        </a>

        <h1 className="text-3xl font-bold mb-6">عن الموقع</h1>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-white mb-2">🛠️ إيه هو DevKit؟</h2>
            <p>
              DevKit هو موقع مجاني فيه مجموعة من الأدوات المفيدة للمبرمجين والمطورين العرب. 
              هدفنا نوفر أدوات سريعة وبسيطة بالعربي والإنجليزي، توفّر وقت المطورين وتخلي شغلهم أسهل.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">🎯 مهمتنا</h2>
            <p>
              معظم أدوات المبرمجين على النت بالإنجليزي، ومشتتة في مواقع مختلفة. 
              DevKit بيجمعلك أهم الأدوات في مكان واحد، بسرعة، وبدون تسجيل أو تعقيد.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">⚡ المميزات</h2>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>مجاني 100% - بدون تسجيل</li>
              <li>يعمل محليًا - بياناتك مش بتترفع لأي سيرفر</li>
              <li>سريع وخفيف - يشتغل على أي جهاز</li>
              <li>بالعربي والإنجليزي</li>
              <li>مفتوح المصدر على GitHub</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">👨‍💻 المطور</h2>
            <p>
              DevKit تم تطويره بواسطة <span className="text-blue-400">Mena Mon</span> - 
              مطور ويب مهتم بتبسيط الأدوات للمبرمجين العرب.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">📬 تواصل معنا</h2>
            <p>
              عندك اقتراح أو ملاحظة؟ عايز أداة معينة؟ 
              <a href="/contact" className="text-blue-400 hover:text-blue-300 mr-1">تواصل معنا</a>
            </p>
          </section>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} DevKit - جميع الحقوق محفوظة
        </div>

      </div>
    </main>
  );
}
