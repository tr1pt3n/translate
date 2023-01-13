import "./App.css";
import i18n, { changeLanguage } from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            vi: {
                translation: {
                    "Chào mừng đến với React": "Chào mừng đến với React",
                    "Tôi tên là ABC": "Tôi tên là ABC",
                    "Tôi đến từ Việt Nam": "Tôi đến từ Việt Nam",
                },
            },
            en: {
                translation: {
                    "Chào mừng đến với React": "Welcome to React",
                    "Tôi tên là ABC": "My name is ABC",
                    "Tôi đến từ Việt Nam": "I come from Vietnam",
                },
            },
        },
        lng: localStorage.getItem('lng') ||"en", // if you're using a language detector, do not define the lng option
        fallbackLng: "vi",

        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    });

function App() {
    const { t } = useTranslation();
    const handleChangeLng = (lng) => {
      changeLanguage(lng); 
      localStorage.setItem("lng", lng);
    }

    return (
        <div>
            <button onClick={() => handleChangeLng('vi')}>Vietnam</button>
            <button onClick={() => handleChangeLng('en')}>English</button>
            <h2>{t("Chào mừng đến với React")}</h2>
            <p>{t("Tôi tên là ABC")}</p>
            <p>{t("Tôi đến từ Việt Nam")}</p>
        </div>
    );
}

export default App;
