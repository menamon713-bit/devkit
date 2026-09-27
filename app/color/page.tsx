"use client";

import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#3b82f6");
  const [copied, setCopied] = useState("");

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  };

  const rgb = hexToRgb(color);
  const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const hsl = (() => {
    const r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  })();

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 1500);
  };

  const presetColors = [
    "#ef4444", "#f97316", "#eab308", "#22c55e",
    "#3b82f6", "#8b5cf6", "#ec4899", "#000000",
    "#ffffff", "#64748b", "#14b8a6", "#f43f5e",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4">
      <div className="max-w-2xl mx-auto">
        
        <a href="/" className="text-slate-400 hover:text-white mb-4 inline-block">
          ← رجوع
        </a>

        <h1 className="text-3xl font-bold mb-6">🎨 Color Picker</h1>

        {/* معاينة اللون */}
        <div
          className="w-full h-40 rounded-lg mb-4 border-2 border-slate-700"
          style={{ backgroundColor: color }}
        />

        {/* اختيار اللون */}
        <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
          <label className="block text-slate-400 mb-2">اختار لون:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full h-12 bg-slate-800 rounded cursor-pointer"
          />
        </div>

        {/* الأكواد */}
        <div className="space-y-2 mb-4">
          {[
            { label: "HEX", value: color.toUpperCase() },
            { label: "RGB", value: rgbString },
            { label: "HSL", value: hsl },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between bg-slate-900 border border-slate-700 rounded-lg p-3"
            >
              <span className="text-slate-400 text-sm w-12">{item.label}</span>
              <code className="flex-1 text-green-400 font-mono text-sm break-all text-center">
                {item.value}
              </code>
              <button
                onClick={() => copy(item.value, item.label)}
                className="text-blue-400 hover:text-blue-300 text-sm ml-2"
              >
                {copied === item.label ? "✅" : "📋"}
              </button>
            </div>
          ))}
        </div>

        {/* ألوان جاهزة */}
        <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
          <label className="block text-slate-400 mb-3">ألوان جاهزة:</label>
          <div className="grid grid-cols-6 gap-2">
            {presetColors.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className="w-full aspect-square rounded-lg border-2 border-slate-700 hover:border-white transition"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
