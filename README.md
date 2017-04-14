# Vue-Remodal

A custom directive for using [Remodal](http://vodkabears.github.io/remodal/) in Vue.js apps.

![banner](https://raw.githubusercontent.com/panteng/vue-remodal/master/banner.jpg)

[Demo](http://panteng.me/demos/vue-remodal)

## Usage

1. Download this repo and copy file `directives/remodal.js` into your project.

2. Register Vue-Remodal as a directive in your `main.js`:

        // main.js
        Vue.directive('remodal', require('./directives/remodal'));
        
3. Vue-Remodal need a dom element as the modal dialog. For example:

        // template.html
        <div class="remodal" v-remodal="demoModal">
            <button data-remodal-action="close" class="remodal-close"></button>
            <h1>Vue-Remodal</h1>
            <p>
                Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.
            </p>
            <br>
            <button data-remodal-action="cancel" class="remodal-cancel">Cancel</button>
            <button data-remodal-action="confirm" class="remodal-confirm">OK</button>
        </div>
        
    You may notice we add a `v-remodal` directive to the `div` and assign a string value - `demoModal` to it.
    
4. Now in the scope, you can get the instanse of this modal by `this.$modals.demoModal`. You can call any methods of Remodal on this instanse. For example:

        var vm = this;
    
        // open modal
        vm.$modals.demoModal.open();
        
        // close modal
        vm.$modals.demoModal.close();
        
   I know this is contrary to Vue's data-driven principle, but for now it is the most convenient way of using Remodal in Vue.js apps that I've found.
    

## License

MIT