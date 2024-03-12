import {useMemo, useState} from 'react';
import {SubmitHandler} from 'react-hook-form';
import {useGroupsQuery} from './api/useGroupsQuery';
import {GroupFilters} from './components/GroupFilters/GroupFilters';
import {GroupsList} from './components/GroupList/GroupsList';
import {Filters} from './types/groups';
import './styleApp.css';

const defaultFilters = {
  privacyType: undefined,
  avatarColour: undefined,
  hasFriends: undefined,
};

export const App = () => {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const groupsQuery = useGroupsQuery();

  const handleFilters: SubmitHandler<Filters> = (data) => {
    setFilters(data);
  };

  const filteredGroups = useMemo(() => {
    if (!groupsQuery.data) return [];

    let groups = [...groupsQuery.data];

    if (filters.privacyType === 'закрытая' || filters.privacyType === 'открытая') {
      groups = groups.filter((group) => {
        if (filters.privacyType === 'закрытая') return group.closed === true;
        if (filters.privacyType === 'открытая') return group.closed === false;
      });
    }

    if (typeof filters.avatarColour === 'string') {
      groups = groups.filter((group) => {
        return group.avatar_color === filters.avatarColour;
      });
    }

    if (typeof filters.hasFriends === 'boolean') {
      groups = groups.filter((group) => {
        return Boolean(group.friends?.length) === Boolean(filters.hasFriends);
      });
    }

    return groups;
  }, [filters, groupsQuery.data]);

  if (groupsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (!groupsQuery.result || !filteredGroups) {
    return <div>No data found</div>;
  }

  return (
    <div className="contentGroups">
      <GroupFilters defaultFilters={defaultFilters} onSubmit={handleFilters} />
      <GroupsList groups={filteredGroups} />
    </div>
  );
};
