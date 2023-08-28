"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNonCryptographicHashBasedIdentifier = void 0;
/**
 * This function hashes its input with a NON cryptographic.
 *
 * This function is useful for creating unique identifiers based on some
 * input. You can be confident that there won't be any collision, as long
 * as the input is not generated by an attacker.
 *
 * The exact algorithm being used shouldn't matter.
 */
function createNonCryptographicHashBasedIdentifier(input) {
    const { createHash } = require("crypto");
    return createHash("md5").update(input).digest();
}
exports.createNonCryptographicHashBasedIdentifier = createNonCryptographicHashBasedIdentifier;
//# sourceMappingURL=hash.js.map