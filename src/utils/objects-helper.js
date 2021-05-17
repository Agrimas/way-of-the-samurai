export const updateObjectInArray = (array, objPropName, elementParam, newObjectProps) => {
    return array.map(element => {
        if (element[objPropName] === elementParam) {
            return {...element, ...newObjectProps};
        }
        return element;
    })
}