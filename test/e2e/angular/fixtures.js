;(function () {
  var fixtures = {
    'ui_router_app': {
      path: './ui_router_app/ui_router_app.js',
      deps: ['opbeat-angular', 'offline-js', 'angular', 'angular-ui-router', 'angular-resource'],
      options: {
        appName: 'ui_router_app',
        useNgApp: false,
        uiRouter: true,
        opbeatConfig: {
          debug: true,
          orgId: '7f9fa667d0a349dd8377bc740bcfc33e',
          appId: '0a8757798e',
          performance: {
            enable: true,
            enableStackFrames: true,
            captureInteractions: true
          }
        }
      }
    },
    'too_many_traces_app': {
      path: './too_many_traces_app/too_many_traces_app.js',
      deps: ['opbeat-angular', 'angular-ui-router'],
      options: {
        appName: 'too_many_traces_app',
        useNgApp: false,
        uiRouter: true,
        opbeatConfig: {
          debug: true,
          orgId: '7f9fa667d0a349dd8377bc740bcfc33e',
          appId: '0a8757798e',
          performance: {
            enable: true,
            enableStackFrames: true
          }
        }
      }
    },
    'minified_module_app': {
      path: './minified_module_app/minified_module_app.js',
      deps: ['../dist/dev/opbeat-angular.js', 'angular', 'angular-ui-router'],
      options: {
        appName: 'minified_module_app',
        useNgApp: false,
        uiRouter: true,
        beforeInit: function (app, deps) {
          app.init({
            debug: true,
            orgId: '7f9fa667d0a349dd8377bc740bcfc33e',
            appId: '0a8757798e',
            performance: {
              enable: true,
              enableStackFrames: true
            }
          })
        },
        opbeatConfig: {
          debug: true,
          orgId: '7f9fa667d0a349dd8377bc740bcfc33e',
          appId: '0a8757798e',
          performance: {
            enable: true,
            enableStackFrames: true
          }
        }
      }
    },
    'simple_app': {
      path: './simple_app/simple_app.js',
      deps: ['opbeat-angular', 'angular', 'angular-route'], // ,  , 'offline-js'
      options: {
        beforeInit: function (app, deps) {
          app.init()
        },
        appName: 'simple_app',
        useNgApp: undefined,
        uiRouter: false
      }
    },
    'semantic_ui': {
      path: './semantic_ui/semantic_ui.js',
      deps: ['opbeat-angular', 'semantic-ui-dropdown', 'angular', 'angular-route'],
      options: {
        beforeInit: function (app, deps) {
          app.init()
        },
        appName: 'semantic_ui',
        useNgApp: undefined,
        uiRouter: false
      }
    }
  }

  var fx = fixtures.ui_router_app
  window.e2eUtils.runFixture(fx.path, fx.deps, fx.options)
})()
