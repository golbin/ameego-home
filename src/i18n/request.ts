import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // 1. cookies()에서 로케일 정보를 읽어오거나
  // 2. Accept-Language 헤더에서 브라우저 설정을 확인하거나
  // 3. 기본값으로 'ko' 사용
  const cookieStore = await cookies();
  const headerStore = await headers();
  let locale =
    cookieStore.get("NEXT_LOCALE")?.value ||
    headerStore.get("Accept-Language")?.split(",")[0] ||
    "ko";

  locale = locale.startsWith("en")
    ? "en"
    : locale.startsWith("ja")
    ? "ja"
    : locale.startsWith("ko")
    ? "ko"
    : locale;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
