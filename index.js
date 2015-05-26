var Ractive = require('ractive');
var styles = require('./bootstrap-toggle.min.css');

/**
 * Ractive component wrapping toggle widget:
 *  http://www.bootstraptoggle.com/
 * Sample usage:
 *
 *    <Toggle value="{{toggled}}" size="mini"
 *      custom_style="width:58px; height: 22px;"
 *      texton="active" styleon='btn-danger'/>
 *    {{#toggled}}YEAH, I'M TOGGLED{{/}}
 *
 */
var Toggle = Ractive.extend({
  template: require('fs').readFileSync('./template.html', 'utf8'),
  events: {
    tap: require( 'ractive-events-tap' )
  },
  computed: {
    cursize: '${sizes}[ ${size} || "normal" ].class',
    curstyle: '${custom_style} || ${sizes}[ ${size} || "normal" ].style',
  },
  data: function () {
    return {
      texton: 'On',
      textoff: 'Off',
      size: 'normal',
      sizes: {
        'normal': {
          style: 'width: 58px; height: 34px;',
          class: ''
        },
        'large': {
          style: 'width: 78px; height: 46px;',
          class: 'btn-lg'
        },
        'small': {
          style: 'width: 49px; height: 30px;',
          class: 'btn-sm'
        },
        'mini': {
          style: 'width: 34px; height: 22px;',
          class: 'btn-xs'
        },
      },
      styleon: 'btn-primary',
      styleoff: 'btn-default',
      handle: 'btn-default',
    };
  }
});

module.exports = Ractive.components.Toggle = Toggle;
