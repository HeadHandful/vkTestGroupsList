import {useGroupsQuery} from './api/useGroupsQuery';
import {GroupsList} from './components/GroupList/GroupsList';

export const App = () => {
  {
    const groupsQuery = useGroupsQuery();

    if (groupsQuery.isLoading) {
      return <div>Loading...</div>;
    }

    if (!groupsQuery.result || !groupsQuery.data) {
      return <div>No data found</div>;
    }

    return <GroupsList groups={groupsQuery.data} />;
  }
};
