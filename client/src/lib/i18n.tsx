import { createContext, useContext, useMemo, useCallback } from "react";
import { useLocation } from "wouter";
import { en } from "./translations/en";
import { ar } from "./translations/ar";

export type Lang = "en" | "ar";
export type TranslationKeys = typeof en;

const translations: Record<Lang, TranslationKeys> = { en, ar };

interface I18nContextType {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: TranslationKeys;
  switchLang: () => void;
  localePath: (path: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  dir: "ltr",
  t: en,
  switchLang: () => {},
  localePath: (p: string) => p,
});

export function useI18n() {
  return useContext(I18nContext);
}

export function getLangFromPath(pathname: string): Lang {
  return pathname.startsWith("/ar") ? "ar" : "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useLocation();
  const lang = getLangFromPath(location);
  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";
  const t = translations[lang];

  const switchLang = useCallback(() => {
    if (lang === "en") {
      const arPath = "/ar" + (location === "/" ? "" : location);
      setLocation(arPath);
    } else {
      const enPath = location.replace(/^\/ar/, "") || "/";
      setLocation(enPath);
    }
  }, [lang, location, setLocation]);

  const localePath = useCallback(
    (path: string) => {
      if (lang === "ar") {
        return "/ar" + (path === "/" ? "" : path);
      }
      return path;
    },
    [lang]
  );

  const value = useMemo(
    () => ({ lang, dir, t, switchLang, localePath }),
    [lang, dir, t, switchLang, localePath]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
