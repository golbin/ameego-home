"use client";

import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "아미고가 진행하는 파드캐스트로 새로운 표현을 배워요",
    imageUrl: "/screenshot_2_1.png",
    name: "Ameego podcast",
  },
  {
    id: 2,
    title: "대화를 나눴던 내용과 중요한 표현들을 똑똑하게 기록하고 정리줘요",
    imageUrl: "/screenshot_2_2.png",
    name: "Ameego note",
  },
  {
    id: 3,
    title: "매일 업데이트되는 최신 토픽으로 이야기 나눠요",
    imageUrl: "/screenshot_2_3.png",
    name: "Ameego today",
  },
  {
    id: 4,
    title: "다양한 아미고와 자유롭게 대화하세요",
    imageUrl: "/screenshot_2_4.png",
    name: "Ameego call",
  },
];

export default function Gallary() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Talk with Ameego
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          나와 잘 맞는 아미고와 다양한 주제로, 다양한 방식으로 대화하며 외국어를
          자연스럽게 습득하고 즐겁게 익힐 수 있어요
        </p>
      </div>
      <div className="mx-auto  w-[22.875rem] sm:w-full lg:w-full max-w-full mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {blogPosts.map((post) => (
          <div key={post.id}>
            <article className="flex flex-col overflow-hidden rounded-2xl border-4 border-[#2e3744]">
              <div className="relative aspect-[9/19.5]">
                <Image
                  alt={post.name}
                  src={post.imageUrl}
                  fill
                  className="object-cover"
                />
              </div>
            </article>
            <div className="bg-white p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
