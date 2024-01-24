import { test, expect } from '@playwright/test';

test('Check Put request return status 200', async ({ request }) =>{
    const userData = {
        "name": "Anet Murrey",
        "job": "Resident"
    }

    const putResponse = await request.put('https://reqres.in/api/users/2', {
        data: userData
    });

    expect(putResponse.status()).toBe(200);

})

test('Check Patch request return User"s data', async ({ request }) =>{
    const userData = {
        "name": "Marry Cleur",
        "job": "Company Representative"
    }

    const patchtResponse = await request.patch('https://reqres.in/api/users/2', {
        data: userData
    });

    const patchtResponseBody = await patchtResponse.json();

    expect(patchtResponseBody).toMatchObject(userData);
    expect(patchtResponseBody).toHaveProperty('updatedAt');

})

test('Check Delete request return status 204', async ({ request }) =>{
    const deleteResponse = await request.delete('https://reqres.in/api/users/2');

    expect(deleteResponse.status()).toBe(204);

})

