import SocialNav from "./SocialNav";
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand and Description */}
        <div>
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
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Digioffsider. All rights reserved.
      </div>
    </footer>
  );
}
