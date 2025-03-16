export default function Footer() {
    return (
      <footer className="bg-black text-white py-10 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">যোগাযোগ</h2>
            <p className="text-gray-300">ঠিকানা</p>
            <p className="text-gray-400 text-sm">
            ১৪৯/এ,বায়তুশ শরফ কমপ্লেক্স(২য় তলা), এয়ারপোর্ট রোড,ফার্মগেট, ঢাকা-১২১৫
            </p>
            <p className="mt-2 text-gray-300">মোবাইল</p>
            <p className="text-gray-400 text-sm">
              ০১৬ ৫৫৫৫-৩৬৩৬ | ০১৬ ৫৫৫৫-৩৬৩৭
            </p>
            <p className="mt-2 text-gray-300">ইমেইল</p>
            <p className="text-gray-400 text-sm">administration@caddcore.net</p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">কুইক লিংক</h2>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">ফ্রি সেমিনারের সময়সূচি</a></li>
              <li><a href="#" className="hover:text-white">মেক্সন</a></li>
              <li><a href="#" className="hover:text-white">সাকসেস স্টোরি</a></li>
              <li><a href="#" className="hover:text-white">ইঞ্জিনিয়ারিং কমিউনিটি গ্রুপ</a></li>
              <li><a href="#" className="hover:text-white">Verification Center</a></li>
              <li><a href="#" className="hover:text-white">ক্যারিয়ার</a></li>
            </ul>
          </div>
  
          {/* Others */}
          <div>
            <h2 className="text-lg font-bold mb-4">অন্যান্য</h2>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">ব্লগার বিডি</a></li>
              <li><a href="#" className="hover:text-white">প্রাইভেসি পলিসি</a></li>
              <li><a href="#" className="hover:text-white">রিফান্ড পলিসি</a></li>
            </ul>
          </div>
  
          {/* Support Center */}
          <div>
            <h2 className="text-lg font-bold mb-4">সাপোর্ট সেন্টার</h2>
            <p className="text-red-400 font-bold text-xl">(+৮৮) ০১৬১৩-২০২০৬০</p>
            <p className="text-gray-400 text-sm mt-2">সকাল ৯ টা - সন্ধ্যা ৭ টা</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white text-xl">📘</a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">🔗</a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">💬</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  