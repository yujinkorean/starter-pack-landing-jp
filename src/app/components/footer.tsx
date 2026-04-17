import React from "react";

export function Footer() {
  return (
    <footer className="w-full py-10 px-5 border-t border-gray-200 bg-white text-gray-400 md:px-6">
      <div className="max-w-4xl mx-auto text-[13px] leading-[1.85] space-y-6">

        <div>
          <p className="font-medium text-gray-500 mb-2">Refund Policy</p>
          <p>
            Since our products are digital content delivered via internet access, all sales are final and non-refundable once access is granted.
            <br />
            If you experience a technical issue with access or file delivery, please contact us and we will make reasonable efforts to assist you.
            <br /><br />
            デジタルコンテンツの特性上、決済完了後のアクセス権限付与後は、原則として返金・キャンセルはお受けできません。
            <br />
            ただし、アクセス不具合やファイル受領に関する技術的な問題が発生した場合は、可能な範囲で対応いたします。
          </p>
        </div>

        <div>
          <p className="font-medium text-gray-500 mb-2">Terms of Service</p>
          <p>
            All content provided by Yujin Korean is for personal, non-commercial use only.
            <br />
            All content is the intellectual property of Yujin Korean. Unauthorized reproduction, redistribution, resale, sharing, or public upload is strictly prohibited.
            <br />
            We reserve the right to update or modify our services, content, and policies at any time.
            <br /><br />
            Yujin Koreanが提供するすべてのコンテンツは、個人利用・非商用利用を前提としています。
            <br />
            本教材の著作権はYujin Koreanに帰属し、無断複製・再配布・転載・転売・共有を禁止します。
            <br />
            サービス内容およびポリシーは、必要に応じて変更される場合があります。
          </p>
        </div>

        <div>
          <p className="font-medium text-gray-500 mb-2">Privacy Policy</p>
          <p>
            We collect only the minimum necessary personal information, such as your email address and purchase-related information, for product delivery, customer support, and service operation.
            <br />
            Personal data is never sold or shared with third parties except where necessary to process payments or deliver the purchased service.
            <br />
            By using this service, you agree to this policy.
            <br /><br />
            お客様のメールアドレスや購入関連情報など、サービス提供に必要な最小限の個人情報のみを収集します。
            <br />
            個人情報は、決済処理または購入済みサービスの提供に必要な場合を除き、第三者に販売・共有されることはありません。
            <br />
            本サービスを利用された場合、本ポリシーに同意したものとみなします。
          </p>
        </div>

        <div className="text-[12px] text-center text-gray-500">
          <p>
            ※ すべてのコーチングおよびサポートは購入プランに含まれており、追加料金は一切発生しません。
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100 text-[12px] text-center">
          <p>© 2026 Yujin Korean</p>
          <p className="mt-1">Contact: yujinkoreanstories@gmail.com</p>
        </div>

      </div>
    </footer>
  );
}
