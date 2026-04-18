import { AlertTriangle } from 'lucide-react';

export default function WarningBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-yellow-900 to-orange-900 border-b border-yellow-700 px-4 py-3">
      <div className="max-w-[1600px] mx-auto flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 mt-0.5 text-yellow-400 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-white font-semibold">Educational Project Disclaimer</p>
          <p className="text-yellow-50 text-sm mt-1">
            This is a student project and is <strong>not affiliated with or endorsed by Coinbase</strong>. 
            This is a demonstration for educational purposes only. Do not enter real personal information or use real passwords.
          </p>
        </div>
      </div>
    </div>
  );
}
