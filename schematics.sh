npx ng generate @nrwl/nest:library --name=services --directory=services/core --no-interactive &&
npx ng generate @nrwl/nest:library --name=domain --directory=services/core --no-interactive &&
npx ng generate @nrwl/nest:library --name=orcha --directory=services --no-interactive &&

npx ng generate @nrwl/angular:library --name=data-access --directory=client/shared --no-interactive &&
npx ng generate @nrwl/angular:library --name=shell --directory=client --no-interactive &&

npx ng generate @nrwl/workspace:library --name=domain --directory=shared --no-interactive &&
npx ng generate @nrwl/workspace:library --name=util --directory=shared --no-interactive