import './app.scss'

import * as mdc from 'material-components-web';

htmx.onLoad(function(content) {
  document.querySelectorAll('.mdc-data-table')
    .forEach(el => {new mdc.dataTable.MDCDataTable(el)})
  // new mdc.dataTable.MDCDataTable(document.querySelector('.mdc-data-table'));
  // new mdc.select.MDCSelect(document.querySelector('.mdc-select'));
  // new mdc.ripple.MDCRipple(document.querySelector('.mdc-icon-button'));
})

