import { Profile } from './Profile/Profile';
import user from 'user.json';
import { Statistics } from './Statistics/Statistics';
import data from 'data.json';
import { FriendList } from './FriendList/FriendList';
import friends from 'friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      React homework template
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'upload stats'} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

// username — ім'я користувача
// tag — тег в соціальній мережі без @
// location — місто і країна
// avatar — посилання на зображення
// stats — об'єкт з інформацією про активності
