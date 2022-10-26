/* tslint:disable */
/* eslint-disable */
/**
 * Autobahn App API
 * Was passiert auf Deutschlands Bundesstraßen? API für aktuelle Verwaltungsdaten zu Baustellen, Staus und Ladestationen. Außerdem Zugang zu Verkehrsüberwachungskameras und vielen weiteren Datensätzen. 
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Coordinate } from './Coordinate';
import {
    CoordinateFromJSON,
    CoordinateFromJSONTyped,
    CoordinateToJSON,
} from './Coordinate';
import type { DisplayType } from './DisplayType';
import {
    DisplayTypeFromJSON,
    DisplayTypeFromJSONTyped,
    DisplayTypeToJSON,
} from './DisplayType';
import type { LorryParkingFeatureIcon } from './LorryParkingFeatureIcon';
import {
    LorryParkingFeatureIconFromJSON,
    LorryParkingFeatureIconFromJSONTyped,
    LorryParkingFeatureIconToJSON,
} from './LorryParkingFeatureIcon';

/**
 * 
 * @export
 * @interface Warning
 */
export interface Warning {
    /**
     * 
     * @type {string}
     * @memberof Warning
     */
    extent?: string;
    /**
     * 
     * @type {string}
     * @memberof Warning
     */
    identifier?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof Warning
     */
    routeRecommendation?: Array<object>;
    /**
     * 
     * @type {Coordinate}
     * @memberof Warning
     */
    coordinate?: Coordinate;
    /**
     * 
     * @type {Array<string>}
     * @memberof Warning
     */
    footer?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Warning
     */
    icon?: string;
    /**
     * 
     * @type {string}
     * @memberof Warning
     */
    isBlocked?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Warning
     */
    description?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Warning
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof Warning
     */
    point?: string;
    /**
     * 
     * @type {DisplayType}
     * @memberof Warning
     */
    displayType?: DisplayType;
    /**
     * 
     * @type {Array<LorryParkingFeatureIcon>}
     * @memberof Warning
     */
    lorryParkingFeatureIcons?: Array<LorryParkingFeatureIcon>;
    /**
     * 
     * @type {boolean}
     * @memberof Warning
     */
    future?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Warning
     */
    subtitle?: string;
    /**
     * 
     * @type {Date}
     * @memberof Warning
     */
    startTimestamp?: Date;
}

/**
 * Check if a given object implements the Warning interface.
 */
export function instanceOfWarning(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WarningFromJSON(json: any): Warning {
    return WarningFromJSONTyped(json, false);
}

export function WarningFromJSONTyped(json: any, ignoreDiscriminator: boolean): Warning {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extent': !exists(json, 'extent') ? undefined : json['extent'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'routeRecommendation': !exists(json, 'routeRecommendation') ? undefined : json['routeRecommendation'],
        'coordinate': !exists(json, 'coordinate') ? undefined : CoordinateFromJSON(json['coordinate']),
        'footer': !exists(json, 'footer') ? undefined : json['footer'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
        'isBlocked': !exists(json, 'isBlocked') ? undefined : json['isBlocked'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'point': !exists(json, 'point') ? undefined : json['point'],
        'displayType': !exists(json, 'display_type') ? undefined : DisplayTypeFromJSON(json['display_type']),
        'lorryParkingFeatureIcons': !exists(json, 'lorryParkingFeatureIcons') ? undefined : ((json['lorryParkingFeatureIcons'] as Array<any>).map(LorryParkingFeatureIconFromJSON)),
        'future': !exists(json, 'future') ? undefined : json['future'],
        'subtitle': !exists(json, 'subtitle') ? undefined : json['subtitle'],
        'startTimestamp': !exists(json, 'startTimestamp') ? undefined : (new Date(json['startTimestamp'])),
    };
}

export function WarningToJSON(value?: Warning | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extent': value.extent,
        'identifier': value.identifier,
        'routeRecommendation': value.routeRecommendation,
        'coordinate': CoordinateToJSON(value.coordinate),
        'footer': value.footer,
        'icon': value.icon,
        'isBlocked': value.isBlocked,
        'description': value.description,
        'title': value.title,
        'point': value.point,
        'display_type': DisplayTypeToJSON(value.displayType),
        'lorryParkingFeatureIcons': value.lorryParkingFeatureIcons === undefined ? undefined : ((value.lorryParkingFeatureIcons as Array<any>).map(LorryParkingFeatureIconToJSON)),
        'future': value.future,
        'subtitle': value.subtitle,
        'startTimestamp': value.startTimestamp === undefined ? undefined : (value.startTimestamp.toISOString()),
    };
}

