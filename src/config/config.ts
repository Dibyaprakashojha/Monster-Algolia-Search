import { EnvConfig } from './envConfig';

export class GlobalConfig {
  public static _instance: GlobalConfig = new GlobalConfig();
  public static config: EnvConfig | any = {};
  public static serviceURI: string = '';

  constructor() {
    if (GlobalConfig._instance) {
      throw new Error(
        'Error: Instantiation failed: Use SessionInfo.getInstance() instead of new.'
      );
    }
    GlobalConfig._instance = this;
  }

  public static getInstance(): GlobalConfig {
    return GlobalConfig._instance;
  }

  public static setConfig(config: EnvConfig) {
    GlobalConfig.config = config;
    GlobalConfig.serviceURI =
      GlobalConfig.config.serviceProtocol +
      GlobalConfig.config.serviceHost +
      (GlobalConfig.config.serviceHostPort != ''
        ? ':' + GlobalConfig.config.serviceHostPort
        : '') +
      GlobalConfig.config.serviceBaseURL;
  }

  public static getServiceBaseURI(): string {
    return GlobalConfig.serviceURI;
  }

  public static IndexName(): string {
    return GlobalConfig.config.indexName;
  }

  public static ApplicationId(): string {
    return GlobalConfig.config.applicationId;
  }

  public static ApiKey(): string {
    return GlobalConfig.config.apiKey;
  }
}
