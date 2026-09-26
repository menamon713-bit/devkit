"use client";

import { useState } from "react";

export default function UuidGenerator() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(1);
  const [copied, setCopied] = useState<number | null>(null);

  const generateUuid = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const generate = () => {
    const newUuids = Array.from({ length: count }, () => generateUuid());
    setUuids(newUuids);
  };

  const copyOne = (uuid: string, index: number) => {
    navigator.clipboard.writeText(uuid);
    setCopied(index);
    setTimeout(() => setCopied(null), 1500);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(uuids.join("\n"));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4">
      
      <div className="max-w-4xl mx-auto">
        
        <a href="/" className="text-slate-400 hover:text-white mb-4 inline-block">
          ← رجوع
        </a>

        <h1 className="text-3xl font-bold mb-6">🆔 UUID Generator</h1>

        <div className="mb-4">
          <label className="block text-slate-400 mb-2">عدد الـ UUIDs:</label>
          <input
            type="number"
            min="1"
            max="50"
            value={count}
            onChange={(e) => setCount(Math.min(50, Math.max(1, Number(e.target.value))))}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white"
          />
        </div>

        <div className="flex gap-3 mb-4 flex-wrap">
          <button
            onClick={generate}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold"
          >
            ✨ توليد
          </button>
          <button
            onClick={() => setUuids([])}
            className="bg-slate-700 hover:bg-slate-600 px-6 py-2 rounded-lg font-semibold"
          >
            🗑️ مسح
          </button>
          {uuids.length > 1 && (
            <button
              onClick={copyAll}
              className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-semibold"
            >
              📋 نسخ الكل
            </button>
          )}
        </div>

        {uuids.length > 0 && (
          <div className="space-y-2">
            {uuids.map((uuid, i) => (
              <div
                key={i}
                className="bg-slate-900 border border-slate-700 rounded-lg p-3 flex justify-between items-center gap-2"
              >
                <code className="text-green-400 text-sm font-mono break-all flex-1">
                  {uuid}
                </code>
                <button
                  onClick={() => copyOne(uuid, i)}
                  className="text-blue-400 hover:text-blue-300 text-sm whitespace-nowrap"
                >
                  {copied === i ? "✅ تم" : "📋 نسخ"}
                </button>
              </div>
            ))}
          </div>
        )}

      </div>

    </main>
  );
}
