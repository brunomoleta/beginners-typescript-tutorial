import {expect, it} from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
    try {
        if (typeof (state === "fail")) {
            throw new Error("Failure!");
        }
        return state
    } catch (e) {
        if(e instanceof Error) {
        return e.message;
        }
    }
};

it("Should return the message when it fails", () => {
    expect(tryCatchDemo("fail")).toEqual("Failure!");
});
