import { FiMail, FiPhone, FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

export default function VisitorFooter() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-poppins-extrabold text-2xl tracking-tight text-gray-900">
                Sedap
                <span className="text-hijau">.</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 max-w-sm">
              Restoran modern dengan pengalaman pesan premium: cepat, fresh, dan rapi—seperti startup SaaS.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-extrabold text-gray-900">Kontak</h4>
              <div className="mt-3 space-y-3">
                <a className="flex items-center gap-2 text-sm text-gray-600 hover:text-hijau transition-colors" href="#">
                  <FiMail className="h-4 w-4" />
                  hello@sedap.id
                </a>
                <a className="flex items-center gap-2 text-sm text-gray-600 hover:text-hijau transition-colors" href="#">
                  <FiPhone className="h-4 w-4" />
                  +62 812-3456-7890
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-extrabold text-gray-900">Social</h4>
              <div className="mt-3 flex items-center gap-3">
                <a className="rounded-2xl p-2 border border-gray-200 bg-white/70 hover:border-hijau/60 hover:text-hijau transition-all" href="#">
                  <FiInstagram className="h-4 w-4" />
                </a>
                <a className="rounded-2xl p-2 border border-gray-200 bg-white/70 hover:border-hijau/60 hover:text-hijau transition-all" href="#">
                  <FiTwitter className="h-4 w-4" />
                </a>
                <a className="rounded-2xl p-2 border border-gray-200 bg-white/70 hover:border-hijau/60 hover:text-hijau transition-all" href="#">
                  <FiFacebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:justify-self-end">
            <p className="text-xs font-semibold text-gray-500">© {new Date().getFullYear()} Sedap. All rights reserved.</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-hijau" />
              <span className="text-sm text-gray-700">Modern food delivery</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

