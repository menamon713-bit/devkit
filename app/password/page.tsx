"use client";

import { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    let chars = "";
    if (useUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) chars += "0123456789";
    if (useSymbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (!chars) {
      setPassword("اختار نوع واحد على الأقل");
      return;
    }

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
    setCopied(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const getStrength = () => {
    let score = 0;
    if (length >= 12) score++;
    if (length >= 20) score++;
    if (useUpper) score++;
    if (useLower) score++;
    if (useNumbers) score++;
    if (useSymbols) score++;

    if (score <= 2) return { text: "ضعيف", color: "text-red-400" };
    if (score <= 4) return { text: "متوسط", color: "text-yellow-400" };
    return { text: "قوي", color: "text-green-400" };
  };

  const strength = getStrength();

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4">
      <div className="max-w-2xl mx-auto">
        
        <a href="/" className="text-slate-400 hover:text-white mb-4 inline-block">
          ← رجوع
        </a>

        <h1 className="text-3xl font-bold mb-6">🔑 Password Generator</h1>

        {/* النتيجة */}
        <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-slate-400 text-sm">كلمة السر:</span>
            <span className={`text-sm font-bold ${strength.color}`}>
              ({strength.text})
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <code className="flex-1 bg-slate-950 border border-slate-700 rounded p-3 text-green-400 font-mono text-sm break-all min-h-[50px] flex items-center">
              {password || "اضغط توليد لتوليد كلمة سر"}
            </code>
            {password && (
              <button
                onClick={copy}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg font-semibold whitespace-nowrap"
              >
                {copied ? "✅" : "📋"}
              </button>
            )}
          </div>
        </div>

        {/* الإعدادات */}
        <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 space-y-4">
          
          {/* الطول */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-slate-400">الطول:</label>
              <span className="text-blue-400 font-bold">{length}</span>
            </div>
            <input
              type="range"
              min="8"
              max="64"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* الخيارات */}
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={useUpper}
                onChange={(e) => setUseUpper(e.target.checked)}
                className="w-5 h-5"
              />
              <span>أحرف كبيرة (A-Z)</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={useLower}
                onChange={(e) => setUseLower(e.target.checked)}
                className="w-5 h-5"
              />
              <span>أحرف صغيرة (a-z)</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={useNumbers}
                onChange={(e) => setUseNumbers(e.target.checked)}
                className="w-5 h-5"
              />
              <span>أرقام (0-9)</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={useSymbols}
                onChange={(e) => setUseSymbols(e.target.checked)}
                className="w-5 h-5"
              />
              <span>رموز (!@#$%...)</span>
            </label>
          </div>

        </div>

        {/* الزرار */}
        <button
          onClick={generate}
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-bold text-lg"
        >
          ✨ توليد كلمة سر
        </button>

      </div>
    </main>
  );
}
