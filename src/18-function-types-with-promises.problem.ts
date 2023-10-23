import {expect, it} from "vitest";

interface User {
    id: string;
    firstName: string;
    lastName: string;
}

const createThenGetUser = async (
    createUser: () => Promise<string>,
    getUser: (userId: string) => Promise<User>):
    Promise<User> => {
    const userId: string = await createUser();

    return await getUser(userId);
};
/*const createThenGetUser = async (
    createUser: () => Promise<string>,
    getUser: (id: string) => Promise<User>,
): Promise<User> => {
    const userId: string = await createUser();

    const user = await getUser(userId);

    return user;
};*/

it("¹Should create the user, then get them", async () => {
    const user = await createThenGetUser(
        async () => "123",
        async (id) => ({
            id,
            firstName: "Matt",
            lastName: "Pocock",
        }),
    );

    expect(user).toEqual({
        id: "123",
        firstName: "Matt",
        lastName: "Pocock",
    });
});
