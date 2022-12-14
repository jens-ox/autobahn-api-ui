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
 * @interface Roads
 */
export interface Roads {
    /**
     * 
     * @type {Array<string>}
     * @memberof Roads
     */
    roads?: Array<string>;
}

/**
 * Check if a given object implements the Roads interface.
 */
export function instanceOfRoads(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoadsFromJSON(json: any): Roads {
    return RoadsFromJSONTyped(json, false);
}

export function RoadsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Roads {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roads': !exists(json, 'roads') ? undefined : json['roads'],
    };
}

export function RoadsToJSON(value?: Roads | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roads': value.roads,
    };
}

