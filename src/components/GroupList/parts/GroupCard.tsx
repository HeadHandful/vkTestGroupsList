import {useState} from 'react';
import {Group} from '../../../types/groups';
import {Footnote, Text} from '@vkontakte/vkui';
import './styleGroupCard.css';

interface Props {
  group: Group;
}

export const GroupCard = ({group}: Props) => {
  const [isFriendsVisible, setIsFriendsVisible] = useState(false);

  const handleFriendsNumberClick = () => {
    setIsFriendsVisible((prev) => !prev);
  };

  const getAvatarStyle = (color: string | undefined) => {
    return {
      backgroundColor: color,
      width: '100px', // Настройте размеры аватарки по вашему желанию
      height: '100px',
      borderRadius: '50%',
      display: 'inline-block',
    };
  };

  return (
    <div className="GroupCard">
      <div style={getAvatarStyle(group.avatar_color)}></div>
      <div>
        <Text>Название: {group.name}</Text>
        <Text>Закрыт: {group.closed ? 'Да' : 'Нет'}</Text>
        <Text>Количество участников: {group.members_count}</Text>
        {group.friends && (
          <Footnote className="friendsNumbers">
            <span onClick={handleFriendsNumberClick}>Друзья: {group.friends.length}</span>
            {isFriendsVisible && (
              <ul>
                {group.friends.map((friend, index) => (
                  <li key={index}>
                    {friend.first_name} {friend.last_name}
                  </li>
                ))}
              </ul>
            )}
          </Footnote>
        )}
      </div>
    </div>
  );
};
