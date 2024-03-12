import {Group} from '../../types/groups';

interface Props {
  groups: Array<Group>;
}

export const GroupsList = ({groups}: Props) => {
  return (
    <>
      <h2>Список</h2>
      <ul>
        {groups.map((item) => (
          <li key={item.id}>
            <div>Название: {item.name}</div>
            <div>Закрыт: {item.closed ? 'Да' : 'Нет'}</div>
            <div>Цвет аватара: {item.avatar_color}</div>
            <div>Количество участников: {item.members_count}</div>
            {item.friends && (
              <div>
                Друзья:
                <ul>
                  {item.friends.map((friend, index) => (
                    <li key={index}>
                      {friend.first_name} {friend.last_name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
