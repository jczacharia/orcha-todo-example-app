import { createQueryModel } from '@orcha/common';

export const LoginQueryModel = createQueryModel<{ token: string }>()({ token: true });
export const SignUpQueryModel = LoginQueryModel;
