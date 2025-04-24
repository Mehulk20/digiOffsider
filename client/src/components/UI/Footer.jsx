import SocialNav from "./SocialNav";
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-6 pb-2 font-fontFooter ">
      <div className="max-w-6xl  mx-3 md:mx-auto md:px-3 px-2  md:border-none  grid grid-cols-2 md:grid-cols-3 gap-8 border-slate-400 border-l-[1px]">
        {/* Brand and Description */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-2xl font-bold mb-2">Digioffsider</h2>
          <p className="text-sm text-gray-400">
            A smart space to discover, share, and discuss insightful information
            across domains. Powered by community, driven by curiosity.
          </p>
        </div>

        {/* Navigation */}
        <FooterNav />
        {/* Social Media */}
        <SocialNav />
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-sm text-gray-50 border-t-[1px] border-slate-400">
        <p className="mt-1">
          &copy; {new Date().getFullYear()} Digioffsider. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
