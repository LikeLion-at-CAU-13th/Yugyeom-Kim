"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-100 text-center">
      {/* 빛 퍼짐 효과 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,100,0.25)_0%,transparent_70%)] animate-pulse" />

      {/* 오렌지 오라(빛 테두리) */}
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-orange-300/30 to-yellow-200/20 blur-3xl rounded-full animate-[pulse_4s_ease-in-out_infinite]" />

      {/* 메인 카드 */}
      <div className="relative bg-white/70 backdrop-blur-xl border border-amber-200 rounded-3xl shadow-[0_8px_30px_rgba(255,140,0,0.15)] px-12 py-14 max-w-lg mx-4">
        {/* 404 숫자 */}
        <h1 className="text-[6rem] sm:text-[7rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 drop-shadow-[0_4px_8px_rgba(255,150,50,0.3)]">
          404
        </h1>

        {/* 설명 텍스트 */}
        <p className="text-2xl font-bold text-gray-800 mt-4 mb-3 tracking-tight">
          페이지를 찾을 수 없습니다
        </p>
        <p className="text-gray-500 mb-8 leading-relaxed">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>

        {/* 돌아가기 버튼 */}
        <Link
          href="/projects"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 text-white font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(255,180,70,0.5)] hover:scale-105 transition-all duration-300"
        >
          프로젝트 목록으로 돌아가기
        </Link>

        {/* 반짝이는 점 애니메이션 */}
        <div className="absolute top-10 right-16 w-4 h-4 bg-yellow-300 rounded-full blur-sm animate-ping" />
        <div className="absolute bottom-10 left-12 w-3 h-3 bg-orange-400 rounded-full blur-sm animate-ping delay-500" />
      </div>
    </div>
  );
}
