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
 * @interface Coordinate
 */
export interface Coordinate {
    /**
     * 
     * @type {string}
     * @memberof Coordinate
     */
    lat?: string;
    /**
     * 
     * @type {string}
     * @memberof Coordinate
     */
    _long?: string;
}

/**
 * Check if a given object implements the Coordinate interface.
 */
export function instanceOfCoordinate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CoordinateFromJSON(json: any): Coordinate {
    return CoordinateFromJSONTyped(json, false);
}

export function CoordinateFromJSONTyped(json: any, ignoreDiscriminator: boolean): Coordinate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lat': !exists(json, 'lat') ? undefined : json['lat'],
        '_long': !exists(json, 'long') ? undefined : json['long'],
    };
}

export function CoordinateToJSON(value?: Coordinate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lat': value.lat,
        'long': value._long,
    };
}

