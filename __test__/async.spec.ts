jest.mock('../__mock__')

const getUser = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                name: 'John',
                sex: 1,
                address: "Shanghai,China"
            });
        }, 1000);
    })
}

describe('async test tasks', () => {
    it('test user:', async () => {
        const data: any = await getUser();
        expect(data.name).toEqual('John');
    })
})