import { Link } from 'react-router-dom';
import Logo from '../components/ui/Logo';

const SafetyNoticePage = () => {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white flex flex-col">
      <div className="px-6 pt-5">
        <Link to="/">
          <Logo height={28} className="brightness-0 invert" />
        </Link>
      </div>

      <main className="flex-1 flex items-center justify-center px-4">
        <section className="w-full max-w-[640px] rounded-2xl border border-[#2C2F36] bg-[#14161A] p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">Authentication Disabled For Hosted Demo</h1>
          <p className="text-[#B9C0CC] leading-7 mb-6">
            This deployed project is a UI demonstration only. Account creation, sign-in,
            password reset, and identity verification flows were intentionally removed from
            the hosted build for safety and platform compliance.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-[#0052FF] px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Back to Home
            </Link>
            <Link
              to="/learn"
              className="inline-flex items-center justify-center rounded-full border border-[#39404D] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1E2025] transition-colors"
            >
              Open Learn Page
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SafetyNoticePage;
