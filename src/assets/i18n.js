import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: {
                    "home": "Home",
                    "media": "Media",
                    "daily": "DAILY",
                    "showall": "SHOW ALL",
                    "university": "HIGHER EDUCATION",
                    "vacational": "TECHNICAL SCHOOL",
                    "news": "NEWS",
                    "korpe": "KORPE",
                    "kesgitle": "KESGITLE",
                    "laws": "LAWS",
                    "documents": "DOCUMENTS",
                    "multimedia": "MULTIMEDIA",
                    "official": "OFFICIAL NEWS",
                    "address": "Ashgabat N.Gullayew",
                    "contact": "CONTACT US",
                    "right": "ALL RIGHTS RESERVED",
                    "related": "RELATED ARTICLES",
                    "search": "SEARCH",
                    "hukuk": "REGULATION",
                    "lyceum": "LYCEUM",
                    "school": "SCHOOLS",
                    "work": "WORKS",
                }
            },
            tm: {
                translation: {
                    "home": "BAŞ SAHYPA",
                    "media": "MEDIA",
                    "daily": "GÜNDELIK",
                    "showall": "HEMMESI",
                    "university": "ÝOKARY OKUW",
                    "vacational": "ORTA HÜNÄR",
                    "news": "TÄZELIKLER",
                    "korpe": "KÖRPE",
                    "kesgitle": "KESGITLE",
                    "laws": "KANUNLAR",
                    "documents": "RESMINAMALAR",
                    "multimedia": "MULTIMEDIA",
                    "official": "RESMI HABARLAR",
                    "address": "Aşgabat N.Gullaýew",
                    "contact": "HABARLAŞMAK ÜÇIN",
                    "right": "ÄHLI HUKUKLAR GORALAN",
                    "related": "BAGLANYŞYKLY MAKALALAR",
                    "search": "GÖZLEG",
                    "hukuk": "HUKUKNAMALAR",
                    "lyceum": "BAŞLANGYÇ HÜNÄR",
                    "school": "OKUWLAR",
                    "work": "IŞ",
                }
            },
            ru: {
                translation: {
                    "home": "ГЛАВНАЯ",
                    "media": "МЕДИА",
                    "daily": "НОВОСТИ ДНЯ",
                    "showall": "ПОКАЗАТЬ ВСЕ",
                    "university": "ВЫСШЕЕ ОБРАЗОВАНИЕ",
                    "vacational": "ТЕХНИКУМ",
                    "news": "НОВОСТИ",
                    "korpe": "ДЕТСКИЕ САДЫ",
                    "kesgitle": "КЭСГИТЛЕ",
                    "laws": "ЗАКОНЫ",
                    "documents": "ДОКУМЕНТЫ",
                    "multimedia": "МУЛЬТИМЕДИА",
                    "official": "ОФИЦИАЛЬНЫЕ НОВОСТИ",
                    "address": "Ашхабад Н.Гуллаев ",
                    "contact": "ДЛЯ СВЯЗИ",
                    "right": "ВСЕ ПРАВА ЗАШИЩЕНЫ",
                    "related": "СТАТЬИ ПО ТЕМЕ",
                    "search": "ПОИСК",
                    "hukuk": "ПРАВОВЫЕ ДОКУМЕНТЫ",
                    "lyceum": "ЛИЦЕЙ",
                    "school": "ШКОЛЫ",
                    "work": "РАБОТА",
                }
            }

        },
        lng: "tm", // if you're using a language detector, do not define the lng option
        fallbackLng: "tm",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });