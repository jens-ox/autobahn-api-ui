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
 * @interface RoadEventAllOf
 */
export interface RoadEventAllOf {
    /**
     * 
     * @type {Date}
     * @memberof RoadEventAllOf
     */
    startTimestamp?: Date;
}

/**
 * Check if a given object implements the RoadEventAllOf interface.
 */
export function instanceOfRoadEventAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoadEventAllOfFromJSON(json: any): RoadEventAllOf {
    return RoadEventAllOfFromJSONTyped(json, false);
}

export function RoadEventAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoadEventAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startTimestamp': !exists(json, 'startTimestamp') ? undefined : (new Date(json['startTimestamp'])),
    };
}

export function RoadEventAllOfToJSON(value?: RoadEventAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'startTimestamp': value.startTimestamp === undefined ? undefined : (value.startTimestamp.toISOString()),
    };
}
