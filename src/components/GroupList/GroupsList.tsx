import {Title} from '@vkontakte/vkui';
import {Group} from '../../types/groups';
import {GroupCard} from './parts/GroupCard';

interface Props {
  groups: Array<Group>;
}

export const GroupsList = ({groups}: Props) => {
  return (
    <>
      <Title level="1">Список групп</Title>
      <div>
        {groups.map((group) => (
          <GroupCard group={group} key={group.id} />
        ))}
      </div>
    </>
  );
};
