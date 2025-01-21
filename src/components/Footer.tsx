"use client";

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="relative text-center text-sm text-slate-600">
          <p>Copyright &copy; {new Date().getFullYear()} playmore, Inc.</p>
          <p className="mt-4">
            (주) 플레이모어 | 대표 김진중, 강택영 | 사업자등록번호 162-88-03074
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="-mb-6 mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm/6"
        >
          <a href="#" className="text-gray-600 hover:text-gray-900">
            이용약관
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            개인정보처리방침
          </a>
        </nav>
      </div>
    </footer>
  );
}
