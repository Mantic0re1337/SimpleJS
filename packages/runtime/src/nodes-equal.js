import {DOM_TYPES} from "./h.js";

export function areNodesEqual(nodeOne, nodeTwo){
    if(nodeOne.type !== nodeTwo){
        return false;
    }

    if(nodeOne.type === DOM_TYPES.ELEMENT){
        const {tag: tagOne} = nodeOne;
        const {tag: tagTwo} = nodeTwo;

        return tagOne === tagTwo;
    }

    return true;
}