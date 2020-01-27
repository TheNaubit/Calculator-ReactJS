import { OPERATION_TYPES } from './enums';

export function resolveOperation(number1, number2, operation) {
    if (number1 === undefined || number2 === undefined || operation === undefined || operation === OPERATION_TYPES.NULL || operation === OPERATION_TYPES.EQUAL) {
        return undefined;
    } else {
        let result;
        switch (operation) {
            case OPERATION_TYPES.DIVIDE:
                result = number1 / number2;
                break;
            case OPERATION_TYPES.MULTIPLY:
                result = number1 * number2;
                break;
            case OPERATION_TYPES.SUBTRACT:
                result = number1 - number2;
                break;
            case OPERATION_TYPES.ADD:
            default:
                result = number1 + number2;
                break;
        }
        return result;
    }
}

export function formatOperation(number1, number2, operation) {
    if (number1 === undefined) {
        return "";
    } else {
        if (operation === undefined || operation === OPERATION_TYPES.NULL) {
            return number1.toString();
        } else {

            let operationCharacter;
            switch (operation) {
                case OPERATION_TYPES.DIVIDE:
                    operationCharacter = "÷";
                    break;
                case OPERATION_TYPES.MULTIPLY:
                    operationCharacter = "×";
                    break;
                case OPERATION_TYPES.SUBTRACT:
                    operationCharacter = "-";
                    break;
                case OPERATION_TYPES.ADD:
                default:
                    operationCharacter = "+";
                    break;
            }

            if (number2 === undefined) {
                return number1.toString() + " " + operationCharacter;
            } else {
                return number1.toString() + " " + operationCharacter + " " + number2.toString();
            }
        }
    }
}