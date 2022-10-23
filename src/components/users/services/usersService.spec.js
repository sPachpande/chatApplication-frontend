import usersService from './usersService'
import apiService from "../../../helpers/apiService";

jest.mock('../../../helpers/apiService');

describe('Users Service', () => {

    it('should return all users', async () => {
        const data = [
            {
                "id": 1,
                "username": "test1",
                "password": "test1"
            },
            {
                "id": 2,
                "username": "test2",
                "password": "test2"
            },
            {
                "id": 3,
                "username": "test3",
                "password": "test3"
            }
        ];

        apiService.get.mockResolvedValue({data: data});
        const users = await usersService.fetchAll();

        expect(users).toHaveLength(3);

        expect(users).toEqual([
            {
                "id": 1,
                "username": "test1",
                "password": "test1"
            },
            {
                "id": 2,
                "username": "test2",
                "password": "test2"
            },
            {
                "id": 3,
                "username": "test3",
                "password": "test3"
            }
        ]);
    });

});
