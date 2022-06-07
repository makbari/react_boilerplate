export interface RouteDefinition {
  path: string;
  componentName: string;
  folder: string;
  children?: RouteDefinition[];
  isProtected: boolean;
}

export interface ApplicationConfig {
  api: {
    baseUrl: string;
    headers: any;
  };
}
