npm install -g @angular/cli

npx create-nx-workspace mfe --preset=apps

cd mfe

npm install --save-dev @nx/angular

npx nx g @nx/angular:app mfe --skipTests --directory 'apps/mfe' --style scss --bundler esbuild --e2eTestRunner none --projectNameAndRootFormat as-provided

npm install @angular-architects/native-federation

npx nx g @angular-architects/native-federation:ng-add

npx nx serve mfe -o

npx nx build mfe
