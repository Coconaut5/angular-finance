export interface ServiceRegistry {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: TypeEnum;
  created_by?: string;
  created_at: string;
  modifications: Array<ServiceRegistryModified>;
  server_config: ServerConfig;
}

interface ServiceRegistryModified {
  modified_by: string;
  modified_at: string;
}

interface ServerConfig {
  host: string;
  port: number;
}

enum TypeEnum {
  Consul = 'CONSUL',
}
