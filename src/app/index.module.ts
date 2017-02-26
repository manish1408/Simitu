/// <reference path="../../typings/index.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { LoginController } from './login/login.controller';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';

declare var malarkey: any;
declare var moment: moment.MomentStatic;

module simitu {
  'use strict';

  angular.module('simitu', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr'])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController)
    .controller('LoginController', LoginController)
    .directive('acmeNavbar', acmeNavbar);
}
