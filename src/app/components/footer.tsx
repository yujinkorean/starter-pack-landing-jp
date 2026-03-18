import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 border-t border-gray-200 bg-white text-gray-500">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-[11px] leading-relaxed">
        {/* 환불 정책 */}
        <div>
          <h3 className="font-bold text-gray-900 mb-2">Refund Policy</h3>
          <p>
            Since our products are digital content delivered via internet access, all sales are final and non-refundable once access is granted.
            <br />
            デジタルコンテンツの特性上、決済完了後のアクセス権限付与後は、原則として返金・キャンセルはお受けできません。
          </p>
        </div>
        
        {/* 이용 약관 및 저작권 */}
        <div>
          <h3 className="font-bold text-gray-900 mb-2">Terms of Service</h3>
          <p>
            All content is the intellectual property of Yujin Korean. Unauthorized reproduction or distribution is strictly prohibited. For personal use only.
            <br />
            本教材の著作権はYujin Korean에 귀속됩니다. 무단 복제, 배포, 상업적 이용은 법적으로 금지됩니다.
          </p>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-100 text-center text-[10px]">
        <p>© 2026 Yujin Korean. All rights reserved.</p>
        <p className="mt-1 font-medium text-gray-400">Contact: [사장님 이메일 주소]</p>
      </div>
    </footer>
  );
};

export default Footer;