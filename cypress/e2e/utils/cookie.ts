export class Cookie {
    private static setCookies() {
        localStorage.setItem('dont_show_again', '1')
        cy.setCookie('cookiePolicy', 'seen.')
        cy.setCookie('DISABLE_RECAPTCHA', 'TRUE')
        cy.setCookie('car_search_survey_cookie', '7')
        cy.setCookie('_sp_v1_consent', '1!1:1:1:-1')
        cy.setCookie('usabilla_campaign_open', '1')
        cy.setCookie('acceptATCookies', 'true')
        cy.setCookie('postcode', 'M54FN')
    }

    public static setMobileCookies() {
        this.setCookies()
        cy.setCookie('bucket', 'premiummobile', { domain: 'autotrader.co.uk' })
        cy.setCookie('bucket', 'premiummobile', { domain: 'localhost' })
    }

    public static setDesktopCookies() {
        this.setCookies()
        cy.setCookie('bucket', 'desktop', { domain: 'autotrader.co.uk' })
        cy.setCookie('bucket', 'desktop', { domain: 'localhost' })
    }
}
