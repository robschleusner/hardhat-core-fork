pragma solidity ^0.8.0;

contract D {
    constructor() m public {

    }

    modifier m {
        _;
        fail();
    }

    function fail() internal {
        revert("fail");
    }
}
