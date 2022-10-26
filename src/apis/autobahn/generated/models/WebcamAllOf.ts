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
 * @interface WebcamAllOf
 */
export interface WebcamAllOf {
    /**
     * 
     * @type {string}
     * @memberof WebcamAllOf
     */
    operator?: string;
    /**
     * 
     * @type {string}
     * @memberof WebcamAllOf
     */
    imageurl?: string;
    /**
     * 
     * @type {string}
     * @memberof WebcamAllOf
     */
    linkurl?: string;
}

/**
 * Check if a given object implements the WebcamAllOf interface.
 */
export function instanceOfWebcamAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebcamAllOfFromJSON(json: any): WebcamAllOf {
    return WebcamAllOfFromJSONTyped(json, false);
}

export function WebcamAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebcamAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'operator': !exists(json, 'operator') ? undefined : json['operator'],
        'imageurl': !exists(json, 'imageurl') ? undefined : json['imageurl'],
        'linkurl': !exists(json, 'linkurl') ? undefined : json['linkurl'],
    };
}

export function WebcamAllOfToJSON(value?: WebcamAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'operator': value.operator,
        'imageurl': value.imageurl,
        'linkurl': value.linkurl,
    };
}

