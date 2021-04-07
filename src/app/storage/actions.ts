import { Injectable } from '@angular/core';

interface Metadata {
  login?: string;
  password?: string;
}

type Payload =
  | {
      access_token?: string;
      scope?: string;
      token_type?: string;
    }
  | any;

export type UserAction = {
  type: string;
  metadata: Metadata;
  payload: Payload;
};

@Injectable()
export class UserActions {
  static readonly LOGIN = 'login';
  static readonly LOGOUT = 'logout';

  login = (metadata: Metadata): UserAction => ({
    type: UserActions.LOGIN,
    metadata: metadata,
    payload: null,
  });
}
