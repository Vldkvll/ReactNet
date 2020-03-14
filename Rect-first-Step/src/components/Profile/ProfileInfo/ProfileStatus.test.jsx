import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatusComponent", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="I'm the Best!" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("I'm the Best!");
    });
});