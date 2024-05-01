import PropertiesReader from 'properties-reader';

export class PropertiesReaderWrapper {
    private properties: any;

    constructor(filePath: string) {
        this.properties = PropertiesReader(filePath);
    }

    getProperty(key: string): string | undefined {
        return this.properties.get(key);
    }
}