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
import type { Roadwork } from './Roadwork';
import {
    RoadworkFromJSON,
    RoadworkFromJSONTyped,
    RoadworkToJSON,
} from './Roadwork';

/**
 * 
 * @export
 * @interface Roadworks
 */
export interface Roadworks {
    /**
     * 
     * @type {Array<Roadwork>}
     * @memberof Roadworks
     */
    roadworks?: Array<Roadwork>;
}

/**
 * Check if a given object implements the Roadworks interface.
 */
export function instanceOfRoadworks(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoadworksFromJSON(json: any): Roadworks {
    return RoadworksFromJSONTyped(json, false);
}

export function RoadworksFromJSONTyped(json: any, ignoreDiscriminator: boolean): Roadworks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roadworks': !exists(json, 'roadworks') ? undefined : ((json['roadworks'] as Array<any>).map(RoadworkFromJSON)),
    };
}

export function RoadworksToJSON(value?: Roadworks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roadworks': value.roadworks === undefined ? undefined : ((value.roadworks as Array<any>).map(RoadworkToJSON)),
    };
}

