import menash from 'menashmq';
import { client } from '../redis/redis';

export default () => {
    return menash.isReady && client.connected;
};
