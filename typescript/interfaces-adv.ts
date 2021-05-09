export enum MethodNames {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
}

export type MethodHttp =
  | MethodNames.POST
  | MethodNames.GET
  | MethodNames.PUT
  | MethodNames.PATCH;

export interface Body {
  id: string;
  name: string;
}

export interface Api {
  url: string;
  method: MethodHttp;
  body: Body;
}

const req: Api = {
  url: 'http://tuweb.com/api/usuarios',
  method: MethodNames.POST,
  body: {
    id: 'yehe662ndn73$5n',
    name: 'userName',
  },
};

export class ClasePrincipal implements Body {
  id: string;
  name: string;

  constructor(properties: Body) {
    Object.assign(this, properties);
  }

  get getName() {
    return this.name;
  }

  get getId() {
    return this.id;
  }

  static fromObject(obj: Body) {
    return new ClasePrincipal({
      id: obj.id,
      name: obj.name,
    });
  }
}

const body: Body = {
  id: 'ide64$%&nd',
  name: 'Miguel chinchay',
};
const clasePrincipal = ClasePrincipal.fromObject(body);
console.log(clasePrincipal);

export type ApisType = PreventorApis | CoroApis;

export enum PreventorApis {
  ACCOUNT = 'account',
  CRM = 'crm',
  DASHBOARD = 'dashboard',
  KYC = 'kyc',
  LOG = 'log',
  LOGIN = 'login',
  ONBOARDING = 'onboarding',
  DASHBOARD_ONBOARDING = 'dashboard/onboarding',
  SETTING = 'setting',
  SECURITY = 'security',
  USERPROFILE = 'userprofile',
  WATCHLIST = 'watch-list',
  IDETECTOR = 'idetector',
  CUSTOMERS = 'customers',
  MONITORING = 'monitoring',
}

export enum CoroApis {
  CORO = 'coro',
}

const api: ApisType = CoroApis.CORO;
