import React from "react";

export function Footer() {
  return (
  <footer className="w-full py-10 px-6 border-t border-gray-200 bg-white text-gray-400">
  <div className="max-w-4xl mx-auto text-[12px] leading-relaxed space-y-6">

    <div>
      <p className="font-medium text-gray-500 mb-1">Refund Policy</p>
      <p>
        Since our products are digital content delivered via internet access, all sales are final and non-refundable once access is granted.
        <br />
        デジタルコンテンツの特性上、決済完了後のアクセス権限付与後は、原則として返金・キャンセルはお受けできません。
      </p>
    </div>

    <div>
      <p className="font-medium text-gray-500 mb-1">Terms of Service</p>
      <p>
        All content is the intellectual property of Yujin Korean. Unauthorized reproduction or distribution is strictly prohibited.
        <br />
        本教材の著作権はYujin Koreanに帰属します。無断複製・配布は禁止されています。
      </p>
    </div>

    <div className="pt-4 border-t border-gray-100 text-[11px] text-center">
      <p>© 2026 Yujin Korean</p>
      <p className="mt-1">Contact: yujinkoreanstories@gmail.com</p>
    </div>

  </div>
</footer>
  );
}