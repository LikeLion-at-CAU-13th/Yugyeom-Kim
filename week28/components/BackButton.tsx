"use client";
import { useRouter } from "next/navigation";
import { FiArrowLeftCircle } from "react-icons/fi";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center text-gray-500 hover:text-orange-600 mb-8 transition-all gap-x-2 text-lg font-medium hover:scale-105"
    >
      <FiArrowLeftCircle className="text-2xl" />
      뒤로가기
    </button>
  );
}
