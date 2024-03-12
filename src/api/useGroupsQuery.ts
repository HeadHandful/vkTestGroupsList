import {useState, useEffect} from 'react';
import {Group} from '../types/groups';
import groups from './groups.json';

interface GroupsResponse {
  result: boolean;
  isLoading: boolean;
  data?: Array<Group>;
}

export const useGroupsQuery = () => {
  const [data, setData] = useState<GroupsResponse>({result: false, isLoading: false, data: undefined});

  useEffect(() => {
    setData((prev) => {
      return {...prev, isLoading: true};
    });

    setTimeout(() => {
      setData({result: true, isLoading: false, data: groups});
    }, 1000);
  }, []);

  return data;
};
