export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-3xl mx-auto">
        
        <a href="/" className="text-slate-400 hover:text-white mb-6 inline-block">
          ← رجوع
        </a>

        <h1 className="text-3xl font-bold mb-2">سياسة الخصوصية</h1>
        <p className="text-slate-500 mb-8 text-sm">آخر تحديث: {new Date().toLocaleDateString("ar-EG")}</p>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-white mb-2">1. مقدمة</h2>
            <p>
              مرحبًا بك في DevKit. نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. 
              توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك عند استخدام موقعنا.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">2. المعلومات التي نجمعها</h2>
            <p>
              موقعنا لا يجمع أي بيانات شخصية مباشرة من المستخدمين. جميع الأدوات تعمل 
              محليًا في متصفحك، ولا يتم إرسال أي محتوى تكتبه إلى خوادمنا.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">3. ملفات تعريف الارتباط (Cookies)</h2>
            <p>
              نستخدم ملفات تعريف الارتباط لتحسين تجربتك. كما يستخدم شركاؤنا (مثل Google AdSense) 
              ملفات تعريف الارتباط لعرض إعلانات مخصصة بناءً على زياراتك السابقة.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">4. إعلانات Google AdSense</h2>
            <p>
              نستخدم خدمة Google AdSense لعرض الإعلانات. تستخدم Google ملفات تعريف الارتباط 
              DART لعرض إعلانات مخصصة. يمكنك إلغاء الاشتراك في استخدام ملف تعريف ارتباط DART 
              من خلال زيارة سياسة الخصوصية الخاصة بإعلانات Google.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">5. روابط لمواقع أخرى</h2>
            <p>
              موقعنا قد يحتوي على روابط لمواقع خارجية. نحن لسنا مسؤولين عن سياسات الخصوصية 
              أو المحتوى الخاص بتلك المواقع.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">6. التغييرات على هذه السياسة</h2>
            <p>
              قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة 
              مع تحديث تاريخ "آخر تحديث".
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">7. تواصل معنا</h2>
            <p>
              إذا كان لديك أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا عبر البريد الإلكتروني: 
              <span className="text-blue-400">krevenkreven18@gmail.com</span>
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
