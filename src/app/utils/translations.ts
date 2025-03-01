export class Translations {

    static translateBooleans(value: boolean | undefined): string  {
        return value ? 'Yes' : 'No';
    }

    static translateAndFormatPrice(price?: number): string {
        return price !== undefined ? price.toLocaleString('de-DE') : '';
    }

    static translateAreaCode(state?: string): string {
        return state ? Translations.AreaCodes[state] ?? 'Area not found' : 'State not provided';
    }

    static AreaCodes: Record<string, string> = {
        'Chicago, IL': '312/773/708/847/630',
        'Gary, IN': '219',
        'Juneau, AK': '907',
        'Oakland, CA': '510/341',
        'Portland, OR': '503/971',
        'Santa Monica, CA': '310',
    }
}