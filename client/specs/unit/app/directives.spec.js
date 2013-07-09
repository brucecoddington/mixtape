describe('App', function() {
 
    describe('Directives', function() {

        describe('ClickableTitle', function () {

            var appDirectives, scope, elm;
            
            beforeEach (function () {
                appDirectives = angular.module('app.directives', []);
                angular.mock.module('app');

                inject(function($rootScope, $compile){
                    scope = $rootScope.$new();

                    elm = angular.element('<clickable-title>Click this title.</clickable-title>');

                    $compile(elm)(scope);
                    scope.$digest();
                });
            });

            it('should exist', function () {
                expect(appDirectives.directive('clickable-title')).to.be.ok;
            });

            it('should add a h1 to the element', function() {
                var header = elm.find('h1');

                expect(header.text()).to.equal('Click this title.');
            });

        });

    });
});
