import { useContext } from 'react';
import { MissionContext, MissionContextModel } from '../contexts/MissionProvider';

const useMission = (): MissionContextModel => useContext(MissionContext);
export { useMission };
