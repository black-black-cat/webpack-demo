import ma from './moduleA'
import $ from './vendor-jquery'
import bootstrap from 'bootstrap'
import 'ma.css'
export function init(){
    $('<div><button class="btn btn-primary" > fuck yeah </button></div>').appendTo($('body'));
}
init();