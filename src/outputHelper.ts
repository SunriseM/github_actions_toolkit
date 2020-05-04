
import * as core from '@actions/core'
import {objectKeys} from "evt/dist/tools/typeSafety/objectKeys";

export const outputNames = [
    "version"
] as const;


export function getOutputDescription(inputName: typeof outputNames[number]): string {
    switch(inputName){
        case "version": return "Output of get_package_json_version";
    }
}

export function setOutputFactory<U extends typeof outputNames[number]>() {

    function setOutput(outputs: Record<U, string>): void {

        objectKeys(outputs)
            .forEach(outputName => core.setOutput(outputName, outputs[outputName]));

    };

    return { setOutput };

}
