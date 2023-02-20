import { useContext } from 'react';
import { EnemieContext, EnemieContextModel } from '../contexts/EnemieProvider';

const useEnemie = (): EnemieContextModel => useContext(EnemieContext);
export { useEnemie };
