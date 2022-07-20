export function getUser() {
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