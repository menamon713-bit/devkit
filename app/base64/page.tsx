"use client";

import { useState } from "react";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const encode = () => {
    try {
      const result = btoa(unescape(encodeURIComponent(input)));
      setOutput(result);
      setError("");
    } catch (e) {
      setError("❌ حصل خطأ في التشفير");
      setOutput("");
    }
  };

  const decode = () => {
    try {
      const result = decodeURIComponent(escape(atob(input)));
      setOutput(result);
      setError("");
    } catch (e) {
      setError("❌ النص ده مش Base64 صالح");
      setOutput("");
    }
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4">
      
      <div className="max-w-4xl mx-auto">
        
        <a href="/" className="text-slate-400 hover:text-white mb-4 inline-block">
          ← رجوع
        </a>

        <h1 className="text-3xl font-bold mb-6">🔐 Base64</h1>

        <div className="mb-4">
          <label className="block text-slate-400 mb-2">النص:</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-40 bg-slate-900 border border-slate-700 rounded-lg p-4 text-white font-mono text-sm"
            placeholder="اكتب نص هنا..."
          />
        </div>

        <div className="flex gap-3 mb-4 flex-wrap">
          <button
            onClick={encode}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold"
          >
            🔒 تشفير
          </button>
          <button
            onClick={decode}
            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-semibold"
          >
            🔓 فك
          </button>
          <button
            onClick={() => { setInput(""); setOutput(""); setError(""); }}
            className="bg-slate-700 hover:bg-slate-600 px-6 py-2 rounded-lg font-semibold"
          >
            🗑️ مسح
          </button>
        </div>

        {error && (
          <div className="bg-red-900/50 border border-red-700 text-red-200 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {output && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-slate-400">النتيجة:</label>
              <button
                onClick={copyOutput}
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                📋 نسخ
              </button>
            </div>
            <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-green-400 font-mono text-sm overflow-auto max-h-96 whitespace-pre-wrap break-all">
              {output}
            </pre>
          </div>
        )}

      </div>

    </main>
  );
}
