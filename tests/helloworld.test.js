import { expect, it } from "@jest/globals"

import sayHello from '../utils/helloworld'

it("Should say hello",()=>{
    const hello = sayHello();

    expect(hello),tobe("hello");
});