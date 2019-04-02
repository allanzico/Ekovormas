export default {
    setPageTitle(lang, LT_TITLE, EN_TITLE) {
        if (lang === 'lt') {
            document.title = LT_TITLE;
        }

        if (lang === 'en') {
            document.title = EN_TITLE;
        }
    }
}
