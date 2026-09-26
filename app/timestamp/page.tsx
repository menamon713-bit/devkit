"use client";

import { useState, useEffect } from "react";

export default function TimestampConverter() {
  const [timestamp, setTimestamp] = useState("");
  const [dateStr, setDateStr] = useState("");
  const [now, setNow] = useState(Math.floor(Date.now() / 1000));
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Math.floor(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timestampToDate = () => {
    try {
      const ts = Number(timestamp);
      if (isNaN(ts)) throw new Error();
      const date = new Date(ts * 1000);
      setResult(date.toLocaleString("ar-EG", { dateStyle: "full", timeStyle: "full" }));
      setError("");
    } catch (e) {
      setError("❌ Timestamp غير صالح");
      setResult("");
    }
  };

  const dateToTimestamp = () => {
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) throw new Error();
      setResult(String(Math.floor(date.getTime() / 1000)));
      setError("");
    } catch (e) {
      setError("❌ التاريخ غير صالح");
      setResult("");
    }
  };

  const useNow = () => {
    setTimestamp(String(now));
    setResult(new Date().toLocaleString("ar-EG", { dateStyle: "full", timeStyle: "full" }));
    setError("");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4">
      
      <div className="max-w-4xl mx-auto">
        
        <a href="/" className="text-slate-400 hover:text-white mb-4 inline-block">
          ← رجوع
        </a>

        <h1 className="text-3xl font-bold mb-6">⏰ Timestamp Converter</h1>

        <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6">
          <div className="text-slate-400 text-sm mb-1">الوقت الحالي (Unix):</div>
          <div className="text-2xl font-mono text-green-400">{now}</div>
        </div>

        <div className="mb-6">
          <label className="block text-slate-400 mb-2">Timestamp → تاريخ:</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-lg p-3 text-white font-mono"
              placeholder="1700000000"
            />
            <button
              onClick={timestampToDate}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold whitespace-nowrap"
            >
              تحويل
            </button>
            <button
              onClick={useNow}
              className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg font-semibold whitespace-nowrap"
            >
              الآن
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-slate-400 mb-2">تاريخ → Timestamp:</label>
          <div className="flex gap-2">
            <input
              type="datetime-local"
              value={dateStr}
              onChange={(e) => setDateStr(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-lg p-3 text-white"
            />
            <button
              onClick={dateToTimestamp}
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-semibold whitespace-nowrap"
            >
              تحويل
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-900/50 border border-red-700 text-red-200 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {result && (
          <div>
            <label className="block text-slate-400 mb-2">النتيجة:</label>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-green-400 font-mono break-all">
              {result}
            </div>
          </div>
        )}

      </div>

    </main>
  );
}
