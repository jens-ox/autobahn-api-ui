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
/**
 * 
 * @export
 * @interface LorryParkingFeatureIcon
 */
export interface LorryParkingFeatureIcon {
    /**
     * 
     * @type {string}
     * @memberof LorryParkingFeatureIcon
     */
    icon?: string;
    /**
     * 
     * @type {string}
     * @memberof LorryParkingFeatureIcon
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof LorryParkingFeatureIcon
     */
    style?: string;
}

/**
 * Check if a given object implements the LorryParkingFeatureIcon interface.
 */
export function instanceOfLorryParkingFeatureIcon(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LorryParkingFeatureIconFromJSON(json: any): LorryParkingFeatureIcon {
    return LorryParkingFeatureIconFromJSONTyped(json, false);
}

export function LorryParkingFeatureIconFromJSONTyped(json: any, ignoreDiscriminator: boolean): LorryParkingFeatureIcon {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'style': !exists(json, 'style') ? undefined : json['style'],
    };
}

export function LorryParkingFeatureIconToJSON(value?: LorryParkingFeatureIcon | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'icon': value.icon,
        'description': value.description,
        'style': value.style,
    };
}
