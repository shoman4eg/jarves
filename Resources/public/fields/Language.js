import AbstractFieldType from './AbstractFieldType.js';
import {Field} from '../angular.js';
import {eachValue} from '../utils.js';
import Select from './Select.js';

@Field('language')
export default class Language extends Select {

    setupItems() {
        var newItems = {};

        for (let item of eachValue(window.jarves.possibleLangs)) {
            newItems[item.code] = {label: '%s (%s, %s)'.sprintf(item.title, item.code, item.langtitle)};
        }

        this.items = newItems;
        this.updateSelected();
    }
}