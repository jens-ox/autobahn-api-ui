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
 * @interface RoadItem
 */
export interface RoadItem {
    /**
     * 
     * @type {string}
     * @memberof RoadItem
     */
    extent?: string;
    /**
     * 
     * @type {string}
     * @memberof RoadItem
     */
    identifier?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof RoadItem
     */
    routeRecommendation?: Array<object>;
    /**
     * 
     * @type {Coordinate}
     * @memberof RoadItem
     */
    coordinate?: Coordinate;
    /**
     * 
     * @type {Array<string>}
     * @memberof RoadItem
     */
    footer?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RoadItem
     */
    icon?: string;
    /**
     * 
     * @type {string}
     * @memberof RoadItem
     */
    isBlocked?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RoadItem
     */
    description?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RoadItem
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof RoadItem
     */
    point?: string;
    /**
     * 
     * @type {DisplayType}
     * @memberof RoadItem
     */
    displayType?: DisplayType;
    /**
     * 
     * @type {Array<LorryParkingFeatureIcon>}
     * @memberof RoadItem
     */
    lorryParkingFeatureIcons?: Array<LorryParkingFeatureIcon>;
    /**
     * 
     * @type {boolean}
     * @memberof RoadItem
     */
    future?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RoadItem
     */
    subtitle?: string;
}

/**
 * Check if a given object implements the RoadItem interface.
 */
export function instanceOfRoadItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoadItemFromJSON(json: any): RoadItem {
    return RoadItemFromJSONTyped(json, false);
}

export function RoadItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoadItem {
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
    };
}

export function RoadItemToJSON(value?: RoadItem | null): any {
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
    };
}

