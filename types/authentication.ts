
export interface IDataReg {
  name: string,
  surname: string,
  email: string,
  password: string
}

export interface IDataAuth {
  email: string,
  password: string,
  token?: string
  isAuthorizedUser?: boolean
}