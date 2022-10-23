import chatService from './chatService';
import apiService from "../../../helpers/apiService";

jest.mock('../../../helpers/apiService');

describe('Chat Service', () => {

    it('should return all messages between given sender and receiver', async () => {
        const messages= [
            {
                "id": 1,
                "sender": {
                    "id": 1,
                    "username": "test1",
                    "password": "test1"
                },
                "receiver": {
                    "id": 3,
                    "username": "test3",
                    "password": "test3"
                },
                "data": "message1"
            },
            {
                "id": 2,
                "sender": {
                    "id": 1,
                    "username": "test1",
                    "password": "test1"
                },
                "receiver": {
                    "id": 3,
                    "username": "test3",
                    "password": "test3"
                },
                "data": "message2"
            }
        ]

        const receiver = 3;

        apiService.get.mockResolvedValue({data: messages});
        const fetchedMessages = await chatService.fetchMessages(receiver);

        expect(fetchedMessages.data).toHaveLength(2);

        expect(fetchedMessages.data).toEqual([
            {
                "id": 1,
                "sender": {
                    "id": 1,
                    "username": "test1",
                    "password": "test1"
                },
                "receiver": {
                    "id": 3,
                    "username": "test3",
                    "password": "test3"
                },
                "data": "message1"
            },
            {
                "id": 2,
                "sender": {
                    "id": 1,
                    "username": "test1",
                    "password": "test1"
                },
                "receiver": {
                    "id": 3,
                    "username": "test3",
                    "password": "test3"
                },
                "data": "message2"
            }
        ]);
    });

});
