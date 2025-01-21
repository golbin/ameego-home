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
    title: "대화를 나눴던 내용과 중요한 표현들은 똑똑하게 기록하고 정리줘요",
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
    imageUrl: "/screenshot_1_2.png",
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
          <article
            key={post.id}
            className="aspect-[9/19.5] relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
          >
            <Image
              alt={post.name}
              src={post.imageUrl}
              fill
              className="absolute inset-0 -z-10 size-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 via-25% to-transparent" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <h3 className="mt-3 text-lg/6 font-semibold text-white">
              <span className="absolute inset-0" />
              {post.title}
            </h3>
          </article>
        ))}
      </div>
    </div>
  );
}
